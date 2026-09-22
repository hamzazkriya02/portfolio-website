export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "turn-pinterest-design-traffic-into-clients",
    title: "How to Turn Pinterest Design Traffic Into Website Clients",
    excerpt:
      "A practical funnel for sending Pinterest visitors to the right portfolio page, building trust, and making the next action obvious.",
    category: "Growth",
    readTime: "6 min read",
    published: "2026-09-22",
    sections: [
      {
        heading: "Treat every Pin like an entry page",
        paragraphs: [
          "A Pinterest visitor usually arrives with a very specific visual intent. If a Pin shows a real-estate landing page, sending that visitor to a generic homepage adds friction. A better approach is to link the Pin directly to a matching project page that contains the same design, a short explanation, and a clear next action.",
          "That project page can still introduce the wider studio, but the first screen should confirm that the visitor landed in the right place. Matching the Pin title, image, and page topic also creates a cleaner user experience and makes your analytics easier to understand.",
        ],
      },
      {
        heading: "Use one strong conversion action",
        paragraphs: [
          "Portfolio traffic is most useful when visitors know what to do next. A simple call to action such as “Request a website like this” is usually clearer than a page filled with competing buttons. WhatsApp can be useful for fast enquiries, while email or Fiverr can remain secondary options.",
          "The call to action should appear after the main design preview and again near the end of the page. This gives visitors a natural path from inspiration to enquiry without making the page feel aggressive.",
        ],
      },
      {
        heading: "Build trust without inventing social proof",
        paragraphs: [
          "A professional portfolio does not need fake testimonials or inflated client counts. Clear service descriptions, real design work, a genuine contact identity, transparent pricing guidance, and links to active profiles are enough to make a strong first impression.",
          "If you later collect verified testimonials or case-study results, add them with context. Until then, showing the process and the quality of the work is safer and more credible.",
        ],
      },
      {
        heading: "Track the pages that actually create enquiries",
        paragraphs: [
          "Use analytics to separate Pinterest traffic from other sources and compare project pages by visits, engagement, and contact clicks. Over time, you will see which categories deserve more Pins and which designs attract visitors but fail to create enquiries.",
          "This turns Pinterest into a repeatable content system instead of a guessing game: publish a design, link it to a dedicated page, measure the response, and create more of what already works.",
        ],
      },
    ],
  },
  {
    slug: "high-converting-landing-page-checklist",
    title: "A Practical Landing Page Design Checklist for Small Businesses",
    excerpt:
      "The essential structure, trust signals, and performance details that help a landing page feel credible and easy to use.",
    category: "Web Design",
    readTime: "7 min read",
    published: "2026-09-22",
    sections: [
      {
        heading: "Start with a clear promise",
        paragraphs: [
          "The hero section should answer three questions quickly: what the business offers, who it is for, and what the visitor should do next. Decorative copy can look creative, but clarity normally matters more when a visitor is deciding whether to stay.",
          "Use one primary headline, one short supporting paragraph, and one main action. Supporting visual elements should reinforce the message rather than compete with it.",
        ],
      },
      {
        heading: "Make proof easy to scan",
        paragraphs: [
          "Trust can come from real project examples, recognizable process steps, transparent contact information, guarantees that are genuinely offered, certifications, or verified testimonials. The best proof depends on the type of business, but it should be easy to understand without reading a long wall of text.",
          "For service businesses, a portfolio or before-and-after section is often more persuasive than generic claims. For software products, screenshots and concise feature explanations can play the same role.",
        ],
      },
      {
        heading: "Design for the phone first",
        paragraphs: [
          "Many visitors will see the page on a mobile screen. Important buttons should be comfortably tappable, text should not require zooming, and the first screen should not be blocked by oversized decorative elements.",
          "A responsive page is not only a desktop layout squeezed into a smaller width. Mobile spacing, image crops, section order, and navigation all need deliberate decisions.",
        ],
      },
      {
        heading: "Keep performance part of the design",
        paragraphs: [
          "Large images, multiple animation libraries, and unnecessary scripts can make an otherwise attractive site feel slow. Use optimized images, limit heavy effects, load below-the-fold content lazily, and keep the interface stable while assets are loading.",
          "A fast page improves the experience for every visitor, especially users on mobile networks. Performance should be treated as a design requirement, not a final technical cleanup.",
        ],
      },
    ],
  },
  {
    slug: "premium-website-without-slowing-it-down",
    title: "How to Make a Website Feel Premium Without Making It Slow",
    excerpt:
      "A performance-first approach to typography, motion, images, and visual hierarchy for polished modern websites.",
    category: "Performance",
    readTime: "6 min read",
    published: "2026-09-22",
    sections: [
      {
        heading: "Use hierarchy before effects",
        paragraphs: [
          "A premium interface usually comes from proportion, spacing, typography, and consistency before it comes from animation. Strong headings, restrained color, clear grids, and predictable components create quality without adding JavaScript.",
          "This is why a small number of well-designed sections can feel more expensive than a page full of glowing elements. The goal is to guide attention, not to animate everything.",
        ],
      },
      {
        heading: "Keep motion subtle and purposeful",
        paragraphs: [
          "Short hover transitions, gentle entrance effects, and small changes in scale can make a website feel responsive without becoming distracting. Whenever possible, use CSS for simple motion and respect the user’s reduced-motion preference.",
          "Heavy scroll libraries and large animation packages should earn their place. If an effect does not improve understanding or interaction, it is usually a candidate for removal.",
        ],
      },
      {
        heading: "Let the image system do the heavy lifting",
        paragraphs: [
          "Portfolio websites often depend on large visual assets, so image handling has a major effect on perceived speed. Use responsive image sizes, modern formats when available, sensible quality settings, and lazy loading for content below the first screen.",
          "The most important hero image can load early, while the rest of the gallery should wait until the browser needs it. This keeps the first interaction fast even when the portfolio contains many projects.",
        ],
      },
      {
        heading: "Reduce external dependencies",
        paragraphs: [
          "Every extra script, font family, and widget adds network work. Choose a small type system, avoid duplicate icon libraries, and only load analytics or advertising scripts when you actually use them.",
          "A lean technical base makes the site easier to maintain and leaves more performance budget for the visuals that matter to the brand.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
