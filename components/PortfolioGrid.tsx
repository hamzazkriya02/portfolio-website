"use client";

import { useState } from "react";
import Image from "next/image";

const allCategories = ["All", "SaaS", "AI", "Interior Design", "Architecture", "Healthcare", "Finance", "Real Estate", "Education"];

const designs = [
  { id: 1, title: "SaaS Design 1", category: "SaaS", src: "/designs/saas/SaaS1.png" },
  { id: 2, title: "SaaS Design 2", category: "SaaS", src: "/designs/saas/SaaS2.png" },
  { id: 3, title: "SaaS Design 3", category: "SaaS", src: "/designs/saas/SaaS3.png" },
  { id: 4, title: "SaaS Design 4", category: "SaaS", src: "/designs/saas/SaaS4.png" },
  { id: 5, title: "SaaS Design 5", category: "SaaS", src: "/designs/saas/SaaS5.png" },

  { id: 6, title: "Real Estate Design 1", category: "Real Estate", src: "/designs/real-estate/real1.png" },
  { id: 7, title: "Real Estate Design 2", category: "Real Estate", src: "/designs/real-estate/real2.jpeg" },
  { id: 8, title: "Real Estate Design 3", category: "Real Estate", src: "/designs/real-estate/real3.png" },
  { id: 9, title: "Real Estate Design 4", category: "Real Estate", src: "/designs/real-estate/real4.png" },
  { id: 10, title: "Real Estate Design 5", category: "Real Estate", src: "/designs/real-estate/real5.png" },
  { id: 11, title: "Real Estate Design 6", category: "Real Estate", src: "/designs/real-estate/real6.png" },

  { id: 12, title: "Healthcare Design 1", category: "Healthcare", src: "/designs/healthcare/hc1.png" },
  { id: 13, title: "Healthcare Design 2", category: "Healthcare", src: "/designs/healthcare/hc2.png" },
  { id: 14, title: "Healthcare Design 3", category: "Healthcare", src: "/designs/healthcare/hc3.png" },
  { id: 15, title: "Healthcare Design 4", category: "Healthcare", src: "/designs/healthcare/hc4.png" },
  { id: 16, title: "Healthcare Design 5", category: "Healthcare", src: "/designs/healthcare/hc5.png" },

  { id: 17, title: "Interior Design 1", category: "Interior Design", src: "/designs/interior-design/id1.png" },
  { id: 18, title: "Interior Design 2", category: "Interior Design", src: "/designs/interior-design/id2.png" },
  { id: 19, title: "Interior Design 3", category: "Interior Design", src: "/designs/interior-design/id3.png" },
  { id: 20, title: "Interior Design 4", category: "Interior Design", src: "/designs/interior-design/id4.png" },
  { id: 21, title: "Interior Design 5", category: "Interior Design", src: "/designs/interior-design/id5.png" },
  { id: 22, title: "Interior Design 6", category: "Interior Design", src: "/designs/interior-design/id6.png" },

  { id: 23, title: "Education Design 1", category: "Education", src: "/designs/education/edu1.png" },
  { id: 24, title: "Education Design 2", category: "Education", src: "/designs/education/edu2.png" },
  { id: 25, title: "Education Design 3", category: "Education", src: "/designs/education/edu3.png" },
  { id: 26, title: "Education Design 4", category: "Education", src: "/designs/education/edu4.png" },
  { id: 27, title: "Education Design 5", category: "Education", src: "/designs/education/edu5.png" },
  { id: 28, title: "Education Design 6", category: "Education", src: "/designs/education/edu6.jpeg" },

  // AI, Architecture, aur Finance abhi "coming soon" show kar rahe hain kyunke images nahi hain.
  // Jab images public/designs/ai, public/designs/architecture, public/designs/finance mein daal dein,
  // to neeche wale comments hata dein (bas /* aur */ delete karein) aur file names apni actual images ke naam se match karein.

  /*
  { id: 29, title: "AI Design 1", category: "AI", src: "/designs/ai/ai1.png" },
  { id: 30, title: "AI Design 2", category: "AI", src: "/designs/ai/ai2.png" },
  { id: 31, title: "AI Design 3", category: "AI", src: "/designs/ai/ai3.png" },
  { id: 32, title: "AI Design 4", category: "AI", src: "/designs/ai/ai4.png" },
  { id: 33, title: "AI Design 5", category: "AI", src: "/designs/ai/ai5.png" },
  */

  /*
  { id: 34, title: "Architecture Design 1", category: "Architecture", src: "/designs/architecture/arc1.png" },
  { id: 35, title: "Architecture Design 2", category: "Architecture", src: "/designs/architecture/arc2.png" },
  { id: 36, title: "Architecture Design 3", category: "Architecture", src: "/designs/architecture/arc3.png" },
  { id: 37, title: "Architecture Design 4", category: "Architecture", src: "/designs/architecture/arc4.png" },
  { id: 38, title: "Architecture Design 5", category: "Architecture", src: "/designs/architecture/arc5.png" },
  */

  /*
  { id: 39, title: "Finance Design 1", category: "Finance", src: "/designs/finance/fin1.png" },
  { id: 40, title: "Finance Design 2", category: "Finance", src: "/designs/finance/fin2.png" },
  { id: 41, title: "Finance Design 3", category: "Finance", src: "/designs/finance/fin3.png" },
  { id: 42, title: "Finance Design 4", category: "Finance", src: "/designs/finance/fin4.png" },
  { id: 43, title: "Finance Design 5", category: "Finance", src: "/designs/finance/fin5.png" },
  */
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

      {filtered.length === 0 ? (
        <p className="text-[color:var(--muted)] text-sm mt-10">
          More designs for this category coming soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {filtered.map((design) => (
            <div key={design.id} className="group border border-black/10 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 bg-[color:var(--surface)]">
            <Image src={design.src} alt={design.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={75} className="object-cover" />             
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
      )}
    </section>
  );
}