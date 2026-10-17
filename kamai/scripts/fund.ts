// Faucet is 0.1 GLM per wallet per 24h (browser + SIWE). Claim once for A, then split to B and C.
import { config } from "dotenv";
import { formatEther, parseEther, type Hex } from "viem";
import { getPublicClient, nodeWalletClient } from "../src/lib/arkiv";

config({ path: ".env.local" });
const apiKey = process.env.TIRAMISU_API_KEY || undefined;
const a = nodeWalletClient(process.env.KEY_A as Hex, apiKey);
const pub = getPublicClient(apiKey);
const amount = parseEther(process.env.FUND_GLM ?? "0.03");

console.log("A balance:", formatEther(await pub.getBalance({ address: a.account.address })), "GLM");
for (const k of ["KEY_B", "KEY_C"] as const) {
  const to = nodeWalletClient(process.env[k] as Hex, apiKey).account.address;
  const hash = await a.sendTransaction({ to, value: amount });
  await pub.waitForTransactionReceipt({ hash });
  console.log(k, to, "funded", formatEther(amount), "GLM");
}
