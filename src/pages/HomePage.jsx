import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Apple,
  ArrowRight,
  Brain,
  HeartPulse,
  History,
  Lock,
  Mic2,
  Radar,
  RotateCw,
  Watch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AppStoreButton from '../components/AppStoreButton.jsx';
import { pricingTiers } from '../data/site.js';

const featureCards = [
  {
    num: '01',
    icon: Watch,
    title: 'Wrist motion tracking',
    description: 'Apple Watch detects swing rhythm, step pace, and rally intensity automatically.'
  },
  {
    num: '02',
    icon: HeartPulse,
    title: 'Heart rate context',
    description: 'See exactly when fatigue starts changing the points you win and lose.'
  },
  {
    num: '03',
    icon: Radar,
    title: 'Live iPhone board',
    description: 'Keep the score, server, side, and match clock visible courtside.'
  },
  {
    num: '04',
    icon: RotateCw,
    title: 'Singles + doubles',
    description: 'Set format, first serve, scoring target, and match flow before the warmup ends.'
  },
  {
    num: '05',
    icon: Brain,
    title: 'Local AI coach',
    description: 'Turn point timeline, workout data, and motion summaries into one next drill.'
  },
  {
    num: '06',
    icon: History,
    title: 'Evidence history',
    description: 'Review trends, recovery, notes, and training focus without video or cloud analysis.'
  }
];

const coachViews = {
  receive: {
    label: 'Receive',
    title: 'Train receive next',
    summary: 'High-HR points exposed the pattern.',
    confidence: 'High confidence',
    impact: '84',
    recovery: '67',
    training: '3',
    drill: 'Receive + third shot',
    evidence: [
      ['Hexagon', 'Serve strong. Receive weak.', '#17a54a'],
      ['Fitness', 'Scoring dipped at high HR.', '#ef5b63'],
      ['Recovery', 'Load is elevated.', '#d97a06'],
      ['Motion', 'Watch data supports the call.', '#1769ff']
    ]
  },
  clutch: {
    label: 'Clutch',
    title: 'Stabilize close points',
    summary: 'Pressure points need a simpler routine.',
    confidence: 'Medium confidence',
    impact: '76',
    recovery: '51',
    training: '2',
    drill: 'Two-shot clutch routine',
    evidence: [
      ['Hexagon', 'Clutch dipped late.', '#d97a06'],
      ['Fitness', 'HR rose on pressure points.', '#ef5b63'],
      ['Recovery', 'Load is manageable.', '#17a54a'],
      ['Motion', 'Coverage is usable.', '#1769ff']
    ]
  },
  recovery: {
    label: 'Recovery',
    title: 'Go lighter tomorrow',
    summary: 'Load is high enough to affect quality.',
    confidence: 'High confidence',
    impact: '69',
    recovery: '82',
    training: '1',
    drill: 'Light recovery session',
    evidence: [
      ['Hexagon', 'Tempo faded late.', '#d97a06'],
      ['Fitness', 'Max HR stayed high.', '#ef5b63'],
      ['Recovery', 'Recovery demand is high.', '#ef5b63'],
      ['Motion', 'Movement intensity climbed.', '#1769ff']
    ]
  }
};

const healthViews = {
  Recent: {
    metrics: [
      ['Recovery', '74', '#4bd946'],
      ['Load', 'High', '#f2a93b'],
      ['Motion', 'Stable', '#7db4ff']
    ],
    zones: [
      ['Control', 'S8 / L3', '72%', '#4bd946'],
      ['Pressure', 'S4 / L5', '52%', '#f2a93b'],
      ['High load', 'S2 / L6', '34%', '#ef5b63']
    ]
  },
  Singles: {
    metrics: [
      ['Recovery', '81', '#4bd946'],
      ['Load', 'Mod', '#7db4ff'],
      ['Motion', 'Sharp', '#4bd946']
    ],
    zones: [
      ['Control', 'S10 / L4', '80%', '#4bd946'],
      ['Pressure', 'S5 / L3', '62%', '#7db4ff'],
      ['High load', 'S3 / L2', '48%', '#f2a93b']
    ]
  },
  Wins: {
    metrics: [
      ['Recovery', '70', '#4bd946'],
      ['Load', 'Mod', '#7db4ff'],
      ['Motion', 'Fast', '#4bd946']
    ],
    zones: [
      ['Control', 'S12 / L2', '86%', '#4bd946'],
      ['Pressure', 'S6 / L2', '70%', '#7db4ff'],
      ['High load', 'S3 / L3', '44%', '#f2a93b']
    ]
  }
};

const faqItems = [
  {
    question: 'How does the Local AI Coach work?',
    answer:
      'The coach combines your match score timeline, Apple Watch heart rate, wrist motion data, and match history. It runs locally on your device to generate specific training drills backed by evidence.'
  },
  {
    question: 'Do I need Apple Watch to use Sevix?',
    answer:
      'Sevix is built around Apple Watch scoring and iPhone review. The best flow is scoring from Watch during play and reviewing the match on iPhone after the final rally.'
  },
  {
    question: 'Does Sevix support doubles?',
    answer:
      'Yes. Sevix supports singles and doubles setup, including scoring flow, server context, history, and point ownership attribution for key rallies.'
  },
  {
    question: 'Does the coach require video or cloud analysis?',
    answer:
      'No. Sevix focuses on local, explainable review from point timeline, workout data, heart-rate context, motion summaries, and match history.'
  }
];

function ScoreDigit({ value }) {
  return <span className="velocity-score-digit">{value}</span>;
}

function ScoreTileGroup({ score, active }) {
  const digits = String(score).padStart(2, '0').split('');
  return (
    <span className={`velocity-score-tiles ${active ? 'active' : ''}`}>
      <ScoreDigit value={digits[0]} />
      <ScoreDigit value={digits[1]} />
    </span>
  );
}

function HeroScoreboard() {
  const [score, setScore] = useState({ home: 7, guest: 4 });
  const [selected, setSelected] = useState('home');
  const [seconds, setSeconds] = useState(442);
  const [userTookOver, setUserTookOver] = useState(false);

  useEffect(() => {
    const clock = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    const demo = window.setInterval(() => {
      setScore((current) => {
        if (userTookOver) {
          return current;
        }
        if (current.home >= 21 || current.guest >= 21) {
          setSelected('home');
          setSeconds(0);
          return { home: 0, guest: 0 };
        }
        const team = Math.random() < 0.55 ? 'home' : 'guest';
        setSelected(team);
        return { ...current, [team]: Math.min(current[team] + 1, 99) };
      });
    }, 2400);

    return () => {
      window.clearInterval(clock);
      window.clearInterval(demo);
    };
  }, [userTookOver]);

  function addPoint(team) {
    setUserTookOver(true);
    setSelected(team);
    setScore((current) => ({ ...current, [team]: Math.min(current[team] + 1, 99) }));
  }

  function resetDemo() {
    setScore({ home: 0, guest: 0 });
    setSelected('home');
    setSeconds(0);
    setUserTookOver(false);
  }

  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  const server = selected === 'home' ? 'Me' : 'B1';
  const serviceSide = score[selected] % 2 === 0 ? 'Right' : 'Left';

  return (
    <div className="velocity-hero-demo" aria-label="Interactive Sevix scoreboard demo">
      <div className="velocity-scoreboard-shell">
        <div className="velocity-scoreboard-screen">
          <div className="velocity-scoreboard-top">
            <span>{userTookOver ? 'Your rally' : 'Auto demo'}</span>
            <strong>
              {mins}:{secs}
            </strong>
          </div>

          <div className="velocity-scoreboard-main">
            <button className="velocity-score-side" type="button" onClick={() => addPoint('home')}>
              <ScoreTileGroup score={score.home} active={selected === 'home'} />
              <strong className={selected === 'home' ? 'active' : ''}>Home</strong>
            </button>
            <span className="velocity-score-divider" aria-hidden="true">
              <i />
              <i />
            </span>
            <button className="velocity-score-side" type="button" onClick={() => addPoint('guest')}>
              <ScoreTileGroup score={score.guest} active={selected === 'guest'} />
              <strong className={selected === 'guest' ? 'active' : ''}>Guest</strong>
            </button>
          </div>

          <div className="velocity-scoreboard-meta">
            <span>
              Server <strong>{server}</strong>
            </span>
            <span>
              Side <strong>{serviceSide}</strong>
            </span>
            <em>
              <i />
              {userTookOver ? 'Manual' : 'Live demo'}
            </em>
          </div>
        </div>
      </div>
      <div className="velocity-demo-actions">
        <button type="button" onClick={() => addPoint('home')}>Home +1</button>
        <button type="button" onClick={() => addPoint('guest')}>Guest +1</button>
        <button type="button" onClick={resetDemo}>{userTookOver ? 'Resume demo' : 'Reset'}</button>
      </div>
    </div>
  );
}

function useShuttleTracker() {
  const shuttleRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const shuttle = shuttleRef.current;
    if (!shuttle) {
      return undefined;
    }

    let rafId = 0;
    let glowTarget = null;
    function update() {
      rafId = 0;
      const targets = Array.from(document.querySelectorAll('[data-shuttle-target]'));
      const finalTarget = document.querySelector('.footer-cta .app-store-button') || finalRef.current;
      if (!targets.length || !finalTarget) {
        return;
      }

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const sy = window.scrollY;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
      const isMobile = vw <= 880;
      const radius = isMobile ? 36 : 59;
      const points = targets.map((target) => {
        const rect = target.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(target);
        let textRight = rect.left;
        let textLeft = rect.right;
        for (const lineRect of range.getClientRects()) {
          textRight = Math.max(textRight, lineRect.right);
          textLeft = Math.min(textLeft, lineRect.left);
        }
        const side = (isMobile && target.dataset.shuttleSideMobile) || target.dataset.shuttleSide;
        let x;
        if (isMobile) {
          x = side === 'left' ? radius + 8 : vw - radius - 8;
        } else if (side === 'left') {
          x = Math.max(radius + 10, textLeft - 42 - radius);
        } else {
          x = textRight + 42 + radius;
          if (x > vw - radius - 10) {
            x = Math.max(radius + 10, rect.left - 42 - radius);
          }
        }
        return {
          x,
          y: rect.top + sy + rect.height / 2,
          at: 0
        };
      });

      const buttonRect = finalTarget.getBoundingClientRect();
      points.push({
        x: buttonRect.left + buttonRect.width / 2,
        y: buttonRect.top + sy + buttonRect.height / 2,
        at: maxScroll
      });

      for (let i = 0; i < points.length - 1; i += 1) {
        points[i].at = Math.min(maxScroll - 1, Math.max(0, points[i].y - vh * 0.5));
      }
      for (let i = 1; i < points.length; i += 1) {
        points[i].at = Math.max(points[i].at, points[i - 1].at + 1);
      }

      let index = 0;
      while (index < points.length - 2 && sy > points[index + 1].at) {
        index += 1;
      }

      let x;
      let yDoc;
      let rot;
      if (sy <= points[0].at) {
        x = points[0].x;
        yDoc = points[0].y;
        rot = -12;
      } else {
        const a = points[index];
        const b = points[index + 1];
        const t = Math.min(1, Math.max(0, (sy - a.at) / Math.max(1, b.at - a.at)));
        const arc = Math.min(vh * 0.38, Math.abs(b.y - a.y) * 0.45 + 150);
        x = a.x + (b.x - a.x) * t;
        yDoc = a.y + (b.y - a.y) * t - arc * 4 * t * (1 - t);
        rot = 360 * t - 12;
      }

      const yScreen = yDoc - sy;
      const buttonGap =
        Math.hypot(x - (buttonRect.left + buttonRect.width / 2), yScreen - (buttonRect.top + buttonRect.height / 2)) -
        radius -
        Math.min(buttonRect.width, buttonRect.height) / 2;
      const opacity = Math.max(0, Math.min(1, buttonGap / 20));
      shuttle.style.transform = `translate(${x - radius}px, ${yScreen - radius}px) rotate(${rot}deg)`;
      shuttle.style.opacity = opacity.toFixed(3);
      glowTarget = finalTarget;
      finalTarget.classList.toggle('shuttle-arrived', opacity < 1);
      if (opacity < 1) {
        finalTarget.style.boxShadow = `0 16px 32px rgba(23, 105, 255, 0.25), 0 0 0 ${Math.round((1 - opacity) * 10)}px rgba(23, 105, 255, 0.35), 0 0 ${Math.round((1 - opacity) * 70)}px 14px rgba(23, 105, 255, 0.6)`;
      } else {
        finalTarget.style.boxShadow = '';
      }
    }

    function requestUpdate() {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.setTimeout(update, 200);
    window.setTimeout(update, 1000);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      if (glowTarget) {
        glowTarget.style.boxShadow = '';
        glowTarget.classList.remove('shuttle-arrived');
      }
    };
  }, []);

  return { shuttleRef, finalRef };
}

function MatchSetupMockup() {
  const [mode, setMode] = useState('Singles');
  const [points, setPoints] = useState(21);
  const [serve, setServe] = useState('Toss');
  const [started, setStarted] = useState(false);

  return (
    <div className="velocity-panel setup-panel">
      <div className="velocity-setup-hero">
        <span>{started ? 'Ready' : 'Start match'}</span>
        <strong>{mode} · {points} · Best of 3</strong>
        <button type="button" onClick={() => setStarted((value) => !value)}>
          {started ? 'Score now' : 'Start match'}
        </button>
      </div>

      <div className="velocity-mini-grid">
        <SmallStat icon={Watch} label="Input" value="Watch" />
        <SmallStat icon={RotateCw} label="Serve" value={serve} />
        <SmallStat icon={Mic2} label="Cues" value="On" />
      </div>

      <Segmented label="Match mode" value={mode} options={['Singles', 'Doubles']} onChange={setMode} />
      <Segmented label="Score format" value={points} options={[11, 15, 21, 'Custom']} onChange={setPoints} />
      <Segmented label="First serve" value={serve} options={['Toss', 'Choose']} onChange={setServe} />
    </div>
  );
}

function SmallStat({ icon: Icon, label, value }) {
  return (
    <div className="velocity-small-stat">
      <span><Icon size={18} aria-hidden="true" /></span>
      <em>{label}</em>
      <strong>{value}</strong>
    </div>
  );
}

function Segmented({ label, value, options, onChange }) {
  return (
    <div className="velocity-segmented-block">
      <span>{label}</span>
      <div className={`velocity-segmented ${options.length > 2 ? 'many' : ''}`}>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={value === option ? 'active' : ''}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function CoachMockup() {
  const [active, setActive] = useState('receive');
  const view = coachViews[active];

  return (
    <div className="velocity-panel coach-panel">
      <div className="velocity-panel-topline">
        <span>Main takeaway</span>
        <strong>{view.confidence}</strong>
      </div>
      <div className="velocity-pill-tabs">
        {Object.entries(coachViews).map(([key, item]) => (
          <button type="button" key={key} className={key === active ? 'active' : ''} onClick={() => setActive(key)}>
            {item.label}
          </button>
        ))}
      </div>
      <h3>{view.title}</h3>
      <p>{view.summary}</p>
      <div className="velocity-metrics">
        <Metric label="Impact" value={view.impact} color="#17a54a" />
        <Metric label="Recovery" value={view.recovery} color="#d97a06" />
        <Metric label="Training" value={view.training} color="#1769ff" />
      </div>
      <div className="velocity-evidence">
        <span>Why this judgment</span>
        {view.evidence.map(([title, text, color]) => (
          <div className="velocity-evidence-row" key={title}>
            <i style={{ background: color }} />
            <div>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="velocity-next-drill">
        <span>Next drill</span>
        <strong>{view.drill}</strong>
        <ArrowRight size={24} aria-hidden="true" />
      </div>
    </div>
  );
}

function Metric({ label, value, color }) {
  return (
    <div className="velocity-metric">
      <span>{label}</span>
      <strong style={{ color }}>{value}</strong>
    </div>
  );
}

function HealthMockup() {
  const [filter, setFilter] = useState('Recent');
  const view = healthViews[filter];

  return (
    <div className="velocity-panel health-panel">
      <div className="velocity-panel-topline dark">
        <span>Health summary</span>
        <strong>Heart 148 avg</strong>
      </div>
      <h3>Recovery, load, trends</h3>
      <div className="velocity-metrics dark">
        {view.metrics.map(([label, value, color]) => (
          <Metric key={label} label={label} value={value} color={color} />
        ))}
      </div>
      <div className="velocity-zone-list">
        <span>Heart-rate zone points</span>
        {view.zones.map(([label, value, width, color]) => (
          <div className="velocity-zone-row" key={label}>
            <strong>{label}</strong>
            <div><i style={{ width, background: color }} /></div>
            <em>{value}</em>
          </div>
        ))}
      </div>
      <div className="velocity-pill-tabs dark">
        {Object.keys(healthViews).map((item) => (
          <button type="button" key={item} className={item === filter ? 'active' : ''} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const tracker = useShuttleTracker();
  const marqueeText = useMemo(
    () => ['Score the rally', 'Train with evidence', 'Watch + iPhone', 'No video. No cloud.', 'Singles + doubles'],
    []
  );

  return (
    <div className="velocity-home">
      <div className="shuttle-tracker" ref={tracker.shuttleRef} aria-hidden="true">
        <div>
          <img src="/assets/shuttlecock.png" alt="" />
        </div>
      </div>

      <section className="velocity-hero" id="top">
        <div className="velocity-speed-lines" aria-hidden="true" />
        <div className="velocity-container velocity-hero-grid">
          <div className="velocity-hero-copy">
            <div className="velocity-badges">
              <span><Apple size={16} aria-hidden="true" /> Watch + iPhone</span>
              <span><Lock size={16} aria-hidden="true" /> 100% Local Coach</span>
            </div>
            <h1 data-shuttle-target>Sevix</h1>
            <p className="velocity-subtitle">Score the rally.<br />Train with evidence.</p>
            <p className="velocity-body-copy">
              Score each rally on Apple Watch. Keep iPhone synced courtside. Review the evidence when the match ends: no video, no cloud.
            </p>
            <div className="velocity-actions">
              <AppStoreButton source="hero_primary" />
              <a className="velocity-text-link" href="#scoring">How it works</a>
            </div>
          </div>
          <HeroScoreboard />
        </div>
        <div className="hero-shuttle-badge" aria-hidden="true">
          <img src="/assets/shuttlecock.png" alt="" />
        </div>
      </section>

      <div className="velocity-marquee" aria-hidden="true">
        <div>
          {[0, 1].map((copy) => (
            <span key={copy}>
              {marqueeText.map((item) => (
                <strong key={`${copy}-${item}`}>{item}<i>///</i></strong>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="velocity-section velocity-container" id="features">
        <div className="velocity-section-heading">
          <span className="velocity-eyebrow">Core features</span>
          <h2 data-shuttle-target data-shuttle-side-mobile="left">Built for<br /><em>the rally.</em></h2>
        </div>
        <div className="velocity-court-grid">
          <span className="court-outline" aria-hidden="true" />
          <span className="court-inner" aria-hidden="true" />
          <span className="court-lines" aria-hidden="true" />
          <div className="velocity-feature-grid">
            {featureCards.map(({ num, icon: Icon, title, description }) => (
              <article className="velocity-feature-card" key={title}>
                <div>
                  <span><Icon size={22} aria-hidden="true" /></span>
                  <strong>{num}</strong>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="velocity-dark-band" id="scoring">
        <div className="velocity-speed-lines dark" aria-hidden="true" />
        <div className="racket-mark" aria-hidden="true"><span /><i /></div>
        <div className="velocity-container velocity-split">
          <div className="velocity-copy-block">
            <span className="velocity-eyebrow">Live scoring</span>
            <h2 data-shuttle-target>Start. Score.<br /><em>Stay in the rally.</em></h2>
            <p>Set the format, choose first serve, then let Watch handle the points while iPhone shows the board.</p>
            <ul className="velocity-diamond-list">
              <li>Pinch, tap, or Digital Crown</li>
              <li>Toss or choose first server</li>
              <li>Lockable referee display</li>
            </ul>
          </div>
          <MatchSetupMockup />
        </div>
      </section>

      <section className="velocity-section velocity-container velocity-split reverse" id="coach">
        <CoachMockup />
        <div className="velocity-copy-block">
          <span className="velocity-eyebrow">Local AI coach</span>
          <h2 data-shuttle-target>Know what to<br /><em>train next.</em></h2>
          <p>A local coach turns score, heart rate, motion, and recovery into one clear next step. Transparent reasoning, no black boxes.</p>
          <ul className="velocity-diamond-list">
            <li>Strongest and weakest phase</li>
            <li>Fatigue and recovery signals</li>
            <li>A drill you can do next</li>
          </ul>
        </div>
      </section>

      <section className="velocity-section velocity-container velocity-split compact">
        <div className="velocity-copy-block">
          <span className="velocity-eyebrow">Health + history</span>
          <h2 data-shuttle-target data-shuttle-side="left">Your match log<br /><em>has a pulse.</em></h2>
          <p>Heart-rate zones, recovery, load, notes, and recent trends live in one place with zero video capture.</p>
          <Link className="velocity-text-link" to="/guides/local-ai-coach-badminton">Read the coach guide</Link>
        </div>
        <HealthMockup />
      </section>

      <section className="velocity-privacy-band" id="privacy">
        <div className="velocity-speed-lines blue" aria-hidden="true" />
        <div className="velocity-container velocity-split">
          <div>
            <span className="velocity-eyebrow dark">Private by design</span>
            <h2>No video.<br />No cloud coach.</h2>
          </div>
          <p>
            Advice comes from your point timeline, heart rate, workout, and motion summaries. Simple inputs. Clear reasoning. Everything stays on your device.
          </p>
        </div>
      </section>

      <section className="velocity-section velocity-container" id="pricing">
        <div className="velocity-section-heading">
          <span className="velocity-eyebrow">Plans</span>
          <h2 data-shuttle-target>Start free.<br /><em>Upgrade for the coach.</em></h2>
        </div>
        <div className="velocity-pricing-grid">
          {pricingTiers.map((tier) => (
            <article className={`velocity-pricing-card ${tier.highlighted ? 'highlighted' : ''}`} key={tier.name}>
              {tier.highlighted ? <span className="popular-pill">Most popular</span> : null}
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.description}</p>
              <ul className="velocity-diamond-list">
                {tier.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <AppStoreButton source={`pricing_${tier.name.toLowerCase()}`} variant={tier.highlighted ? 'primary' : 'secondary'}>
                {tier.name === 'Free' ? 'Start scoring free' : 'Download now'}
              </AppStoreButton>
            </article>
          ))}
        </div>
      </section>

      <section className="velocity-section velocity-container velocity-faq" id="faq">
        <div className="velocity-section-heading left">
          <span className="velocity-eyebrow">Questions</span>
          <h2>Before the<br /><em>next session.</em></h2>
        </div>
        <div className="velocity-faq-list">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <a className="shuttle-final-target" ref={tracker.finalRef} href="#pricing" aria-hidden="true" tabIndex={-1}>
        Download
      </a>
    </div>
  );
}
