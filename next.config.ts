import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

/**
 * Content Security Policy.
 *
 * `'unsafe-inline'` is required for both scripts and styles: Next.js inlines a
 * bootstrap script into every prerendered page, and the site uses React inline
 * `style` props throughout. Removing it means switching to per-request nonces,
 * which forces dynamic rendering and would give up static generation for a
 * site that is entirely static — a bad trade here.
 *
 * The directives that carry the most weight for a static marketing site are
 * still fully enforced: `object-src`, `base-uri`, `form-action` and
 * `frame-ancestors` shut down the common injection and clickjacking paths.
 *
 * Applied in production only so the dev server's HMR and eval-based tooling
 * keep working.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  // Room for maps and video embeds without another config change later.
  "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    // Two years. `includeSubDomains` is deliberately omitted — add it once
    // every subdomain is confirmed to serve HTTPS, since browsers cache this
    // for the full max-age and it cannot be undone quickly.
    key: "Strict-Transport-Security",
    value: "max-age=63072000",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  // Don't advertise the framework and version to attackers.
  poweredByHeader: false,
  // Type errors must fail the build — never ship a broken deploy silently.
  typescript: { ignoreBuildErrors: false },
  // `<Link href>` is checked against the routes that actually exist, so a
  // typo'd link fails typecheck instead of 404ing in production.
  typedRoutes: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 restricts quality to [75] by default; 90 is for hero imagery.
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srmglobalhospitals.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.srmglobalhospitals.com",
        pathname: "/wp-content/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: isProduction
          ? securityHeaders
          : securityHeaders.filter(
              (header) => header.key !== "Content-Security-Policy",
            ),
      },
      {
        // Font filenames are stable and versioned by name.
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images can be replaced in place, so revalidate daily but keep
        // serving the cached copy while that happens.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
