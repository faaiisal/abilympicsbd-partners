import Image from "next/image";
import { heroStats, site } from "@/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-charcoal text-white">
      <Image src="/images/2027/helsinki-2027-01.webp" alt="" fill priority className="absolute inset-0 -z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-brand-green-dark/80" />
      <div className="container-site grid min-h-[620px] items-end gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Abilympics Bangladesh</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">Bangladesh to the <span className="text-emerald-300">Global Stage.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Empowering Ability. Inspiring Excellence. Representing Bangladesh at the 11th International Abilympics in Helsinki, Finland.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#partnerships" className="rounded-lg bg-brand-green px-5 py-3 font-bold text-white hover:bg-brand-green-light">Explore partnership opportunities</a>
            <a href="#about" className="rounded-lg border border-white/40 px-5 py-3 font-bold text-white hover:bg-white/10">Discover the journey</a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">Helsinki 2027</p>
          <p className="mt-3 font-heading text-3xl font-extrabold">10–13 May 2027</p>
          <p className="mt-2 text-slate-200">Messukeskus Exhibition and Convention Centre<br />Helsinki, Finland</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {heroStats.map((stat) => <div key={stat.id} className="rounded-xl bg-black/20 p-3"><p className={`font-heading text-2xl font-extrabold ${stat.color}`}>{stat.value}</p><p className="mt-1 text-xs text-slate-200">{stat.label}</p></div>)}
          </div>
          <a href={`mailto:${site.contactEmail}`} className="mt-6 inline-block text-sm font-bold text-emerald-300 underline underline-offset-4">Contact the secretariat</a>
        </div>
      </div>
    </section>
  );
}
