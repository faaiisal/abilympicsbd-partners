import { partnershipTiers } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function PartnershipOpportunities() {
  return (
    <section
      id="partnership-opportunities"
      aria-labelledby="partnership-opportunities-title"
      className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Partnership opportunities"
          title="Choose how your organization can participate."
          description="The prepared partnership pathways outline documented ways to support Bangladesh’s journey to Helsinki 2027."
        />
        <h2 id="partnership-opportunities-title" className="sr-only">
          Partnership opportunity categories
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partnershipTiers.map((tier) => (
            <article
              key={tier.id}
              className={`rounded-2xl border bg-white p-6 shadow-card ${
                tier.isHighlighted
                  ? "border-brand-green ring-1 ring-brand-green/20"
                  : "border-slate-200"
              }`}
            >
              <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-green">
                {tier.name}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{tier.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
