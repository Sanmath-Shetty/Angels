# Production Readiness Report — Angels Avenue

## Final validation

| Check | Result |
|---|---|
| Production build (`npm run build`) | ✔ Succeeds — was broken before this pass, see below |
| Lint (`npm run lint` / oxlint) | ✔ 0 errors, 1 pre-existing warning (see below) |
| Dependency vulnerabilities (`npm audit`) | ✔ 0 found |
| `console.log` / debug statements in `src/` | ✔ None found |
| TODO / FIXME / placeholder content | ✔ None found |
| Unused image assets | ✔ None — all 39 files in `public/images/` are referenced |
| Broken internal links / anchors | ✔ None — every nav anchor resolves to a real section `id` |
| SEO (title, description, canonical, robots, sitemap, OG, Twitter, JSON-LD) | ✔ Complete |
| Security headers | ✔ Added; CSP shipped report-only pending live verification (see `SECURITY_REPORT.md`) |
| SPA routing on deploy host | ✔ Fixed — `_redirects` added for Netlify |

## Build blocker found and fixed

`npm run build` failed before this pass:

```
TypeError: manualChunks is not a function
```

Cause: `vite.config.js` used the object-map form of
`rollupOptions.output.manualChunks` (`{ 'vendor-react': [...], ... }`).
The Rolldown bundler bundled with this project's Vite version doesn't
support that form — it expects a function. Rewrote it as a function that
produces the identical chunk split (`vendor-react`, `vendor-motion`),
verified with a clean install and build:

```
dist/assets/vendor-react-*.js    181.79 kB
dist/assets/vendor-motion-*.js   141.32 kB
dist/assets/index-*.js            92.79 kB
dist/assets/Privacy-*.js            3.80 kB
dist/assets/Terms-*.js              4.65 kB
✓ built in ~2s
```

This means the project as originally handed off **could not have been
deployed** in this state — `vite build` is what every static host
(Netlify, Vercel, etc.) runs to produce the deployable output. This is
the single most important fix in this pass.

## Remaining lint warning (not fixed — pre-existing, low risk, out of scope)

```
react-hooks(exhaustive-deps): The ref's value `.current` is accessed
directly in the effect cleanup function.
  src/components/Navbar/Navbar.jsx:39
```

This flags that `burgerRef.current` is read inside a cleanup function
rather than captured into a local variable first. In practice this is
safe here — the ref points to a DOM node that isn't unmounted or
reassigned during the menu's open/close cycle — but it's a common React
lint nitpick. I did not touch it because doing so means editing
component logic, which is outside the "don't redesign / don't change
functionality" scope of this pass; it's a lint warning, not a build
error, and doesn't block deployment.

## Sass deprecation warning (not fixed — same reasoning)

The build emits `@import` deprecation warnings (Dart Sass is removing
`@import` in favor of `@use`/`@forward` in a future major version). This
is a warning, not a build failure, and every `.module.scss` file uses the
same pattern — migrating it means touching every stylesheet's import and
variable-scoping and re-verifying visually that nothing shifted, which is
a real regression risk without the ability to visually QA here. Flagging
it for a dedicated, tested pass rather than doing it blind.

## What was NOT changed

Per the brief, no design, layout, animation, or user-facing functionality
was altered. Every change in this pass is one of:

1. A fix to something objectively broken (the build, the SPA routing).
2. An addition (SEO tags/files, security headers, README, hook for
   per-route meta).
3. A cleanup of dead/stray artifacts (empty directory, line endings,
   boilerplate README).

## Deliverables in this ZIP

- `angels-avenue/` — the full, production-ready project source
  (`node_modules/` and `dist/` excluded — run `npm install && npm run
  build` to produce a fresh build)
- `CHANGELOG.md`
- `SEO_REPORT.md`
- `SECURITY_REPORT.md`
- `PRODUCTION_READINESS_REPORT.md` (this file)

## Before you deploy

1. Run `npm install && npm run build` fresh in CI/your deploy pipeline
   (don't ship the `dist/` from this session).
2. After deploy, watch the browser console for CSP report-only violations
   for a few days, then switch `Content-Security-Policy-Report-Only` to
   `Content-Security-Policy` in `public/_headers` (see
   `SECURITY_REPORT.md`).
3. Add exact GPS coordinates to the JSON-LD once available (see
   `SEO_REPORT.md`).
4. Confirm `https://angelsavenue.in` is in fact the domain going live on
   — canonical URLs, the sitemap, `robots.txt`, and the JSON-LD `url`
   field all assume it (it was already referenced as the intended domain
   in the pre-existing `og:url` tag).
