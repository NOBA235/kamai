"use client";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Hex } from "viem";
import { EXPLORER, createConfirm, createPayout, getPublicClient, queryAllConfirms, queryPayouts, type TimeSlot, type Vehicle } from "@/lib/arkiv";
import { buildRateBoard, countConfirms, groupConfirms, toPayoutRow, type PayoutRow } from "@/lib/aggregation";
import { useWallet } from "@/lib/wallet";

const CITIES = ["bengaluru", "delhi", "mumbai", "hyderabad", "chennai", "pune", "kolkata"];
const VEHICLES: Vehicle[] = ["bike", "scooter", "cycle", "car"];
const SLOTS: TimeSlot[] = ["morning", "lunch", "evening", "night"];
const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

export default function Home() {
  const wallet = useWallet();
  const pub = useMemo(() => getPublicClient(process.env.NEXT_PUBLIC_TIRAMISU_API_KEY), []);
  const [rows, setRows] = useState<PayoutRow[]>([]);
  const [confirms, setConfirms] = useState(new Map<string, Set<string>>());
  const [block, setBlock] = useState<bigint | null>(null);
  const [city, setCity] = useState("bengaluru");
  const [status, setStatus] = useState("");
  const [posted, setPosted] = useState<{ key: string; tx: string } | null>(null);
  const [form, setForm] = useState({ city: "bengaluru", vehicle: "bike" as Vehicle, timeSlot: "lunch" as TimeSlot, distanceKm: "4", amountInr: "38", note: "" });

  const load = useCallback(async () => {
    try {
      const [p, c] = await Promise.all([queryPayouts(pub), queryAllConfirms(pub)]);
      setRows(p.items.map(toPayoutRow).filter((r): r is PayoutRow => r !== null));
      setConfirms(groupConfirms(c.items));
      setBlock(p.blockNumber);
    } catch (e) { setStatus(`Could not load payouts: ${(e as Error).message.slice(0, 120)}`); }
  }, [pub]);
  useEffect(() => { load(); }, [load]);

  const board = useMemo(() => buildRateBoard(rows, confirms), [rows, confirms]);
  const cityBoard = board.filter((b) => b.city === city);
  const top = [...cityBoard].sort((a, b) => b.verified - a.verified)[0];
  const cityRows = rows.filter((r) => r.city === city);

  async function run(label: string, fn: () => Promise<{ txHash: Hex; entityKey?: Hex }>) {
    setStatus(`${label}…`);
    try {
      const r = await fn();
      await pub.waitForTransactionReceipt({ hash: r.txHash });
      if (r.entityKey) setPosted({ key: r.entityKey, tx: r.txHash });
      setStatus(""); await load();
    } catch (e) { setStatus(`${label} failed: ${(e as Error).message.slice(0, 160)}`); }
  }
  const post = () => wallet.writer && run("Posting payout", () => createPayout(wallet.writer!, { ...form, distanceKm: Number(form.distanceKm), amountInr: Number(form.amountInr) }));
  const confirm = (key: string) => wallet.writer && run("Confirming", () => createConfirm(wallet.writer!, key as Hex));

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });
  const valid = Number(form.amountInr) > 0 && Number(form.distanceKm) > 0 && form.city.trim() !== "";

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 grid gap-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kamai</h1>
          <p className="text-[var(--muted)]">What gig riders really get paid. No names. Nobody can delete it.</p>
        </div>
        {wallet.address
          ? <p className="text-sm">Connected <span className="font-mono">{wallet.address.slice(0, 6)}…{wallet.address.slice(-4)}</span></p>
          : <button className="btn" onClick={wallet.connect}>Connect MetaMask</button>}
      </header>
      {(wallet.error || status) && <p role="status" className="text-sm text-[var(--bad)]">{wallet.error || status}</p>}

      <section aria-label="City rate" className="rounded-lg bg-[var(--meter)] p-6 text-white">
        <label className="text-sm text-white/70">City{" "}
          <select className="ml-2 rounded bg-white/10 px-2 py-1" value={city} onChange={(e) => setCity(e.target.value)}>
            {CITIES.map((c) => <option key={c} value={c} className="text-black">{cap(c)}</option>)}
          </select>
        </label>
        {top?.medianInrPerKm != null ? (
          <p className="mt-3"><span className="digits text-6xl font-bold">₹{top.medianInrPerKm.toFixed(2)}</span><span className="ml-2 text-white/70">per km</span>
            <span className="block mt-1 text-white/70">{cap(top.vehicle)} riders, {top.timeSlot}: typical order ₹{top.medianAmountInr?.toFixed(0)}, confirmed by {top.confirmations} riders across {top.verified} payouts.</span></p>
        ) : <p className="mt-3 text-white/80">No confirmed rate for {cap(city)} yet. Post what you were paid, then ask two other riders to confirm it.</p>}
      </section>

      <section aria-label="Rate board">
        <h2 className="text-xl font-semibold mb-2">Median pay by vehicle and time</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--line)] bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--paper)]"><tr><th className="p-2">Vehicle</th><th className="p-2">Time</th><th className="p-2">₹ per km</th><th className="p-2">Typical order</th><th className="p-2">Confirmed</th><th className="p-2">Waiting</th></tr></thead>
            <tbody>{cityBoard.length === 0 && <tr><td className="p-3 text-[var(--muted)]" colSpan={6}>Nothing posted for {cap(city)} yet.</td></tr>}
              {cityBoard.map((b) => (<tr key={b.vehicle + b.timeSlot} className="border-t border-[var(--line)]">
                <td className="p-2">{cap(b.vehicle)}</td><td className="p-2">{cap(b.timeSlot)}</td>
                <td className="p-2 font-semibold">{b.medianInrPerKm == null ? "—" : `₹${b.medianInrPerKm.toFixed(2)}`}</td>
                <td className="p-2">{b.medianAmountInr == null ? "—" : `₹${b.medianAmountInr.toFixed(0)}`}</td>
                <td className="p-2">{b.verified}</td><td className="p-2">{b.pending}</td></tr>))}</tbody>
          </table>
        </div>
        <p className="mt-1 text-xs text-[var(--muted)]">Median of payouts with 2+ confirmations from other wallets. Computed in your browser{block ? `, as of block ${block}` : ""}. <button className="underline" onClick={load}>Refresh</button></p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <section aria-label="Confirm payouts">
          <h2 className="text-xl font-semibold mb-2">Same for you?</h2>
          <ul className="grid gap-2">
            {cityRows.length === 0 && <li className="text-[var(--muted)]">No payouts to confirm in {cap(city)}.</li>}
            {cityRows.slice(0, 20).map((r) => {
              const n = countConfirms(confirms.get(r.key), r.creator);
              const mine = wallet.address?.toLowerCase() === r.creator;
              const done = wallet.address ? confirms.get(r.key)?.has(wallet.address.toLowerCase()) : false;
              return (<li key={r.key} className="flex items-center justify-between gap-2 rounded-lg border border-[var(--line)] bg-white p-3">
                <div><p className="font-semibold">₹{r.amountInr.toFixed(2)} for {r.distanceKm} km</p>
                  <p className="text-sm text-[var(--muted)]">{cap(r.vehicle)}, {r.timeSlot} · {n} confirmed · <Link className="underline" href={`/p/${r.key}`}>Details</Link></p></div>
                <button className="btn" disabled={!wallet.address || mine || !!done} onClick={() => confirm(r.key)}>
                  {mine ? "Your payout" : done ? "Confirmed" : "Same for me"}</button></li>);
            })}
          </ul>
          {!wallet.address && <p className="mt-2 text-sm text-[var(--muted)]">Connect a wallet to confirm. Use a different wallet from the one that posted.</p>}
        </section>

        <section aria-label="Post payout">
          <h2 className="text-xl font-semibold mb-2">Post what you were paid</h2>
          <div className="grid gap-3 rounded-lg border border-[var(--line)] bg-white p-4">
            <label>City<input className="field" list="cities" value={form.city} onChange={set("city")} /></label><datalist id="cities">{CITIES.map((c) => <option key={c} value={c} />)}</datalist>
            <div className="grid grid-cols-2 gap-3">
              <label>Vehicle<select className="field" value={form.vehicle} onChange={set("vehicle")}>{VEHICLES.map((v) => <option key={v} value={v}>{cap(v)}</option>)}</select></label>
              <label>Time<select className="field" value={form.timeSlot} onChange={set("timeSlot")}>{SLOTS.map((s) => <option key={s} value={s}>{cap(s)}</option>)}</select></label>
              <label>Distance (km)<input className="field" inputMode="decimal" value={form.distanceKm} onChange={set("distanceKm")} /></label>
              <label>Paid (₹)<input className="field" inputMode="decimal" value={form.amountInr} onChange={set("amountInr")} /></label>
            </div>
            <label>Note (optional, no names or phone numbers)<input className="field" maxLength={120} value={form.note} onChange={set("note")} /></label>
            <button className="btn" disabled={!wallet.address || !valid} onClick={post}>{wallet.address ? "Post payout" : "Connect a wallet to post"}</button>
            {posted && <p className="text-sm">Posted. <Link className="underline" href={`/p/${posted.key}`}>View entity</Link> · <a className="underline" href={`${EXPLORER}/tx/${posted.tx}`} target="_blank" rel="noreferrer">Transaction</a></p>}
          </div>
        </section>
      </div>
    </main>
  );
}
