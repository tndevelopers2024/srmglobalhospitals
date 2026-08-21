import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

import { siteConfig } from "@/lib/site";
import {
  jsonLdScriptProps,
  organizationSchema,
  webSiteSchema,
} from "@/lib/structured-data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: siteConfig.themeColor,
  // The site is designed light-only; declaring it stops Android Chrome from
  // applying its automatic dark theme and inverting the palette.
  colorScheme: "light",
};

export const metadata: Metadata = {
  // Makes every relative URL in page metadata (canonicals, OG images) resolve
  // against the canonical origin.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    // Pages export a bare title; the brand is appended here so it stays
    // consistent as pages are added.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  publisher: siteConfig.legalName,
  category: "health",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/images/favicon/srm-logo-favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/favicon/srm-logo-favicon.svg",
    apple: "/images/favicon/srm-logo-favicon.svg",
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION when claiming Search Console.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.lang} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <script
          type="application/ld+json"
          {...jsonLdScriptProps([organizationSchema(), webSiteSchema()])}
        />
        <Analytics />
      </body>
    </html>
  );
}
