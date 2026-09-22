import { partnershipTiers } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function PartnerBenefits() {
  const tiersWithBenefits = partnershipTiers.filter((tier) => tier.benefits.length > 0);

  return (
    <section
      id="partner-benefits"
      aria-labelledby="partner-benefits-title"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Partner benefits"
          title="Make your support visible and meaningful."
          description="The documented partnership benefits connect organizational support with the Bangladesh delegation’s journey to Helsinki 2027."
        />
        <h2 id="partner-benefits-title" className="sr-only">
          Benefits by partnership category
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tiersWithBenefits.map((tier) => (
            <article
              key={tier.id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-card"
            >
              <h3 className="text-xl">{tier.name}</h3>
              <ul className="mt-6 space-y-4">
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span
                      aria-hidden="true"
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white"
                    >
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
