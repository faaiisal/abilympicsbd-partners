"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { tickerItems } from "@/content";
import { AccessibilityBar } from "./AccessibilityBar";

const links = [
  ["About", "#about"],
  ["Helsinki 2027", "#helsinki2027"],
  ["Champions", "#champions"],
  ["Partnerships", "#partners"],
  ["Gallery", "#gallery"],
  ["Media", "#media"],
  ["FAQ", "#faq"],
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
   * Sticky header:
   * All devices:
   * - Normal initially
   * - Becomes fixed after scrolling
   *
   * Accessibility bar and ticker remain desktop-only at 1025px+.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close mobile menu with Escape.
   */
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  /*
   * Prevent background page scrolling while mobile menu is open.
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function scrollToTop() {
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* ============================================================
          ACCESSIBILITY BAR
          Desktop only: 1025px+
      ============================================================ */}
      <div className="hidden min-[1025px]:block">
        <AccessibilityBar />
      </div>

      {/* ============================================================
          OFFICIAL UPDATES TICKER
          Desktop only: 1025px+
      ============================================================ */}
      <aside
        aria-label="Official Updates Ticker"
        className="hidden overflow-hidden border-b border-slate-800 bg-brand-charcoal py-2 text-xs font-semibold text-white min-[1025px]:block"
      >
        <div className="flex w-full items-center">
          {/* Ticker label */}
          <div className="ml-4 flex shrink-0 items-center gap-1.5 rounded bg-brand-red px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-white"
              aria-hidden="true"
            />
            Official Briefing
          </div>

          {/* Ticker viewport */}
          <div className="relative ml-4 min-w-0 flex-1 overflow-hidden">
            <div className="ticker-track flex w-max whitespace-nowrap text-xs font-medium text-slate-300 sm:text-sm">
              {/* Original ticker */}
              <div className="flex shrink-0 items-center">
                {tickerItems.map((item, index) => (
                  <span
                    key={`ticker-${index}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="mx-6">{item}</span>

                    <span
                      className="text-emerald-400"
                      aria-hidden="true"
                    >
                      •
                    </span>
                  </span>
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div
                className="flex shrink-0 items-center"
                aria-hidden="true"
              >
                {tickerItems.map((item, index) => (
                  <span
                    key={`ticker-copy-${index}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="mx-6">{item}</span>

                    <span
                      className="text-emerald-400"
                      aria-hidden="true"
                    >
                      •
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ============================================================
          MAIN HEADER

          ALL DEVICES:
          normal → scroll → fixed
      ============================================================ */}
      <header
        className={
          isScrolled
            ? "fixed inset-x-0 top-0 z-[100] border-b border-slate-200 bg-white/95 shadow-md backdrop-blur-xl"
            : "relative z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl"
        }
      >
        <div className="container-site flex min-h-20 items-center justify-between gap-3">
          {/* ========================================================
              BRAND / LOGO
          ======================================================== */}
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            className="flex min-w-0 shrink-0 items-center gap-2 rounded-lg p-1 sm:gap-3"
            aria-label="Abilympics Bangladesh home"
          >
            <Image
              src="/images/brand/abilympics-logo.png"
              alt=""
              width={52}
              height={52}
              priority
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            />

            {/* Full brand information on sm+ */}
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-brand-green">
                Bangladesh Delegation
              </span>

              <span className="font-heading text-lg font-extrabold text-brand-slate">
                Abilympics{" "}
                <span className="text-brand-green">2027</span>
              </span>

              <span className="text-[11px] font-bold text-sky-700">
                Helsinki, Finland • 10–13 May 2027
              </span>
            </span>
          </a>

          {/* ========================================================
              DESKTOP NAVIGATION
              xl and above
          ======================================================== */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 text-xs font-bold uppercase tracking-wide text-slate-700 xl:flex"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded px-1 py-2 transition-colors hover:text-brand-green focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ========================================================
              ACTION AREA

              Mobile:
              Logo | Become a Partner | Hamburger

              Desktop:
              Become a Partner | Desktop Nav
          ======================================================== */}
          <div className="flex shrink-0 items-center gap-2">
            {/* Become a Partner */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3.5 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-green-dark focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2 sm:px-5 sm:py-3 sm:text-xs"
            >
              <span>Become a Partner</span>

              <span
                className="material-symbols-outlined"
                style={{ fontSize: "16px" }}
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </a>

            {/* ======================================================
                HAMBURGER
                Tablet/Mobile only
            ====================================================== */}
            <div className="relative xl:hidden">
              <button
                type="button"
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={
                  isMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-brand-slate shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="flex w-5 flex-col gap-1.5"
                >
                  {/* Top line */}
                  <span
                    className={`block h-0.5 w-5 origin-center bg-current transition-transform duration-200 ${
                      isMenuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />

                  {/* Middle line */}
                  <span
                    className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Bottom line */}
                  <span
                    className={`block h-0.5 w-5 origin-center bg-current transition-transform duration-200 ${
                      isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>

              {/* ====================================================
                  MOBILE NAVIGATION

                  No Partner button inside this menu.
              ==================================================== */}
              {isMenuOpen && (
                <nav
                  id="mobile-navigation"
                  aria-label="Mobile navigation"
                  className="absolute right-0 top-[calc(100%+0.75rem)] z-[105] w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                >
                  {links.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-green focus-visible:outline-2 focus-visible:outline-brand-green focus-visible:outline-offset-[-2px]"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          HEADER SPACER

          Prevents layout jump after header becomes fixed.
          Applies to ALL DEVICES.
      ============================================================ */}
      {isScrolled && (
        <div
          aria-hidden="true"
          className="h-20"
        />
      )}

      {/* ============================================================
          BACK TO TOP

          Visible whenever header is sticky.
      ============================================================ */}
      {isScrolled && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-5 z-[90] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gradient-to-tr from-[#005a40] via-brand-green to-emerald-400 text-white shadow-lg shadow-emerald-950/40 transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-emerald-400 focus-visible:outline-offset-2 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="m6 14 6-6 6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </button>
      )}
    </>
  );
}