import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/data/site";

const navigation = [
  { label: "Design Library", href: "/designs" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050c16]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06]">
                <span className="font-[family-name:var(--font-display)] text-sm font-bold text-white">CD</span>
              </span>
              <span>
                <strong className="block font-[family-name:var(--font-display)] text-base text-white">
                  {siteConfig.name}
                </strong>
                <span className="text-xs text-slate-500">Premium web design &amp; development</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Thoughtful website design, fast frontends, and practical full-stack builds for businesses that want a stronger digital presence.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
            >
              Discuss your project
              <span className="material-symbols-rounded text-[18px]" aria-hidden>
                arrow_outward
              </span>
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Explore</p>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={siteConfig.socials.pinterest} target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-white">
                  Pinterest
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.fiverr} target="_blank" rel="noreferrer" className="text-sm text-slate-300 transition hover:text-white">
                  Fiverr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Contact</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="break-all text-sm text-slate-300 transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Designed for speed, clarity, and real enquiries.</p>
        </div>
      </div>
    </footer>
  );
}
