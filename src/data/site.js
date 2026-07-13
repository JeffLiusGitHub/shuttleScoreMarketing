const viteEnv = import.meta.env || {};
const nodeEnv = typeof process === 'undefined' ? {} : process.env;

function readEnv(name, fallback = '') {
  return viteEnv[name] || nodeEnv[name] || fallback;
}

const defaultAppStoreUrl = readEnv('VITE_APP_STORE_URL', 'https://apps.apple.com/app/id6764564793');

export const siteConfig = {
  appName: 'Sevix',
  tagline: 'Score the rally. Train with evidence.',
  description: 'Apple Watch scoring, iPhone scoreboard, and local coaching evidence for badminton.',
  siteUrl: readEnv('VITE_SITE_URL', 'https://sevix-badminton.netlify.app'),
  appStoreUrl: defaultAppStoreUrl,
  campaignAppStoreUrls: {
    appleWatch: readEnv('VITE_APP_STORE_URL_APPLE_WATCH', defaultAppStoreUrl),
    clubTrial: readEnv('VITE_APP_STORE_URL_CLUB_TRIAL', defaultAppStoreUrl)
  },
  supportEmail: readEnv('VITE_SUPPORT_EMAIL', 'sevixcoach@gmail.com'),
  copyrightName: 'Sevix',
  socialLinks: [
    { label: 'X', href: '#coming-soon' },
    { label: 'Threads', href: '#coming-soon' },
    { label: 'Discord', href: '#coming-soon' }
  ]
};

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Guides', href: '/guides' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: '/contact' }
];

export const features = [
  {
    title: 'Wrist Motion Tracking',
    description: 'Apple Watch detects swing, step pace, and intensity automatically.',
    icon: 'watch'
  },
  {
    title: 'Heart Rate Context',
    description: 'See exactly when fatigue starts losing you points.',
    icon: 'heart'
  },
  {
    title: 'Point Ownership',
    description: 'Who lost that rally? The AI checks serve, swings, and pressure to attribute responsibility.',
    icon: 'radar'
  },
  {
    title: 'Detailed Recovery',
    description: 'Breaks fatigue into Cardio, Neural, Muscular, and Pacing types.',
    icon: 'setup'
  },
  {
    title: 'Causal AI Coach',
    description: 'Transparent reasoning. No black boxes. A clear drill backed by match evidence.',
    icon: 'brain'
  },
  {
    title: 'History and Trends',
    description: 'Review notes, filters, and progress trends without needing video.',
    icon: 'history'
  }
];

export const trustSignals = [
  {
    value: 'Watch + iPhone',
    label: 'Score from the wrist, keep the large board on the phone.'
  },
  {
    value: 'Singles + doubles',
    label: 'Set up common club match formats before play starts.'
  },
  {
    value: 'Local review',
    label: 'Review score flow, heart rate, notes, and coach evidence without video.'
  }
];

export const campaignTeasers = [
  {
    title: 'Apple Watch badminton scoring',
    description: 'A focused landing page for players searching for a wrist-first scoring flow.',
    href: '/campaign/apple-watch-badminton-scoring',
    cta: 'Open campaign page'
  },
  {
    title: 'Club trial kit',
    description: 'A QR-ready page for club nights, coaches, and feedback collection.',
    href: '/campaign/club-trial',
    cta: 'Open club page'
  }
];

export const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'Start scoring.',
    items: ['Watch and iPhone scoring', 'Recent match history', 'Starter analysis']
  },
  {
    name: 'Pro',
    price: 'Monthly or yearly',
    description: 'Train with the evidence.',
    items: ['Local AI Coach', 'Heart-rate and recovery insights', 'Full history and trends', 'HealthKit workout analysis'],
    highlighted: true
  },
  {
    name: 'Lifetime',
    price: 'One-time',
    description: 'Own the coach.',
    items: ['All Pro features', 'Lifetime access', 'Future coaching upgrades']
  }
];

export const homepageFaqs = [
  {
    question: 'How does the Local AI Coach work?',
    answer: 'The AI coach combines your match score timeline, Apple Watch heart rate, wrist motion data (swings/steps), and historical Hexagon stats. It runs completely locally on your device to generate highly specific training drills (e.g., "Receive Under Fatigue") backed by causal evidence.'
  },
  {
    question: 'Do I need Apple Watch to use Sevix?',
    answer:
      'Sevix is built around Apple Watch scoring and iPhone review. The best flow is to score from Watch during play and review on iPhone after the match.'
  },
  {
    question: 'Does Sevix support doubles?',
    answer:
      'Yes. Sevix supports singles and doubles match setup, including scoring flow, server context, history, and our unique Point Ownership attribution to see who won or lost the key rallies.'
  },
  {
    question: 'Does the coach require video or cloud analysis?',
    answer:
      'No. Sevix focuses on local, explainable review from the point timeline, workout data, heart-rate context, motion summaries, and match history. Completely private. No video required.'
  }
];
