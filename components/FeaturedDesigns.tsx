import Link from "next/link";
import { categories, featuredDesigns } from "@/data/designs";
import DesignCard from "@/components/DesignCard";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturedDesigns() {
  return (
    <section className="border-y border-white/10 bg-white/[0.018] py-20 sm:py-24" id="work">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="A design library built for real business categories."
            body="Browse premium website concepts across SaaS, real estate, healthcare, interior design, and education."
          />
          <Link
            href="/designs"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            View all designs
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_outward
            </span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/25 hover:text-white"
            >
              <span className="material-symbols-rounded text-[18px] text-cyan-300/80" aria-hidden>
                {category.icon}
              </span>
              {category.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredDesigns.slice(0, 9).map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </div>
    </section>
  );
}
