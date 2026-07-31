const reasons = [
  "200+ Designs Created",
  "Fast Delivery",
  "Responsive Design",
  "Modern UI/UX",
  "Direct Communication",
  "Unlimited Revisions",
];

export default function WhyChooseMe() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 bg-[color:var(--surface)]">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        The Difference
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Why Choose Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {reasons.map((reason) => (
          <div key={reason} className="flex items-center gap-3 bg-[color:var(--bg)] border border-black/10 rounded-xl p-5">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[color:var(--accent)] text-white text-xs flex items-center justify-center">
              ✓
            </span>
            <span className="font-medium">{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
}