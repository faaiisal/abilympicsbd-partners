import Image from "next/image";
export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-20 lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-6">
          <p className="inline-flex rounded-md bg-emerald-100 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-forest">Global Vocational Excellence</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Where Ability Takes Center Stage.</h2>
          <p className="text-base leading-7 text-slate-700 sm:text-lg">Abilympics is the premier quadrennial world skills championship for persons with disabilities. Certified vocational specialists, engineers, programmers, designers, and artisans gather to demonstrate world-class capabilities across high-demand technical trades.</p>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">Known internationally as the <strong>“Olympics of Abilities”</strong>, Abilympics redefines workplace equity by proving that mastery, discipline, and grit overcome any barrier. Competitions are benchmarked directly against rigorous WorldSkills industry standards.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
              <span aria-hidden="true" className="text-2xl text-brand-green">✧</span>
              <div><h3 className="text-sm">Rigorous Standards</h3><p className="mt-1 text-xs text-slate-500">Judged by accredited international vocational juries.</p></div>
            </article>
            <article className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card">
              <span aria-hidden="true" className="text-2xl text-brand-ice">◉</span>
              <div><h3 className="text-sm">Global Inclusion</h3><p className="mt-1 text-xs text-slate-500">More than 35 nations competing on equitable platforms.</p></div>
            </article>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-brand-charcoal shadow-raised lg:col-span-6">
          <div className="relative h-72 sm:h-96">
            <Image src="/images/gallery/gallery-00.webp" alt="Bangladeshi candidate completing a vocational competition task" fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
              <p className="text-sm font-semibold text-emerald-300">10th International Abilympics • Metz, France</p>
              <p className="text-xs text-slate-300">Word Processing &amp; Technical Documentation Task</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
