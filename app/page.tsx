import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import SectionHeading from "@/components/SectionHeading";
import { designs, categories } from "@/data/designs";
import { insights } from "@/data/insights";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-y border-white/10 bg-[#081321]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-5 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
          {[
            { value: `${designs.length}+`, label: "Design concepts" },
            { value: `${categories.length}`, label: "Focused categories" },
            { value: "100%", label: "Responsive approach" },
            { value: "Direct", label: "Client communication" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-6 text-center sm:py-8">
              <strong className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                {item.value}
              </strong>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <FeaturedDesigns />
      <Services />
      <Process />

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Why this studio"
                title="Visual quality without the fake agency theatre."
                body="You see the actual work, the actual process, and direct contact options. No invented client counts, no decorative complexity that makes the site slower."
              />
              <div className="mt-7 grid gap-3">
                {[
                  ["verified", "Real portfolio work and clear project categories"],
                  ["speed", "Lightweight motion and performance-conscious components"],
                  ["devices", "Mobile-first responsive layouts"],
                  ["conversion_path", "Clear paths from Pinterest inspiration to project enquiry"],
                ].map(([icon, text]) => (
                  <div key={text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <span className="material-symbols-rounded mt-0.5 text-[20px] text-cyan-300" aria-hidden>
                      {icon}
                    </span>
                    <p className="text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#101c32] via-[#0a1627] to-[#08121f] p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">Pinterest → website → enquiry</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
                Every design can have its own shareable landing page.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-400">
                That means a Pinterest Pin does not have to send visitors to a generic homepage. It can open the exact design they clicked, with context, related work, and a direct “request a website like this” action.
              </p>
              <Link
                href="/insights/turn-pinterest-design-traffic-into-clients"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-violet-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-300"
              >
                See the traffic workflow
                <span className="material-symbols-rounded text-[18px]" aria-hidden>
                  arrow_outward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.018] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Useful notes on web design, speed, and client conversion."
              body="Original articles that make the portfolio more useful to visitors and give search or Pinterest traffic more reasons to stay."
            />
            <Link href="/insights" className="inline-flex w-fit items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200">
              All insights
              <span className="material-symbols-rounded text-[18px]" aria-hidden>
                arrow_outward
              </span>
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group rounded-[24px] border border-white/10 bg-[#0a1626] p-6 transition hover:-translate-y-1 hover:border-white/16"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">{insight.category}</span>
                  <span className="text-xs text-slate-600">{insight.readTime}</span>
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.025em] text-white">
                  {insight.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{insight.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-200 transition group-hover:text-cyan-200">
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

      <ContactCTA />
    </>
  );
}
