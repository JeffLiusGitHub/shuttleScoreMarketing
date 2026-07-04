# Sevix Marketing Website

Vite + React SSR marketing site for Sevix.

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
VITE_SITE_URL=https://sevix-badminton.netlify.app
VITE_APP_STORE_URL=https://apps.apple.com/app/id6764564793
VITE_APP_STORE_URL_APPLE_WATCH=https://apps.apple.com/app/id6764564793
VITE_APP_STORE_URL_CLUB_TRIAL=https://apps.apple.com/app/id6764564793
VITE_SUPPORT_EMAIL=support@sevix.app
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`VITE_GA_MEASUREMENT_ID` is optional. The site works without analytics.
The campaign App Store URLs can point to Apple Custom Product Page URLs when they are available.

## Replace Before Public Launch

- Confirm `support@sevix.app` mailbox is active.
- Final privacy policy and terms reviewed for launch.
- Optional: register `sevix.app` and connect it in Netlify Domain management if you want a custom branded domain.
- Final social links.
- Final pricing labels once subscriptions are live.
