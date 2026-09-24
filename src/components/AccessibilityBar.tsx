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
    <div className="hidden bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800 flex-wrap items-center justify-between gap-3 min-[1025px]:flex">
      {/* LEFT — label */}
      <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
        <span className="material-symbols-outlined" style={{ fontSize: '15px' }} aria-hidden="true">accessibility_new</span>
        Accessibility Preferences:
        <span className="ml-1 hidden text-slate-400 sm:inline font-normal">WCAG 2.2 AAA Compliant Portal</span>
      </span>

      {/* RIGHT — controls */}
      <div className="flex items-center gap-3">
        {/* Contrast toggle */}
        <button
          type="button"
          aria-pressed={highContrast}
          onClick={() => setHighContrast((v) => !v)}
          className="flex items-center gap-1 rounded border border-slate-700 px-2 py-0.5 hover:border-emerald-500 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '13px' }} aria-hidden="true">contrast</span>
          Contrast
        </button>

        {/* A / A+ grouped button box */}
        <div className="flex items-center rounded border border-slate-700 px-1">
          <button
            type="button"
            aria-label="Default text size"
            onClick={() => setLargeText(false)}
            className="px-1.5 py-0.5 font-bold hover:text-white transition-colors"
          >
            A
          </button>
          <span className="text-slate-600" aria-hidden="true">|</span>
          <button
            type="button"
            aria-label="Large text size"
            aria-pressed={largeText}
            onClick={() => setLargeText((v) => !v)}
            className="px-1.5 py-0.5 text-sm font-bold hover:text-white transition-colors"
          >
            A+
          </button>
        </div>

        {/* Mute Motion toggle */}
        <button
          type="button"
          aria-pressed={reducedMotion}
          onClick={() => setReducedMotion((v) => !v)}
          className="flex items-center gap-1 rounded border border-slate-700 px-2 py-0.5 hover:border-emerald-500 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '13px' }} aria-hidden="true">motion_photos_off</span>
          <span className="hidden sm:inline">Mute Motion</span>
          <span className="sm:hidden">Motion</span>
        </button>
      </div>
    </div>
  );
}
