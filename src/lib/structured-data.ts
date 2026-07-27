import { absoluteUrl, siteConfig, socialProfileUrls } from "@/lib/site";

/**
 * schema.org JSON-LD builders.
 *
 * Structured data is what puts the hospital's phone number, address and
 * articles into Google's rich results and knowledge panel, so it matters more
 * here than on a typical marketing site. Builders omit empty fields rather
 * than emitting blanks — filling in `siteConfig.address` and
 * `siteConfig.social` is what makes those parts appear.
 */

type JsonLd = Record<string, unknown>;

/** Drops keys whose value is undefined, "", or an empty array. */
function compact(input: JsonLd): JsonLd {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => {
      if (value === undefined || value === null) return false;
      if (typeof value === "string") return value.length > 0;
      if (Array.isArray(value)) return value.length > 0;
      return true;
    }),
  );
}

function postalAddress(): JsonLd | undefined {
  const address = compact({
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.addressCountry,
  });

  // "@type" alone means nothing usable was filled in.
  return Object.keys(address).length > 1 ? address : undefined;
}

/** The hospital itself — emitted once, from the root layout. */
export function organizationSchema(): JsonLd {
  return compact({
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.logoUrl,
    image: siteConfig.logoUrl,
    telephone: siteConfig.contact.emergencyPhone,
    address: postalAddress(),
    sameAs: socialProfileUrls(),
    availableService: {
      "@type": "EmergencyService",
      name: "24/7 Emergency Care",
      telephone: siteConfig.contact.emergencyPhone,
    },
  });
}

/** The website entity, linked to the organization above. */
export function webSiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale.replace("_", "-"),
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export type BreadcrumbItem = { name: string; path: string };

/** Breadcrumb trail for a page. Pass the full path including the page itself. */
export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  /** Reviewing or authoring clinician. */
  author?: string;
};

/** Blog articles. Google treats health content as YMYL — authorship helps. */
export function articleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified,
  author,
}: ArticleSchemaInput): JsonLd {
  return compact({
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : undefined,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: siteConfig.locale.replace("_", "-"),
    author: author
      ? { "@type": "Person", name: author }
      : { "@id": absoluteUrl("/#organization") },
    publisher: { "@id": absoluteUrl("/#organization") },
    isPartOf: { "@id": absoluteUrl("/#website") },
  });
}

/**
 * Props for a `<script type="application/ld+json">` tag.
 *
 * `<` is escaped so a stray `</script>` in any string can't break out of the
 * tag — the standard XSS guard for inlined JSON.
 *
 * ```tsx
 * <script type="application/ld+json" {...jsonLdScriptProps(organizationSchema())} />
 * ```
 */
export function jsonLdScriptProps(schema: JsonLd | JsonLd[]) {
  return {
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
    },
  };
}
