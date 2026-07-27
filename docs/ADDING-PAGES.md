# Adding a page

The production plumbing (SEO, sitemap, security headers, error handling) is
wired so that a new page picks it up automatically. This is the whole routine.

## Where things live

```
src/
├─ app/                    # routing layer ONLY — pages, layouts, metadata routes
│  ├─ layout.tsx           # root layout: metadata defaults, JSON-LD, fonts
│  ├─ page.tsx             # /
│  ├─ blog/
│  ├─ not-found.tsx  error.tsx  global-error.tsx
│  └─ sitemap.ts  robots.ts  manifest.ts  icon.tsx  opengraph-image.tsx
├─ components/
│  ├─ layout/              # site chrome shared by every page
│  ├─ home/                # homepage sections
│  └─ blog/{shared,listing,article}/
├─ lib/                    # site config, SEO helpers, structured data
├─ styles/                 # globals.css, blog.css, system.module.css
└─ instrumentation.ts      # server error logging
```

Keep `src/app/` for routing files only. A page's sections belong in
`src/components/<area>/` — that's what stops `app/` turning into a dumping
ground as pages multiply.

`@/*` resolves to `src/*`, so import with `@/components/…`, `@/lib/…`,
`@/styles/…` and never with `../../`.

## 1. Create the route

```
src/app/international-patients/page.tsx   ->  /international-patients
src/app/about/leadership/page.tsx         ->  /about/leadership
```

The folder name *is* the URL. Folders wrapped in parentheses —
`src/app/(legal)/` — group files without adding a URL segment, and folders
starting with `_` are ignored by the router entirely.

## 2. Export metadata with `createMetadata`

```tsx
import { createMetadata } from "@/lib/seo";
import { HeaderTop, SiteHeader, SiteFooter } from "@/components/layout";

export const metadata = createMetadata({
  title: "International Patients",
  description:
    "Visa assistance, airport pickup, and a dedicated coordinator for patients travelling to Chengalpattu.",
  path: "/international-patients",
});

export default function InternationalPatientsPage() {
  return (
    <>
      <HeaderTop />
      <SiteHeader />
      {/* your sections from @/components/international-patients/… */}
      <SiteFooter />
    </>
  );
}
```

`title` is the bare page title — the root layout appends
`| SRM Global Hospitals`, so don't repeat it. `createMetadata` handles the
canonical URL, Open Graph tags and the Twitter card from `path`.

Useful extras: `image` (social card, site-relative or absolute), `noIndex`
(keeps a page out of search), `type: "article"` with `publishedTime`, `authors`
and `section` for blog posts.

## 3. Add the page's sections

Create `src/components/<area>/` for anything used by only that page, one
component per section, mirroring `src/components/home/`. Components here are
self-contained — they don't import each other — which keeps sections free to be
reordered or dropped.

There's no shared inner layout, so each page renders `<HeaderTop />`,
`<SiteHeader />` and `<SiteFooter />` itself, in that order.

## 4. That's it for the sitemap

`src/app/sitemap.ts` walks `src/app` at build time, so the new page is in
`/sitemap.xml` on the next build with no extra step. Reach for
[`src/lib/routes.ts`](../src/lib/routes.ts) only when you need to:

- **change priority or change frequency** — add an entry to `routeSettings`
  (a `/blog` entry also covers everything nested under it);
- **keep a page out of the sitemap** — add its path to `excludedRoutes`;
- **register a dynamic route** — `[slug]` paths can't be discovered from the
  file system, so list the concrete URLs in `additionalRoutes`.

## Styling a new page

`src/styles/globals.css` is loaded for every route and holds the design tokens
(`--ink`, `--brand`, `--gradient`, `--font-display`…) plus the shared header,
footer, button and container styles. Reuse those.

For styles specific to one page, **use a CSS Module** (`<Name>.module.css`
beside the component) as
[`src/styles/system.module.css`](../src/styles/system.module.css) does. A plain
`.css` import in the App Router is global no matter where it lives, so a loose
selector will reach into the homepage and the blog. Modules cannot.

`src/styles/blog.css` predates this convention and is imported by the blog pages
directly — leave it alone rather than converting it.

## Structured data

For anything Google shows rich results for, add JSON-LD from
[`src/lib/structured-data.ts`](../src/lib/structured-data.ts):

```tsx
import { breadcrumbSchema, jsonLdScriptProps } from "@/lib/structured-data";

<script
  type="application/ld+json"
  {...jsonLdScriptProps(
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  )}
/>;
```

The hospital and website entities are emitted once from the root layout — don't
repeat them per page.

## Links

Use `next/link` for internal navigation so routes prefetch:

```tsx
import Link from "next/link";

<Link href="/international-patients">International Patients</Link>;
```

`typedRoutes` is on, so a typo'd `href` fails `npm run typecheck` instead of
404ing in production.

## Before you push

```bash
npm run verify
```

Runs typecheck, lint and a production build. `next build` no longer lints on its
own in Next 16, which is why lint is a separate step here.

## Things that are already handled

- **Security headers and CSP** — `next.config.ts`. The CSP applies in
  production only so dev HMR keeps working; if a page needs a new external
  origin (a maps embed, a video host), add it to the relevant directive there.
- **404s** — `src/app/not-found.tsx` covers every unmatched URL.
- **Runtime errors** — `src/app/error.tsx`, with `src/app/global-error.tsx`
  behind it. Server errors are logged as JSON by `src/instrumentation.ts`.
- **Favicons, web manifest, default social card** — `src/app/icon.tsx`,
  `src/app/apple-icon.tsx`, `src/app/manifest.ts`,
  `src/app/opengraph-image.tsx`.
- **Hospital details** — name, phone, address and social profiles all live in
  [`src/lib/site.ts`](../src/lib/site.ts). Change them there, not in components.
