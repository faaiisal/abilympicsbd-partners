import { faqItems } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="The details behind the journey."
          description="Find answers to common questions about Abilympics, Bangladesh’s delegation and partnership."
        />
        <h2 id="faq-title" className="sr-only">
          Frequently asked questions about Abilympics Bangladesh
        </h2>

        <div className="mt-12 max-w-4xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqItems.map((item) => (
            <details key={item.id} className="group p-5 first:rounded-t-2xl last:rounded-b-2xl sm:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-heading text-lg font-bold text-brand-slate marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl font-normal text-brand-green transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
