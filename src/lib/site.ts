/**
 * Single source of truth for site-wide constants.
 *
 * Anything that describes the hospital rather than a specific page belongs
 * here: the canonical origin, brand names, contact details, social profiles.
 * Metadata, the sitemap, robots.txt, the web manifest and the JSON-LD
 * structured data all read from this file, so a value only ever changes once.
 */

const FALLBACK_ORIGIN = "https://srmglobalhospitals.com";

/**
 * Resolves the canonical origin used for canonical URLs, OG tags and sitemap
 * entries.
 *
 * Order of precedence:
 *  1. `NEXT_PUBLIC_SITE_URL` — set this explicitly in production.
 *  2. Vercel's production domain, so preview builds still emit prod canonicals.
 *  3. Vercel's per-deployment domain (preview branches without the above).
 *  4. The hard-coded production origin.
 */
function resolveOrigin(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ||
    withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    withProtocol(process.env.VERCEL_URL) ||
    FALLBACK_ORIGIN;

  // Trailing slashes break `new URL(path, origin)` composition downstream.
  return candidate.replace(/\/+$/, "");
}

function withProtocol(host: string | undefined): string | undefined {
  if (!host) return undefined;
  return host.startsWith("http") ? host : `https://${host}`;
}

type SocialNetwork = "facebook" | "instagram" | "x" | "linkedin" | "youtube";

const socialProfiles: Record<SocialNetwork, string> = {
  facebook: "",
  instagram: "",
  x: "",
  linkedin: "",
  youtube: "",
};

export const siteConfig = {
  /** Canonical origin, no trailing slash. e.g. `https://srmglobalhospitals.com` */
  url: resolveOrigin(),

  /** Short name used in title templates and the web manifest. */
  name: "SRM Global Hospitals",
  /** Registered entity name, used in structured data and the footer. */
  legalName: "SRM Global Hospitals Pvt Ltd",
  tagline: "Premium Multispecialty Care, Chengalpattu",
  description:
    "SRM Global Hospitals, Chengalpattu. A premium super speciality hospital with seven centres of excellence, AI-assisted monitoring, and international patient services.",

  locale: "en_IN",
  /** BCP 47 tag for the `<html lang>` attribute. */
  lang: "en",

  /** Brand colours mirrored from `--brand` / `--paper` in src/styles/globals.css. */
  themeColor: "#8b3dff",
  backgroundColor: "#ffffff",

  contact: {
    /** E.164, used for `tel:` links and structured data. */
    emergencyPhone: "+919644496444",
    /** Human-readable form used in visible copy. */
    emergencyPhoneDisplay: "+91 96444 96444",
  },

  /**
   * Postal address for structured data (schema.org PostalAddress).
   *
   * `streetAddress` and `postalCode` are intentionally blank — publishing a
   * guessed address would put wrong information in Google's knowledge panel.
   * Fill them in with the registered address and they flow into the JSON-LD
   * automatically; empty fields are omitted rather than emitted as "".
   */
  address: {
    streetAddress: "",
    addressLocality: "Chengalpattu",
    addressRegion: "Tamil Nadu",
    postalCode: "",
    addressCountry: "IN",
  },

  /**
   * Public social profiles, emitted as schema.org `sameAs`.
   * Add the real URLs — entries left blank are skipped.
   */
  social: socialProfiles,

  /** Logo currently served from the legacy WordPress origin. */
  logoUrl:
    "https://srmglobalhospitals.com/wp-content/uploads/2023/01/srm-logo-final.png",
} as const;

export type SiteConfig = typeof siteConfig;

/** Turns a site-relative path into an absolute URL on the canonical origin. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.url}/`).toString();
}

/** Non-empty social profile URLs, for schema.org `sameAs`. */
export function socialProfileUrls(): string[] {
  return Object.values(siteConfig.social).filter((url) => url.length > 0);
}
