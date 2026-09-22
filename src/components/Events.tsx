import Image from "next/image";
import { event } from "@/content";
import { SectionHeading } from "./SectionHeading";
import { Countdown } from "./Countdown";

export function Events() {
  return (
    <>
      <section id="metz-2023" className="scroll-mt-24 bg-slate-50 py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-3">
            <Image src="/images/participants/metz-2023-banner.webp" alt="Bangladeshi flag held high at the Metz Abilympics" width={700} height={700} className="h-64 w-full rounded-2xl object-cover sm:h-80" />
            <Image src="/images/2023/metz-2023-medal-01.webp" alt="Team Bangladesh medalists with their international medals" width={700} height={700} className="mt-10 h-64 w-full rounded-2xl object-cover sm:h-80" />
          </div>
          <div><SectionHeading eyebrow="Metz 2023" title="A historic debut to build on." description="Bangladesh sent a dedicated delegation to the 10th International Abilympics in Metz, France, in 2023." /><div className="mt-8 grid grid-cols-3 gap-3">{[[event.metz2023.participantCount, "Participants"], [event.metz2023.delegationSize, "Delegation members"], [event.metz2023.medalCount, "International medals"]].map(([value, label]) => <div key={label} className="rounded-xl bg-white p-4 shadow-card"><p className="font-heading text-3xl text-brand-green">{value}</p><p className="mt-1 text-sm text-slate-600">{label}</p></div>)}</div><p className="mt-6 text-slate-600">Disciplines: {event.metz2023.disciplines.join(" and ")}.</p></div>
        </div>
      </section>
      <section id="helsinki-2027" className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <div><SectionHeading dark eyebrow="Helsinki 2027" title="The next stage is waiting." description={`${event.name} · ${event.edition}th edition · ${event.location}. The competition runs from 10 to 13 May 2027 at ${event.venue}.`} /><div className="mt-8 flex flex-wrap gap-3 text-sm"><span className="rounded-full border border-white/20 px-4 py-2">43+ skills at Helsinki</span><span className="rounded-full border border-white/20 px-4 py-2">Global standards tested</span></div></div>
          <Countdown target={event.startDateTime} />
        </div>
      </section>
    </>
  );
}
