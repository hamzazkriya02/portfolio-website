import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Brief",
    text: "We define your audience, pages, references, goals, and the action you want visitors to take.",
  },
  {
    number: "02",
    title: "Direction",
    text: "I create the visual direction and page structure before adding detail, motion, and responsive behavior.",
  },
  {
    number: "03",
    title: "Build",
    text: "The approved direction becomes a fast, responsive website with clean components and optimized assets.",
  },
  {
    number: "04",
    title: "Launch",
    text: "We review mobile and desktop, connect analytics or required services, and ship the production version.",
  },
];

export default function Process() {
  return (
    <section className="border-y border-white/10 bg-white/[0.018] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="Simple enough to move fast. Structured enough to stay professional."
          body="A clear four-step workflow keeps the project focused without adding unnecessary meetings or complexity."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-[26px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="bg-[#091524] p-6 sm:p-7">
              <span className="font-[family-name:var(--font-display)] text-sm font-bold text-cyan-300">{step.number}</span>
              <h3 className="mt-10 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
