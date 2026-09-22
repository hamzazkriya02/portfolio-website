export type Design = {
  id: number;
  title: string;
  category: string;
  categorySlug: string;
  slug: string;
  src: string;
  summary: string;
  featured?: boolean;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export const categories: Category[] = [
  {
    name: "SaaS",
    slug: "saas",
    description: "Conversion-focused product pages and polished interfaces for software brands.",
    icon: "dashboard_customize",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Premium property presentation with clear search, trust, and lead-generation flows.",
    icon: "apartment",
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Clean, trustworthy experiences for clinics, doctors, and healthcare services.",
    icon: "health_and_safety",
  },
  {
    name: "Interior Design",
    slug: "interior-design",
    description: "Image-led portfolio experiences for studios, architects, and interior brands.",
    icon: "chair",
  },
  {
    name: "Education",
    slug: "education",
    description: "Modern course, academy, and education platform design concepts.",
    icon: "school",
  },
];

const rows: Omit<Design, "id">[] = [
  {
    title: "Modern SaaS Website Concept 01",
    category: "SaaS",
    categorySlug: "saas",
    slug: "modern-saas-website-concept-01",
    src: "/designs/saas/SaaS1.png",
    summary: "A modern SaaS website direction focused on product clarity, hierarchy, and conversion-ready calls to action.",
    featured: true,
  },
  {
    title: "Modern SaaS Website Concept 02",
    category: "SaaS",
    categorySlug: "saas",
    slug: "modern-saas-website-concept-02",
    src: "/designs/saas/SaaS2.png",
    summary: "A polished software landing-page concept with a clean visual system and strong product storytelling.",
    featured: true,
  },
  {
    title: "Modern SaaS Website Concept 03",
    category: "SaaS",
    categorySlug: "saas",
    slug: "modern-saas-website-concept-03",
    src: "/designs/saas/SaaS3.png",
    summary: "A responsive SaaS concept designed to make features, benefits, and product value easy to scan.",
  },
  {
    title: "Modern SaaS Website Concept 04",
    category: "SaaS",
    categorySlug: "saas",
    slug: "modern-saas-website-concept-04",
    src: "/designs/saas/SaaS4.png",
    summary: "A contemporary SaaS interface direction with strong spacing, card hierarchy, and premium visual rhythm.",
  },
  {
    title: "Modern SaaS Website Concept 05",
    category: "SaaS",
    categorySlug: "saas",
    slug: "modern-saas-website-concept-05",
    src: "/designs/saas/SaaS5.png",
    summary: "A flexible product-site concept for startups that need a credible and conversion-focused web presence.",
  },

  {
    title: "Real Estate Website Concept 01",
    category: "Real Estate",
    categorySlug: "real-estate",
    slug: "real-estate-website-concept-01",
    src: "/designs/real-estate/real2.jpeg",
    summary: "A clean property marketing concept for agents, consultants, and modern real-estate businesses.",
    featured: true,
  },
  {
    title: "Real Estate Website Concept 02",
    category: "Real Estate",
    categorySlug: "real-estate",
    slug: "real-estate-website-concept-02",
    src: "/designs/real-estate/real4.png",
    summary: "An editorial property website concept with a strong visual first impression and premium presentation.",
    featured: true,
  },
    {
    title: "Real Estate Website Concept 03",
    category: "Real Estate",
    categorySlug: "real-estate",
    slug: "real-estate-website-concept-03",
    src: "/designs/real-estate/real-estate-website-concept-03.png",
    summary:
      "A premium real-estate website concept with luxury property visuals, strong trust signals, featured listings, and clear lead-generation calls to action.",
    featured: true,
  },

  {
    title: "Healthcare Website Concept 01",
    category: "Healthcare",
    categorySlug: "healthcare",
    slug: "healthcare-website-concept-01",
    src: "/designs/healthcare/hc1.png",
    summary: "A calm healthcare website concept focused on clarity, credibility, and easy access to key information.",
    featured: true,
  },
  {
    title: "Healthcare Website Concept 02",
    category: "Healthcare",
    categorySlug: "healthcare",
    slug: "healthcare-website-concept-02",
    src: "/designs/healthcare/hc2.png",
    summary: "A polished medical-services layout with clear information architecture and reassuring visual design.",
  },
  {
    title: "Healthcare Website Concept 03",
    category: "Healthcare",
    categorySlug: "healthcare",
    slug: "healthcare-website-concept-03",
    src: "/designs/healthcare/hc3.png",
    summary: "A responsive clinic website direction designed to help patients find services and contact options quickly.",
  },
  {
    title: "Healthcare Website Concept 04",
    category: "Healthcare",
    categorySlug: "healthcare",
    slug: "healthcare-website-concept-04",
    src: "/designs/healthcare/hc4.png",
    summary: "A trustworthy healthcare concept using clean spacing, professional typography, and direct calls to action.",
  },
  {
    title: "Healthcare Website Concept 05",
    category: "Healthcare",
    categorySlug: "healthcare",
    slug: "healthcare-website-concept-05",
    src: "/designs/healthcare/hc5.png",
    summary: "A modern health-services website concept that keeps important patient information simple and approachable.",
  },

  {
    title: "Interior Design Website Concept 01",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-01",
    src: "/designs/interior-design/id1.png",
    summary: "A visual-first interior-design portfolio concept that gives project imagery room to lead the experience.",
    featured: true,
  },
  {
    title: "Interior Design Website Concept 02",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-02",
    src: "/designs/interior-design/id2.png",
    summary: "A premium studio website direction with editorial spacing, strong imagery, and refined typography.",
    featured: true,
  },
  {
    title: "Interior Design Website Concept 03",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-03",
    src: "/designs/interior-design/id3.png",
    summary: "A contemporary portfolio layout for interior studios that want a high-end digital presentation.",
  },
  {
    title: "Interior Design Website Concept 04",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-04",
    src: "/designs/interior-design/id4.png",
    summary: "A clean and spacious interior-design concept with a strong focus on project discovery and enquiries.",
  },
  {
    title: "Interior Design Website Concept 05",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-05",
    src: "/designs/interior-design/id5.png",
    summary: "A refined website direction for design studios that combines visual storytelling with a clear service journey.",
  },
  {
    title: "Interior Design Website Concept 06",
    category: "Interior Design",
    categorySlug: "interior-design",
    slug: "interior-design-website-concept-06",
    src: "/designs/interior-design/id6.png",
    summary: "A modern portfolio concept that helps interior designers showcase work while keeping contact paths obvious.",
  },

  {
    title: "Education Website Concept 01",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-01",
    src: "/designs/education/edu1.png",
    summary: "A modern education website direction focused on courses, credibility, and clear learner actions.",
    featured: true,
  },
  {
    title: "Education Website Concept 02",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-02",
    src: "/designs/education/edu2.png",
    summary: "A polished academy or course-platform concept designed for easy browsing and straightforward enrolment paths.",
  },
  {
    title: "Education Website Concept 03",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-03",
    src: "/designs/education/edu3.png",
    summary: "A responsive learning website concept with clear hierarchy for programs, outcomes, and calls to action.",
  },
  {
    title: "Education Website Concept 04",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-04",
    src: "/designs/education/edu4.png",
    summary: "A contemporary education landing page that presents programs and trust signals in a clean structure.",
  },
  {
    title: "Education Website Concept 05",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-05",
    src: "/designs/education/edu5.png",
    summary: "A professional education site direction suitable for academies, online programs, and training businesses.",
  },
  {
    title: "Education Website Concept 06",
    category: "Education",
    categorySlug: "education",
    slug: "education-website-concept-06",
    src: "/designs/education/edu6.png",
    summary: "A clean learning-platform concept built to make content discovery and key actions feel effortless.",
  },
];

export const designs: Design[] = rows.map((row, index) => ({
  id: index + 1,
  ...row,
}));

export const featuredDesigns = designs.filter((design) => design.featured);

export function getDesignBySlug(slug: string) {
  return designs.find((design) => design.slug === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
