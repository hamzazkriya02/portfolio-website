import Link from "next/link";
import ProjectBriefForm from "@/components/ProjectBriefForm";
import { siteConfig } from "@/data/site";

export default function ContactCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section id="contact" className={compact ? "py-16" : "py-20 sm:py-24"}>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:px-8">
        <div className="pt-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Start a project</p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
            Have a design in mind? Turn it into a real website.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Send a short brief and I&apos;ll reply with the next steps. You can also email directly if that works better for you.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <span className="material-symbols-rounded text-[18px]" aria-hidden>
                mail
              </span>
              {siteConfig.email}
            </a>
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:text-white"
            >
              <span className="material-symbols-rounded text-[18px]" aria-hidden>
                grid_view
              </span>
              Browse work
            </Link>
          </div>
        </div>

        <ProjectBriefForm />
      </div>
    </section>
  );
}
