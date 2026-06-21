import { siteConfig } from '../data/site.js';

const content = {
  privacy: {
    eyebrow: 'Privacy',
    title: 'Privacy Policy',
    intro:
      'Sevix is designed around local match review. This policy explains the types of data the app may handle and how support or analytics data should be treated.',
    sections: [
      {
        title: 'Data handled by the app',
        body:
          'The app can store match scores, point events, match history, settings, Apple Watch workout context, heart-rate samples, motion summaries, and subscription status.'
      },
      {
        title: 'Where data is stored',
        body:
          'Match and coaching data is designed to live on the user’s devices unless the user enables Apple ecosystem sync or sends information to support.'
      },
      {
        title: 'Third-party services',
        body:
          'The marketing site can use optional analytics when configured. The app can use RevenueCat for subscription management and Apple services for purchases, workouts, and platform features.'
      },
      {
        title: 'User control',
        body:
          'Users can contact support to ask privacy questions, request help, or ask how to remove locally stored app data from their devices.'
      }
    ]
  },
  terms: {
    eyebrow: 'Terms',
    title: 'Terms of Service',
    intro:
      'These terms describe the expected use of Sevix, including the app, Apple Watch experience, subscription features, and this marketing website.',
    sections: [
      {
        title: 'Using Sevix',
        body:
          'Sevix is provided for badminton scoring, match history, Apple Watch score entry, fitness context, recovery review, and training insights. You may use the product for personal, non-commercial purposes and must not misuse, copy, reverse engineer, interfere with, or attempt to disrupt the app, website, or related services.'
      },
      {
        title: 'Training and health information',
        body:
          'Sevix provides scoring, match review, fitness context, and training insights for informational purposes only. It is not medical advice, diagnosis, treatment, or a substitute for advice from a qualified healthcare professional or coach. You are responsible for judging your own condition, stopping activity when you feel unwell, and seeking professional help when needed.'
      },
      {
        title: 'User responsibility',
        body:
          'You are responsible for the match data, scores, settings, and other information you enter or choose to use with Sevix. Insights depend on the information available to the app and may be incomplete, delayed, or inaccurate. Do not rely on Sevix as the sole basis for training, competition, health, safety, or medical decisions.'
      },
      {
        title: 'Subscriptions and purchases',
        body:
          'Paid features may be offered through Apple App Store in-app purchases, including subscriptions or lifetime access. Prices, billing periods, trial terms, renewal dates, cancellation, and refund handling are shown and managed through Apple and your App Store account. You can manage or cancel subscriptions in your Apple account settings. Access to paid features may end if a payment fails, a subscription expires, or a purchase is refunded.'
      },
      {
        title: 'Privacy and fitness data',
        body:
          'Your use of Sevix is also governed by the Privacy Policy at /privacy. Health, fitness, motion, workout, and heart-rate information should only be used to provide app functionality and user-facing insights. Sevix does not sell that data or use it for advertising. If optional analytics, support, subscription management, Apple services, or device sync are used, related data handling is described in the Privacy Policy.'
      },
      {
        title: 'Availability and changes',
        body:
          'Sevix may change over time. Features, pricing, subscription benefits, platform integrations, and website content may be updated, paused, or removed. We may update these terms when the product, legal requirements, or business model changes. Continued use after an update means you accept the updated terms.'
      },
      {
        title: 'Intellectual property',
        body:
          'Sevix, including its name, branding, app design, website, text, graphics, and software, is owned by Sevix or its licensors. These terms do not transfer ownership of any intellectual property rights to you.'
      },
      {
        title: 'Disclaimers and liability',
        body:
          'Sevix is provided as is and as available. We do not guarantee that the app, website, scores, sync, analytics, training insights, or subscription features will always be accurate, available, uninterrupted, or error-free. To the maximum extent permitted by law, Sevix is not liable for indirect, incidental, special, consequential, or punitive damages, or for losses related to training decisions, sports performance, physical activity, data loss, service interruptions, or third-party platforms.'
      },
      {
        title: 'Updates',
        body:
          'Last updated: May 5, 2026.'
      }
    ]
  }
};

export default function LegalPage({ type }) {
  const page = content[type] || content.privacy;

  return (
    <section className="legal-page">
      <div className="page-heading">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </div>

      <div className="legal-content">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
        <section>
          <h2>Contact</h2>
          <p>
            Questions can be sent to <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
