export const siteConfig = {
  appName: 'ShuttleScore',
  tagline: 'Score your match. Understand your game.',
  description:
    'Apple Watch scoring and local, explainable badminton coaching for players who want to understand points, heart rate, fitness, recovery, and training priorities.',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://shuttlescore.app',
  appStoreUrl: import.meta.env.VITE_APP_STORE_URL || 'https://apps.apple.com/app/shuttlescore',
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || 'support@shuttlescore.app',
  copyrightName: 'ShuttleScore',
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
    title: 'Apple Watch Scoring',
    description: 'Add points during real rallies without reaching for your phone. The iPhone scoreboard follows the active match state.',
    icon: 'watch'
  },
  {
    title: 'Local AI Coach',
    description: 'Turn scores, point timing, heart rate, and motion into deterministic coaching cards that explain what changed.',
    icon: 'brain'
  },
  {
    title: 'Hexagon Performance',
    description: 'Review serve, receive, rotation, clutch, momentum, and tempo as one readable performance profile.',
    icon: 'radar'
  },
  {
    title: 'Fitness Context',
    description: 'Connect heart rate and point outcomes so fatigue, pressure, and second-half drop-offs are easier to understand.',
    icon: 'heart'
  },
  {
    title: 'Recovery Guidance',
    description: 'See recovery demand, likely fatigue type, body focus, and whether the next session should be lighter.',
    icon: 'battery'
  },
  {
    title: 'Progress History',
    description: 'Filter singles or doubles, wins or losses, and recent trends to see whether your game is moving forward.',
    icon: 'chart'
  }
];

export const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For players who want a clean match scorer.',
    items: ['Apple Watch scoring', 'iPhone live scoreboard', 'Basic match history']
  },
  {
    name: 'Pro',
    price: 'Monthly or yearly',
    description: 'For players who want the local coach and deeper trends.',
    items: ['Full AI coach cards', 'Fitness and recovery insights', 'Progress charts', 'Advanced history filters'],
    highlighted: true
  },
  {
    name: 'Lifetime',
    price: 'One-time',
    description: 'For regular players who want long-term ownership.',
    items: ['All Pro features', 'Lifetime access', 'Future local coaching upgrades']
  }
];
