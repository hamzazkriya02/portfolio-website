"use client";

import { useState } from "react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Categories", href: "#categories" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--bg)]/90 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-display)] text-lg font-bold">
          Studio<span className="text-[color:var(--accent)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] transition">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-[color:var(--whatsapp)] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition">
          Chat on WhatsApp
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[color:var(--ink)]" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-sm text-[color:var(--muted)]">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="bg-[color:var(--whatsapp)] text-white text-sm font-medium px-4 py-2 rounded-lg text-center">
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}