"use client";

import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import ContactOptions from "@/components/ContactOptions";
import { designs } from "@/data/designs";

const allCategories = ["All", "SaaS", "AI", "Interior Design", "Architecture", "Healthcare", "Finance", "Real Estate", "Education"];

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

      {filtered.length === 0 ? (
        <p className="text-[color:var(--muted)] text-sm mt-10">
          More designs for this category coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {filtered.map((design) => (
         <div key={design.id} className="group border border-black/10 rounded-xl hover:shadow-lg transition overflow-visible">           
           <div className="rounded-t-xl overflow-hidden">
                <ImageLightbox src={design.src} alt={design.title} />
              </div>
              <div className="p-4">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[color:var(--accent)] uppercase">
                  {design.category}
                </span>
                <h3 className="font-[family-name:var(--font-display)] font-medium mt-1">
                  {design.title}
                </h3>
                <ContactOptions title={design.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}