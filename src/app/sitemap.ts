import type { MetadataRoute } from "next";

import { discoverRoutes, settingsFor } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * Generated at build time from the pages that actually exist in `app/`.
 * New pages appear here automatically — see `lib/routes.ts` to tune priority,
 * exclude a page, or register paths behind a dynamic segment.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const buildTime = new Date();

  return discoverRoutes().map(({ path, lastModified }) => {
    const { priority, changeFrequency } = settingsFor(path);

    return {
      url: absoluteUrl(path),
      lastModified: lastModified ?? buildTime,
      changeFrequency,
      priority,
    };
  });
}
