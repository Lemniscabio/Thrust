// §03 Approach — bento grid + conventional vs Thrust comparison table

import { Eyebrow } from '@/design-system/primitives/Eyebrow';

export function ApproachSection() {
  return (
    <section
      id="approach"
      style={{ background: '#F0F7FA' }}
      className="px-6 py-16 md:px-10 md:py-24 lg:px-14"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Header */}
        <div className="mb-10 max-w-[760px]">
          <Eyebrow>The Thrust Approach</Eyebrow>
          <h2 className="display-section mt-4" style={{ color: '#041E27' }}>
            The plant should not be where you discover scale-up risk.
          </h2>
          <p className="body-s mt-4 max-w-[660px]" style={{ color: '#585A5C' }}>
            Thrust handles the heavy lifting, turning batch and process data into predictive
            intelligence so you make scale-up decisions before the next expensive run, not after.
          </p>
        </div>

        {/* ── Bento grid ── */}
        <div className="grid gap-4">

          {/* Row 1: two equal cards */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* A1 — Know exactly where batches go wrong */}
            <div
              className="rounded-3xl border p-7"
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
                <TargetIcon />
              </div>
              <h3 className="display-sub" style={{ color: '#041E27' }}>
                Know exactly where batches go wrong
              </h3>
              <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                Thrust pinpoints precisely when good and bad batches diverge and which signals drive
                the difference, so you fix it fast, not slowly.
              </p>
            </div>

            {/* A2 — Predict before you commit */}
            <div
              className="rounded-3xl border p-7"
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
                <ModelIcon />
              </div>
              <h3 className="display-sub" style={{ color: '#041E27' }}>
                Predict before you commit
              </h3>
              <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                Thrust builds a{' '}
                <strong style={{ color: '#0E3E4F', fontWeight: 650 }}>
                  predictive model of your process at scale
                </strong>
                , so you see failure modes before they become commercial problems.
              </p>
            </div>
          </div>

          {/* Row 2: light card + dark highlighted card */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* A3 — Monetise the data you already own */}
            <div
              className="rounded-3xl border p-7"
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
                <LayersIcon />
              </div>
              <h3 className="display-sub" style={{ color: '#041E27' }}>
                Monetise the data you already own
              </h3>
              <p className="body-s mt-3" style={{ color: '#585A5C' }}>
                Thrust turns existing batch history into a structured intelligence layer, converting
                sunk R&amp;D cost into a strategic asset that moves you forward.
              </p>
            </div>

            {/* A4 — Get to market (dark capstone card) */}
            <div
              className="relative overflow-hidden rounded-3xl p-7"
              style={{
                background: 'linear-gradient(135deg, #0E3E4F 0%, #1B617A 100%)',
                boxShadow: '0 4px 24px rgba(4,30,39,0.18)',
              }}
            >
              {/* Subtle teal glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 65% 80% at 10% 50%, rgba(27,97,122,0.3), transparent 55%)',
                }}
              />
              <div className="relative">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: 'rgba(216,97,56,0.18)', color: '#D86138' }}
                >
                  <RocketIcon />
                </div>
                <h3 className="display-sub max-w-[400px]" style={{ color: '#FFFFFF' }}>
                  Get to market before your window closes
                </h3>
                <p className="body-s mt-3 max-w-[520px]" style={{ color: 'rgba(128,212,250,0.78)' }}>
                  Thrust compresses scale-up timelines from years to months, protecting your launch
                  window, your market position, and the commercial returns your program was built to
                  deliver.
                </p>
              </div>
            </div>
          </div>

          {/* ── Comparison table ── */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Conventional scale-up */}
            <div
              className="rounded-3xl border p-7"
              style={{
                background: '#FFFFFF',
                borderColor: '#D4E8EF',
                boxShadow: '0 1px 3px rgba(4,30,39,0.06)',
              }}
            >
              <p className="label-s mb-6" style={{ color: '#7B7E80' }}>Conventional scale-up</p>
              <ol className="flex flex-col gap-3">
                {[
                  'Pilot works',
                  'Scale-up assumptions',
                  'Larger batch',
                  'Diagnose after the fact',
                ].map((item, i) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-[600]"
                      style={{ background: '#F0F7FA', color: '#9FA3A6' }}
                    >
                      {i + 1}
                    </span>
                    <span className="body-s" style={{ color: '#585A5C' }}>{item}</span>
                  </li>
                ))}
              </ol>
              <div
                className="mt-6 rounded-2xl px-4 py-3"
                style={{ background: '#F8F8F8' }}
              >
                <p className="body-s" style={{ color: '#9FA3A6' }}>
                  Feedback arrives after commitment.
                </p>
              </div>
            </div>

            {/* Thrust scale-up */}
            <div
              className="relative overflow-hidden rounded-3xl border p-7"
              style={{
                background: '#FFFFFF',
                borderColor: '#D4E8EF',
                boxShadow: '0 1px 3px rgba(4,30,39,0.06)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 90% 20%, rgba(56,175,216,0.1), transparent 60%)',
                }}
              />
              <div className="relative">
                <p className="label-s mb-6" style={{ color: '#7B7E80' }}>
                  Thrust scale-up
                </p>
                <ol className="flex flex-col gap-3">
                  {[
                    'Batch data',
                    'Divergence signals',
                    'Predictive scale-up models',
                    'Informed next run',
                  ].map((item, i) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-[600]"
                        style={{ background: 'rgba(56,175,216,0.12)', color: '#2987A8' }}
                      >
                        {i + 1}
                      </span>
                      <span className="body-s" style={{ color: '#041E27' }}>{item}</span>
                    </li>
                  ))}
                </ol>
                <div
                  className="mt-6 rounded-2xl px-4 py-3"
                  style={{
                    background: 'rgba(216,97,56,0.08)',
                  }}
                >
                  <p className="body-s" style={{ color: '#A04627' }}>
                    Risk is surfaced before the next expensive run.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Icons ── */
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

function ModelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18"/>
      <path d="M7 16c1-2 2-4 4-5s3 1 5-1 2-4 3-5"/>
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  );
}
