import type { Metadata } from "next";
import DesignCard from "@/components/DesignCard";
import { categories, designs } from "@/data/designs";

export const metadata: Metadata = {
  title: "Website Design Library",
  description: "Browse website design concepts for SaaS, real estate, healthcare, interior design, and education.",
  alternates: { canonical: "/designs" },
};

export default function DesignsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Portfolio library</p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl">
          Website concepts organized for easy discovery.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Open any project for a dedicated shareable page. These URLs are ideal destinations for matching Pinterest Pins.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/25 hover:text-white"
            >
              <span className="material-symbols-rounded text-[18px] text-cyan-300" aria-hidden>
                {category.icon}
              </span>
              {category.name}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-20">
          {categories.map((category) => {
            const categoryDesigns = designs.filter((design) => design.categorySlug === category.slug);
            return (
              <section key={category.slug} id={category.slug} className="scroll-mt-28">
                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.035em] text-white">
                      {category.name}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{category.description}</p>
                  </div>
                  <a href={`/categories/${category.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                    Category page
                    <span className="material-symbols-rounded text-[18px]" aria-hidden>
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {categoryDesigns.map((design) => (
                    <DesignCard key={design.id} design={design} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
