# Changelog — Production Readiness Pass

Scope: technical/semantic SEO, security audit, and production cleanup.
No visual design, layout, animation, or functional behavior was changed.

## Fixed

- **Production build was broken.** `vite.config.js` used the object form of
  `rollupOptions.output.manualChunks`. The Rolldown bundler that ships with
  this Vite version rejects that form (`TypeError: manualChunks is not a
  function`) — `npm run build` failed outright. Rewrote it as the equivalent
  function form; output is unchanged (`vendor-react` and `vendor-motion`
  still split into their own chunks).
- **Missing SPA fallback for Netlify.** The app uses `react-router-dom`
  client-side routing (`/`, `/privacy`, `/terms`) but had no `_redirects`
  file. A direct link or page refresh on `/privacy` or `/terms` would have
  404'd on Netlify. Added `public/_redirects` with a catch-all rewrite to
  `index.html`.

## Added

- `public/robots.txt`
- `public/sitemap.xml` (lists `/`, `/privacy`, `/terms`)
- `public/_redirects` (Netlify SPA fallback)
- `<meta name="robots">` and `<link rel="canonical">` in `index.html`
- `LodgingBusiness` JSON-LD structured data in `index.html`, built from the
  real business data already in `src/data/content.js` (name, address,
  phone numbers, social links)
- `src/hooks/useDocumentHead.js` — sets `document.title`, meta description,
  canonical URL, and OG/Twitter title+description per route, since this is
  a client-rendered SPA with more than one route but a single static
  `index.html`. Wired into `Home.jsx`, `Privacy.jsx`, `Terms.jsx`.
- Additional security response headers in `public/_headers`:
  `X-Frame-Options`, `Permissions-Policy`, `Strict-Transport-Security`,
  and a `Content-Security-Policy-Report-Only` policy (see
  `SECURITY_REPORT.md` for why it's report-only for now).
- Real `README.md` (was the default Vite/React template text)

## Changed

- `index.html` — Open Graph and Twitter image URLs were relative
  (`/images/angel.webp`); social crawlers require absolute URLs to resolve
  preview images, so these are now `https://angelsavenue.in/images/angel.webp`.
  Added `og:locale`.

## Cleaned up

- Removed an empty stray directory at
  `src/components/{Navbar,Hero,About,Gallery,Reviews,Booking,Contact,Map,Footer,Lightbox}`
  — a leftover from an earlier shell brace-expansion typo (the literal
  `{...}` string was created as a directory name instead of expanding).
  It contained no files and nothing referenced it.
- Normalized `src/hooks/useSectionNav.js` from CRLF to LF line endings to
  match the rest of the codebase.

## Verified, not changed

- No `console.log`/`console.debug`/`console.warn` calls in `src/`.
- No `dangerouslySetInnerHTML`, `eval`, or `document.write` in `src/`.
- No hardcoded API keys, tokens, or secrets anywhere in the project.
- `npm audit` — 0 vulnerabilities across all dependencies.
- All 39 image files under `public/images/` are referenced from `src/`;
  none are orphaned.
- All in-page nav anchors (`#home`, `#about`, `#gallery`, `#attractions`,
  `#reviews`, `#contact`) resolve to a real `id` in the DOM.
- External links already correctly use `rel="noreferrer"` (which the HTML
  spec requires browsers to treat as also implying `noopener`).
- `npm run build` succeeds; `npm run lint` (oxlint) reports 0 errors, 1
  pre-existing warning (see `PRODUCTION_READINESS_REPORT.md`).
