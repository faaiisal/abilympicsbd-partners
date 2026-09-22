import { site } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function PartnershipCTA() {
  return (
    <section
      id="partnership-cta"
      aria-labelledby="partnership-cta-title"
      className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28"
    >
      <div className="container-site flex flex-col gap-8 rounded-3xl border border-white/10 bg-brand-green-dark px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
        <div>
          <SectionHeading
            dark
            eyebrow="Take the next step"
            title="Partner with Abilympics Bangladesh."
            description={site.description}
          />
          <h2 id="partnership-cta-title" className="sr-only">
            Become an Abilympics Bangladesh partner
          </h2>
        </div>
        <a
          href={site.mainCTA.href}
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-5 py-3 text-center font-bold text-brand-green-dark shadow-raised hover:bg-emerald-50"
        >
          {site.mainCTA.label}
        </a>
      </div>
    </section>
  );
}
