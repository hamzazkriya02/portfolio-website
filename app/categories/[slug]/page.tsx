import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DesignCard from "@/components/DesignCard";
import ContactCTA from "@/components/ContactCTA";
import { categories, designs, getCategoryBySlug } from "@/data/designs";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} Website Design Ideas`,
    description: category.description,
    alternates: { canonical: `/categories/${slug}` },
    openGraph: {
      title: `${category.name} Website Design Ideas`,
      description: category.description,
      url: `${siteConfig.url}/categories/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryDesigns = designs.filter((design) => design.categorySlug === slug);

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Link href="/designs" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white">
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_back
            </span>
            All designs
          </Link>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.35fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Design category</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl">
                {category.name} website design ideas
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{category.description}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="material-symbols-rounded text-cyan-300" aria-hidden>
                {category.icon}
              </span>
              <p className="mt-3 text-3xl font-bold text-white">{categoryDesigns.length}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Concepts in this category</p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categoryDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA compact />
    </>
  );
}
