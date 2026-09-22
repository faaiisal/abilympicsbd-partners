import { event, heroStats } from "@/content";
import { Countdown } from "./Countdown";
import { SectionHeading } from "./SectionHeading";

const skillsStat = heroStats.find((stat) => stat.id === "skills");

export function Helsinki2027() {
  return (
    <section
      id="helsinki-2027"
      className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28"
    >
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            dark
            eyebrow="The next stage"
            title="Helsinki 2027 is waiting."
            description={`${event.name} returns for its ${event.edition}th edition from 10–13 May 2027 at ${event.venue}, ${event.location}.`}
          />
          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-wider text-slate-300">Dates</dt>
              <dd className="mt-2 font-semibold">10–13 May 2027</dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-wider text-slate-300">Venue</dt>
              <dd className="mt-2 font-semibold">Messukeskus</dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-wider text-slate-300">Location</dt>
              <dd className="mt-2 font-semibold">Helsinki, Finland</dd>
            </div>
          </dl>
          {skillsStat ? (
            <p className="mt-6 text-sm text-slate-300">
              <span className="font-bold text-emerald-300">{skillsStat.value}</span>{" "}
              {skillsStat.label.toLowerCase()} · {skillsStat.sublabel}
            </p>
          ) : null}
        </div>
        <Countdown target={event.startDateTime} />
      </div>
    </section>
  );
}
