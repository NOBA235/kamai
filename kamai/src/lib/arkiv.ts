// Kamai data layer — SDK 0.8.x on Tiramisu (chain 7738577).
import { createPublicClient, createWalletClient, ExpirationTime, jsonToPayload } from "@arkiv-network/sdk";
import { i32, u64 } from "@arkiv-network/sdk/attr";
import { tiramisu } from "@arkiv-network/sdk/chains";
import { eq } from "@arkiv-network/sdk/query";
import { paginateResults } from "./aggregation";
import { custom, http, type Hex } from "viem";
import { privateKeyToAccount } from "viem/accounts";

/** Globally unique: every Arkiv entity is public and shared, so a bare "kamai" could collide. */
export const PROJECT = "kamai-in-7x9k";
export const LIFETIME = ExpirationTime.fromDays(30);

export type Vehicle = "bike" | "scooter" | "cycle" | "car";
export type TimeSlot = "morning" | "lunch" | "evening" | "night";
export type PayoutInput = {
  city: string; vehicle: Vehicle; timeSlot: TimeSlot;
  distanceKm: number; amountInr: number; note?: string; // note: NO PII
};

export function rpcUrl(apiKey?: string): string {
  const base = tiramisu.rpcUrls.default.http[0];
  return apiKey ? `${base}/${apiKey}` : base;
}

export const getPublicClient = (apiKey?: string) =>
  createPublicClient({ chain: tiramisu, transport: http(rpcUrl(apiKey)) });

export const nodeWalletClient = (privateKey: Hex, apiKey?: string) =>
  createWalletClient({ chain: tiramisu, transport: http(rpcUrl(apiKey)), account: privateKeyToAccount(privateKey) });

/** Browser: pass window.ethereum and the connected address (MetaMask on Tiramisu). */
export const browserWalletClient = (provider: Parameters<typeof custom>[0], address: Hex) =>
  createWalletClient({ chain: tiramisu, transport: custom(provider), account: address });

export type PublicClient = ReturnType<typeof getPublicClient>;
export type Writer = Pick<ReturnType<typeof nodeWalletClient>, "createEntity" | "extendEntity">;

const slug = (s: string) => s.trim().toLowerCase();

export function payoutAttributes(p: PayoutInput) {
  return {
    project: PROJECT,
    entityType: "payout",
    city: slug(p.city),
    vehicle: p.vehicle,
    timeSlot: p.timeSlot,
    amountScaled: i32(Math.round(p.amountInr * 100)), // ₹38.50 -> 3850
    distanceMeters: i32(Math.round(p.distanceKm * 1000)),
    ts: u64(Date.now()), // ms epoch overflows i32, so u64
  };
}

export async function createPayout(w: Writer, p: PayoutInput) {
  return w.createEntity({
    payload: jsonToPayload({ v: 1, note: p.note ?? "" }),
    contentType: "application/json",
    attributes: payoutAttributes(p),
    expires: LIFETIME,
  });
}

export async function createConfirm(w: Writer, payoutKey: Hex) {
  return w.createEntity({
    payload: jsonToPayload({ v: 1, sameForMe: true }),
    contentType: "application/json",
    attributes: { project: PROJECT, entityType: "confirm", payoutKey, ts: u64(Date.now()) },
    expires: LIFETIME,
  });
}

/** All payouts (optionally one city/vehicle). Newest first; no server-side sort. */
export async function queryPayouts(c: PublicClient, f: { city?: string; vehicle?: Vehicle } = {}) {
  const conds = [eq("project", PROJECT), eq("entityType", "payout")];
  if (f.city) conds.push(eq("city", slug(f.city)));
  if (f.vehicle) conds.push(eq("vehicle", f.vehicle));
  const first = await c
    .select({ key: true, creator: true, attributes: true, expiresAt: true })
    .where(...conds).limit(200).fetch();
  return paginateResults(first);
}

/** Confirms for one payout (detail screen). */
export async function queryConfirms(c: PublicClient, payoutKey: Hex) {
  const first = await c
    .select({ key: true, creator: true })
    .where(eq("project", PROJECT), eq("entityType", "confirm"), eq("payoutKey", payoutKey))
    .limit(200).fetch();
  return paginateResults(first);
}

/** Every confirm in the project in one walk; group client-side with groupConfirms(). */
export async function queryAllConfirms(c: PublicClient) {
  const first = await c
    .select({ key: true, creator: true, attributes: true })
    .where(eq("project", PROJECT), eq("entityType", "confirm")).limit(200).fetch();
  return paginateResults(first);
}
export const EXPLORER = "https://tiramisu.explorer.arkiv.network";
