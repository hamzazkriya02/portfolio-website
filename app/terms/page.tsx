import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for Code & Design Hub.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="prose-premium mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] !text-cyan-300">Legal</p>
        <h1 className="!mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
          Terms of Use
        </h1>
        <p>
          This website provides portfolio examples, general service information, and educational content. Browsing the site does not create a client contract.
        </p>

        <h2>Portfolio concepts</h2>
        <p>
          Images labeled as website concepts are presented as design work or visual direction. A custom client project may use a similar level of polish, but final scope, content, functionality, and deliverables are agreed separately.
        </p>

        <h2>Pricing guidance</h2>
        <p>
          Any “starting from” pricing shown on the website is general guidance only. Final pricing depends on scope, number of pages, features, revisions, integrations, timeline, and development requirements.
        </p>

        <h2>Project agreements</h2>
        <p>
          Delivery terms, payment milestones, revision limits, ownership, hosting, maintenance, and any third-party costs should be confirmed in writing before a paid project begins.
        </p>

        <h2>Content and availability</h2>
        <p>
          We may update, replace, or remove portfolio items, articles, prices, and links at any time. We try to keep the site accurate but do not guarantee uninterrupted availability.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a className="text-cyan-300" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </article>
  );
}
