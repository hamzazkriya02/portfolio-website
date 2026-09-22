import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ContactCTA from "@/components/ContactCTA";
import DesignCard from "@/components/DesignCard";
import { designs, getDesignBySlug } from "@/data/designs";
import { siteConfig, whatsappUrl } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return designs.map((design) => ({ slug: design.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) return {};

  return {
    title: design.title,
    description: design.summary,
    alternates: { canonical: `/designs/${design.slug}` },
    openGraph: {
      title: design.title,
      description: design.summary,
      url: `${siteConfig.url}/designs/${design.slug}`,
      images: [{ url: design.src, alt: design.title }],
    },
  };
}

export default async function DesignPage({ params }: Props) {
  const { slug } = await params;
  const design = getDesignBySlug(slug);
  if (!design) notFound();

  const related = designs
    .filter((item) => item.categorySlug === design.categorySlug && item.id !== design.id)
    .slice(0, 3);

  const message = `Hi, I like "${design.title}" on Code & Design Hub. I want to discuss a custom website inspired by this direction.`;

  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link href="/designs" className="text-slate-500 transition hover:text-white">Designs</Link>
            <span className="text-slate-700">/</span>
            <Link href={`/categories/${design.categorySlug}`} className="text-slate-500 transition hover:text-white">
              {design.category}
            </Link>
          </div>

          <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_.34fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{design.category} concept</p>
              <h1 className="mt-4 max-w-5xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
                {design.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">{design.summary}</p>
            </div>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Request a site like this
              <span className="material-symbols-rounded text-[19px]" aria-hidden>
                arrow_outward
              </span>
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#0a1626] p-2 sm:p-3">
            <div className="relative min-h-[360px] overflow-hidden rounded-[22px] bg-[#050b13] sm:min-h-[520px] lg:min-h-[700px]">
              <Image
                src={design.src}
                alt={design.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain object-top"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-7 lg:grid-cols-[1fr_.42fr]">
            <div className="prose-premium">
              <h2>About this design direction</h2>
              <p>
                This page is a visual concept from the Code &amp; Design Hub portfolio. A client project can use the same overall level of polish while changing the brand, copy, sections, functionality, and visual system for the actual business.
              </p>
              <p>
                The goal is not to copy a template blindly. The useful part is the direction: spacing, hierarchy, image treatment, section rhythm, and the way important actions are presented.
              </p>

              <h2>What a custom build can include</h2>
              <p>
                Depending on the project, the final website can include responsive pages, contact or WhatsApp enquiry flows, CMS or database features, dashboards, analytics, SEO metadata, and deployment on a production domain.
              </p>
            </div>

            <aside className="h-fit rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-slate-500">Project details</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <dt className="text-slate-500">Category</dt>
                  <dd className="font-semibold text-white">{design.category}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <dt className="text-slate-500">Type</dt>
                  <dd className="font-semibold text-white">Website concept</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-slate-500">Custom build</dt>
                  <dd className="font-semibold text-emerald-300">Available</dd>
                </div>
              </dl>
            </aside>
          </div>

          <div className="mx-auto max-w-5xl">
            <AdSlot />
          </div>

          {related.length ? (
            <section className="mt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Related work</p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.035em] text-white">
                    More {design.category} concepts
                  </h2>
                </div>
                <Link href={`/categories/${design.categorySlug}`} className="hidden text-sm font-bold text-cyan-300 sm:inline-flex">
                  View category
                </Link>
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <DesignCard key={item.id} design={item} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
      <ContactCTA compact />
    </>
  );
}
