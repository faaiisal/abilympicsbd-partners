import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/brand/abilympics-logo.png" alt="Abilympics Bangladesh" width={52} height={52} className="h-12 w-12 rounded-full object-contain" />
              <div><p className="font-heading font-bold text-white">Abilympics Bangladesh</p><p className="text-xs text-emerald-300">Road to Helsinki 2027</p></div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6">“Empowering Ability. Inspiring Excellence. Representing Bangladesh.”</p>
            <a href="#contact" className="mt-5 inline-flex rounded-lg bg-brand-green px-4 py-2 text-xs font-black uppercase tracking-wider text-white">Become a Partner ↗</a>
          </div>
          <div><p className="text-xs font-bold uppercase tracking-wider text-white">Navigation</p><ul className="mt-4 space-y-2 text-sm"><li><a href="#about" className="hover:text-white">About Abilympics</a></li><li><a href="#journey" className="hover:text-white">Metz 2023 Journey</a></li><li><a href="#helsinki2027" className="hover:text-white">Helsinki 2027</a></li><li><a href="#champions" className="hover:text-white">The Champions</a></li></ul></div>
          <div><p className="text-xs font-bold uppercase tracking-wider text-white">Partnerships</p><ul className="mt-4 space-y-2 text-sm"><li><a href="#partners" className="hover:text-white">Corporate CSR</a></li><li><a href="#partners" className="hover:text-white">Technology Allies</a></li><li><a href="#media" className="hover:text-white">Media Endorsement</a></li><li><a href="#contact" className="hover:text-white">Contact Secretariat</a></li></ul></div>
          <div><p className="text-xs font-bold uppercase tracking-wider text-white">Commitment to inclusion</p><p className="mt-4 text-sm leading-6">Abilympics Bangladesh is dedicated to representing persons with disabilities in international vocational skills under the charter of the International Abilympics Federation.</p></div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-5 text-xs sm:flex-row sm:items-center sm:justify-between"><p>© 2023–2027 Abilympics Bangladesh. All rights reserved.</p><div className="flex gap-4"><a href="#contact" className="hover:text-white">Accessibility Statement</a><a href="#contact" className="hover:text-white">Privacy Charter</a></div></div>
      </div>
    </footer>
  );
}
