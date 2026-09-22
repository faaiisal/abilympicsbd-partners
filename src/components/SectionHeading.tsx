type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${dark ? "text-emerald-300" : "text-brand-green"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-brand-slate"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
