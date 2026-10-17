// Phase 0: verify extend permissions, numeric scaling, ordering. Writes arkiv/reconnaissance.md.
import { config } from "dotenv";
import { mkdirSync, writeFileSync } from "node:fs";
import { formatEther, type Hex } from "viem";
import { ExpirationTime, jsonToPayload } from "@arkiv-network/sdk";
import { i32, u64 } from "@arkiv-network/sdk/attr";
import { eq } from "@arkiv-network/sdk/query";
import { PROJECT, getPublicClient, nodeWalletClient } from "../src/lib/arkiv";

config({ path: ".env.local" });
const apiKey = process.env.TIRAMISU_API_KEY || undefined;
const [A, B, C] = (["KEY_A", "KEY_B", "KEY_C"] as const).map((k) => nodeWalletClient(process.env[k] as Hex, apiKey));
const pub = getPublicClient(apiKey);

type Row = { test: string; result: string; detail: string };
const rows: Row[] = [];
const redact = (s: string) => s.replace(/https?:\/\/\S+/g, "<url>").slice(0, 400); // errors can leak RPC URL + API key
const log = (test: string, result: string, detail = "") => { rows.push({ test, result, detail }); console.log(`[${result}] ${test} ${detail}`); };
async function attempt<T>(fn: () => Promise<T>) {
  try { return { ok: true as const, value: await fn() }; }
  catch (e: any) { return { ok: false as const, error: redact(String(e?.shortMessage ?? e?.message ?? e)) }; }
}
const mined = async (hash: Hex) => { await pub.waitForTransactionReceipt({ hash }); };
const expiryOf = async (key: Hex) => (await pub.getEntity(key)).expiresAt;

const probe = (extra: Record<string, unknown> = {}, flags?: { permissionlessExtension?: boolean }) => ({
  payload: jsonToPayload({ recon: true }),
  contentType: "application/json" as const,
  attributes: { project: PROJECT, entityType: "recon", city: "bengaluru", ts: u64(Date.now()), ...extra },
  expires: ExpirationTime.fromDays(1),
  flags,
});

// 0. Connectivity + balances
const block = await pub.getBlockNumber();
log("connectivity", "PASS", `block ${block}`);
for (const [n, w] of [["A", A], ["B", B], ["C", C]] as const) {
  const bal = await pub.getBalance({ address: w.account.address });
  log(`balance ${n}`, bal > 0n ? "PASS" : "FAIL", `${formatEther(bal)} GLM`);
  if (bal === 0n) { console.error(`Wallet ${n} has no GLM. Run: npm run fund`); }
}

// 1. Default entity: owner-only extend
const own = await A.createEntity(probe());
await mined(own.txHash);
log("create default entity (A)", "PASS", own.entityKey);
const before = await expiryOf(own.entityKey);
const bTry = await attempt(() => B.extendEntity({ entityKey: own.entityKey, expires: ExpirationTime.fromDays(30) }));
const afterB = await expiryOf(own.entityKey);
log("EXTEND default entity from B (non-owner)", bTry.ok ? "ALLOWED" : "REJECTED", bTry.ok ? `expiry ${before} -> ${afterB}` : bTry.error);
const aTry = await attempt(async () => { const r = await A.extendEntity({ entityKey: own.entityKey, expires: ExpirationTime.fromDays(30) }); await mined(r.txHash); return r; });
log("extend default entity from A (owner)", aTry.ok ? "ALLOWED" : "REJECTED", aTry.ok ? `expiry -> ${await expiryOf(own.entityKey)}` : aTry.error);
const shorter = await attempt(() => A.extendEntity({ entityKey: own.entityKey, expires: ExpirationTime.fromDays(1) }));
log("extend to an EARLIER expiry (owner)", shorter.ok ? "ALLOWED" : "REJECTED", shorter.ok ? "" : shorter.error);

// 2. permissionlessExtension flag: anyone can extend; griefing test
const open = await A.createEntity(probe({}, { permissionlessExtension: true }));
await mined(open.txHash);
log("create permissionless entity (A)", "PASS", open.entityKey);
const openB = await attempt(async () => { const r = await B.extendEntity({ entityKey: open.entityKey, expires: ExpirationTime.fromDays(30) }); await mined(r.txHash); return r; });
log("EXTEND permissionless entity from B", openB.ok ? "ALLOWED" : "REJECTED", openB.ok ? `expiry -> ${await expiryOf(open.entityKey)}` : openB.error);
const openC = await attempt(async () => { const r = await C.extendEntity({ entityKey: open.entityKey, expires: ExpirationTime.fromDays(60) }); await mined(r.txHash); return r; });
log("GRIEF: C extends the same fake entity to 60 days", openC.ok ? "ALLOWED" : "REJECTED", openC.ok ? `expiry -> ${await expiryOf(open.entityKey)} (C paid the gas)` : openC.error);

// 3. Numeric scaling and type limits (client-side checks cost no gas)
const bare = await attempt(() => A.createEntity(probe({ amountScaled: 38.5 as number })));
log("bare float attribute (38.5)", bare.ok ? "ACCEPTED" : "REJECTED", bare.ok ? "" : bare.error);
const i32ts = await attempt(async () => i32(Date.now()));
log("i32(Date.now()) — ms epoch in i32", i32ts.ok ? "ACCEPTED" : "REJECTED", i32ts.ok ? "" : i32ts.error);
const scaled = await A.createEntity(probe({ amountScaled: i32(Math.round(38.5 * 100)) }));
await mined(scaled.txHash);
const got = await pub.getEntity(scaled.entityKey);
const raw = got.attributes.amountScaled?.value;
log("scaled integer round-trip", Number(raw) === 3850 ? "PASS" : "FAIL", `stored ${raw}, read back ₹${Number(raw) / 100}`);

// 4. Ordering (newest first, no server-side sort)
const res = await pub.select({ key: true }).where(eq("project", PROJECT), eq("entityType", "recon")).limit(200).fetch();
const newestFirst = res.entities[0]?.key === scaled.entityKey;
log("query order newest-first", newestFirst ? "CONFIRMED" : "UNEXPECTED", `${res.entities.length} recon entities, hasNextPage=${res.hasNextPage()}`);

mkdirSync("arkiv", { recursive: true });
const md = [`# Phase 0 reconnaissance`, ``, `Run: ${new Date().toISOString()} · Tiramisu (7738577) · @arkiv-network/sdk 0.8.1`, ``,
  `| Test | Result | Detail |`, `|---|---|---|`, ...rows.map((r) => `| ${r.test} | ${r.result} | ${r.detail.replace(/\|/g, "\\|")} |`)].join("\n");
writeFileSync("arkiv/reconnaissance.md", md + "\n");
console.log("\nWrote arkiv/reconnaissance.md");
