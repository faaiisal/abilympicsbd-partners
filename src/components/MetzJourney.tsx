import Image from "next/image";
import { event } from "@/content";

export function MetzJourney() {
  return (
    <section id="journey" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            Historic milestone
          </p>
          <h2 className="mt-3 font-heading text-4xl font-black tracking-tight text-brand-slate sm:text-5xl">
            Our Journey Started in Metz.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            In March 2023, the red and green flag of Bangladesh flew proudly at the
            10th International Abilympics in Metz, France. Organized through CSID
            and United Action, an inspired delegation achieved unprecedented glory.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-brand-slate px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                Metz 2023
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                France • Completed Milestone
              </span>
            </div>
            <h3 className="mt-6 text-2xl">The Historic Debut</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A dedicated {event.metz2023.delegationSize}-member official delegation
              with {event.metz2023.participantCount} competitors entered international
              vocational scrutiny, bringing home two medals for the nation.
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-700">
              <li className="flex gap-3"><span className="text-brand-green">●</span>{event.metz2023.participantCount} talented competitors in {event.metz2023.disciplines.join(" & ")}</li>
              <li className="flex gap-3"><span className="text-brand-green">●</span>{event.metz2023.medalCount} international medals won on the global podium</li>
              <li className="flex gap-3"><span className="text-brand-green">●</span>First formal inclusion of Bangladesh at the IAF level</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-brand-green bg-gradient-to-br from-brand-green to-brand-charcoal p-6 text-white shadow-raised sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-sky-400 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                Helsinki 2027
              </span>
              <span className="text-[11px] font-semibold text-slate-300">
                Finland • Upcoming Goal
              </span>
            </div>
            <h3 className="mt-6 text-2xl text-white">The Global Stage Awaits</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Bangladesh is preparing for the 11th International Abilympics at{" "}
              {event.venue}, with a focused journey toward international representation.
            </p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-200">
              <li className="flex gap-3"><span className="text-sky-400">●</span>Expanded national squad across multiple trade disciplines</li>
              <li className="flex gap-3"><span className="text-sky-400">●</span>International mentor bootcamps and accessibility technology</li>
              <li className="flex gap-3"><span className="text-emerald-400">●</span>Aiming for multi-category podium finishes for Bangladesh</li>
            </ul>
          </article>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-12">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-brand-slate shadow-card md:col-span-7">
            <Image
              src="/images/participants/metz-2023-banner.webp"
              alt="Bangladeshi delegation standing proudly with international peers at the 10th Abilympics"
              width={1200}
              height={760}
              className="h-72 w-full object-cover sm:h-96"
            />
            <figcaption className="bg-brand-slate p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">Metz Arena Solidarity</p>
              <p className="mt-1 text-xs text-slate-300">Bangladesh delegation standing proudly with international peers at the 10th Abilympics.</p>
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6 md:col-span-5">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <Image
                src="/images/institutional/csid-representative-01.webp"
                alt="CSID and Bangladesh representatives at the 10th Abilympics in Metz"
                width={900}
                height={600}
                className="h-[220px] w-full object-cover sm:h-[260px] lg:h-[310px]"
              />
              <figcaption className="bg-slate-100 p-3 text-xs font-semibold text-slate-700">
                CSID and Bangladesh representatives at the 10th Abilympics in Metz.
              </figcaption>
            </figure>

            <div className="flex items-center gap-4 overflow-hidden rounded-2xl border border-amber-300 bg-amber-50/50 p-4 shadow-md">
              <Image
                src="/images/institutional/csid-representative-00.webp"
                alt="Team Bangladesh medalists with their international medals"
                width={160}
                height={160}
                className="h-24 w-24 shrink-0 rounded-xl border-2 border-amber-400 object-cover shadow-sm"
              />
              <div>
                <span className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-black uppercase text-slate-950">Historic Triumph</span>
                <h4 className="mt-1 font-heading text-lg font-black text-slate-900">2 International Medals</h4>
                <p className="mt-0.5 text-xs text-slate-600">Validated proof of Bangladeshi vocational capability at the highest tier.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
