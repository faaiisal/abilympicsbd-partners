import Image from "next/image";
import { broadcastVideo, mediaArticles, stories } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Media() {
  return (
    <section
      id="media"
      aria-labelledby="media-title"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="National press"
            title="In the Media"
            description="Coverage from prepared media references highlighting Bangladesh’s vocational journey."
          />
        </div>
        <h2 id="media-title" className="sr-only">
          Abilympics Bangladesh media and live updates
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {mediaArticles.map((article) => (
            <article key={article.id} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
                  <span className={`font-bold ${article.accentColor}`}>{article.publication}</span>
                  <time>{article.date}</time>
                </div>
                <h3 className="mt-3 text-base">{article.headline}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{article.excerpt}</p>
              </div>
              <span className={`mt-6 border-t border-slate-200 pt-4 text-xs font-bold ${article.accentColor}`}>Prepared coverage reference</span>
            </article>
          ))}
        </div>

        <article className="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-800 bg-gradient-to-r from-brand-charcoal to-slate-900 p-6 text-white shadow-raised sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-7">
              <p className="inline-flex rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-300">Live broadcast desk</p>
              <h3 className="text-2xl text-white sm:text-4xl">Follow Team Bangladesh Live</h3>
              <p className="text-sm leading-6 text-slate-300">{broadcastVideo.facebook.description}</p>
              <a href={broadcastVideo.facebook.url} target="_blank" rel="noreferrer" className="inline-flex rounded-xl bg-white/10 px-4 py-2 text-xs font-bold hover:bg-white/20">Watch on Facebook</a>
              <details className="border-t border-slate-800 pt-4 text-xs text-slate-300">
                <summary className="cursor-pointer font-bold text-emerald-300">View text transcript and audio description</summary>
                <p className="mt-2 leading-6">Transcript summary: visual compilation of Bangladeshi contestants in Metz performing vocational tests, raising national flags and preparing for Helsinki 2027.</p>
              </details>
            </div>
            <a href={broadcastVideo.facebook.url} target="_blank" rel="noreferrer" className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black lg:col-span-5">
              <Image src={broadcastVideo.facebook.fallbackImage.src} alt={broadcastVideo.facebook.fallbackImage.alt} fill className="object-cover opacity-60" />
              <span className="absolute inset-0 flex items-center justify-center text-4xl text-white">▶</span>
            </a>
          </div>
        </article>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {stories.filter((story) => story.image.src !== "/images/2023/metz-2023-delegation-01.webp").slice(0, 3).map((story) => (
            <article key={story.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <div className="relative h-44 bg-slate-100">
                <Image src={story.image.src} alt={story.image.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className={`text-[11px] font-bold uppercase tracking-wider ${story.categoryColor}`}>{story.category}</p>
                <h3 className="mt-2 text-lg">{story.headline}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
