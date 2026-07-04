import { siteConfig } from './site.js';

export const campaigns = [
  {
    slug: 'apple-watch-badminton-scoring',
    eyebrow: 'Apple Watch badminton scoring',
    title: 'Score badminton from your Apple Watch.',
    subtitle:
      'Keep the phone off court. Add points from your wrist, show the synced iPhone scoreboard, and review the match after you play.',
    metaTitle: 'Apple Watch badminton scoring app - Sevix',
    metaDescription:
      'Score badminton rallies from Apple Watch, keep iPhone synced courtside, and review singles or doubles matches after play.',
    appStoreUrl: siteConfig.campaignAppStoreUrls.appleWatch,
    sourcePrefix: 'campaign_apple_watch',
    visual: 'scoreboard',
    badges: ['Watch input', 'iPhone scoreboard', 'Singles and doubles'],
    proof: [
      {
        value: '1 wrist tap',
        label: 'Designed for point breaks, not long phone interruptions.'
      },
      {
        value: 'Live sync',
        label: 'The iPhone can stay courtside as the larger match display.'
      },
      {
        value: 'Post-match review',
        label: 'Score flow, notes, and coach evidence stay available after the game.'
      }
    ],
    steps: [
      {
        title: 'Set the match',
        text: 'Choose singles or doubles, points, colors, and first serve before the first rally.'
      },
      {
        title: 'Score on Watch',
        text: 'Add points from Apple Watch between rallies while iPhone keeps the scoreboard current.'
      },
      {
        title: 'Review on iPhone',
        text: 'Use the match history to see score flow, fatigue context, and the next useful training focus.'
      }
    ],
    featureBlocks: [
      {
        title: 'Built for rally breaks',
        text: 'The scoring flow avoids long menus during play. Watch is the fast input surface; iPhone is the bigger display and review surface.'
      },
      {
        title: 'Cleaner doubles context',
        text: 'Doubles players can keep the match mode and server context in the record instead of relying on memory after the session.'
      },
      {
        title: 'Review without recording video',
        text: 'Sevix uses the point timeline, workout context, and local coach evidence so you can learn from a match without filming it.'
      }
    ],
    offer: {
      title: 'Try it in your next game',
      text: 'Start with free scoring. Upgrade only when you want deeper local coach, HealthKit, full history, and trend review.'
    },
    faq: [
      {
        question: 'Can I score a full badminton match from Apple Watch?',
        answer:
          'Yes. Sevix is designed so Watch handles quick scoring during play while iPhone shows the larger synchronized board.'
      },
      {
        question: 'Can I use it for doubles?',
        answer:
          'Yes. Set the match as singles or doubles before play, then keep the point timeline and match context together.'
      },
      {
        question: 'Does it analyze video?',
        answer:
          'No. Sevix focuses on local match review from score, workout, heart-rate, motion, notes, and history signals.'
      }
    ],
    finalCta: 'Download Sevix before your next badminton session.',
    relatedGuide: '/guides/score-badminton-with-apple-watch'
  },
  {
    slug: 'club-trial',
    eyebrow: 'Badminton club trial',
    title: 'Run a cleaner scoring trial at your club.',
    subtitle:
      'Give players a simple QR page: download Sevix, score one singles or doubles game, then send feedback on scoring, sync, and review clarity.',
    metaTitle: 'Badminton club scoring trial - Sevix',
    metaDescription:
      'A QR-ready Sevix trial page for badminton clubs, coaches, and groups that want cleaner Apple Watch scoring and post-match review.',
    appStoreUrl: siteConfig.campaignAppStoreUrls.clubTrial,
    sourcePrefix: 'campaign_club_trial',
    visual: 'setup',
    badges: ['QR ready', 'Coach friendly', 'Feedback loop'],
    proof: [
      {
        value: 'One match',
        label: 'Ask players to try Sevix in one real singles or doubles game.'
      },
      {
        value: 'Three signals',
        label: 'Collect feedback on scoring ease, sync clarity, and review usefulness.'
      },
      {
        value: 'Coach review',
        label: 'Use the score record to talk through one practical pattern after play.'
      }
    ],
    steps: [
      {
        title: 'Share the QR',
        text: 'Put the campaign link on a club poster, booking desk note, group message, or coach handout.'
      },
      {
        title: 'Score one game',
        text: 'Players use Apple Watch for points and keep the iPhone scoreboard visible courtside.'
      },
      {
        title: 'Collect feedback',
        text: 'Ask what helped most: Watch scoring, iPhone sync, doubles clarity, or post-match review.'
      }
    ],
    featureBlocks: [
      {
        title: 'Cleaner session flow',
        text: 'Players do not need to stop and unlock a phone after every point. Scoring stays closer to the rally.'
      },
      {
        title: 'Better review conversations',
        text: 'Coaches can ask players to look at one match pattern after the game instead of relying on vague memory.'
      },
      {
        title: 'Local and practical',
        text: 'The trial does not require video capture, cloud coaching, or a club account system to get useful feedback.'
      }
    ],
    offer: {
      title: 'Use this page as your club QR destination',
      text: `For a trial code or club-specific link, contact ${siteConfig.supportEmail}. Replace this generic page later with a club-named campaign URL when permission is granted.`
    },
    faq: [
      {
        question: 'What should a club trial measure?',
        answer:
          'Measure whether players can score quickly, understand the iPhone sync, and get value from the post-match review.'
      },
      {
        question: 'Does every player need a club account?',
        answer:
          'No. Start with individual players installing Sevix and trying it in one match. A club-specific campaign link can track interest.'
      },
      {
        question: 'What should coaches ask after the match?',
        answer:
          'Ask which part helped most: Watch scoring, iPhone scoreboard, doubles clarity, or the match review.'
      }
    ],
    finalCta: 'Try Sevix in one club match and review it after play.',
    relatedGuide: '/guides/review-badminton-without-video'
  }
];

export function findCampaign(slug) {
  return campaigns.find((campaign) => campaign.slug === slug);
}
