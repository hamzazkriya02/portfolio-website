import type { Metadata } from "next";
import Link from "next/link";
import { categories, designs } from "@/data/designs";
import { siteConfig, whatsappUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Code & Design Hub and the approach behind its website design and development work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_.75fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">About the studio</p>
            <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.05em] text-white sm:text-6xl">
              Design thinking and development in one practical workflow.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Code &amp; Design Hub is a portfolio and independent web studio focused on premium website interfaces, responsive frontend work, and full-stack builds.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400">
              The work here is organized around real visual categories rather than generic agency claims. Visitors can open a design, see the full concept, and request a custom build inspired by that direction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
              >
                Start a project
                <span className="material-symbols-rounded text-[18px]" aria-hidden>
                  arrow_outward
                </span>
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/10 px-5 text-sm font-bold text-white transition hover:border-white/20"
              >
                View GitHub
              </a>
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Portfolio snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#07111f] p-5">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">{designs.length}+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">Design concepts</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#07111f] p-5">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">{categories.length}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">Categories</p>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              {[
                "Responsive design and frontend development",
                "Full-stack website workflows",
                "Pinterest-friendly project landing pages",
                "SEO metadata and performance-conscious builds",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="material-symbols-rounded text-[18px] text-emerald-300" aria-hidden>
                    check_circle
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {[
            {
              icon: "visibility",
              title: "Clarity first",
              text: "A visitor should understand the offer, the work, and the next action without having to decode the interface.",
            },
            {
              icon: "speed",
              title: "Performance matters",
              text: "Premium visuals should not require a heavy page. Images, scripts, and motion stay intentionally controlled.",
            },
            {
              icon: "handshake",
              title: "Direct communication",
              text: "Projects move through simple briefs, clear decisions, and direct contact instead of unnecessary layers.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
              <span className="material-symbols-rounded text-cyan-300" aria-hidden>
                {item.icon}
              </span>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/designs" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
            Explore the portfolio
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_outward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
