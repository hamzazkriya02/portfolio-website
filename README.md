# CodeDesignHub

A client-generating portfolio website built to convert Pinterest traffic into WhatsApp/Fiverr leads.

## Overview

This is a fully responsive design-studio portfolio built with Next.js and Tailwind CSS. Every design category has its own dedicated, SEO-friendly page so Pinterest Pins can link directly to relevant content instead of the homepage — keeping visitor context intact and improving conversion.

**Pinterest:** [pinterest.com/codeanddesignhub](https://www.pinterest.com/codeanddesignhub/)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Space Grotesk, Inter, JetBrains Mono (via `next/font/google`)
- **Deployment:** Vercel

## Features

- **Hero Section** — Headline, sub-headline, and primary WhatsApp CTA
- **Trust Bar** — Key stats (designs created, response time, Fiverr level)
- **Categories** — SaaS, AI, Interior Design, Architecture, Healthcare, Finance, Real Estate, Education — each with its own dynamic route (`/categories/[slug]`)
- **Portfolio Grid** — Filterable design showcase by category
- **Services** — Landing Page Design, Website UI/UX, Figma Design, Frontend Development, Full Stack Development, with pricing
- **Process** — 4-step "How It Works" breakdown
- **Why Choose Me** — Key differentiators
- **Reviews / Case Studies** — Sample client projects and testimonials
- **Pricing** — Basic / Standard / Premium tiers
- **FAQ** — Common questions, accordion-style
- **Contact** — WhatsApp, Fiverr, email, blog link, and contact form
- **Footer** — Quick links, social links, copyright

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
app/
page.tsx → Homepage (assembles all sections)
layout.tsx → Root layout, fonts, metadata
globals.css → Tailwind import + CSS variables
categories/[slug]/ → Dynamic category pages
components/
Header.tsx
Hero.tsx
TrustBar.tsx
Categories.tsx
PortfolioGrid.tsx
Services.tsx
Process.tsx
WhyChooseMe.tsx
Reviews.tsx
Pricing.tsx
FAQ.tsx
Contact.tsx
Footer.tsx


## Pinterest Traffic Rule

Every Pin links directly to its matching category page (e.g. a SaaS design Pin links to `/categories/saas`), never to the homepage. This preserves visitor context and increases trust.

## Deployment

This project is deployed on [Vercel](https://vercel.com). Pushing to the `main` branch triggers an automatic deployment.

## Contact

For inquiries, reach out via [WhatsApp](https://wa.me/923001234567) or [Fiverr](https://fiverr.com/your-username).
