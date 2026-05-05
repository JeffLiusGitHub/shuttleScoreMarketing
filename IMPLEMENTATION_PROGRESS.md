# Marketing Website Implementation Progress

## Completed

- [x] Adapted the generic Apple App marketing PRD to ShuttleScore-specific positioning.
- [x] Created a Vite + React SSR project structure.
- [x] Added server-rendered routing for homepage, guides, guide detail, privacy, terms, contact, and fallback pages.
- [x] Added route-level SEO metadata, canonical URLs, Open Graph, Twitter cards, SoftwareApplication JSON-LD, and FAQPage JSON-LD for guides.
- [x] Added optional GA event tracking for App Store CTA clicks and guide clicks.
- [x] Built homepage copy around Apple Watch scoring, iPhone sync, local AI coach, hexagon dimensions, fitness, heart rate, recovery, progress, and training.
- [x] Added ShuttleScore visual assets from the app bundle.
- [x] Added product-style iPhone, Apple Watch, AI coach, and progress chart mockups.
- [x] Added guide content for awareness, evaluation, comparison, and decision stages.
- [x] Added privacy, terms, and contact pages.
- [x] Added README, robots, sitemap, default OG image, and deployment notes.

## Verification

- [x] Install npm dependencies.
- [x] Run `npm run build`.
- [x] Run local SSR server.
- [x] Verify homepage SSR response returns `200 OK`.
- [x] Verify homepage and guide detail include route-level SEO and JSON-LD.
- [x] Add automatic fallback to the next local port when `127.0.0.1:5173` is already in use.
- [x] Deploy production marketing site to Netlify: https://shuttlescore.netlify.app
- [ ] Inspect desktop/mobile layout visually in browser.
- [ ] Replace placeholder App Store URL with the real App Store listing.
- [ ] Replace placeholder support email and final legal copy before public launch.

## Design Notes

- Visual direction follows a white-blue diffuse gradient with real badminton imagery.
- Scoreboard mockup uses black score tiles with white numerals and Home / Guest labels.
- The site emphasizes actual product workflows rather than abstract decoration.
- Pricing section positions base scoring as free and AI coach depth as paid.
