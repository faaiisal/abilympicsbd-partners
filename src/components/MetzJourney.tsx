import Image from "next/image";
import { event, participants } from "@/content";
import { SectionHeading } from "./SectionHeading";

const journeyImages = [
  {
    src: "/images/participants/metz-2023-banner.webp",
    alt: "Bangladeshi flag held high on the international arena stage in Metz",
  },
  {
    src: "/images/2023/metz-2023-medal-01.webp",
    alt: "Team Bangladesh medalists with their international medals",
  },
];

export function MetzJourney() {
  return (
    <section id="metz-2023" className="scroll-mt-24 bg-slate-50 py-20 lg:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Bangladesh journey · 2023"
          title="A historic debut in Metz."
          description={`Bangladesh sent a dedicated ${event.metz2023.delegationSize}-member delegation to the ${event.metz2023.edition}th International Abilympics in ${event.metz2023.location}.`}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid grid-cols-2 gap-3" aria-label="Metz 2023 documentary images">
            {journeyImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={700}
                height={700}
                className={`h-64 w-full rounded-2xl object-cover sm:h-80 ${index === 1 ? "mt-10" : ""}`}
              />
            ))}
          </div>

          <div>
            <dl className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white p-4 shadow-card">
                <dt className="text-sm text-slate-600">Participants</dt>
                <dd className="mt-2 font-heading text-3xl text-brand-green">{event.metz2023.participantCount}</dd>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-card">
                <dt className="text-sm text-slate-600">Delegation</dt>
                <dd className="mt-2 font-heading text-3xl text-brand-green">{event.metz2023.delegationSize}</dd>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-card">
                <dt className="text-sm text-slate-600">Medals</dt>
                <dd className="mt-2 font-heading text-3xl text-brand-green">{event.metz2023.medalCount}</dd>
              </div>
            </dl>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">Competition record</p>
              <p className="mt-3 leading-7 text-slate-600">
                Bangladesh competed in {event.metz2023.disciplines.join(" and ")} and won{" "}
                {event.metz2023.medalCount} {event.metz2023.medalType.toLowerCase()}.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl">Participant references</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {participants.map((participant) => (
                  <div key={participant.id} className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="font-heading text-lg">{participant.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{participant.discipline}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
