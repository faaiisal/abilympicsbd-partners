import Image from "next/image";

const links = [
  ["About", "#about"],
  ["Metz 2023", "#metz-2023"],
  ["Helsinki 2027", "#helsinki-2027"],
  ["Participants", "#participants"],
  ["Partnerships", "#partnerships"],
  ["Gallery", "#gallery"],
];

export function Header() {
  return (
    <>
      <div className="bg-brand-charcoal px-4 py-2 text-center text-xs font-semibold text-slate-200">
        <span className="text-emerald-300">Road to Helsinki 2027</span>
        <span className="mx-2 text-slate-500">•</span>
        10–13 May 2027 · Messukeskus, Helsinki
      </div>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-site flex min-h-20 items-center justify-between gap-4">
          <a href="#" className="flex shrink-0 items-center gap-3 rounded-lg p-1" aria-label="Abilympics Bangladesh home">
            <Image src="/images/brand/abilympics-logo.png" alt="" width={52} height={52} priority className="h-12 w-12 object-contain" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-brand-green">Bangladesh Delegation</span>
              <span className="font-heading text-lg font-extrabold text-brand-slate">Abilympics <span className="text-brand-green">2027</span></span>
            </span>
          </a>
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-5 text-xs font-bold uppercase tracking-wide text-slate-700">
            {links.map(([label, href]) => <a key={href} href={href} className="rounded px-1 py-2 hover:text-brand-green">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="rounded-lg bg-brand-green px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-brand-green-dark">Become a Partner</a>
            <details className="relative xl:hidden">
              <summary className="list-none cursor-pointer rounded-lg border border-slate-200 p-2.5 text-brand-slate focus-visible:outline-2 focus-visible:outline-brand-green" aria-label="Open navigation menu">
                <span aria-hidden="true" className="block space-y-1">
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                  <span className="block h-0.5 w-5 bg-current" />
                </span>
              </summary>
              <nav aria-label="Mobile navigation" className="absolute right-0 top-14 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                {links.map(([label, href]) => <a key={href} href={href} className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-50 hover:text-brand-green">{label}</a>)}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
