import { Activity, BatteryCharging, Brain, ChartNoAxesCombined, HeartPulse, Watch } from 'lucide-react';

export function HeroProductMockup() {
  return (
    <div className="hero-product" aria-label="ShuttleScore iPhone and Apple Watch product preview">
      <div className="phone-frame">
        <div className="phone-screen">
          <div className="scoreboard-preview">
            <div className="team-panel home">
              <div className="score-tiles">
                <span>0</span>
                <span>7</span>
              </div>
              <p>Home</p>
            </div>
            <div className="team-panel guest">
              <div className="score-tiles">
                <span>0</span>
                <span>4</span>
              </div>
              <p>Guest</p>
            </div>
          </div>
          <div className="phone-coach-card">
            <span className="mini-label">Local AI Coach</span>
            <strong>Receive under fatigue is the next focus.</strong>
            <p>Heart rate stayed high while second-half win rate dropped.</p>
          </div>
        </div>
      </div>

      <div className="watch-frame">
        <div className="watch-screen">
          <Watch size={18} aria-hidden="true" />
          <strong>07 - 04</strong>
          <span>A1 · Right</span>
        </div>
      </div>
    </div>
  );
}

export function CoachInsightMockup() {
  return (
    <div className="coach-mockup">
      <div className="radar-card">
        <div className="radar-shape" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="radar-labels">
          <span>Serve 72</span>
          <span>Receive 58</span>
          <span>Clutch 64</span>
        </div>
      </div>

      <div className="coach-cards">
        <InsightRow icon={<Brain size={18} />} title="Weakness" text="Receive control dropped after high-motion rallies." />
        <InsightRow icon={<HeartPulse size={18} />} title="Fitness" text="High HR points had lower win rate than baseline." />
        <InsightRow icon={<BatteryCharging size={18} />} title="Recovery" text="Moderate recovery. Use light movement and hydration." />
      </div>
    </div>
  );
}

export function ProgressMockup() {
  const bars = [52, 58, 55, 66, 71, 76];

  return (
    <div className="progress-mockup">
      <div className="progress-header">
        <div>
          <span className="mini-label">Progress</span>
          <strong>Last 6 matches</strong>
        </div>
        <ChartNoAxesCombined size={22} aria-hidden="true" />
      </div>
      <div className="bar-chart" aria-label="Progress chart">
        {bars.map((value, index) => (
          <span key={value + index} style={{ height: `${value}%` }}>
            <small>{value}</small>
          </span>
        ))}
      </div>
      <div className="progress-note">
        <Activity size={18} aria-hidden="true" />
        <span>Serve and tempo improved. Recovery demand is stable.</span>
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
