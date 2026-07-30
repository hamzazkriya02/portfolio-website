const steps = [
  { number: "01", title: "Message me on WhatsApp", description: "Reach out and tell me briefly what you need." },
  { number: "02", title: "Share your requirements", description: "Send your business details, references, and goals." },
  { number: "03", title: "Get a free mockup", description: "I design a sample so you can see the direction before committing." },
  { number: "04", title: "Approve and I build it", description: "Once you're happy, I complete the full design or site." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Simple &amp; Fast
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {steps.map((step) => (
          <div key={step.number} className="border-t-2 border-[color:var(--accent)] pt-4">
            <span className="font-[family-name:var(--font-mono)] text-2xl font-medium text-[color:var(--accent)]">
              {step.number}
            </span>
            <h3 className="font-[family-name:var(--font-display)] font-medium mt-2">
              {step.title}
            </h3>
            <p className="text-[color:var(--muted)] text-sm mt-2">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}