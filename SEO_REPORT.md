# SEO Report — Angels Avenue

## 1. Technical SEO

| Item | Before | After |
|---|---|---|
| `<title>` | Present, descriptive: "Angels Avenue \| Hilltop Homestay, Karkala" | Unchanged — already good |
| Meta description | Present, descriptive | Unchanged — already good |
| Canonical | Missing | Added, per-route (`/`, `/privacy`, `/terms`) |
| Robots meta | Missing | Added `<meta name="robots" content="index, follow">` |
| `robots.txt` | Missing | Added — allows all crawlers, points to sitemap |
| `sitemap.xml` | Missing | Added — lists all 3 real routes |
| Open Graph | Present, but `og:image` was a relative URL | Fixed to absolute URL; added `og:locale` |
| Twitter Cards | Present, but `twitter:image` was a relative URL | Fixed to absolute URL |
| JSON-LD | Missing | Added `LodgingBusiness` schema |

### Why the relative OG/Twitter image URL mattered
`og:image` and `twitter:image` must be absolute URLs. Social platforms'
scrapers (Facebook, WhatsApp, X/Twitter, LinkedIn) fetch these values as
opaque strings and do not resolve them against the page's own origin —
a relative path like `/images/angel.webp` typically results in a broken
or missing link preview.

### JSON-LD schema chosen
`LodgingBusiness` (schema.org) — the correct type for a homestay/guest
house, more specific than the generic `LocalBusiness`. Populated from the
existing `siteInfo` object in `src/data/content.js`:

- `name`, `description`, `url`, `image`
- `telephone` (both listed numbers)
- `address` as a structured `PostalAddress` (street, locality, region,
  postal code, country)
- `sameAs` (Instagram, Facebook)

**Not included:** `geo` (latitude/longitude) and `priceRange`. Karkala's
town-level coordinates could be guessed, but an inaccurate GPS pin on a
`LodgingBusiness` listing can actively hurt local map ranking rather than
help it — worse than omitting it. Add exact GPS coordinates (from Google
Maps' "share location" on the actual property) when available, plus
`priceRange` if you want to advertise a rate band. `aggregateRating` was
also deliberately omitted — the real guest reviews live in
`src/data/content.js`, but schema.org's `aggregateRating` requires
declaring a review count and average that should be sourced from your
verified review platform (Google/MakeMyTrip/Airbnb), not recomputed from
a curated subset shown on the page.

## 2. Semantic SEO — audited, no changes needed

- **Heading hierarchy:** single `<h1>` in the Hero ("Where Peace Meets the
  Hilltops"), followed by `<h2>` section titles (About, Gallery,
  Attractions, Reviews, Booking, Contact) and `<h3>` for card-level
  headings (feature cards, attraction cards, booking platform cards,
  review author names). No level is skipped.
- **Image alt text:** every `<img>` has a descriptive, non-generic `alt`
  (e.g. "Panoramic hilltop view from Angels Avenue homestay, Karkala",
  gallery images use their category/label). None are empty or filename-based.
- **Descriptive buttons/links:** nav and CTA buttons use real words ("Book
  Now", "Book via WhatsApp", "Get Directions") rather than "click here"
  or bare icons without `aria-label`. Icon-only buttons (menu, lightbox
  close/prev/next) all carry `aria-label`.
- **Semantic HTML:** `<header>`, `<nav aria-label="Primary">`, `<main
  id="main-content">`, `<section>` per content block with meaningful
  `id`s, `<footer>`, `<article>` for attraction cards. A skip-to-content
  link is present for accessibility (which also benefits SEO crawl
  structure).
- **Internal linking:** in-page nav links to all major sections; footer
  duplicates quick links plus links to `/privacy` and `/terms` via
  React Router `<Link>` (real anchor tags, crawlable). Attraction cards
  link out to Google Maps directions.

## Follow-ups worth doing (not done here — need info I don't have)

1. Add exact GPS coordinates to the JSON-LD `geo` property once you have
   them from the property's actual Google Maps pin.
2. Consider adding `aggregateRating` sourced directly from your Google
   Business Profile or a booking platform's API/export, not hand-curated
   text reviews.
3. If you get a real Google Business Profile listing, cross-link it from
   the site and vice versa — this compounds local SEO more than on-page
   schema alone.
