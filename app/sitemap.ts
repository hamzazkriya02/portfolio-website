import type { MetadataRoute } from "next";
import { categories, designs } from "@/data/designs";
import { insights } from "@/data/insights";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/designs", "/about", "/contact", "/insights", "/privacy", "/terms"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.7,
  }));

  const designRoutes = designs.map((design) => ({
    url: `${siteConfig.url}/designs/${design.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const insightRoutes = insights.map((insight) => ({
    url: `${siteConfig.url}/insights/${insight.slug}`,
    lastModified: new Date(insight.published),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...designRoutes, ...categoryRoutes, ...insightRoutes];
}
