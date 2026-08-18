import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Route discovery for the sitemap.
 *
 * Rather than keeping a hand-maintained list that silently goes stale as pages
 * are added, this walks the `src/app` directory at build time and derives every
 * statically routable page from the file system. Adding `src/app/about/page.tsx`
 * puts `/about` in the sitemap with no extra step.
 *
 * Two escape hatches exist for the cases discovery can't infer:
 *  - `routeSettings` overrides priority / change frequency per path.
 *  - `excludedRoutes` keeps a page out of the sitemap entirely.
 *
 * Dynamic segments (`[slug]`) can't be enumerated from the file system. When
 * you add one, list its concrete paths in `additionalRoutes` (or generate them
 * from your content source there).
 */

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type RouteSetting = {
  priority: number;
  changeFrequency: ChangeFrequency;
};

const DEFAULT_SETTING: RouteSetting = {
  priority: 0.6,
  changeFrequency: "monthly",
};

/**
 * Per-path overrides. Longest matching prefix wins, so `/blog` covers every
 * article underneath it unless an article sets its own entry.
 */
const routeSettings: Record<string, RouteSetting> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/about": { priority: 0.9, changeFrequency: "monthly" },
  "/blog": { priority: 0.8, changeFrequency: "weekly" },
};

/** Paths that exist but should never be indexed (thank-you pages, previews…). */
const excludedRoutes: string[] = [];

/**
 * Concrete paths behind dynamic segments, plus anything else discovery misses.
 * Keep in sync when you add `[slug]` routes.
 */
const additionalRoutes: string[] = [];

const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

/** Route groups — `(marketing)` — contribute no URL segment. */
const ROUTE_GROUP = /^\(.+\)$/;
/** Intercepting routes — `(.)photo`, `(..)(..)feed` — are not standalone pages. */
const INTERCEPTING = /^\(\.{1,3}\)/;

function isSkippedSegment(segment: string): boolean {
  return (
    segment.startsWith("_") || // private folder
    segment.startsWith("@") || // parallel route slot
    segment.startsWith("[") || // dynamic segment
    INTERCEPTING.test(segment)
  );
}

function walk(
  dir: string,
  urlSegments: string[],
  found: Map<string, Date | undefined>,
): void {
  let entries: string[];
  try {
    entries = readdirSync(dir);
  } catch {
    return; // Directory vanished mid-walk, or app/ is missing entirely.
  }

  const pageFile = entries.find((entry) => PAGE_FILE.test(entry));
  if (pageFile) {
    const path = `/${urlSegments.join("/")}`.replace(/\/+$/, "") || "/";
    found.set(path, mtimeOf(join(dir, pageFile)));
  }

  for (const entry of entries) {
    if (isSkippedSegment(entry)) continue;

    const child = join(dir, entry);
    try {
      if (!statSync(child).isDirectory()) continue;
    } catch {
      continue; // Broken symlink or a race with a file being removed.
    }

    walk(
      child,
      ROUTE_GROUP.test(entry) ? urlSegments : [...urlSegments, entry],
      found,
    );
  }
}

function mtimeOf(file: string): Date | undefined {
  try {
    return statSync(file).mtime;
  } catch {
    return undefined;
  }
}

export type DiscoveredRoute = {
  path: string;
  /**
   * Modification time of the page file. On a fresh CI clone every file shares
   * the checkout time, which degrades to "this deploy" — acceptable, and still
   * accurate when building from a working copy.
   */
  lastModified: Date | undefined;
};

/** Every static page path in `src/app/`, plus `additionalRoutes`, deduplicated. */
export function discoverRoutes(
  appDir = join(process.cwd(), "src", "app"),
): DiscoveredRoute[] {
  const found = new Map<string, Date | undefined>();
  walk(appDir, [], found);

  for (const path of additionalRoutes) {
    if (!found.has(path)) found.set(path, undefined);
  }
  for (const excluded of excludedRoutes) found.delete(excluded);

  return [...found.entries()]
    .map(([path, lastModified]) => ({ path, lastModified }))
    .sort((a, b) => a.path.localeCompare(b.path));
}

/** Resolves sitemap settings for a path, falling back to its closest parent. */
export function settingsFor(path: string): RouteSetting {
  if (Object.hasOwn(routeSettings, path)) return routeSettings[path];

  const inherited = Object.entries(routeSettings)
    .filter(([prefix]) => prefix !== "/" && path.startsWith(`${prefix}/`))
    .sort(([a], [b]) => b.length - a.length)[0]?.[1];

  if (!inherited) return DEFAULT_SETTING;

  // Nested pages are a notch less important than the section they live under.
  return {
    priority: Math.max(0.1, Number((inherited.priority - 0.1).toFixed(1))),
    changeFrequency: inherited.changeFrequency,
  };
}
