const tiers = [
  {
    name: "Basic",
    price: "$120",
    description: "Best for a single landing page.",
    features: ["1 Page Design", "Mobile Responsive", "2 Revisions", "3-Day Delivery"],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "$250",
    description: "Best for small business websites.",
    features: ["Up to 5 Pages", "Mobile Responsive", "Unlimited Revisions", "Figma File Included", "5-Day Delivery"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$450",
    description: "Best for full websites with development.",
    features: ["Up to 8 Pages", "Frontend Development", "Unlimited Revisions", "Figma File Included", "Priority Support"],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 bg-[color:var(--surface)]">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Simple Pricing
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Pricing Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {tiers.map((tier) => (
          <div key={tier.name} className={`rounded-xl p-6 border ${tier.highlighted ? "border-[color:var(--accent)] bg-[color:var(--bg)] shadow-lg scale-105" : "border-black/10 bg-[color:var(--bg)]"}`}>
            {tier.highlighted && (
              <span className="font-[family-name:var(--font-mono)] text-xs text-white bg-[color:var(--accent)] px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mt-3">
              {tier.name}
            </h3>
            <p className="text-[color:var(--muted)] text-sm mt-1">{tier.description}</p>
            <p className="font-[family-name:var(--font-display)] text-3xl font-bold mt-4">
              {tier.price}
            </p>
            <ul className="mt-5 space-y-2">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <span className="text-[color:var(--accent)]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`mt-6 block text-center text-sm font-medium py-2 rounded-lg transition ${tier.highlighted ? "bg-[color:var(--accent)] text-white hover:opacity-90" : "border border-black/15 hover:bg-black/5"}`}>
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}