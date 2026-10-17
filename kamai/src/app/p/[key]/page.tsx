"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { Hex } from "viem";
import { EXPLORER, getPublicClient, queryConfirms } from "@/lib/arkiv";
import { countConfirms, toPayoutRow, type PayoutRow } from "@/lib/aggregation";

export default function Detail() {
  const { key } = useParams<{ key: string }>();
  const pub = useMemo(() => getPublicClient(process.env.NEXT_PUBLIC_TIRAMISU_API_KEY), []);
  const [row, setRow] = useState<PayoutRow | null>(null);
  const [n, setN] = useState(0);
  const [expiry, setExpiry] = useState<{ block: bigint; date: Date } | null>(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const e = await pub.getEntity(key as Hex);
        const r = toPayoutRow({ key, creator: e.creator ?? e.owner ?? "", attributes: e.attributes });
        if (!r) return setErr("This entity is not a valid Kamai payout.");
        setRow(r);
        const c = await queryConfirms(pub, key as Hex);
        setN(countConfirms(c.items.map((x) => x.creator ?? ""), r.creator));
        if (e.expiresAt != null) {
          const now = await pub.getBlockNumber();
          setExpiry({ block: e.expiresAt, date: new Date(Date.now() + Number(e.expiresAt - now) * 2000) }); // ~2s blocks
        }
      } catch (x) { setErr(`Could not load this payout: ${(x as Error).message.slice(0, 120)}`); }
    })();
  }, [key, pub]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-6 grid gap-4">
      <Link href="/" className="underline">Back to the board</Link>
      {err && <p role="status" className="text-[var(--bad)]">{err}</p>}
      {row && (<section className="rounded-lg border border-[var(--line)] bg-white p-5 grid gap-2">
        <h1 className="text-2xl font-bold">₹{row.amountInr.toFixed(2)} for {row.distanceKm} km</h1>
        <p>{row.vehicle}, {row.timeSlot}, {row.city} · ₹{row.inrPerKm.toFixed(2)} per km</p>
        <p>{n} other riders confirmed this.</p>
        {expiry && <p>Expires around {expiry.date.toLocaleDateString()} (block {String(expiry.block)}). Old payouts drop off by themselves.</p>}
        <p className="font-semibold">No admin can delete this.</p>
        <p className="text-sm break-all">Entity key {key}</p>
        <a className="underline" href={`${EXPLORER}/address/${row.creator}`} target="_blank" rel="noreferrer">Posting wallet on the explorer</a>
      </section>)}
    </main>
  );
}
