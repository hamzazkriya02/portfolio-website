export const siteConfig = {
  name: "Code & Design Hub",
  shortName: "CDH",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codeanddesignhub.vercel.app",
  description:
    "Premium website design and full-stack development for startups, local businesses, and growing brands.",
  email: "hamzahoon02@gmail.com",
  whatsapp: "923094552361",
  fiverr: "https://fiverr.com/hamzawebdesign0",
  socials: {
    github: "https://github.com/hamzazkriya02",
    pinterest: "https://www.pinterest.com/codeanddesignhub/",
    linkedin: "https://linkedin.com/in/muhammad-hamza-315hz02",
    tiktok: "https://www.tiktok.com/@codewithhamza02",
  },
};

export function whatsappUrl(message = "Hi, I found Code & Design Hub and want to discuss a website project.") {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
