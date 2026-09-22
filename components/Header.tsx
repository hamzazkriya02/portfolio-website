"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig, whatsappUrl } from "@/data/site";

const links = [
  { label: "Work", href: "/designs" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.06] shadow-[0_10px_35px_rgba(34,211,238,0.10)]">
            <span className="font-[family-name:var(--font-display)] text-sm font-bold tracking-tight text-white">
              CD
            </span>
          </span>
          <span className="leading-none">
            <strong className="block font-[family-name:var(--font-display)] text-sm font-bold tracking-[-0.02em] text-white sm:text-base">
              Code &amp; Design Hub
            </strong>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:block">
              Design + Development
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.socials.pinterest}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              interests
            </span>
            Pinterest
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
          >
            Start a project
            <span className="material-symbols-rounded text-[18px]" aria-hidden>
              arrow_outward
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-xl border border-white/10 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-rounded" aria-hidden>
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[74px] h-[calc(100dvh-74px)] border-t border-white/10 bg-[#07111f] px-5 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 font-[family-name:var(--font-display)] text-2xl font-semibold text-white"
              >
                {link.label}
                <span className="material-symbols-rounded text-slate-500" aria-hidden>
                  arrow_outward
                </span>
              </Link>
            ))}
          </nav>
          <div className="mx-auto mt-8 grid max-w-7xl gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 font-bold text-slate-950"
            >
              Start a project
              <span className="material-symbols-rounded text-[20px]" aria-hidden>
                arrow_outward
              </span>
            </a>
            <a
              href={siteConfig.socials.pinterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 font-semibold text-white"
            >
              View Pinterest
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
