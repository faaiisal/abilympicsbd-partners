import Image from "next/image";
import { faqItems } from "@/content";
import { SectionHeading } from "./SectionHeading";

const csidFaq = faqItems.find((item) => item.id === "faq-what-is-csid");

export function CSID() {
  return (
    <section id="csid" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Institutional collaboration"
            title="Building opportunity through trusted collaboration."
            description="Abilympics Bangladesh operates in close collaboration with the Centre for Services and Information on Disability (CSID), United Action, and strategic development partners across Bangladesh."
          />
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-forest text-xl font-black text-white">
                CSID
              </div>
              <div>
                <h3 className="text-base">Centre for Services and Information on Disability</h3>
                <p className="mt-1 text-xs text-slate-500">Disability inclusion and vocational rights</p>
              </div>
            </div>
            {csidFaq ? <p className="mt-5 text-sm leading-6 text-slate-600">{csidFaq.answer}</p> : null}
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-raised">
          <Image
            src="/images/institutional/csid-representative-00.webp"
            alt="Bangladeshi contingent leaders and competitors collaborating with global jury members"
            width={900}
            height={700}
            className="h-80 w-full object-cover sm:h-[26rem]"
          />
          <figcaption className="bg-brand-charcoal p-4 text-sm text-slate-200">
            CSID and Bangladesh representatives at the 10th Abilympics in Metz.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}