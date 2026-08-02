import Link from "next/link";
import ImageLightbox from "@/components/ImageLightbox";
import ContactOptions from "@/components/ContactOptions";
import { notFound } from "next/navigation";
import { designs } from "@/data/designs";

const categoryData: Record<string, { name: string; description: string }> = {
  saas: { name: "SaaS", description: "Clean, conversion-focused designs for SaaS products and dashboards." },
  ai: { name: "AI", description: "Modern interfaces for AI tools, chat platforms, and automation products." },
  "interior-design": { name: "Interior Design", description: "Visual-first portfolio sites for interior designers and studios." },
  architecture: { name: "Architecture", description: "Bold, minimal sites that let architectural work speak for itself." },
  healthcare: { name: "Healthcare", description: "Accessible, trustworthy designs for clinics and healthcare providers." },
  finance: { name: "Finance", description: "Professional, secure-feeling designs for fintech and financial services." },
  "real-estate": { name: "Real Estate", description: "Listing-focused designs that make browsing properties effortless." },
  education: { name: "Education", description: "Engaging designs for online courses and education platforms." },
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryData[slug];

  if (!category) {
    notFound();
  }

  const categoryDesigns = designs.filter((d) => d.slug === slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <Link href="/" className="text-sm text-[color:var(--accent)]">← Back to Home</Link>

      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[color:var(--accent)] block mt-6">
        Category
      </span>

      <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold mt-2">
        {category.name} Designs
      </h1>

      <p className="text-[color:var(--muted)] text-lg mt-3 max-w-xl">
        {category.description}
      </p>

      {categoryDesigns.length === 0 ? (
        <div className="mt-16 text-[color:var(--muted)] text-sm">
          More {category.name} designs coming soon — check back or message me for examples.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {categoryDesigns.map((design) => (
            <div key={design.id} className="border border-black/10 rounded-xl hover:shadow-lg transition overflow-visible">
              <div className="rounded-t-xl overflow-hidden">
                <ImageLightbox src={design.src} alt={design.title} />
              </div>
              <div className="p-4">
                <h3 className="font-[family-name:var(--font-display)] font-medium">
                  {design.title}
                </h3>
                <ContactOptions title={design.title} />
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}