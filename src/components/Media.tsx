import Image from "next/image";
import { mediaArticles, stories } from "@/content";
import { SectionHeading } from "./SectionHeading";
import { JourneyVideo } from "@/components/JourneyVideo";

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
            title="Media & Stories"
            description="Stories and coverage highlighting Bangladesh’s Abilympics journey, participants, and achievements."
          />
        </div>

        <h2 id="media-title" className="sr-only">
          Abilympics Bangladesh media and live updates
        </h2>

        {/* Media Articles */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {mediaArticles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
                  <span className={`font-bold ${article.accentColor}`}>
                    {article.publication}
                  </span>

                  <time>{article.date}</time>
                </div>

                <h3 className="mt-3 text-base">
                  {article.headline}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.excerpt}
                </p>
              </div>

              <span
                className={`mt-6 border-t border-slate-200 pt-4 text-xs font-bold ${article.accentColor}`}
              >
                Nagorik TV — Television Feature
              </span>
            </article>
          ))}
        </div>

        {/* Journey Video */}
        <div className="mx-auto mt-10 max-w-5xl">
          <JourneyVideo />
        </div>

        {/* Stories */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {stories
            .filter(
              (story) =>
                story.image.src !==
                "/images/2023/metz-2023-delegation-01.webp"
            )
            .slice(0, 3)
            .map((story) => (
              <article
                key={story.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card"
              >
                <div className="relative h-44 bg-slate-100">
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <p
                    className={`text-[11px] font-bold uppercase tracking-wider ${story.categoryColor}`}
                  >
                    {story.category}
                  </p>

                  <h3 className="mt-2 text-lg">
                    {story.headline}
                  </h3>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}