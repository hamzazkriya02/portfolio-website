# Code & Design Hub — Premium Portfolio Upgrade

This version turns the existing portfolio into a cleaner, more credible, Pinterest-friendly website.

## What changed

- Premium dark visual system with restrained motion
- Existing portfolio images reused from `public/designs`
- Dedicated URL for every design: `/designs/[slug]`
- Category pages retained and upgraded
- SEO metadata, sitemap, robots rules, Open Graph metadata
- Google Analytics support through environment variables
- Google Search Console and Pinterest verification support
- AdSense-ready content slots that stay hidden until IDs are configured
- About, Contact, Privacy, Terms, Insights, and 404 pages
- Real contact paths only: WhatsApp, email, Fiverr, GitHub, Pinterest, LinkedIn
- No fake testimonial section or invented client numbers
- Google fonts through `next/font/google`
- Google Material Symbols for interface icons
- `next/image` used for responsive, optimized portfolio images

## Important: keep the existing images

This package is designed to be copied over the current repository.

Do **not** delete:

```text
public/designs/
app/favicon.ico
```

The new code references the image files already stored there.

## Install and run

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` for local testing. On Vercel, add the same keys in:

`Project → Settings → Environment Variables`

Only add Analytics, Search Console, Pinterest verification, or AdSense values when you actually have them.

## Adding a new website design

1. Put the new screenshot in a category folder, for example:

```text
public/designs/real-estate/real-new-03.webp
```

2. Open:

```text
data/designs.ts
```

3. Add one new object to the `rows` array:

```ts
{
  title: "Real Estate Website Concept 03",
  category: "Real Estate",
  categorySlug: "real-estate",
  slug: "real-estate-website-concept-03",
  src: "/designs/real-estate/real-new-03.webp",
  summary: "A short, unique description of this design.",
}
```

4. Commit and push to GitHub. Vercel will redeploy.

5. After deployment, open:

```text
https://YOUR-DOMAIN.com/designs/real-estate-website-concept-03
```

6. Use **that exact URL** as the destination link of the matching Pinterest Pin.

This is better than sending every Pin to the homepage because the visitor sees the exact design they clicked.

## Pinterest publishing rule

Use this flow:

```text
Pinterest Pin
   ↓
Matching /designs/[slug] page
   ↓
Full design + description
   ↓
"Request a site like this"
   ↓
WhatsApp / email enquiry
```

For category roundup Pins, use a category URL such as:

```text
/categories/real-estate
```

For an individual design Pin, always prefer the individual design URL.

## Analytics

Set:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The Analytics script is not loaded when this variable is empty.

## AdSense

Do not insert random ad code manually into every component.

Once you have a valid AdSense publisher ID and ad-slot ID, set:

```text
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_SLOT=XXXXXXXXXX
```

Ad components already exist on design/article pages and remain invisible while these variables are blank.

## Main files you will edit in the future

- `data/designs.ts` — add/remove portfolio designs
- `data/site.ts` — contact details and social links
- `data/insights.ts` — add new articles
- `app/globals.css` — global visual styling
- `.env.local` / Vercel env variables — analytics, verification, AdSense

See `SETUP-URDU.md` for the same workflow in Urdu.
