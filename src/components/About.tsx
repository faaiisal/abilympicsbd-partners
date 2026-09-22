import { faqItems, site } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const definition = faqItems.find((item) => item.id === "faq-what-is-abilympics");

  return (
    <section id="about" className="container-site scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        eyebrow="What is Abilympics?"
        title="Where ability takes centre stage."
        description={definition?.answer}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {site.brandStatement.map((item, index) => (
          <article key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <span className="text-sm font-bold text-brand-green">0{index + 1}</span>
            <h3 className="mt-8 text-xl">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
