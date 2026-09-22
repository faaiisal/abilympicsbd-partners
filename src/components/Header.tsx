"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { tickerItems } from "@/content";
import { AccessibilityBar } from "./AccessibilityBar";

const links = [
  ["About", "#about"],
  // ["Metz 2023", "#journey"],
  ["Helsinki 2027", "#helsinki2027"],
  // ["Champions", "#champions"],
  ["Partnerships", "#partners"],
  ["Gallery", "#gallery"],
  ["Media", "#media"],
  // ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 96);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <AccessibilityBar />
      <aside aria-label="Official updates ticker" className="overflow-hidden border-b border-slate-800 bg-brand-charcoal py-2 text-xs font-semibold text-white">
        <div className="flex items-center">
          <span className="ml-4 rounded bg-brand-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">Official Briefing</span>
          <div className="relative ml-4 min-w-0 flex-1 overflow-hidden">
            <div className="animate-marquee flex min-w-max gap-8 whitespace-nowrap text-slate-300">
              {[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}>{item} <span className="ml-8 text-emerald-400">•</span></span>)}
            </div>
          </div>
        </div>
      </aside>
      <header className={`${isScrolled ? "fixed inset-x-0 top-0 z-50 shadow-sm" : "relative"} border-b border-slate-200 bg-white/95 backdrop-blur transition-shadow duration-200`}>
        <div className="container-site flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3 rounded-lg p-1" aria-label="Abilympics Bangladesh home">
            <Image src="/images/brand/abilympics-logo.png" alt="" width={52} height={52} priority className="h-12 w-12 object-contain" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-brand-green">Bangladesh Delegation</span>
              <span className="font-heading text-lg font-extrabold text-brand-slate">Abilympics <span className="text-brand-green">2027</span></span>
              <span className="text-[11px] font-bold text-sky-700">Helsinki, Finland • 10–13 May 2027</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5 text-xs font-bold uppercase tracking-wide text-slate-700">
            {links.map(([label, href]) => <a key={href} href={href} className="rounded px-1 py-2 hover:text-brand-green">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-lg bg-brand-green px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-green-dark">Become a Partner</a>
            <details className="relative xl:hidden">
              <summary className="list-none cursor-pointer rounded-lg border border-slate-200 p-2.5 text-brand-slate focus-visible:outline-2 focus-visible:outline-brand-green" aria-label="Open navigation menu">
                <span aria-hidden="true" className="block space-y-1">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                {links.map(([label, href]) => <a key={href} href={href} className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-50 hover:text-brand-green">{label}</a>)}
              </nav>
            </details>
          </div>
        </div>
      </header>
      {isScrolled ? <div aria-hidden="true" className="h-20" /> : null}
      {isScrolled ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lime-300 text-2xl font-bold text-slate-950 shadow-lg transition-transform hover:scale-105 focus-visible:outline-brand-green"
        >
          <span aria-hidden="true">⌃</span>
        </button>
      ) : null}
    </>
  );
}
