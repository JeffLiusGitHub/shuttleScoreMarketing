export const siteConfig = {
  appName: 'Sevix',
  tagline: 'Score the rally. Train with evidence.',
  description: 'Apple Watch scoring, iPhone scoreboard, and local coaching evidence for badminton.',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://sevix-badminton.netlify.app',
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/app/id6764564793',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@sevix.app',
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
