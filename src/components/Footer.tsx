import { site } from "@/content";

export function Footer() {
  return <footer className="bg-brand-charcoal py-10 text-slate-300"><div className="container-site flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between"><div><p className="font-heading text-lg font-bold text-white">Abilympics Bangladesh</p><p className="mt-1">Empowering Ability. Inspiring Excellence. Representing Bangladesh.</p></div><a href={`mailto:${site.contactEmail}`} className="font-semibold text-emerald-300 underline underline-offset-4">{site.contactEmail}</a></div></footer>;
}
