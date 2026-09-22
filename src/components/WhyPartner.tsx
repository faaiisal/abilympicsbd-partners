import { partnershipPillars } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function WhyPartner() {
  return (
    <section
      id="why-partner"
      className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            dark
            eyebrow="Sponsorship & CSR framework"
            title="Why partner with Abilympics Bangladesh?"
            description="Your organization’s support directly propels Bangladeshi youth to the world stage while realizing genuine Environmental, Social & Governance milestones."
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipPillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div
                aria-hidden="true"
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold ${pillar.iconBg} ${pillar.iconColor}`}
              >
                0{index + 1}
              </div>
              <h3 className="mt-5 text-lg text-white">{pillar.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
