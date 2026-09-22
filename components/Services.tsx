import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: "web",
    title: "Landing Pages",
    description: "Focused, responsive pages designed around one clear business goal and one strong conversion path.",
    meta: "From $120",
  },
  {
    icon: "draw",
    title: "Website UI/UX",
    description: "Complete multi-page website design with a consistent visual system, hierarchy, and user flow.",
    meta: "From $220",
  },
  {
    icon: "developer_mode",
    title: "Frontend Development",
    description: "Fast, responsive implementation with clean components, optimized imagery, and polished interactions.",
    meta: "From $180",
  },
  {
    icon: "database",
    title: "Full-Stack Builds",
    description: "Complete websites with frontend, backend, database, dashboards, and practical business workflows.",
    meta: "From $350",
  },
  {
    icon: "speed",
    title: "Performance Refresh",
    description: "A design and performance cleanup for websites that feel dated, cluttered, or unnecessarily slow.",
    meta: "Custom quote",
  },
  {
    icon: "palette",
    title: "Figma Design",
    description: "Developer-ready Figma design systems, responsive screens, reusable components, and clear handoff.",
    meta: "From $90",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="From first concept to a working website."
          body="Choose design-only, development-only, or an end-to-end build. Every project stays focused on clarity, speed, and a professional final result."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.025] p-6"
            >
              <div className="grid size-11 place-items-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200">
                <span className="material-symbols-rounded" aria-hidden>
                  {service.icon}
                </span>
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.025em] text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">{service.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
