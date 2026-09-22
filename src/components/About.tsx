import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="container-site scroll-mt-24 py-20 lg:py-28">
      <SectionHeading eyebrow="About Abilympics" title="Where ability takes centre stage." description="The International Abilympics is the quadrennial “Olympics of Abilities” — a world skills competition for persons with disabilities, demonstrating workplace parity, digital trade mastery, and vocational leadership." />
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {["Empowering Ability", "Inspiring Excellence", "Representing Bangladesh"].map((item, index) => <article key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><span className="text-sm font-bold text-brand-green">0{index + 1}</span><h3 className="mt-8 text-xl">{item}</h3><p className="mt-3 text-slate-600">{["Skills, confidence and opportunity for professionals with disabilities.", "Vocational practice measured against an international standard.", "A national delegation carrying Bangladesh’s ambition to the world."][index]}</p></article>)}
      </div>
    </section>
  );
}
