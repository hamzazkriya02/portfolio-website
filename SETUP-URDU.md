# Code & Design Hub — Urdu Setup Guide

## 1) یہ نیا ورژن کیسے لگانا ہے؟

یہ package آپ کی موجودہ repository کے اوپر copy کرنا ہے۔

آپ کی پرانی repository میں موجود:

```text
public/designs/
```

کو delete نہیں کرنا، کیونکہ اسی folder میں آپ کی ساری existing website-design images ہیں اور نئی website انہی کو use کرتی ہے۔

نئی files copy/paste کرنے کے بعد:

```bash
npm install
npm run dev
```

اور final check کے لیے:

```bash
npm run build
```

## 2) جب بھی نیا website design بناؤں تو کیا کرنا ہے؟

ہاں، workflow یہی ہوگا:

### Step A — image website میں ڈالیں

مثال:

```text
public/designs/real-estate/real-new-03.webp
```

بہتر ہے screenshot صاف ہو، unnecessary بہت بڑا file size نہ ہو، اور possible ہو تو image optimize کر دیں۔

### Step B — `data/designs.ts` میں entry add کریں

مثال:

```ts
{
  title: "Real Estate Website Concept 03",
  category: "Real Estate",
  categorySlug: "real-estate",
  slug: "real-estate-website-concept-03",
  src: "/designs/real-estate/real-new-03.webp",
  summary: "A short unique description of this design.",
}
```

`slug` ہر design کا الگ ہونا چاہیے۔

### Step C — GitHub پر push کریں

اگر Vercel آپ کی GitHub repository کے ساتھ connected ہے، push ہوتے ہی Vercel نئی deployment بنائے گا۔

### Step D — نئی live URL کھولیں

مثال:

```text
https://yourdomain.com/designs/real-estate-website-concept-03
```

### Step E — Pinterest Pin میں یہی link لگائیں

اگر Pin میں وہی single design دکھایا ہے تو homepage link نہ دیں۔

Pin destination:

```text
/designs/real-estate-website-concept-03
```

اگر Pin پوری category کے بارے میں ہے تو:

```text
/categories/real-estate
```

اس طرح visitor click کے بعد اسی چیز پر land ہوگا جو اس نے Pinterest پر دیکھی تھی۔

## 3) Website سے earning کے دو راستے

### Client earning

Pinterest → design page → “Request a site like this” → WhatsApp

یہ main earning path ہونا چاہیے۔

### Ads earning

Ads کو content/design pages پر controlled انداز میں use کریں۔ Homepage پر بہت زیادہ ads نہ لگائیں، ورنہ portfolio cheap لگ سکتا ہے۔

Website میں AdSense integration پہلے سے environment variables کے ذریعے ready ہے، مگر publisher ID ڈالنے تک ads load نہیں ہوں گے۔

## 4) Google Analytics کیسے لگانا ہے؟

Google Analytics میں property بنانے کے بعد Measurement ID ملے گا:

```text
G-XXXXXXXXXX
```

Vercel میں:

```text
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

add کریں۔

اس کے بعد آپ دیکھ سکیں گے کہ:

- Pinterest سے کتنے users آئے
- کون سا design page زیادہ دیکھا گیا
- کون سے pages بہتر perform کر رہے ہیں

## 5) AdSense کیسے enable ہوگا؟

Approval/configuration کے بعد Vercel Environment Variables میں:

```text
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_ADSENSE_SLOT=XXXXXXXXXX
```

add کریں۔

جب values blank ہوں گی تو website ad box show نہیں کرے گی۔

## 6) Custom domain کیوں بہتر ہے؟

Vercel URL development/preview کے لیے ٹھیک ہے، لیکن long-term portfolio, brand trust, SEO, Pinterest verification, اور professional client impression کے لیے اپنا custom domain بہتر ہوتا ہے۔

Domain connect ہونے کے بعد:

```text
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

کر دیں، تاکہ canonical URLs اور sitemap صحیح domain use کریں۔

## 7) Main files یاد رکھیں

```text
data/designs.ts   → نئے designs
data/site.ts      → email, WhatsApp, social links
data/insights.ts  → articles/content
app/globals.css   → colors/design styling
.env.local        → local Analytics/AdSense settings
```

## 8) Pinterest کے لیے بہترین rule

Single design Pin:

```text
Pin → exact design page
```

Category Pin:

```text
Pin → category page
```

General brand/service Pin:

```text
Pin → homepage یا contact/service section
```

یعنی ہر Pin کا link اس کے content کے مطابق ہونا چاہیے۔
