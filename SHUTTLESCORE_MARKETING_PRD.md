# ShuttleScore Marketing Website PRD

This project adapts `MARKETING_PRD_GENERIC_APPLE_APP.md` for ShuttleScore.

## Product Positioning

ShuttleScore is an Apple Watch + iPhone badminton scoring app with a local, deterministic AI coach.

Primary promise:

> Score your match. Understand your game.

Secondary promise:

> Fast Apple Watch scoring with iPhone sync and local coaching insights across six-dimension performance, fitness, heart rate, recovery, progress, and training.

## Target Users

- Badminton players who want fast match scoring without interrupting play.
- Players who want post-match insight but do not record video.
- Apple Watch users who want heart-rate context connected to point outcomes.
- Singles and doubles players who want match history and trend comparison.

## Required Pages

- `/` Landing page.
- `/guides` SEO guide index.
- `/guides/:slug` decision-style guide detail.
- `/privacy` privacy page draft.
- `/terms` terms page draft.
- `/contact` support page.

## Homepage Messaging

Sections:

- Hero with ShuttleScore name, Apple Watch + iPhone value prop, App Store CTA, actual product-style mockups.
- Feature grid covering scoring, local AI coach, hexagon performance, fitness, recovery, and progress history.
- Live scoring feature section.
- Local AI coach feature section.
- Progress and history feature section.
- Privacy by design section.
- Pricing direction section.

## Conversion Strategy

Primary CTA: Download on the App Store.

CTA placements:

- Desktop nav.
- Mobile nav.
- Hero.
- Guide detail.
- Footer.

## SEO / GEO Content

Guide topics:

- Apple Watch badminton scoring.
- Match review without video.
- Heart-rate context for lost points.
- Singles vs doubles scoring differences.
- Recovery after badminton.
- Trustworthy local AI coaching.

## Technical Requirements

- Vite SSR, not pure SPA.
- React Router with server-rendered page output.
- Per-route meta title, description, canonical, OG, Twitter card.
- Guide pages include FAQPage JSON-LD and SoftwareApplication JSON-LD.
- Optional GA tracking.
- Sitemap, robots, default OG image.

## Launch Notes

Before public launch, replace placeholder App Store URL, support email, final legal copy, and production domain.
