import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Web Design Insights",
  description: "Practical notes on web design, performance, Pinterest traffic, and converting visitors into enquiries.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Insights</p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-white sm:text-6xl">
          Practical notes for better websites and better traffic.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Useful, original content about design decisions, performance, portfolio marketing, and turning visual discovery into real enquiries.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {insights.map((insight) => (
            <Link
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group rounded-[26px] border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-white/16"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">{insight.category}</span>
                <span className="text-xs text-slate-600">{insight.readTime}</span>
              </div>
              <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white">
                {insight.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">{insight.excerpt}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                Read article
                <span className="material-symbols-rounded text-[18px]" aria-hidden>
                  arrow_outward
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
