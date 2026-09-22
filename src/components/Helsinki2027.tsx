import { event } from "@/content";
import { Countdown } from "./Countdown";

export function Helsinki2027() {
  return (
    <section
      id="helsinki2027"
      className="relative scroll-mt-24 bg-gradient-to-b from-brand-charcoal via-slate-900 to-brand-charcoal py-24 text-white"
    >
      <div className="container-site text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300">
            <span aria-hidden="true">◷</span>
            Official Countdown to Opening Ceremony
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">Abilympics Helsinki 2027</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sky-200 sm:text-lg">{`10–13 May 2027 • ${event.venue}, ${event.location}`}</p>
          <div className="mx-auto mt-12 max-w-3xl"><Countdown target={event.startDateTime} /></div>
          <p className="mt-12 text-base italic text-slate-300">“The world is waiting. Bangladesh is preparing.”</p>
          <a href="#contact" className="mt-8 inline-flex items-center rounded-xl bg-brand-green px-10 py-4 text-sm font-black uppercase tracking-wider text-white shadow-2xl hover:bg-brand-green-light">Become a Partner <span aria-hidden="true" className="ml-2 text-lg">↗</span></a>
        </div>
      </div>
    </section>
  );
}
