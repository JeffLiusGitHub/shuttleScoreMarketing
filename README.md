# ShuttleScore Marketing Website

Vite + React SSR marketing site for ShuttleScore.

## Stack

- Vite SSR
- React
- React Router
- lucide-react
- Plain CSS with Apple-style responsive layout

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Set these when deploying:

```bash
VITE_SITE_URL=https://shuttlescore.app
VITE_APP_STORE_URL=https://apps.apple.com/app/your-real-app-id
VITE_SUPPORT_EMAIL=support@shuttlescore.app
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`VITE_GA_MEASUREMENT_ID` is optional. The site works without analytics.

## Replace Before Public Launch

- Real App Store URL.
- Real support email.
- Final privacy policy and terms reviewed for launch.
- Final `VITE_SITE_URL`, `public/sitemap.xml`, and `public/robots.txt`.
- Final social links.
- Final pricing labels once subscriptions are live.
