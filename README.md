# Angels Avenue

Marketing website for Angels Avenue, a hilltop homestay opposite Bethanya
Church in Karkala, Karnataka. Single-page React app (with standalone
`/privacy` and `/terms` routes) built with Vite.

## Stack

- React 19 + React Router 7
- Framer Motion for scroll/entry animations
- SASS modules for styling
- Vite 8 for dev server and production build

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Project structure

- `src/components/` — one folder per page section (Navbar, Hero, About,
  Gallery, Attractions, Reviews, Booking, Contact, Map, Footer, Lightbox)
- `src/pages/` — route-level pages (`Home`, `Privacy`, `Terms`)
- `src/data/content.js` — all real business content (contact info, address,
  gallery images, nearby attractions, reviews, booking platform links).
  Update this file to change site copy without touching components.
- `src/hooks/` — `useScrolled`, `useSectionNav` (in-page smooth-scroll
  navigation, including cross-route), `useDocumentHead` (per-route title /
  meta description / canonical tag)
- `public/` — static assets, favicons, `robots.txt`, `sitemap.xml`,
  Netlify `_headers` and `_redirects`

## Deployment (Netlify)

This project deploys as a static SPA. Two Netlify config files in `public/`
matter at deploy time:

- `_redirects` — rewrites all paths to `index.html` so client-side routes
  (`/privacy`, `/terms`) work on direct load/refresh, not just client
  navigation.
- `_headers` — cache-control and security headers, including a
  Content-Security-Policy in **report-only** mode. Check the browser
  console on the live deploy for any CSP violations, then switch it to an
  enforced `Content-Security-Policy` header once confirmed clean.

If moving off Netlify, replicate both files' behavior in the new host's
config (SPA fallback + headers).
