import { impactCategories, partnershipPillars } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function WhyPartner() {
  return (
    <section id="why-partner" aria-labelledby="why-partner-title" className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            dark
            eyebrow="Sponsorship & CSR Framework"
            title="Why Partner With Abilympics Bangladesh?"
            description="Your organization’s support directly propels Bangladeshi youth to the world stage while realizing genuine Environmental, Social & Governance (ESG) milestones."
          />
        </div>
        <h2 id="why-partner-title" className="sr-only">Why partner with Abilympics Bangladesh</h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipPillars.map((pillar) => (
            <article key={pillar.id} className="rounded-xl border border-slate-700 bg-slate-800/80 p-5">
              <p className={`text-sm font-black tracking-[0.18em] ${pillar.iconColor}`}>{pillar.label}</p>
              <p className="mt-4 text-xs leading-6 text-slate-300">{pillar.description}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/80 p-6 sm:p-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">Tangible impact allocations</p>
            <h3 className="mt-2 text-2xl text-white">Where Partnership Makes a Difference</h3>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {impactCategories.map((item) => (
              <div key={item.number} className="rounded-lg border border-slate-700 bg-slate-800/70 p-3 text-xs font-semibold text-slate-200">
                <span className={`mr-2 ${item.iconColor}`}>{item.number}.</span>{item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}