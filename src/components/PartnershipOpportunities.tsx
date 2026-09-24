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
        {/* Section heading */}
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

        {/* Partnership cards */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {partnershipTiers.map((tier) => {
            const isDirectEngagement = tier.id === "direct";

            return (
              <article
                key={tier.id}
                className={[
                  "group relative flex min-h-[350px] flex-col overflow-visible rounded-3xl border p-7 transition-all duration-300",
                  isDirectEngagement
                    ? "border-emerald-500/50 bg-gradient-to-br from-brand-forest via-[#0B3F32] to-slate-900 shadow-[0_12px_40px_rgba(0,106,78,0.16)] hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(0,106,78,0.24)]"
                    : tier.isHighlighted
                      ? "border-2 border-emerald-500 bg-gradient-to-b from-slate-800 to-slate-900 shadow-[0_12px_40px_rgba(16,185,129,0.10)] hover:-translate-y-1 hover:border-emerald-400 hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)]"
                      : `border-slate-700/80 bg-gradient-to-b from-slate-800/95 to-slate-900/95 hover:-translate-y-1 hover:border-slate-500 hover:shadow-[0_20px_45px_rgba(0,0,0,0.25)] ${tier.hoverBorder ?? ""}`,
                ].join(" ")}
              >
                {/* Premier Headline badge */}
                {tier.isHighlighted && (
                  <span className="absolute -top-3 right-6 rounded-full bg-emerald-500 px-3 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-slate-950 shadow-lg">
                    Premier Headline
                  </span>
                )}

                {isDirectEngagement ? (
                  /* Direct Engagement */
                  <div className="flex h-full flex-col items-center text-center">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20"
                      aria-hidden="true"
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: "30px" }}
                      >
                        handshake
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-black tracking-tight text-white">
                      {tier.name}
                    </h3>

                    <p className="mt-3 max-w-[250px] text-xs leading-6 text-slate-200">
                      {tier.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-auto w-full rounded-xl bg-white px-4 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.1em] text-slate-900 shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                    >
                      {tier.ctaLabel}
                    </a>
                  </div>
                ) : (
                  /* Standard Partnership Tier */
                  <div className="flex h-full flex-col">
                    <div>
                      <h3 className="font-heading text-xl font-black tracking-tight text-white">
                        {tier.name}
                      </h3>

                      <p className="mt-4 text-xs leading-6 text-slate-300">
                        {tier.description}
                      </p>

                      {tier.benefits.length > 0 && (
                        <ul className="mt-6 space-y-3 border-t border-slate-700/80 pt-5 text-xs leading-5 text-slate-300">
                          {tier.benefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-start gap-2.5"
                            >
                              <span
                                className="mt-0.5 shrink-0 text-emerald-400"
                                aria-hidden="true"
                              >
                                •
                              </span>

                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <a
                      href="#contact"
                      className={[
                        "mt-8 w-full rounded-xl px-4 py-3.5 text-center text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
                        tier.isHighlighted
                          ? "bg-brand-green text-white shadow-lg shadow-emerald-950/30 hover:-translate-y-0.5 hover:bg-brand-green-light focus-visible:outline-emerald-400"
                          : "bg-slate-700/90 text-white hover:-translate-y-0.5 hover:bg-slate-600 focus-visible:outline-emerald-400",
                      ].join(" ")}
                    >
                      {tier.ctaLabel}
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
