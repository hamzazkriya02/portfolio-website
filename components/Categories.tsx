const categories = [
  { name: "SaaS", slug: "saas" },
  { name: "AI", slug: "ai" },
  { name: "Interior Design", slug: "interior-design" },
  { name: "Architecture", slug: "architecture" },
  { name: "Healthcare", slug: "healthcare" },
  { name: "Finance", slug: "finance" },
  { name: "Real Estate", slug: "real-estate" },
  { name: "Education", slug: "education" },
];

export default function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Browse by Industry
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Design Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {categories.map((cat) => (
          <a key={cat.slug} href={`/categories/${cat.slug}`} className="group border border-black/10 rounded-xl p-6 hover:border-[color:var(--accent)] hover:bg-[color:var(--surface)] transition">
            <span className="font-[family-name:var(--font-display)] text-lg font-medium">
              {cat.name}
            </span>
            <div className="mt-3 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition">
              View designs →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}