import Image from "next/image";
import { heroStats, site } from "@/content";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-charcoal text-white">
      <Image src="/images/2027/helsinki-2027-01.webp" alt="" fill priority className="absolute inset-0 -z-30 object-cover opacity-35" />
      <iframe
        src="https://www.youtube-nocookie.com/embed/EF3dV-pp3jg?autoplay=1&mute=1&controls=0&loop=1&playlist=EF3dV-pp3jg&modestbranding=1&rel=0&playsinline=1"
        title="Abilympics Bangladesh journey video"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        className="pointer-events-none absolute inset-0 -z-20 hidden h-full w-full scale-[1.08] object-cover opacity-40 motion-safe:block"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-charcoal via-brand-charcoal/90 to-brand-green-dark/80" />
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2.5 w-2.5 animate-ping rounded-full bg-emerald-400" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-widest">Road to Helsinki 2027</span>
          <span className="text-white/40">|</span>
          <span className="text-xs font-bold text-sky-300">10–13 May 2027 • Helsinki, Finland</span>
        </div>
        <div>
          <h1 className="font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">Bangladesh to the <br className="hidden sm:inline" /><span className="bg-gradient-to-r from-white via-emerald-300 to-teal-200 bg-clip-text text-transparent">Global Stage.</span></h1>
          <p className="mx-auto mb-4 mt-6 max-w-3xl text-xl font-semibold tracking-tight text-emerald-100 sm:text-2xl">Empowering Ability. Inspiring Excellence. Representing Bangladesh.</p>
          <p className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-300 sm:text-lg">Following our historic 2-medal debut at Metz 2023, Team Bangladesh is preparing for the world’s premier vocational championship at Abilympics Helsinki 2027.</p>
          <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row">
            <a href="https://partners.epyra.agency" target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-2xl hover:bg-brand-green-light sm:w-auto">Become a Partner</a>
            <a href="#journey" className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto">Explore Metz Journey</a>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/10 pt-8 text-left md:grid-cols-4">
          {heroStats.map((stat) => <div key={stat.id} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"><p className={`font-heading text-3xl font-black ${stat.color}`}>{stat.value}</p><p className="text-xs font-medium text-slate-300">{stat.label}</p></div>)}
        </div>
        <div className="sr-only">
          <p>Helsinki 2027</p>
          <p>Messukeskus Exhibition and Convention Centre, Helsinki, Finland</p>
          <a href={`mailto:${site.contactEmail}`}>Contact the secretariat</a>
          </div>
      </div>
    </section>
  );
}
