const caseStudies = [
  {
    clientType: "SaaS Startup",
    problem: "Generic template site wasn't converting trial signups.",
    goal: "A clean, trust-building landing page focused on one clear action.",
    palette: ["#4C4CFF", "#8B8BFF", "#14151A", "#FAFAFA"],
    tools: "Figma, Webflow",
  },
  {
    clientType: "Real Estate Agency",
    problem: "Listings page felt cluttered and hard to browse on mobile.",
    goal: "A visual-first layout that lets property photos lead the design.",
    palette: ["#14151A", "#3A3B44", "#D97757", "#FAFAFA"],
    tools: "Figma, Next.js",
  },
  {
    clientType: "Healthcare Clinic",
    problem: "No online booking, patients were calling to check availability.",
    goal: "A calm, accessible design with booking front and center.",
    palette: ["#25D366", "#6FE39A", "#14151A", "#FAFAFA"],
    tools: "Figma, React",
  },
];

const testimonials = [
  {
    quote: "Explained every design choice clearly and delivered ahead of schedule. My signup rate improved within the first week.",
    name: "Client — SaaS Startup",
  },
  {
    quote: "I sent rough ideas and got back a design that felt exactly like our brand. Communication was easy the whole way through.",
    name: "Client — Real Estate Agency",
  },
  {
    quote: "Patient, responsive, and genuinely cared about getting the details right, not just shipping something fast.",
    name: "Client — Healthcare Clinic",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Sample Projects
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Case Studies &amp; Client Feedback
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {caseStudies.map((cs) => (
          <div key={cs.clientType} className="border border-black/10 rounded-xl p-6">
            <span className="font-[family-name:var(--font-mono)] text-xs text-[color:var(--accent)] uppercase">
              {cs.clientType}
            </span>
            <p className="text-sm mt-3">
              <span className="font-medium">Problem: </span>
              <span className="text-[color:var(--muted)]">{cs.problem}</span>
            </p>
            <p className="text-sm mt-2">
              <span className="font-medium">Goal: </span>
              <span className="text-[color:var(--muted)]">{cs.goal}</span>
            </p>
            <div className="flex gap-2 mt-4">
              {cs.palette.map((color) => (
                <span key={color} className="w-6 h-6 rounded-full border border-black/10" style={{ backgroundColor: color }} />
              ))}
            </div>
            <p className="text-xs text-[color:var(--muted)] mt-3">Tools: {cs.tools}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[color:var(--surface)] rounded-xl p-6">
            <p className="text-sm italic">"{t.quote}"</p>
            <p className="text-xs text-[color:var(--muted)] mt-4">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}