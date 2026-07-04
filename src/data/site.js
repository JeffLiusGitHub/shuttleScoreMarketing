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
  supportEmail: readEnv('VITE_SUPPORT_EMAIL', 'support@sevix.app'),
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
    title: 'Watch Scoring',
    description: 'Pinch, tap, or turn the Crown.',
    icon: 'watch'
  },
  {
    title: 'iPhone Scoreboard',
    description: 'Big score, server, side, and time.',
    icon: 'radar'
  },
  {
    title: 'Match Setup',
    description: 'Singles, doubles, points, games, colours.',
    icon: 'setup'
  },
  {
    title: 'Heart Rate Context',
    description: 'See when fatigue changes points.',
    icon: 'heart'
  },
  {
    title: 'Local AI Coach',
    description: 'A clear next drill after each match.',
    icon: 'brain'
  },
  {
    title: 'History and Trends',
    description: 'Notes, filters, and progress trends.',
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
    question: 'Do I need Apple Watch to use Sevix?',
    answer:
      'Sevix is built around Apple Watch scoring and iPhone review. The best flow is to score from Watch during play and review on iPhone after the match.'
  },
  {
    question: 'Does Sevix support doubles?',
    answer:
      'Yes. Sevix supports singles and doubles match setup, including scoring flow, server context, history, notes, and post-match review.'
  },
  {
    question: 'Does the coach require video or cloud analysis?',
    answer:
      'No. Sevix focuses on local, explainable review from the point timeline, workout data, heart-rate context, motion summaries, and match history.'
  },
  {
    question: 'What should a club player try first?',
    answer:
      'Use Sevix for one singles or doubles game: set the match, score each rally from Watch, then check the iPhone match history after play.'
  }
];
