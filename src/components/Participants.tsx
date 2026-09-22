import Image from "next/image";
import { participants } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Participants() {
  return (
    <section id="participants" className="container-site scroll-mt-24 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Participant spotlight"
        title="Meet the talent behind the journey."
        description="The Bangladesh delegation’s preparation is grounded in practice, precision and the belief that professional skill opens doors."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {participants.map((person) => (
          <article key={person.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
            <div className="grid sm:grid-cols-[0.8fr_1.2fr]">
              <Image
                src={person.image.src}
                alt={person.image.alt}
                width={person.image.width}
                height={person.image.height}
                className="h-72 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${person.badgeColor}`}>
                  Featured candidate
                </span>
                <h3 className="mt-5 text-2xl">{person.name}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-green">{person.discipline}</p>
                <p className="mt-4 text-slate-600">{person.bio}</p>
                <blockquote className={`mt-5 border-l-4 pl-4 text-sm italic text-slate-700 ${person.quoteAccent}`}>
                  “{person.quote}”
                </blockquote>
                {person.sponsorCtaHref ? (
                  <a
                    href={person.sponsorCtaHref}
                    className={`mt-5 inline-block text-sm font-bold underline underline-offset-4 ${person.ctaColor}`}
                  >
                    {person.sponsorCtaLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
