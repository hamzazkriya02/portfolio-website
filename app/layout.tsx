import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const pinterestVerification = process.env.NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Code & Design Hub — Premium Web Design & Development",
    template: "%s | Code & Design Hub",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "web design",
    "website development",
    "landing page design",
    "UI UX design",
    "full stack development",
    "responsive website",
    "portfolio web design",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Code & Design Hub — Premium Web Design & Development",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Code & Design Hub",
    description: siteConfig.description,
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
  other: pinterestVerification ? { "p:domain_verify": pinterestVerification } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 const adsenseClient =process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-8078423561722055";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.pinterest,
      siteConfig.socials.linkedin,
      siteConfig.socials.tiktok,
      siteConfig.fiverr,
    ],
  };

  return (
    <html lang="en">
      <head>
  <meta
    name="google-adsense-account"
    content="ca-pub-8078423561722055"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />

  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0,0"
  />
</head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen overflow-x-hidden antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        {adsenseClient ? (
          <Script
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        ) : null}
      </body>
    </html>
  );
}
