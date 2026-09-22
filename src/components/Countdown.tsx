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
    <div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {values.map(({ label, value }, index) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
            <p aria-hidden="true" className={`min-h-16 font-heading text-4xl font-black tabular-nums sm:text-6xl ${index === 3 ? "text-emerald-400" : "text-white"}`}>{value}</p>
            <p className={`mt-1 text-xs font-extrabold uppercase tracking-wider ${index === 3 ? "text-slate-400" : "text-sky-300"}`}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
