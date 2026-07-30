const services = [
  {
    title: "Landing Page Design",
    description: "High-converting single page designed to turn visitors into leads or customers.",
    price: "Starting from $120",
  },
  {
    title: "Website UI/UX",
    description: "Complete multi-page website design with clear navigation and user flow.",
    price: "Starting from $220",
  },
  {
    title: "Figma Design",
    description: "Editable, developer-ready Figma files with components and design system.",
    price: "Starting from $90",
  },
  {
    title: "Frontend Development",
    description: "Your design built into a fast, responsive, live website.",
    price: "Starting from $180",
  },
  {
    title: "Full Stack Development",
    description: "Complete website with backend, database, and admin functionality included.",
    price: "Starting from $350",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-24 bg-[color:var(--surface)]">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        What I Offer
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <div key={service.title} className="bg-[color:var(--bg)] border border-black/10 rounded-xl p-6">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-medium">
              {service.title}
            </h3>
            <p className="text-[color:var(--muted)] text-sm mt-2">
              {service.description}
            </p>
            <span className="font-[family-name:var(--font-mono)] text-sm text-[color:var(--accent)] mt-4 inline-block">
              {service.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}