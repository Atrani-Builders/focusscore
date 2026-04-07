"use client";

import { useState } from "react";

const css = `
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'SF Pro Display', 'SF Pro Text', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: #000;
  min-height: 100vh;
}

.page {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  position: relative;
}

/* HERO */
.hero {
  background: #000;
  padding: 52px 28px 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;
  height: 280px;
  background: radial-gradient(ellipse, rgba(0,113,227,0.14) 0%, transparent 70%);
  pointer-events: none;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2997ff;
  border: 1px solid rgba(41,151,255,0.3);
  border-radius: 980px;
  padding: 5px 14px;
  margin-bottom: 28px;
}

.badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #2997ff;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero h1 {
  font-size: 41px;
  font-weight: 600;
  line-height: 1.06;
  letter-spacing: -0.03em;
  color: #fff;
  margin-bottom: 18px;
  position: relative;
}

.hero h1 .muted {
  color: rgba(255,255,255,0.38);
}

.hero-body {
  font-size: 17px;
  font-weight: 300;
  line-height: 1.58;
  letter-spacing: -0.02em;
  color: rgba(255,255,255,0.55);
  margin-bottom: 36px;
  position: relative;
}

.hero-body b {
  color: rgba(255,255,255,0.86);
  font-weight: 400;
}

.email-input {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 16px 18px;
  font-size: 17px;
  font-weight: 400;
  color: #fff;
  letter-spacing: -0.374px;
  outline: none;
  font-family: inherit;
  margin-bottom: 10px;
  transition: border-color 0.2s;
  position: relative;
}

.email-input::placeholder { color: rgba(255,255,255,0.25); }
.email-input:focus { border-color: rgba(41,151,255,0.65); }

.submit-btn {
  width: 100%;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 16px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.374px;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  position: relative;
}

.submit-btn:active { opacity: 0.8; }

.form-note {
  font-size: 12px;
  color: rgba(255,255,255,0.2);
  text-align: center;
  margin-top: 10px;
  letter-spacing: -0.1px;
}

/* STATS STRIP */
.stats-strip {
  background: #000;
  display: flex;
  border-top: 0.5px solid rgba(255,255,255,0.08);
  border-bottom: 0.5px solid rgba(255,255,255,0.08);
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 24px 8px;
  border-right: 0.5px solid rgba(255,255,255,0.08);
}

.stat-item:last-child { border-right: none; }

.stat-val {
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 5px;
}

.stat-lbl {
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.3;
}

/* SCENARIO */
.scenario {
  background: #111;
  padding: 52px 28px;
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.eyebrow.light { color: rgba(255,255,255,0.3); }
.eyebrow.dark { color: rgba(255,255,255,0.3); }
.eyebrow.blue { color: #2997ff; }

.section-h2 {
  font-size: 34px;
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 10px;
}

.section-h2.on-light { color: #fff; }
.section-h2.on-dark { color: #fff; }

.section-lead {
  font-size: 17px;
  font-weight: 300;
  line-height: 1.55;
  letter-spacing: -0.374px;
  margin-bottom: 28px;
}

.section-lead.on-light { color: rgba(255,255,255,0.52); }
.section-lead.on-dark { color: rgba(255,255,255,0.52); }

.scenario-card {
  background: #1c1c1e;
  border-radius: 20px;
  padding: 24px 22px;
  border: 1px solid rgba(255,255,255,0.07);
}

.scenario-time {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  margin-bottom: 14px;
}

.scenario-line {
  display: flex;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 0.5px solid rgba(255,255,255,0.07);
  align-items: flex-start;
}

.scenario-line:last-child { border-bottom: none; }

.scenario-icon {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
}

.icon-red { background: rgba(255,69,58,0.1); }
.icon-amber { background: rgba(255,159,10,0.1); }
.icon-blue { background: rgba(0,113,227,0.1); }
.icon-green { background: rgba(48,209,88,0.1); }

.scenario-text {
  font-size: 14px;
  color: rgba(255,255,255,0.86);
  line-height: 1.5;
  letter-spacing: -0.2px;
}

.scenario-text .sub {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
  margin-top: 2px;
}

.focusscore-override {
  background: rgba(0,113,227,0.06);
  border: 1px solid rgba(0,113,227,0.18);
  border-radius: 12px;
  padding: 14px 16px;
  margin-top: 14px;
}

.override-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0071e3;
  margin-bottom: 6px;
}

.override-text {
  font-size: 14px;
  color: rgba(255,255,255,0.86);
  line-height: 1.5;
  letter-spacing: -0.2px;
  font-weight: 500;
}

/* DIRECTIVE */
.directive-section {
  background: #000;
  padding: 52px 28px;
}

.score-ring {
  width: 148px;
  height: 148px;
  margin: 0 auto 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-ring svg {
  position: absolute;
  top: 0; left: 0;
  transform: rotate(-90deg);
}

.score-center {
  text-align: center;
  position: relative;
  z-index: 1;
}

.score-number {
  font-size: 44px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1;
}

.score-sublabel {
  font-size: 10px;
  color: rgba(255,255,255,0.36);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 3px;
}

.directive-card {
  background: #1c1c1e;
  border-radius: 20px;
  padding: 24px 22px;
  margin-bottom: 10px;
  border: 1px solid rgba(255,255,255,0.07);
}

.directive-window {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #2997ff;
  margin-bottom: 10px;
}

.directive-main {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.directive-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.44);
  line-height: 1.5;
  letter-spacing: -0.2px;
}

.metrics-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-top: 10px;
}

.metric-cell {
  background: #1c1c1e;
  border-radius: 14px;
  padding: 14px 10px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.06);
}

.metric-val {
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.metric-val.red { color: #ff453a; }
.metric-val.amber { color: #ff9f0a; }
.metric-val.green { color: #30d158; }

.metric-lbl {
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.3;
}

/* PATTERN */
.pattern-section {
  background: #111;
  padding: 52px 28px;
}

.week-card {
  background: #1c1c1e;
  border-radius: 20px;
  padding: 22px 20px;
  border: 1px solid rgba(255,255,255,0.07);
  margin-bottom: 10px;
}

.week-header {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.3);
  margin-bottom: 16px;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 9px;
}

.bar-day {
  font-size: 11px;
  color: rgba(255,255,255,0.36);
  width: 24px;
  text-align: right;
  flex-shrink: 0;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.bar-track {
  flex: 1;
  height: 7px;
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 4px;
}

.bar-fill.h { background: #30d158; }
.bar-fill.m { background: #ff9f0a; }
.bar-fill.l { background: #ff453a; }

.bar-pct {
  font-size: 12px;
  font-weight: 600;
  width: 28px;
  text-align: right;
  flex-shrink: 0;
  letter-spacing: -0.01em;
}

.bar-pct.h { color: #30d158; }
.bar-pct.m { color: #ff9f0a; }
.bar-pct.l { color: #ff453a; }

.insight-card {
  background: rgba(255,159,10,0.06);
  border: 1px solid rgba(255,159,10,0.22);
  border-radius: 14px;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.insight-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
}

.insight-title {
  font-size: 13px;
  font-weight: 600;
  color: #ff9f0a;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.insight-body {
  font-size: 13px;
  color: rgba(255,255,255,0.52);
  line-height: 1.5;
  letter-spacing: -0.1px;
}

/* ICP */
.icp-section {
  background: #000;
  padding: 52px 28px;
}

.icp-table {
  margin-top: 24px;
}

.icp-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-bottom: 0.5px solid rgba(255,255,255,0.07);
}

.icp-row:last-child { border-bottom: none; }

.icp-label {
  font-size: 15px;
  color: rgba(255,255,255,0.44);
  letter-spacing: -0.01em;
}

.icp-value {
  font-size: 15px;
  font-weight: 500;
  color: rgba(255,255,255,0.86);
  letter-spacing: -0.01em;
  text-align: right;
}

.icp-value.blue { color: #2997ff; }
.icp-value.green { color: #30d158; }

.tag {
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  border-radius: 980px;
  padding: 4px 11px;
  margin: 4px 4px 0 0;
  letter-spacing: -0.01em;
}

.tag-blue { background: rgba(41,151,255,0.12); color: #2997ff; }
.tag-green { background: rgba(48,209,88,0.12); color: #30d158; }
.tag-amber { background: rgba(255,159,10,0.12); color: #ff9f0a; }

/* PRICING */
.pricing-section {
  background: #111;
  padding: 52px 28px;
  text-align: center;
}

.price-card {
  background: #000;
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  margin-top: 24px;
}

.price-pill {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2997ff;
  border: 1px solid rgba(41,151,255,0.35);
  border-radius: 980px;
  padding: 5px 14px;
  margin-bottom: 22px;
}

.price-number {
  font-size: 60px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 4px;
}

.price-period {
  font-size: 17px;
  color: rgba(255,255,255,0.36);
  letter-spacing: -0.374px;
  margin-bottom: 28px;
}

.feature-list {
  list-style: none;
  text-align: left;
  margin-bottom: 28px;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: rgba(255,255,255,0.65);
  padding: 11px 0;
  border-bottom: 0.5px solid rgba(255,255,255,0.07);
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.feature-list li:last-child { border-bottom: none; }

.chk {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0,113,227,0.18);
  color: #2997ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

.price-btn {
  width: 100%;
  background: #0071e3;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 16px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.374px;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 14px;
}

.price-annual {
  font-size: 13px;
  color: rgba(255,255,255,0.28);
  letter-spacing: -0.1px;
}

.price-annual b {
  color: rgba(255,255,255,0.52);
  font-weight: 500;
}

.pricing-note {
  margin-top: 16px;
  font-size: 12px;
  color: rgba(255,255,255,0.28);
  line-height: 1.55;
  letter-spacing: -0.1px;
}

/* FOOTER */
.footer {
  background: #000;
  padding: 36px 28px 56px;
  text-align: center;
  border-top: 0.5px solid rgba(255,255,255,0.07);
}

.footer-name {
  font-size: 15px;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}

.footer-copy {
  font-size: 12px;
  color: rgba(255,255,255,0.18);
  letter-spacing: -0.1px;
  line-height: 1.6;
}

.confirmation-msg {
  color: rgba(255,255,255,0.65);
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  padding: 16px 0;
  letter-spacing: -0.374px;
}
`;

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [pricingSubmitted, setPricingSubmitted] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="page">

        {/* HERO */}
        <div className="hero">
          <div className="hero-glow"></div>
          <div className="hero-badge">
            <span className="badge-dot"></span>Early access open
          </div>
          <h1>
            Not just a sleep score.
            <br />
            <span className="muted">A judgment forecast.</span>
          </h1>
          <p className="hero-body">
            {
              "You\u2019re making $300k decisions at 9am on 4 hours of sleep \u2014 and your only data point is \u201cI feel tired.\u201d"
            }
            <br />
            <br />
            <b>
              FocusScore tells you when your judgment is sharp, when it&apos;s
              compromised, and exactly what to defer.
            </b>
          </p>
          {submitted ? (
            <p className="confirmation-msg">You&apos;re on the list.</p>
          ) : (
            <>
              <input
                className="email-input"
                type="email"
                placeholder="Your work email"
              />
              <button
                className="submit-btn"
                onClick={() => setSubmitted(true)}
              >
                Get early access
              </button>
            </>
          )}
          <p className="form-note">
            Invite-only. Founders and executives only.
          </p>
        </div>

        {/* STATS */}
        <div className="stats-strip">
          <div className="stat-item">
            <div className="stat-val">60s</div>
            <div className="stat-lbl">
              morning
              <br />
              check-in
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-val">Day 5</div>
            <div className="stat-lbl">
              patterns
              <br />
              emerge
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-val">$19</div>
            <div className="stat-lbl">
              per
              <br />
              month
            </div>
          </div>
        </div>

        {/* SCENARIO */}
        <div className="scenario">
          <div className="eyebrow light">A morning without FocusScore</div>
          <h2 className="section-h2 on-light">
            8:47am. Board prep in 13 minutes.
          </h2>
          <p className="section-lead on-light">
            Your sleep was 4.5 hours. You feel okay &mdash; but okay isn&apos;t
            the same as sharp.
          </p>

          <div className="scenario-card">
            <div className="scenario-time">Tuesday &middot; 8:47am</div>

            <div className="scenario-line">
              <div className="scenario-icon icon-red">💸</div>
              <div className="scenario-text">
                $400k vendor deal on the table. You&apos;re the deciding vote.
                <div className="sub">
                  Contract expires Friday. Pressure is on.
                </div>
              </div>
            </div>
            <div className="scenario-line">
              <div className="scenario-icon icon-amber">👤</div>
              <div className="scenario-text">
                Senior hire decision &mdash; offer expires today.
                <div className="sub">
                  You&apos;ve been going back and forth for two days.
                </div>
              </div>
            </div>
            <div className="scenario-line">
              <div className="scenario-icon icon-red">🧠</div>
              <div className="scenario-text">
                Your recall is running at 68%. Risk tolerance is elevated.
                <div className="sub">You don&apos;t know this yet.</div>
              </div>
            </div>

            <div className="focusscore-override">
              <div className="override-label">FocusScore would have said</div>
              <div className="override-text">
                &ldquo;Defer the vendor deal. Make the hire call &mdash;
                that&apos;s a relationship decision, not analytical. Your window
                opens at 10:30.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* DIRECTIVE OUTPUT */}
        <div className="directive-section">
          <div
            className="eyebrow dark"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            Your morning output
          </div>

          <div className="score-ring">
            <svg width="148" height="148" viewBox="0 0 148 148">
              <circle
                cx="74"
                cy="74"
                r="64"
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="8"
              />
              <circle
                cx="74"
                cy="74"
                r="64"
                fill="none"
                stroke="#0071e3"
                strokeWidth="8"
                strokeDasharray="402"
                strokeDashoffset="120"
                strokeLinecap="round"
              />
            </svg>
            <div className="score-center">
              <div className="score-number">72</div>
              <div className="score-sublabel">Judgment</div>
            </div>
          </div>

          <div className="directive-card">
            <div className="directive-window">
              Focus window: 10:30am to 1:00pm
            </div>
            <div className="directive-main">
              Make the hire decision now.
              <br />
              Defer the vendor call.
            </div>
            <div className="directive-sub">
              Risk tolerance is elevated this morning. Irreversible financial
              commitments should move past 11am. Your pattern confirms this.
            </div>
          </div>

          <div className="metrics-row">
            <div className="metric-cell">
              <div className="metric-val amber">HIGH</div>
              <div className="metric-lbl">
                Risk
                <br />
                Bias
              </div>
            </div>
            <div className="metric-cell">
              <div className="metric-val red">-28%</div>
              <div className="metric-lbl">
                Recall
                <br />
                Today
              </div>
            </div>
            <div className="metric-cell">
              <div className="metric-val green">10:30</div>
              <div className="metric-lbl">
                Peak
                <br />
                Window
              </div>
            </div>
          </div>
        </div>

        {/* PATTERN */}
        <div className="pattern-section">
          <div className="eyebrow light">Week 5 and beyond</div>
          <h2 className="section-h2 on-light">
            Your patterns.
            <br />
            Not generic science.
          </h2>
          <p className="section-lead on-light">
            After 5 days FocusScore surfaces what&apos;s actually behind your
            worst decision-making days.
          </p>

          <div className="week-card">
            <div className="week-header">
              This week &middot; Judgment score
            </div>
            <div className="bar-row">
              <span className="bar-day">Mon</span>
              <div className="bar-track">
                <div
                  className="bar-fill h"
                  style={{ width: "88%" }}
                ></div>
              </div>
              <span className="bar-pct h">88</span>
            </div>
            <div className="bar-row">
              <span className="bar-day">Tue</span>
              <div className="bar-track">
                <div
                  className="bar-fill h"
                  style={{ width: "91%" }}
                ></div>
              </div>
              <span className="bar-pct h">91</span>
            </div>
            <div className="bar-row">
              <span className="bar-day">Wed</span>
              <div className="bar-track">
                <div
                  className="bar-fill m"
                  style={{ width: "64%" }}
                ></div>
              </div>
              <span className="bar-pct m">64</span>
            </div>
            <div className="bar-row">
              <span className="bar-day">Thu</span>
              <div className="bar-track">
                <div
                  className="bar-fill l"
                  style={{ width: "42%" }}
                ></div>
              </div>
              <span className="bar-pct l">42</span>
            </div>
            <div className="bar-row">
              <span className="bar-day">Fri</span>
              <div className="bar-track">
                <div
                  className="bar-fill m"
                  style={{ width: "71%" }}
                ></div>
              </div>
              <span className="bar-pct m">71</span>
            </div>
          </div>

          <div className="insight-card">
            <div className="insight-icon">⚠</div>
            <div>
              <div className="insight-title">Pattern detected</div>
              <div className="insight-body">
                Your worst judgment days correlate with under 6h sleep plus a
                dinner after 9pm. Wednesday and Thursday confirm it again.
                Protect those nights or push your first calls past 10.
              </div>
            </div>
          </div>
        </div>

        {/* ICP */}
        <div className="icp-section">
          <div className="eyebrow dark">Built for</div>
          <h2
            className="section-h2 on-dark"
            style={{ marginBottom: "8px" }}
          >
            One type of person.
          </h2>
          <p
            className="section-lead on-dark"
            style={{ marginBottom: "24px" }}
          >
            FocusScore is deliberately not for everyone. It&apos;s for the
            person whose decisions have consequences.
          </p>

          <div className="icp-table">
            <div className="icp-row">
              <span className="icp-label">Role</span>
              <span className="icp-value">Founder, CEO, C-suite</span>
            </div>
            <div className="icp-row">
              <span className="icp-label">Age</span>
              <span className="icp-value">25 to 55</span>
            </div>
            <div className="icp-row">
              <span className="icp-label">Average sleep</span>
              <span className="icp-value">5.1 hours</span>
            </div>
            <div className="icp-row">
              <span className="icp-label">Already pays for</span>
              <span className="icp-value">Superhuman, Oura, Calm</span>
            </div>
            <div className="icp-row">
              <span className="icp-label">Missing</span>
              <span className="icp-value blue">The action layer</span>
            </div>
            <div className="icp-row">
              <span className="icp-label">Device</span>
              <span className="icp-value green">iPhone first</span>
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <span className="tag tag-blue">No wearable required</span>
            <span className="tag tag-green">60 seconds per day</span>
            <span className="tag tag-amber">Specific to your patterns</span>
          </div>
        </div>

        {/* PRICING */}
        <div className="pricing-section">
          <div
            className="eyebrow light"
            style={{ textAlign: "center" }}
          >
            Pricing
          </div>
          <h2
            className="section-h2 on-light"
            style={{ textAlign: "center" }}
          >
            Professional,
            <br />
            not wellness.
          </h2>

          <div className="price-card">
            <div className="price-pill">FocusScore Pro</div>
            <div className="price-number">$19</div>
            <div className="price-period">per month</div>
            <ul className="feature-list">
              <li>
                <span className="chk">✓</span>Daily judgment check-in, 3
                questions, under 60 seconds
              </li>
              <li>
                <span className="chk">✓</span>Morning directive and
                personalised focus window
              </li>
              <li>
                <span className="chk">✓</span>Decision type recommendations,
                what to act on, what to defer
              </li>
              <li>
                <span className="chk">✓</span>Weekly pattern analysis, specific
                to your data
              </li>
              <li>
                <span className="chk">✓</span>Apple Pay, one-tap subscription
              </li>
            </ul>
            {pricingSubmitted ? (
              <p className="confirmation-msg">You&apos;re on the list.</p>
            ) : (
              <button
                className="price-btn"
                onClick={() => setPricingSubmitted(true)}
              >
                Join the waitlist
              </button>
            )}
            <div className="price-annual">
              Annual plan: <b>$149/yr</b>, 35% saving. At launch.
            </div>
          </div>

          <p className="pricing-note">
            Superhuman charges $30/mo for email. Calm charges $14.99 for
            meditation. FocusScore charges $19 for executive judgment. Below the
            expense-it threshold. Above consumer wellness territory.
          </p>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="footer-name">FocusScore</div>
          <div className="footer-copy">
            Built by Atrani.
            <br />
            Invite-only launch. Not for distribution.
          </div>
        </div>
      </div>
    </>
  );
}
