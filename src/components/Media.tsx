import { broadcastVideo, mediaArticles } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Media() {
  return (
    <section
      id="media"
      aria-labelledby="media-title"
      className="scroll-mt-24 bg-slate-50 py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Media and updates"
          title="Follow the journey as it unfolds."
          description="Confirmed media references and live updates help partners stay close to the Bangladesh delegation."
        />
        <h2 id="media-title" className="sr-only">
          Abilympics Bangladesh media and live updates
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl bg-brand-charcoal p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Live update
            </p>
            <h3 className="mt-3 text-2xl">{broadcastVideo.facebook.title}</h3>
            <p className="mt-3 text-slate-300">{broadcastVideo.facebook.description}</p>
            <a
              href={broadcastVideo.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-lg border border-white/30 px-4 py-2 font-bold hover:bg-white/10"
            >
              Watch on Facebook
            </a>
          </article>

          <div className="space-y-3">
            {mediaArticles.map((article) => (
              <article key={article.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className={`text-xs font-bold uppercase tracking-wide ${article.accentColor}`}>
                  {article.publication} · {article.date}
                </p>
                <h3 className="mt-2 text-lg">{article.headline}</h3>
                <p className="mt-2 text-sm text-slate-600">{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
