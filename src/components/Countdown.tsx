"use client";

import { useEffect, useState } from "react";

const units = [["days", 86_400_000], ["hours", 3_600_000], ["minutes", 60_000], ["seconds", 1_000]] as const;

export function Countdown({ target }: { target: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, new Date(target).getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const values = units.map(([label, divisor]) => ({
    label,
    value:
      remaining === null
        ? "—"
        : String(
            Math.floor(remaining / divisor) %
              (label === "days" ? Infinity : label === "hours" ? 24 : 60),
          ).padStart(2, "0"),
  }));
  const announcement =
    remaining === null
      ? "Countdown is loading."
      : `${values.map(({ value, label }) => `${value} ${label}`).join(", ")} until the Helsinki 2027 opening ceremony.`;

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Countdown to opening ceremony</p>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {values.map(({ label, value }) => (
          <div key={label} className="rounded-xl bg-black/20 p-4 text-center">
            <p aria-hidden="true" className="min-h-11 font-heading text-3xl font-extrabold tabular-nums sm:text-4xl">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">{label}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-300">Opening ceremony: 10 May 2027, 09:00 Helsinki time.</p>
    </div>
  );
}
