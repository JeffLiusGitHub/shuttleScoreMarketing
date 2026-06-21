export const guides = [
  {
    id: '01',
    slug: 'score-badminton-with-apple-watch',
    stage: 'Awareness',
    question: 'How can I score badminton with Apple Watch without interrupting play?',
    answer:
      'Use the watch for the action you need during a rally break: add a point, check the server, and keep the phone scoreboard in sync. The best scoring flow removes extra taps and keeps the phone as the larger match display.',
    dataPoint: 'The watch should be the input surface during play; the phone should be the review and display surface after each point.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Apple Watch app design guidance', href: 'https://developer.apple.com/design/human-interface-guidelines/watchos' },
      { label: 'Sevix local scoring model', href: '/' }
    ]
  },
  {
    id: '02',
    slug: 'review-badminton-without-video',
    stage: 'Evaluation',
    question: 'What can I review after badminton if I do not record video?',
    answer:
      'You can still review serve impact, receive impact, clutch points, momentum streaks, rally tempo, heart-rate context, and recovery demand. A deterministic system is useful when it clearly explains which data created each suggestion.',
    dataPoint: 'Point events, score state, heart rate, and motion summaries are enough to create explainable coaching signals without shot-level video.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Apple HealthKit overview', href: 'https://developer.apple.com/health-fitness/' },
      { label: 'Sevix local AI coach model', href: '/' }
    ]
  },
  {
    id: '03',
    slug: 'heart-rate-lost-points-badminton',
    stage: 'Evaluation',
    question: 'How can heart rate explain lost points in badminton?',
    answer:
      'Heart rate does not explain every lost point, but it gives useful context. If win rate drops when heart rate stays high, the issue may be fatigue, pacing, pressure, or decision quality rather than only technique.',
    dataPoint: 'A better fitness view connects heart rate to point outcomes instead of showing average and max heart rate alone.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Apple Health and fitness technologies', href: 'https://developer.apple.com/health-fitness/' },
      { label: 'Sevix fitness insight model', href: '/' }
    ]
  },
  {
    id: '04',
    slug: 'singles-vs-doubles-badminton-scoring',
    stage: 'Comparison',
    question: 'What should change between singles and doubles scoring?',
    answer:
      'Singles can keep the analysis focused on one player per side. Doubles needs rotation, partner position, and server ownership. A good scorer lets the match mode change the court logic without changing the core point timeline.',
    dataPoint: 'Singles and doubles can share point events, scoring rules, history, fitness, and recovery while using different court position logic.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Badminton World Federation', href: 'https://bwfbadminton.com/' },
      { label: 'Sevix match mode model', href: '/' }
    ]
  },
  {
    id: '05',
    slug: 'when-to-recover-after-badminton',
    stage: 'Decision',
    question: 'When should I recover instead of training harder after badminton?',
    answer:
      'Recover when multiple signals point in the same direction: long duration, high heart-rate load, reduced second-half win rate, high pressure response, intense motion, or a long lost-point streak.',
    dataPoint: 'Recovery recommendations are more useful when they combine match load, pressure, motion, and outcome changes.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Apple Health and Fitness', href: 'https://www.apple.com/healthcare/health-records/' },
      { label: 'Sevix recovery score', href: '/' }
    ]
  },
  {
    id: '06',
    slug: 'local-ai-coach-badminton',
    stage: 'Decision',
    question: 'What makes a local AI badminton coach trustworthy?',
    answer:
      'It should be private, deterministic, and explainable. The app should show the user which score, fitness, motion, and progress signals led to the advice instead of presenting generic coaching text.',
    dataPoint: 'For match review, clear rules and visible evidence are often more useful than opaque predictions.',
    updatedAt: '2026-05-03',
    sources: [
      { label: 'Apple privacy principles', href: 'https://www.apple.com/privacy/' },
      { label: 'Sevix explainable coach', href: '/' }
    ]
  }
];

export function findGuide(slug) {
  return guides.find((guide) => guide.slug === slug);
}

export function relatedGuides(currentGuide) {
  return guides
    .filter((guide) => guide.slug !== currentGuide.slug && guide.stage === currentGuide.stage)
    .slice(0, 2);
}
