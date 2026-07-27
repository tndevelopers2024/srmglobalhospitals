# SRM Global Hospitals

> Designed and developed by Mohan

SRM Global Hospitals is a modern, high-performance landing page for a leading healthcare institution based in Chennai. We provide comprehensive medical services, advanced treatments, and state-of-the-art facilities. Visit us at [https://srmglobalhospitals.com/](https://srmglobalhospitals.com/).

This project is built using Next.js 16 (App Router) and Tailwind CSS, featuring smooth scrolling via Lenis, and advanced animations using GSAP and Framer Motion.

## Tech Stack Comparison

**Original Site Stack (Legacy):**
- **CMS:** WordPress
- **Page Builder:** Elementor (Hello Elementor Theme)
- **Backend:** PHP 8
- **Server:** LiteSpeed
- **Hosting:** Hostinger

**New Redesign Stack (Modern):**
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Animations:** GSAP & Framer Motion
- **Smooth Scrolling:** Lenis
- **Analytics:** Vercel Analytics

## Getting Started

First, install the dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Development server                                         |
| `npm run build`     | Production build                                           |
| `npm run start`     | Serve the production build                                 |
| `npm run typecheck` | `tsc --noEmit`                                             |
| `npm run lint`      | ESLint (Next 16 no longer lints during `build`)            |
| `npm run verify`    | typecheck → lint → build; run this before pushing          |

## Project structure

```
src/
├─ app/                    # routing layer only — pages and metadata routes
│  ├─ layout.tsx           # metadata defaults, JSON-LD
│  ├─ page.tsx             # /
│  ├─ blog/                # /blog and articles
│  ├─ not-found.tsx  error.tsx  global-error.tsx
│  └─ sitemap.ts  robots.ts  manifest.ts  icon.tsx  opengraph-image.tsx
├─ components/
│  ├─ layout/              # HeaderTop, SiteHeader, SiteFooter
│  ├─ home/                # homepage sections
│  └─ blog/{shared,listing,article}/
├─ lib/                    # site config, SEO helpers, structured data
├─ styles/                 # globals.css, blog.css, system.module.css
└─ instrumentation.ts
public/                    # fonts, images
docs/
```

`@/*` resolves to `src/*` — import with `@/components/…`, never `../../`.
Keep `src/app/` for routing files; a page's sections belong in
`src/components/<area>/`.

## Adding pages

See **[docs/ADDING-PAGES.md](docs/ADDING-PAGES.md)**. In short: create
`src/app/<route>/page.tsx`, export `metadata` built with `createMetadata` from
`@/lib/seo`, and the sitemap, canonical URL and social card are handled for
you.

## Production setup

| Concern                       | Where it lives                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------ |
| Hospital name, phone, socials | `src/lib/site.ts` — single source of truth                                                 |
| Page metadata helper          | `src/lib/seo.ts`                                                                           |
| schema.org JSON-LD            | `src/lib/structured-data.ts`, emitted from `src/app/layout.tsx`                            |
| Sitemap / robots              | `src/app/sitemap.ts` (auto-discovers routes), `src/app/robots.ts`                          |
| Favicons, manifest, OG card   | `src/app/icon.tsx`, `src/app/apple-icon.tsx`, `src/app/manifest.ts`, `src/app/opengraph-image.tsx` |
| Security headers + CSP        | `next.config.ts` (CSP applies in production only)                                          |
| 404 and error boundaries      | `src/app/not-found.tsx`, `src/app/error.tsx`, `src/app/global-error.tsx`                   |
| Server error logging          | `src/instrumentation.ts`                                                                   |

### Environment

Copy `.env.example` to `.env.local` for local work, and set the same keys in the
host's environment for production. `NEXT_PUBLIC_SITE_URL` drives every canonical
URL and the sitemap, so it must be correct in production.

---


