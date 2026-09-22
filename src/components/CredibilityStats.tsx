import { event, heroStats } from "@/content";

const delegationStat = {
  id: "delegation",
  value: String(event.metz2023.delegationSize),
  label: "Delegation members",
  sublabel: "Metz 2023",
};

export function CredibilityStats() {
  const stats = [
    heroStats.find((stat) => stat.id === "contestants"),
    delegationStat,
    heroStats.find((stat) => stat.id === "medals"),
    heroStats.find((stat) => stat.id === "skills"),
  ].filter((stat): stat is NonNullable<typeof stat> => Boolean(stat));

  return (
    <section aria-labelledby="credibility-stats-title" className="bg-brand-green text-white">
      <div className="container-site py-10">
        <h2 id="credibility-stats-title" className="sr-only">
          Bangladesh delegation credibility statistics
        </h2>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="border-l border-white/30 pl-4">
              <p className="font-heading text-3xl font-extrabold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
              {"sublabel" in stat && stat.sublabel ? (
                <p className="mt-1 text-xs text-emerald-100">{stat.sublabel}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
