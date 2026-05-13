import { useState } from 'react';
import {
  Activity,
  BatteryCharging,
  Brain,
  ChartNoAxesCombined,
  HeartPulse,
  Lock,
  Mic2,
  RotateCw,
  Watch
} from 'lucide-react';

export function HeroProductMockup() {
  const [score, setScore] = useState({ home: 7, guest: 4 });
  const [history, setHistory] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('home');
  const [isLocked, setIsLocked] = useState(false);

  const server = selectedTeam === 'home' ? 'Me' : 'B1';
  const serviceSide = score[selectedTeam] % 2 === 0 ? 'Right' : 'Left';

  function addPoint(team) {
    if (isLocked) {
      return;
    }

    setHistory((previous) => [...previous.slice(-7), { score, selectedTeam }]);
    setScore((current) => ({ ...current, [team]: Math.min(current[team] + 1, 99) }));
    setSelectedTeam(team);
  }

  function undoPoint() {
    if (history.length === 0) {
      return;
    }

    const previous = history[history.length - 1];
    setScore(previous.score);
    setSelectedTeam(previous.selectedTeam);
    setHistory((previous) => previous.slice(0, -1));
  }

  return (
    <div className="hero-product" aria-label="ShuttleScore iPhone and Apple Watch product preview">
      <div className="phone-scoreboard-frame">
        <div className="phone-scoreboard-screen">
          <div className="scoreboard-topline">
            <span className="scoreboard-back">Back</span>
            <span className="scoreboard-clock">07:22</span>
            <button
              className={`scoreboard-lock ${isLocked ? 'active' : ''}`}
              type="button"
              aria-pressed={isLocked}
              onClick={() => setIsLocked((value) => !value)}
            >
              <Lock size={16} aria-hidden="true" />
              {isLocked ? 'Locked' : 'Lock'}
            </button>
          </div>

          <div className="live-scoreboard-preview">
            <button className={`score-half home ${selectedTeam === 'home' ? 'selected' : ''}`} type="button" onClick={() => addPoint('home')} disabled={isLocked}>
              <ScoreTileGroup score={score.home} color="#49d43f" active={selectedTeam === 'home'} />
              <strong>Home</strong>
            </button>
            <div className="score-divider" aria-hidden="true">
              <span />
              <span />
            </div>
            <button className={`score-half guest ${selectedTeam === 'guest' ? 'selected' : ''}`} type="button" onClick={() => addPoint('guest')} disabled={isLocked}>
              <ScoreTileGroup score={score.guest} color="#2469f5" active={selectedTeam === 'guest'} />
              <strong>Guest</strong>
            </button>
          </div>

          <div className="phone-server-panel">
            <div>
              <span>Server</span>
              <strong>{server}</strong>
            </div>
            <div>
              <span>Service Side</span>
              <strong>{serviceSide}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="watch-frame actual-watch-frame">
        <div className="watch-screen actual-watch-screen">
          <div className="watch-topline">
            <span>148</span>
            <strong>07:22</strong>
          </div>
          <div className="watch-score-row">
            <ScoreTileGroup score={score.home} color="#49d43f" active={selectedTeam === 'home'} compact />
            <span className="watch-score-dots">:</span>
            <ScoreTileGroup score={score.guest} color="#2469f5" active={selectedTeam === 'guest'} compact />
          </div>
          <div className="watch-court" aria-hidden="true">
            <span className="court-line horizontal one" />
            <span className="court-line horizontal two" />
            <span className="court-line vertical" />
            <span className={`court-player guest-player ${selectedTeam === 'guest' ? 'current' : ''}`}>B1</span>
            <span className={`court-player home-player ${selectedTeam === 'home' ? 'current' : ''}`}>Me</span>
          </div>
          <div className="watch-bottom-row">
            <span>{server}</span>
            <strong>{serviceSide}</strong>
          </div>
        </div>
      </div>

      <div className="hero-demo-toolbar" aria-label="Interactive scoreboard controls">
        <button type="button" onClick={() => addPoint('home')} disabled={isLocked}>Home +1</button>
        <button type="button" onClick={() => addPoint('guest')} disabled={isLocked}>Guest +1</button>
        <button type="button" onClick={undoPoint} disabled={history.length === 0}>Undo</button>
      </div>
    </div>
  );
}

export function MatchSetupMockup() {
  const [mode, setMode] = useState('Singles');
  const [points, setPoints] = useState(21);
  const [serve, setServe] = useState('Toss');
  const [isStarted, setIsStarted] = useState(false);

  return (
    <div className="setup-mockup" aria-label="Match setup and audio cue preview">
      <div className="setup-hero">
        <span className="mini-label">{isStarted ? 'Ready' : 'Start Match'}</span>
        <strong>{mode} · {points} · Best of 3</strong>
        <button type="button" onClick={() => setIsStarted((value) => !value)}>
          {isStarted ? 'Score now' : 'Start Match'}
        </button>
      </div>
      <div className="setup-card-grid">
        <SetupCard icon={<Watch size={21} />} label="Input" value="Watch" />
        <SetupCard icon={<RotateCw size={21} />} label="Serve" value={serve} />
        <SetupCard icon={<Activity size={21} />} label="Auto save" value="On" />
      </div>
      <div className="setup-controls">
        <div>
          <span>Match mode</span>
          <div className="segmented-control">
            {['Singles', 'Doubles'].map((item) => (
              <button className={mode === item ? 'active' : ''} type="button" key={item} aria-pressed={mode === item} onClick={() => setMode(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span>Score format</span>
          <div className="segmented-control four">
            {[11, 15, 21, 30].map((item) => (
              <button className={points === item ? 'active' : ''} type="button" key={item} aria-pressed={points === item} onClick={() => setPoints(item)}>
                {item === 30 ? 'Custom' : item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span>Team colours</span>
          <div className="team-swatches">
            <strong><i className="swatch orange" /> Home</strong>
            <strong><i className="swatch blue" /> Guest</strong>
          </div>
        </div>
        <div>
          <span>First serve</span>
          <div className="segmented-control">
            {['Toss', 'Choose'].map((item) => (
              <button className={serve === item ? 'active' : ''} type="button" key={item} aria-pressed={serve === item} onClick={() => setServe(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="audio-cue-list">
        <InsightRow icon={<Mic2 size={18} />} title="Headphone cues" text="Score, serve side, streaks, and high-HR alerts." />
      </div>
    </div>
  );
}

export function CoachInsightMockup() {
  const coachViews = [
    {
      key: 'receive',
      label: 'Receive',
      title: 'Train receive next',
      summary: 'High-HR points exposed the pattern.',
      confidence: 'High confidence',
      impact: '84',
      recovery: '67',
      training: '3',
      evidence: [
        ['Hexagon', 'Serve strong. Receive weak.', '#49d43f'],
        ['Fitness', 'Scoring dipped at high HR.', '#ef5b63'],
        ['Recovery', 'Load is elevated.', '#f59e0b'],
        ['Motion', 'Watch data supports the call.', '#2469f5']
      ],
      drill: 'Receive + third shot'
    },
    {
      key: 'clutch',
      label: 'Clutch',
      title: 'Stabilize close points',
      summary: 'Pressure points need a simpler routine.',
      confidence: 'Medium confidence',
      impact: '76',
      recovery: '51',
      training: '2',
      evidence: [
        ['Hexagon', 'Clutch dipped late.', '#f59e0b'],
        ['Fitness', 'HR rose on pressure points.', '#ef5b63'],
        ['Recovery', 'Load is manageable.', '#49d43f'],
        ['Motion', 'Coverage is usable.', '#2469f5']
      ],
      drill: 'Two-shot clutch routine'
    },
    {
      key: 'recovery',
      label: 'Recovery',
      title: 'Go lighter tomorrow',
      summary: 'Load is high enough to affect quality.',
      confidence: 'High confidence',
      impact: '69',
      recovery: '82',
      training: '1',
      evidence: [
        ['Hexagon', 'Tempo faded late.', '#f59e0b'],
        ['Fitness', 'Max HR stayed high.', '#ef5b63'],
        ['Recovery', 'Recovery demand is high.', '#ef5b63'],
        ['Motion', 'Movement intensity climbed.', '#2469f5']
      ],
      drill: 'Light recovery session'
    }
  ];
  const [activeView, setActiveView] = useState(coachViews[0].key);
  const view = coachViews.find((item) => item.key === activeView) || coachViews[0];

  return (
    <div className="coach-mockup actual-coach-mockup">
      <div className="coach-takeaway-preview">
        <div className="coach-header-line">
          <span className="mini-label">Main Takeaway</span>
          <strong>{view.confidence}</strong>
        </div>
        <div className="mini-tabs" aria-label="Coach scenarios">
          {coachViews.map((item) => (
            <button className={item.key === activeView ? 'active' : ''} type="button" key={item.key} aria-pressed={item.key === activeView} onClick={() => setActiveView(item.key)}>
              {item.label}
            </button>
          ))}
        </div>
        <h3>{view.title}</h3>
        <p>{view.summary}</p>
        <div className="coach-metric-row">
          <CoachMetric label="Impact" value={view.impact} color="#49d43f" />
          <CoachMetric label="Recovery" value={view.recovery} color="#f59e0b" />
          <CoachMetric label="Training" value={view.training} color="#2469f5" />
        </div>
      </div>

      <div className="coach-evidence-card">
        <span className="mini-label">Why this judgment</span>
        {view.evidence.map(([title, text, color]) => (
          <EvidenceLine key={title} title={title} text={text} color={color} />
        ))}
      </div>

      <div className="coach-issues-card">
        <span className="mini-label">What to watch</span>
        <InsightRow icon={<Brain size={18} />} title="Why" text="Weak phase + fatigue signal." />
        <InsightRow icon={<HeartPulse size={18} />} title="Where" text="High-HR lost points." />
        <InsightRow icon={<BatteryCharging size={18} />} title="How hard" text="Recovery load sources." />
      </div>

      <div className="coach-training-card">
        <span className="mini-label">Next drill</span>
        <strong>{view.drill}</strong>
        <p>Footwork first. Then repeat under fatigue.</p>
      </div>
    </div>
  );
}

export function ProgressMockup() {
  const filters = {
    Recent: {
      metrics: [
        ['Recovery', '74', '#49d43f'],
        ['Load', 'High', '#f59e0b'],
        ['Motion', 'Stable', '#2469f5']
      ],
      points: [
        { label: 'Control', value: 'S8 / L3', width: 72, color: '#49d43f' },
        { label: 'Pressure', value: 'S4 / L5', width: 52, color: '#f59e0b' },
        { label: 'High load', value: 'S2 / L6', width: 34, color: '#ef5b63' }
      ]
    },
    Singles: {
      metrics: [
        ['Recovery', '81', '#49d43f'],
        ['Load', 'Mod', '#2469f5'],
        ['Motion', 'Sharp', '#49d43f']
      ],
      points: [
        { label: 'Control', value: 'S10 / L4', width: 80, color: '#49d43f' },
        { label: 'Pressure', value: 'S5 / L3', width: 62, color: '#2469f5' },
        { label: 'High load', value: 'S3 / L2', width: 48, color: '#f59e0b' }
      ]
    },
    Wins: {
      metrics: [
        ['Recovery', '70', '#49d43f'],
        ['Load', 'Mod', '#2469f5'],
        ['Motion', 'Fast', '#49d43f']
      ],
      points: [
        { label: 'Control', value: 'S12 / L2', width: 86, color: '#49d43f' },
        { label: 'Pressure', value: 'S6 / L2', width: 70, color: '#2469f5' },
        { label: 'High load', value: 'S3 / L3', width: 44, color: '#f59e0b' }
      ]
    }
  };
  const [activeFilter, setActiveFilter] = useState('Recent');
  const view = filters[activeFilter];
  const points = view.points;

  return (
    <div className="progress-mockup health-mockup">
      <div className="progress-header">
        <div>
          <span className="mini-label">Health Summary</span>
          <strong>Recovery, load, trends</strong>
        </div>
        <ChartNoAxesCombined size={22} aria-hidden="true" />
      </div>

      <div className="health-card-grid">
        {view.metrics.map(([label, value, color]) => (
          <CoachMetric key={label} label={label} value={value} color={color} />
        ))}
      </div>

      <div className="heart-zone-card">
        <div className="coach-header-line">
          <span className="mini-label">Heart-rate zone points</span>
          <strong>148 avg</strong>
        </div>
        {points.map((point) => (
          <div className="zone-row" key={point.label}>
            <span>{point.label}</span>
            <div className="zone-track">
              <i style={{ width: `${point.width}%`, background: point.color }} />
            </div>
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>

      <div className="history-filter-preview">
        {Object.keys(filters).map((filter) => (
          <button className={filter === activeFilter ? 'active' : ''} type="button" key={filter} aria-pressed={filter === activeFilter} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="progress-note">
        <Activity size={18} aria-hidden="true" />
        <span>Filter matches. Add notes. Track progress.</span>
      </div>
    </div>
  );
}

function ScoreTileGroup({ score, color, active = false, compact = false }) {
  const digits = String(score).padStart(2, '0').split('');
  return (
    <div className={`score-tile-group ${active ? 'active' : ''} ${compact ? 'compact' : ''}`} style={{ '--tile-color': color }}>
      {digits.map((digit, index) => (
        <span className="flip-digit" key={`${digit}-${index}`}>
          {digit}
        </span>
      ))}
    </div>
  );
}

function SetupCard({ icon, label, value }) {
  return (
    <div className="setup-card">
      <span className="setup-card-icon">{icon}</span>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function CoachMetric({ label, value, color }) {
  return (
    <div className="coach-metric">
      <span>{label}</span>
      <strong style={{ color }}>{value}</strong>
    </div>
  );
}

function EvidenceLine({ title, text, color }) {
  return (
    <div className="evidence-line">
      <i style={{ background: color }} />
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function InsightRow({ icon, title, text }) {
  return (
    <div className="insight-row">
      <span className="insight-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}
