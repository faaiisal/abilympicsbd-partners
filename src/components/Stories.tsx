import Image from "next/image";
import { stories } from "@/content";
import { SectionHeading } from "./SectionHeading";

const availableStoryImages = new Set([
  "/images/participants/metz-2023-banner.webp",
  "/images/gallery/gallery-01.webp",
]);

export function Stories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Participant stories"
          title="Stories from the road."
          description="Prepared stories from the Bangladesh delegation’s journey toward Helsinki 2027."
        />
        <h2 id="stories-title" className="sr-only">
          Abilympics Bangladesh participant stories
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map((story) => {
            const hasImage = availableStoryImages.has(story.image.src);
            const content = (
              <>
                {hasImage ? (
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    width={story.image.width}
                    height={story.image.height}
                    className="h-24 w-24 shrink-0 rounded-xl object-cover"
                  />
                ) : null}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wide ${story.categoryColor}`}>
                    {story.category}
                  </p>
                  <h3 className="mt-2 text-lg">{story.headline}</h3>
                </div>
              </>
            );

            return story.href ? (
              <a
                key={story.id}
                href={story.href}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-card hover:border-brand-green"
              >
                {content}
              </a>
            ) : (
              <article
                key={story.id}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-card"
              >
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
