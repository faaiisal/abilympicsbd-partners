import { partnershipTiers } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function PartnershipOpportunities() {
  return (
    <section
      id="partners"
      aria-labelledby="partnership-opportunities-title"
      className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            dark
            eyebrow="Collaboration packages"
            title="Find Your Role in the Journey"
            description="Choose a documented partnership pathway for the Bangladesh delegation’s road to Helsinki 2027."
          />
        </div>
        <h2 id="partnership-opportunities-title" className="sr-only">
          Partnership opportunity categories
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partnershipTiers.map((tier) => (
            <article
              key={tier.id}
              className={`flex flex-col justify-between rounded-2xl border bg-slate-800/90 p-6 shadow-card ${
                tier.isHighlighted
                  ? "border-emerald-500 ring-1 ring-emerald-500/20"
                  : "border-slate-700"
              }`}
            >
              <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-300">
                {tier.name}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{tier.description}</p>
              {tier.benefits.length ? (
                <ul className="mt-5 space-y-2 border-t border-slate-700 pt-4 text-xs leading-5 text-slate-300">
                  {tier.benefits.map((benefit) => <li key={benefit}>• {benefit}</li>)}
                </ul>
              ) : null}
              </div>
              <a href="#contact" className={`mt-6 block rounded-lg px-4 py-3 text-center text-xs font-black uppercase tracking-wider ${tier.isHighlighted ? "bg-brand-green text-white" : "bg-slate-700 text-white hover:bg-slate-600"}`}>Become a Partner</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
