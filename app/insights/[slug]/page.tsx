import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ContactCTA from "@/components/ContactCTA";
import { getInsightBySlug, insights } from "@/data/insights";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      type: "article",
      title: insight.title,
      description: insight.excerpt,
      url: `${siteConfig.url}/insights/${insight.slug}`,
      publishedTime: insight.published,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.published,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/insights/${insight.slug}`,
  };

  return (
    <>
      <article className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 transition hover:text-white">
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_back
            </span>
            All insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            <span className="rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-3 py-1.5 text-violet-200">
              {insight.category}
            </span>
            <span className="text-slate-600">{insight.readTime}</span>
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
            {insight.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400">{insight.excerpt}</p>

          <div className="mt-10 border-y border-white/10 py-5 text-sm text-slate-500">
            Published {new Date(`${insight.published}T00:00:00`).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}
          </div>

          <div className="prose-premium mt-10">
            {insight.sections.map((section, index) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {index === 1 ? <AdSlot /> : null}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-[24px] border border-cyan-300/15 bg-cyan-300/[0.055] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Use this practically</p>
            <p className="mt-3 text-base leading-7 text-slate-300">
              If you are planning a new website, use these principles as a checklist rather than copying a layout blindly. The right structure should match the business, audience, and conversion goal.
            </p>
          </div>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </article>
      <ContactCTA compact />
    </>
  );
}
