// §02 Problem — bento grid
// Layout: large diagnosis card (left, 2 rows) + 2 stacked cards (right) + full-width dark capstone

import { Eyebrow } from '@/design-system/primitives/Eyebrow';

export function ProblemSection() {
  return (
    <section
      id="problem"
      style={{ background: '#F0F7FA' }}
      className="px-6 py-16 md:px-10 md:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <div className="mb-8 max-w-[720px]">
          <Eyebrow>Why scale-up stalls</Eyebrow>
          <h2 className="display-section mt-4" style={{ color: '#041E27' }}>
            Pilot success doesn't guarantee industrial confidence.
          </h2>
          <p className="body-s mt-4 max-w-[640px]" style={{ color: '#585A5C' }}>
            Your pilot may be running. The milestone is real: a CDMO transfer, demo campaign, or commercial launch.
            Four hidden problems quietly compound. Most teams don't see them until the next expensive batch is already running.
          </p>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
          }}
        >
          {/* Desktop layout via nested grids */}
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">

            {/* P1 — No clear diagnosis (tall, with chart) */}
            <div
              className="rounded-3xl border p-5"
              style={{
                background: '#FFFFFF',
                borderColor: '#D4E8EF',
                boxShadow: '0 1px 3px rgba(4,30,39,0.06)',
              }}
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl"
                style={{ background: 'rgba(56,175,216,0.12)', color: '#2987A8' }}
              >
                <SearchIcon />
              </div>
              <h3 className="display-sub" style={{ color: '#041E27' }}>No clear diagnosis</h3>
              <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                Your batches vary: some good, some bad. But you don't know <em>when</em> they diverge
                or <em>what</em> drives it. Every week spent guessing is a week without an answer.
              </p>

              {/* Embedded batch trajectory chart */}
              <div
                className="mt-7 rounded-2xl border p-4"
                style={{ background: '#F8FCFD', borderColor: '#D4E8EF' }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="label-s" style={{ color: '#7B7E80' }}>Batch trajectory overlay</span>
                  <span className="rounded-full px-3 py-1 label-s" style={{ background: 'rgba(216,97,56,0.1)', color: '#A04627' }}>
                    Divergence window
                  </span>
                </div>
                <svg viewBox="0 0 560 240" className="w-full" style={{ height: 'auto' }} fill="none">
                  <defs>
                    <linearGradient id="divFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#D86138" stopOpacity="0.10"/>
                      <stop offset="100%" stopColor="#D86138" stopOpacity="0.03"/>
                    </linearGradient>
                  </defs>

                  {/* Y-axis label */}
                  <text x="10" y="130" fill="#9FA3A6" fontSize="9" fontWeight="500" textAnchor="middle"
                    transform="rotate(-90,10,130)">Titre (g/L)</text>

                  {/* Axes */}
                  <line x1="48" y1="208" x2="530" y2="208" stroke="#D4E8EF" strokeWidth="1"/>
                  <line x1="48" y1="16"  x2="48"  y2="208" stroke="#D4E8EF" strokeWidth="1"/>

                  {/* X-axis ticks + labels */}
                  {[0,24,48,72,96,120].map((h, i) => {
                    const x = 48 + i * (482/5);
                    return (
                      <g key={h}>
                        <line x1={x} y1="208" x2={x} y2="213" stroke="#C6CACC" strokeWidth="1"/>
                        <text x={x} y="222" fill="#9FA3A6" fontSize="9" textAnchor="middle">{h}h</text>
                      </g>
                    );
                  })}

                  {/* Y-axis ticks + labels */}
                  {[0,2,4,6,8].map((v, i) => {
                    const y = 208 - i * 46;
                    return (
                      <g key={v}>
                        <line x1="43" y1={y} x2="48" y2={y} stroke="#C6CACC" strokeWidth="1"/>
                        <text x="38" y={y+3} fill="#9FA3A6" fontSize="9" textAnchor="end">{v}</text>
                        {i > 0 && <line x1="48" y1={y} x2="530" y2={y} stroke="#EAF3F6" strokeWidth="1"/>}
                      </g>
                    );
                  })}

                  {/* Divergence window — shaded region */}
                  <rect x="268" y="16" width="108" height="192" rx="8" fill="url(#divFill)"/>
                  <rect x="268" y="16" width="108" height="192" rx="8"
                    stroke="#D86138" strokeWidth="1.2" strokeDasharray="4 5" fill="none" strokeOpacity="0.4"/>
                  <text x="322" y="12" fill="#D86138" fontSize="8.5" fontWeight="600" textAnchor="middle" opacity="0.7">divergence</text>

                  {/* Good batches — 5 teal lines, clustered together */}
                  <path d="M60 196 C110 182,170 160,240 130 C300 104,380 72,520 40"  stroke="#38AFD8" strokeWidth="2.2" strokeOpacity="0.9" strokeLinecap="round"/>
                  <path d="M60 198 C112 183,172 162,240 133 C302 107,382 76,520 46"  stroke="#38AFD8" strokeWidth="1.5" strokeOpacity="0.55" strokeLinecap="round"/>
                  <path d="M60 194 C108 180,168 158,240 127 C298 100,378 68,520 34"  stroke="#2987A8" strokeWidth="1.5" strokeOpacity="0.5"  strokeLinecap="round"/>
                  <path d="M60 197 C111 182,171 161,240 131 C301 105,381 74,520 43"  stroke="#80D4FA" strokeWidth="1.2" strokeOpacity="0.45" strokeLinecap="round"/>
                  <path d="M60 195 C109 181,169 159,240 129 C299 102,379 70,520 37"  stroke="#1B617A" strokeWidth="1.2" strokeOpacity="0.4"  strokeLinecap="round"/>

                  {/* Bad batches — 4 copper lines that diverge downward */}
                  <path d="M60 198 C112 183,172 161,240 132 C305 110,390 148,520 186" stroke="#D86138" strokeWidth="2.2" strokeOpacity="0.9" strokeLinecap="round"/>
                  <path d="M60 199 C113 184,174 163,240 134 C307 114,394 154,520 192" stroke="#D86138" strokeWidth="1.5" strokeOpacity="0.55" strokeLinecap="round"/>
                  <path d="M60 197 C111 182,170 160,240 131 C303 108,388 144,520 180" stroke="#A04627" strokeWidth="1.5" strokeOpacity="0.5"  strokeLinecap="round"/>
                  <path d="M60 200 C114 185,175 164,240 135 C308 116,396 158,520 196" stroke="#F3907A" strokeWidth="1.2" strokeOpacity="0.4"  strokeLinecap="round"/>

                  {/* Legend */}
                  <circle cx="64"  cy="232" r="4" fill="#38AFD8"/>
                  <text x="72"  y="235.5" fill="#2987A8" fontSize="9.5" fontWeight="600">good batches</text>
                  <circle cx="160" cy="232" r="4" fill="#D86138"/>
                  <text x="168" y="235.5" fill="#A04627" fontSize="9.5" fontWeight="600">failing batches</text>
                </svg>
              </div>
            </div>

            {/* Right column — two stacked cards */}
            <div className="flex flex-col gap-4">

              {/* P2 — Scale is a black box */}
              <div
                className="flex-1 rounded-3xl border p-7"
                style={{
                  background: '#FFFFFF',
                  borderColor: '#D4E8EF',
                  boxShadow: '0 1px 3px rgba(4,30,39,0.06)',
                }}
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: 'rgba(56,175,216,0.12)', color: '#2987A8' }}
                >
                  <GridIcon />
                </div>
                <h3 className="display-sub" style={{ color: '#041E27' }}>Scale is a black box</h3>
                <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                  What works at pilot doesn't automatically work at 100,000 litres. Mixing, OTR,
                  CO₂ stripping, and feed gradients all shift between scales. Failures discovered
                  late cost{' '}
                  <strong style={{ color: '#A04627', fontWeight: 700 }}>10–100× more</strong> to fix.
                </p>
              </div>

              {/* P3 — Data sitting idle */}
              <div
                className="flex-1 rounded-3xl border p-7"
                style={{
                  background: '#FFFFFF',
                  borderColor: '#D4E8EF',
                  boxShadow: '0 1px 3px rgba(4,30,39,0.06)',
                }}
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: 'rgba(56,175,216,0.12)', color: '#2987A8' }}
                >
                  <DatabaseIcon />
                </div>
                <h3 className="display-sub" style={{ color: '#041E27' }}>Your data is sitting idle</h3>
                <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                  Years of batch records, time-series trends, and deviation logs exist but aren't
                  being analysed together. Millions in R&D spend, generating zero forward momentum.
                </p>
              </div>
            </div>
          </div>

          {/* P4 — Full-width dark capstone */}
          <div
            className="relative overflow-hidden rounded-3xl p-6 md:p-8"
            style={{
              background: 'linear-gradient(135deg, #0E3E4F 0%, #1B617A 100%)',
              boxShadow: '0 4px 24px rgba(4,30,39,0.18)',
            }}
          >
            {/* Subtle bg glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: 'radial-gradient(ellipse 60% 80% at 8% 50%, rgba(27,97,122,0.25), transparent 55%)',
              }}
            />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-12">
              <div>
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(216,97,56,0.18)', color: '#D86138' }}
                >
                  <ClockIcon />
                </div>
                <h3 className="display-sub max-w-[520px]" style={{ color: '#FFFFFF' }}>
                  Every wasted week is market share lost.
                </h3>
                <p className="body-s mt-4 max-w-[640px]" style={{ color: 'rgba(128,212,250,0.75)' }}>
                  While you're stuck in scale-up cycles, your competitor is moving. Each delay pushes
                  your launch further out, compounds your losses, and hands the market to someone
                  else. Millions spent and nothing to show for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
      <path d="M11 8v3"/><path d="M11 14h.01"/>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18"/><path d="M9 21V9"/>
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
      <path d="M3 12a9 3 0 0 0 18 0"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}
