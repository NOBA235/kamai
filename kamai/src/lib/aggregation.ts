// Phase 2: everything computed client-side. Nothing here is ever written to Arkiv.
// Public data: anyone can post anything, so every row is validated before it is counted.

export type PageLike<T> = {
  entities: readonly T[];
  blockNumber: bigint;
  hasNextPage(): boolean;
  next(): Promise<PageLike<T>>;
};

/** Walk every page (max 200 each, newest first). All pages of one walk read the same block. */
export async function paginateResults<T>(first: PageLike<T>, maxPages = 50) {
  const items: T[] = [...first.entities];
  let page = first;
  let pages = 1;
  while (page.hasNextPage() && pages < maxPages) {
    page = await page.next();
    items.push(...page.entities);
    pages++;
  }
  return { items, blockNumber: first.blockNumber, truncated: page.hasNextPage() };
}

/** Median of a list; null when empty. Even length averages the two middle values. */
export function computeMedian(values: readonly number[]): number | null {
  const v = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (v.length === 0) return null;
  const mid = v.length >> 1;
  return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
}

// ---- rows -------------------------------------------------------------------------------

type AttrBag = Record<string, { value: unknown } | undefined>;
export type RawPayout = { key: string; creator: string; attributes: AttrBag };
export type RawConfirm = { key: string; creator: string; attributes?: AttrBag };

export type PayoutRow = {
  key: string; creator: string; city: string; vehicle: string; timeSlot: string;
  amountInr: number; distanceKm: number; inrPerKm: number;
};

// Sanity bounds: junk outside these is ignored, not counted.
export const BOUNDS = { minAmountInr: 1, maxAmountInr: 5000, minKm: 0.2, maxKm: 100 } as const;

const str = (a: AttrBag, k: string) => String(a[k]?.value ?? "");
const num = (a: AttrBag, k: string) => Number(a[k]?.value ?? NaN);

/** Entity -> row. Returns null for malformed or out-of-bounds payouts. */
export function toPayoutRow(e: RawPayout): PayoutRow | null {
  const amountInr = num(e.attributes, "amountScaled") / 100; // undo x100 scaling
  const distanceKm = num(e.attributes, "distanceMeters") / 1000;
  if (!(amountInr >= BOUNDS.minAmountInr && amountInr <= BOUNDS.maxAmountInr)) return null;
  if (!(distanceKm >= BOUNDS.minKm && distanceKm <= BOUNDS.maxKm)) return null;
  const city = str(e.attributes, "city"), vehicle = str(e.attributes, "vehicle"), timeSlot = str(e.attributes, "timeSlot");
  if (!city || !vehicle || !timeSlot) return null;
  return { key: e.key.toLowerCase(), creator: e.creator.toLowerCase(), city, vehicle, timeSlot, amountInr, distanceKm, inrPerKm: amountInr / distanceKm };
}

// ---- confirms ---------------------------------------------------------------------------

/** payoutKey -> set of wallets that confirmed it. One query for all confirms, grouped here. */
export function groupConfirms(confirms: readonly RawConfirm[]): Map<string, Set<string>> {
  const map = new Map<string, Set<string>>();
  for (const c of confirms) {
    const pk = String(c.attributes?.payoutKey?.value ?? "").toLowerCase();
    if (!pk) continue;
    if (!map.has(pk)) map.set(pk, new Set());
    map.get(pk)!.add(c.creator.toLowerCase());
  }
  return map;
}

/** Live confirms = distinct wallets, excluding the poster. Five taps from one wallet count once. */
export function countConfirms(confirmers: Iterable<string> | undefined, payoutCreator: string): number {
  if (!confirmers) return 0;
  const me = payoutCreator.toLowerCase();
  const distinct = new Set<string>();
  for (const w of confirmers) { const x = w.toLowerCase(); if (x !== me) distinct.add(x); }
  return distinct.size;
}

// ---- board ------------------------------------------------------------------------------

export type BoardRow = {
  city: string; vehicle: string; timeSlot: string;
  verified: number; pending: number; confirmations: number;
  medianInrPerKm: number | null; medianAmountInr: number | null;
};

/** Median per city/vehicle/slot over payouts with >= minConfirms distinct confirmers. */
export function buildRateBoard(
  payouts: readonly PayoutRow[],
  confirmsByPayout: Map<string, Set<string>>,
  minConfirms = 2,
): BoardRow[] {
  const groups = new Map<string, { row: PayoutRow; n: number }[]>();
  for (const p of payouts) {
    const g = `${p.city}|${p.vehicle}|${p.timeSlot}`;
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g)!.push({ row: p, n: countConfirms(confirmsByPayout.get(p.key), p.creator) });
  }
  const r2 = (x: number | null) => (x === null ? null : Math.round(x * 100) / 100);
  return [...groups.entries()].map(([g, items]) => {
    const [city, vehicle, timeSlot] = g.split("|");
    const ok = items.filter((i) => i.n >= minConfirms);
    return {
      city, vehicle, timeSlot,
      verified: ok.length, pending: items.length - ok.length,
      confirmations: ok.reduce((s, i) => s + i.n, 0),
      medianInrPerKm: r2(computeMedian(ok.map((i) => i.row.inrPerKm))),
      medianAmountInr: r2(computeMedian(ok.map((i) => i.row.amountInr))),
    };
  }).sort((a, b) => a.city.localeCompare(b.city) || a.vehicle.localeCompare(b.vehicle) || a.timeSlot.localeCompare(b.timeSlot));
}
