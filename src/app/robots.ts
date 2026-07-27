import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js internals and any future API routes carry nothing worth
        // crawling, and crawling them wastes crawl budget.
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
