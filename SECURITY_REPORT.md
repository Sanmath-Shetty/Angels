# Security Report — Angels Avenue

## Summary

No XSS vectors, no exposed secrets, and no vulnerable dependencies were
found. The codebase was already following good practice on external
links. The main additions here are response-header hardening.

## 1. XSS / unsafe HTML

- **`dangerouslySetInnerHTML`:** not used anywhere in `src/`.
- **`eval` / `new Function`:** not used anywhere.
- **`document.write` / raw `.innerHTML`:** not used anywhere.
- All user-facing text (reviews, attraction descriptions, legal copy) is
  static content authored in `src/data/content.js` and the page
  components themselves — not user-submitted at runtime, so there's no
  live injection surface. There is no contact/booking form on the site
  that accepts and renders back user input.

**Verdict: no XSS risk found.**

## 2. Dangerous URLs / third-party scripts

- No third-party `<script src>` tags beyond the Google Fonts stylesheet
  link (CSS, not JS) and the app's own bundled JS.
- The only embedded third party is the Google Maps iframe
  (`maps.google.com`), loaded with `loading="lazy"` and
  `referrerPolicy="no-referrer-when-downgrade"`.
- All outbound links (WhatsApp, Instagram, Facebook, booking platforms,
  Google Maps directions) point to their real, correct domains — nothing
  suspicious or obfuscated.

## 3. `rel="noopener noreferrer"`

Every `target="_blank"` link already carries `rel="noreferrer"`. Per the
HTML Living Standard, `noreferrer` on its own already implies the
`noopener` behavior (the new tab cannot get a `window.opener` reference
back to the originating page) in all current browsers — so these links
were already safe from tab-nabbing. No change made.

## 4. Exposed secrets / API keys

Searched `src/` and the repo root for API keys, tokens, passwords, and
similar patterns: none found. There is no `.env` file and nothing in the
codebase requires one — the site has no backend calls, auth, or paid API
usage. The Google Maps embed and Google Fonts links are public,
keyless usage.

## 5. Dependency vulnerabilities

`npm audit` (all dependencies, including dev): **0 vulnerabilities.**

## 6. Response headers (`public/_headers`)

Already present before this pass: `X-Content-Type-Options: nosniff`,
`Referrer-Policy: strict-origin-when-cross-origin`, plus sane
`Cache-Control` rules per asset type.

Added in this pass:

- `X-Frame-Options: SAMEORIGIN` — prevents the site being framed by
  another origin (clickjacking protection).
- `Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=()`
  — the site uses none of these browser APIs, so they're explicitly
  disabled.
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  — enforces HTTPS for the domain and its subdomains going forward.
- `Content-Security-Policy-Report-Only` — see below.

### Why the CSP is report-only, not enforced

I wrote a CSP that should be compatible with everything on the site
today:

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https://dulcet-youtiao-d7a470.netlify.app;
frame-src https://maps.google.com https://www.google.com;
connect-src 'self' https://dulcet-youtiao-d7a470.netlify.app;
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'self';
```

Notes on why each `'unsafe-inline'` is there, and the risk of removing
it blind:

- `script-src 'unsafe-inline'` is needed for the JSON-LD
  `<script type="application/ld+json">` block added for SEO. This could
  instead be locked down with a `sha256-` hash of that exact script's
  contents, but the hash breaks the moment anyone edits the JSON-LD (e.g.
  updates the phone number), silently reintroducing a CSP violation with
  no visible error to the person who made the edit. `'unsafe-inline'` is
  the safer default for a low-traffic marketing site maintained by
  non-security-specialists.
- `style-src 'unsafe-inline'` is needed because Framer Motion animates by
  setting the `style` attribute directly on DOM nodes at runtime (not via
  a stylesheet) — this is core to how every animation on this site works,
  and a strict `style-src` would silently break all of them.

I deployed this as `Content-Security-Policy-Report-Only` rather than an
enforced `Content-Security-Policy` because I can't load the live,
deployed site in a real browser from here to confirm the policy doesn't
block something I haven't accounted for (in particular, I chose the
image `img-src` and `connect-src` origins from what I could see in the
source — a runtime-loaded asset I missed would silently break under
enforcement, but only log a console warning under report-only).

**Recommended next step:** deploy this, open the live site, check the
browser console (or Netlify's own header/report tooling) for any CSP
violation warnings over a few days of normal use, then rename the header
from `Content-Security-Policy-Report-Only` to `Content-Security-Policy`
in `public/_headers` once you've confirmed there are none.

## 7. Netlify `_redirects` and SPA routing note

Unrelated to security directly, but worth flagging here too: this app is
client-side routed (`react-router-dom` `BrowserRouter`) and had no SPA
fallback configured for Netlify, meaning `/privacy` and `/terms` would
404 on direct load. Fixed with `public/_redirects` — see
`PRODUCTION_READINESS_REPORT.md`.
