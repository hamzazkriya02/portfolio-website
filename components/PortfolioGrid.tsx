"use client";

import { useState } from "react";

const allCategories = ["All", "SaaS", "AI", "Interior Design", "Architecture", "Healthcare", "Finance", "Real Estate", "Education"];

const designs = [
  { id: 1, title: "SaaS Analytics Dashboard", category: "SaaS", from: "#4C4CFF", to: "#8B8BFF" },
  { id: 2, title: "AI Chat Platform", category: "AI", from: "#25D366", to: "#6FE39A" },
  { id: 3, title: "Modern Property Listing", category: "Real Estate", from: "#14151A", to: "#3A3B44" },
  { id: 4, title: "Luxury Interior Portfolio", category: "Interior Design", from: "#D97757", to: "#F0A87C" },
  { id: 5, title: "Clinic Booking System", category: "Healthcare", from: "#4C4CFF", to: "#25D366" },
  { id: 6, title: "Architecture Studio Site", category: "Architecture", from: "#14151A", to: "#4C4CFF" },
  { id: 7, title: "Fintech Landing Page", category: "Finance", from: "#25D366", to: "#4C4CFF" },
  { id: 8, title: "Online Course Platform", category: "Education", from: "#8B8BFF", to: "#4C4CFF" },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? designs : designs.filter((d) => d.category === activeFilter);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)]">
        Selected Work
      </span>

      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mt-3">
        Featured Designs
      </h2>

      <div className="flex flex-wrap gap-2 mt-8">
        {allCategories.map((cat) => (
          <button key={cat} onClick={() => setActiveFilter(cat)} className={`text-sm px-4 py-2 rounded-full border transition ${activeFilter === cat ? "bg-[color:var(--ink)] text-white border-[color:var(--ink)]" : "border-black/15 text-[color:var(--muted)] hover:border-[color:var(--accent)]"}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {filtered.map((design) => (
          <div key={design.id} className="group border border-black/10 rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="h-48" style={{ background: `linear-gradient(135deg, ${design.from}, ${design.to})` }} />
            <div className="p-4">
              <span className="font-[family-name:var(--font-mono)] text-xs text-[color:var(--accent)] uppercase">
                {design.category}
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-medium mt-1">
                {design.title}
              </h3>
              <button className="mt-4 w-full text-sm bg-[color:var(--surface)] group-hover:bg-[color:var(--accent)] group-hover:text-white py-2 rounded-lg transition">
                Get This Design
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}