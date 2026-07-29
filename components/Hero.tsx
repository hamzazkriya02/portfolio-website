const mockups = [
  { label: "SaaS Dashboard", from: "#4C4CFF", to: "#8B8BFF", rotate: "-rotate-3" },
  { label: "Real Estate", from: "#14151A", to: "#3A3B44", rotate: "rotate-2" },
  { label: "AI Platform", from: "#25D366", to: "#6FE39A", rotate: "-rotate-1" },
];

export default function Hero() {
  const whatsappNumber = "923094552361"; // apna number yahan daalein

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
          UI/UX &amp; Web Design Studio
        </span>

        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mt-4">
          Custom Website Designs That Convert
        </h1>

        <p className="text-[color:var(--muted)] text-lg mt-4">
          Helping startups and businesses get premium landing pages, fast.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" className="bg-[color:var(--whatsapp)] text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition">
            Chat on WhatsApp
          </a>
          <a href="#portfolio" className="border border-black/15 font-medium px-6 py-3 rounded-lg hover:bg-black/5 transition">
            View My Work
          </a>
        </div>
      </div>

      <div className="relative h-72 md:h-96">
        {mockups.map((m, i) => (
          <div
            key={m.label}
            className={`absolute w-56 md:w-64 h-40 md:h-48 rounded-xl shadow-lg ${m.rotate}`}
            style={{
              background: `linear-gradient(135deg, ${m.from}, ${m.to})`,
              top: `${i * 15}%`,
              left: `${i * 12}%`,
              zIndex: i,
            }}
          >
            <span className="absolute -top-3 left-3 bg-white text-[color:var(--ink)] text-[11px] font-[family-name:var(--font-mono)] px-2 py-1 rounded-full shadow">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}