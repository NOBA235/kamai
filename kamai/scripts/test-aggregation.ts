import assert from "node:assert/strict";
import { BOUNDS, buildRateBoard, computeMedian, countConfirms, groupConfirms, paginateResults, toPayoutRow, type PageLike, type PayoutRow } from "../src/lib/aggregation";

// median
assert.equal(computeMedian([]), null);
assert.equal(computeMedian([5]), 5);
assert.equal(computeMedian([3, 1, 2]), 2);
assert.equal(computeMedian([1, 2, 3, 4]), 2.5);
const input = [9, 1, 5]; computeMedian(input); assert.deepEqual(input, [9, 1, 5], "must not mutate input");

// confirms: distinct wallets, poster excluded, case-insensitive
assert.equal(countConfirms(["0xB", "0xb", "0xC", "0xA"], "0xa"), 2);
assert.equal(countConfirms(undefined, "0xa"), 0);

// pagination
const mk = (items: number[][], i = 0): PageLike<number> => ({
  entities: items[i], blockNumber: 42n, hasNextPage: () => i < items.length - 1, next: async () => mk(items, i + 1),
});
const all = await paginateResults(mk([[1, 2], [3], [4, 5]]));
assert.deepEqual(all.items, [1, 2, 3, 4, 5]); assert.equal(all.blockNumber, 42n); assert.equal(all.truncated, false);
assert.equal((await paginateResults(mk([[1], [2], [3]]), 2)).truncated, true);

// payout validation + scaling
const a = (v: unknown) => ({ value: v });
const raw = (amountScaled: number, distanceMeters: number) => ({ key: "0xK", creator: "0xP", attributes: { amountScaled: a(amountScaled), distanceMeters: a(distanceMeters), city: a("bengaluru"), vehicle: a("bike"), timeSlot: a("lunch") } });
const ok = toPayoutRow(raw(3850, 4000))!;
assert.equal(ok.amountInr, 38.5); assert.equal(ok.distanceKm, 4); assert.equal(ok.inrPerKm, 9.625);
assert.equal(toPayoutRow(raw(99_999_900, 4000)), null, "absurd amount rejected");
assert.equal(toPayoutRow(raw(3850, 0)), null, "zero distance rejected");

// board: threshold + fakes can't move the median
const row = (key: string, creator: string, amountInr: number): PayoutRow => ({ key, creator, city: "bengaluru", vehicle: "bike", timeSlot: "lunch", amountInr, distanceKm: 4, inrPerKm: amountInr / 4 });
const genuine = [36, 38, 38, 40, 42].map((amt, i) => row(`g${i}`, `0xg${i}`, amt));
const fakes = [row("f0", "0xf0", 400), row("f1", "0xf1", 400)];
const confirms = groupConfirms([
  ...genuine.flatMap((p) => ["0xr1", "0xr2"].map((w, j) => ({ key: `c${p.key}${j}`, creator: w, attributes: { payoutKey: a(p.key) } }))),
  ...fakes.flatMap((p) => ["0xs1", "0xs2"].map((w, j) => ({ key: `c${p.key}${j}`, creator: w, attributes: { payoutKey: a(p.key) } }))), // sybil-confirmed fakes
  { key: "x", creator: "0xg0", attributes: { payoutKey: a("g0") } }, // poster confirming own payout: ignored
]);
const lone = row("lone", "0xl", 5); // 0 confirms
const [b] = buildRateBoard([...genuine, ...fakes, lone], confirms);
assert.equal(b.pending, 1, "unconfirmed payout excluded");
assert.equal(b.verified, 7);
assert.equal(b.medianAmountInr, 40, "2 sybil fakes among 7 only nudge the median by one slot");
assert.equal(buildRateBoard([...genuine, lone], confirms, 3).length, 1);
assert.equal(buildRateBoard([...genuine], new Map())[0].medianInrPerKm, null, "no confirms -> no rate shown");
console.log("aggregation: all tests passed", BOUNDS.maxAmountInr);
