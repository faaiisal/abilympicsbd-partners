"use client";

import { useEffect, useState } from "react";

export function AccessibilityBar() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
    document.documentElement.classList.toggle("high-contrast", highContrast);
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
  }, [largeText, highContrast, reducedMotion]);

  return (
    <div className="bg-slate-900 px-4 py-1.5 text-xs text-slate-300 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
        <span className="font-semibold text-emerald-400">Accessibility Preferences</span>
        <div className="flex items-center gap-2">
          <button type="button" aria-pressed={highContrast} onClick={() => setHighContrast((value) => !value)} className="rounded border border-slate-700 px-2 py-0.5 hover:border-emerald-500 hover:text-white">Contrast</button>
          <button type="button" aria-pressed={largeText} onClick={() => setLargeText((value) => !value)} className="rounded border border-slate-700 px-2 py-0.5 hover:border-emerald-500 hover:text-white">A+</button>
          <button type="button" aria-pressed={reducedMotion} onClick={() => setReducedMotion((value) => !value)} className="rounded border border-slate-700 px-2 py-0.5 hover:border-emerald-500 hover:text-white">Mute motion</button>
        </div>
      </div>
    </div>
  );
}
