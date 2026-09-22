type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, body, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{body}</p> : null}
    </div>
  );
}
