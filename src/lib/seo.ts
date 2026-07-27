import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Page metadata helper.
 *
 * Every page should export `metadata` built with `createMetadata` so canonical
 * URLs, Open Graph and Twitter cards stay consistent as pages are added:
 *
 * ```ts
 * export const metadata = createMetadata({
 *   title: "International Patients",
 *   description: "…",
 *   path: "/international-patients",
 * });
 * ```
 *
 * `title` is the bare page title — the root layout's template appends
 * "| SRM Global Hospitals", so don't repeat the brand here.
 */

/**
 * `app/opengraph-image.tsx` only covers the route segment it sits in — it is
 * not inherited by `/blog` or anything else nested. Pointing at the generated
 * route explicitly is what gives every page a social card.
 */
const DEFAULT_OG_IMAGE = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

export type CreateMetadataInput = {
  /** Page title without the brand suffix. */
  title: string;
  /** Skip the layout's "| SRM Global Hospitals" suffix (homepage only). */
  absoluteTitle?: boolean;
  /** 120–160 characters reads best in search results. */
  description: string;
  /** Site-relative path, e.g. `/blog` or `/blog/some-article`. */
  path: string;
  /** Social card image. Site-relative or absolute; falls back to the site-wide OG image. */
  image?: string;
  imageAlt?: string;
  /** `article` adds publication metadata to the Open Graph tags. */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  keywords?: string[];
  /** Keep the page out of search results (thank-you pages, gated content…). */
  noIndex?: boolean;
};

export function createMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  keywords,
  noIndex = false,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const images = image
    ? [{ url: absoluteUrl(image), alt: imageAlt ?? title }]
    : [DEFAULT_OG_IMAGE];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images,
      ...(type === "article"
        ? { publishedTime, modifiedTime, authors, section, tags }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
