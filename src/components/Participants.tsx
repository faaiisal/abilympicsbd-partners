import Image from "next/image";
import { participants, stories } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function Participants() {
  const validStories = stories.filter((story) => story.image.src !== "/images/2023/metz-2023-delegation-01.webp");
  return <section id="champions" className="scroll-mt-24 bg-white py-20 lg:py-28"><div className="container-site"><div className="mx-auto max-w-3xl text-center"><SectionHeading eyebrow="METZ 2023 DELEGATION" title="The Champions Who Made History" description="Seven participants represented Bangladesh at the 10th International Abilympics in Metz, returning with two international bronze medals and a story of skill, determination, and possibility." /></div>  <div className="mt-12 space-y-8">
    {participants.map((person, index) => {
      const imageFirst = index % 2 === 0;
      return (
        <article key={person.id} className="grid gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-card sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-10">
          <div className={`${imageFirst ? "lg:order-1" : "lg:order-2"} lg:col-span-5`}>
            <Image
              src={person.image.src}
              alt={person.image.alt}
              width={person.image.width}
              height={person.image.height}
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-xl border border-slate-200 bg-white object-cover shadow-raised"
            />
          </div>
          <div className={`${imageFirst ? "lg:order-2" : "lg:order-1"} lg:col-span-7`}>
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${person.badgeColor}`}>Featured candidate</span>
            <h3 className="mt-4 text-3xl">{person.name}</h3>
            <p className="mt-1 text-sm font-semibold text-brand-green">{person.discipline}</p>
            <p className="mt-5 text-sm leading-7 text-slate-600">{person.bio}</p>
            <blockquote className={`mt-5 rounded-lg border border-slate-200 border-l-4 bg-white px-4 py-3 text-sm italic leading-6 text-slate-700 ${person.quoteAccent}`}>“{person.quote}”</blockquote>
            <a href={person.sponsorCtaHref} target="_blank"   className={`mt-6 inline-block text-xs font-black uppercase tracking-wider underline underline-offset-4 ${person.ctaColor}`}>{person.sponsorCtaLabel} →</a>
          </div>
        </article>
      );
    })}
  </div>
  </div>
  </section>;
}
