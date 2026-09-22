import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Code & Design Hub.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="py-16 sm:py-20">
      <div className="prose-premium mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] !text-cyan-300">Legal</p>
        <h1 className="!mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p>
          This website is operated by {siteConfig.name}. The site is primarily a portfolio and contact destination for website design and development services.
        </p>

        <h2>Information you choose to share</h2>
        <p>
          The project brief form on this website opens WhatsApp with the information you entered. The website itself does not store that form submission in a database. If you contact us by email, WhatsApp, Fiverr, or another external platform, that platform&apos;s own privacy terms also apply.
        </p>

        <h2>Analytics</h2>
        <p>
          Google Analytics may be enabled to understand page visits, traffic sources, device categories, and general site usage. Analytics is only loaded when a valid measurement ID is configured for this deployment.
        </p>

        <h2>Advertising</h2>
        <p>
          Google AdSense may be enabled on selected content pages. When advertising is active, Google and its partners may use cookies or similar technologies in accordance with their own policies and applicable consent requirements. Advertising code is not loaded unless the site owner configures a valid AdSense publisher ID.
        </p>

        <h2>External links</h2>
        <p>
          This website links to services such as Pinterest, GitHub, LinkedIn, Fiverr, TikTok, WhatsApp, and email providers. We are not responsible for the privacy practices of those external services.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions, email <a className="text-cyan-300" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </article>
  );
}
