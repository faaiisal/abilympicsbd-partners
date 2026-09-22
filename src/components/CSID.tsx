import Image from "next/image";

export function CSID() {
  return (
    <section
      id="csid"
      aria-labelledby="csid-title"
      className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 lg:py-24"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            National Institutional Stewardship
          </p>
          <h2 id="csid-title" className="font-heading text-3xl font-black tracking-tight text-brand-slate sm:text-4xl">
            Building Opportunity Through Trusted Collaboration.
          </h2>
          <p className="text-base leading-relaxed text-slate-700">
            Abilympics Bangladesh operates in close collaboration with the{" "}
            <strong>Centre for Services and Information on Disability (CSID)</strong>,
            United Action, and strategic vocational development partners across Bangladesh.
          </p>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-forest text-xl font-black tracking-tight text-white shadow-sm">
                CSID
              </div>
              <div>
                <h3 className="text-base">Centre for Services and Information on Disability</h3>
                <p className="text-xs text-slate-500">
                  Pioneering Disability Inclusion &amp; Vocational Rights since 1997
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              Coordinating candidate trials, technical bootcamps, international protocol
              accreditation, and corporate career transition for participating youth across Bangladesh.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
            {[
              "Accredited Vocations",
              "Legal & Travel Framework",
              "Equitable Inclusion",
              "Workplace Transition",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised lg:col-span-6">
          <Image
            src="/images/institutional/csid-representative-00.webp"
            alt="Bangladeshi contingent leaders and competitors collaborating with global jury members"
            width={1200}
            height={800}
            className="h-80 w-full object-cover sm:h-[400px]"
          />
          <figcaption className="bg-brand-slate p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-400">
              International Engagement
            </p>
            <p className="mt-1 text-xs text-slate-300">
              CSID and Bangladesh representatives networking with WorldSkills and IAF delegates in Metz.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
