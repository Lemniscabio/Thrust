// §04 + §05 — How Thrust Works + What Thrust Delivers
// Simple, editorial layout. Minimal color — neutral palette only, no teal/copper overload.

const STEPS = [
  {
    n: '01',
    title: 'Diagnose & ingest batch history',
    sub: 'Pull together pilot and multi-scale data into one unified baseline.',
    bullets: [
      'Batch records, time-series, deviations',
      'Scale metadata & transfer history',
      'Quality outcomes & pass/fail labels',
    ],
    output: 'Unified batch baseline',
  },
  {
    n: '02',
    title: 'Map divergence & risk signals',
    sub: 'Compare good vs bad batch trajectories and surface the signals that separate them.',
    bullets: [
      'Divergence-window detection',
      'Candidate driver identification',
      'Scale-fragility hotspots',
    ],
    output: 'Scale-up risk map',
  },
  {
    n: '03',
    title: 'Build predictive hybrid models',
    sub: 'Mechanistic + data-driven models that simulate scale-up behaviour with quantified uncertainty.',
    bullets: [
      'Predicted batch trajectories',
      'Scale-up risk estimates',
      'Soft sensors & forecasts with uncertainty',
    ],
    output: 'Predictive model layer',
    core: true,
  },
  {
    n: '04',
    title: 'Deliver the industrial-ready package',
    sub: 'Translate the model into operating decisions and a monitoring layer for the next major run.',
    bullets: [
      'Operating envelope & ranges',
      'Golden-batch & deviation tracking',
      'Decision rules & early-warning signals',
    ],
    output: 'Industrial-ready package',
  },
] satisfies ReadonlyArray<{
  n: string;
  title: string;
  sub: string;
  bullets: readonly string[];
  output: string;
  core?: boolean;
}>;

const DELIVERABLES = [
  {
    title: 'Divergence & scale-up risk diagnosis',
    body: 'A clear view of where good and bad batches separate, which signals matter, and what hidden risks may affect the next scale.',
    detail: 'Shows where risk is emerging before it becomes visible in final KPIs.',
  },
  {
    title: 'Next-scale operating envelope & run strategy',
    body: 'A practical strategy for the next major run — recommended operating ranges, monitoring priorities, and scale-sensitive constraints.',
    detail: 'Helps the team know how to run the next scale and where the process has room to operate.',
  },
  {
    title: 'Decision rules & monitoring layer',
    body: 'Expected performance ranges, early-warning signals, golden-batch tracking, and decision logic for interpreting the next scale-up batch.',
    detail: 'Sets expected ranges, warning signs, and decision logic before the batch begins.',
  },
] as const;

export function ProgramSection() {
  return (
    <>
      {/* ════════════════════════════
          §04  HOW THRUST WORKS
      ════════════════════════════ */}
      <section
        id="program"
        style={{ background: '#F0F7FA' }}
        className="px-6 py-16 md:px-10 md:py-24 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">

          {/* Header */}
          <div className="mb-12 max-w-[680px]">
            <p className="label-s mb-3" style={{ color: '#2987A8', letterSpacing: '0.08em' }}>
              HOW THRUST WORKS
            </p>
            <h2 className="display-section" style={{ color: '#041E27' }}>
              A predictive decision layer for bioprocess scale-up.
            </h2>
            <p className="body-s mt-4" style={{ color: '#585A5C' }}>
              Thrust combines bioprocess engineering, batch analytics, and hybrid predictive
              modelling into a single technical workflow, so your team makes better decisions
              before the next expensive scale transition.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-4"
            style={{ background: '#D4E8EF', borderRadius: '20px', overflow: 'hidden' }}>
            {STEPS.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-5 p-6 md:p-7"
                style={{ background: '#FFFFFF' }}
              >
                {/* Step number + core badge */}
                <div className="flex items-center gap-3">
                  <span
                    className="label-s font-[700] tabular-nums"
                    style={{ color: '#C6CACC', letterSpacing: '0.04em' }}
                  >
                    Step {step.n}
                  </span>
                  {step.core && (
                    <span
                      className="rounded-full px-2.5 py-0.5 label-s"
                      style={{ background: '#F0F7FA', color: '#2987A8', fontSize: '10px' }}
                    >
                      Core capability
                    </span>
                  )}
                </div>

                {/* Title + sub */}
                <div>
                  <h3 className="display-sub" style={{ color: '#041E27' }}>{step.title}</h3>
                  <p className="body-s mt-2" style={{ color: '#7B7E80' }}>{step.sub}</p>
                </div>

                {/* Bullet list */}
                <ul className="flex flex-col gap-1.5">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: '#C6CACC' }}
                      />
                      <span className="body-s" style={{ color: '#585A5C' }}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Output badge */}
                <div className="mt-auto pt-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 label-s"
                    style={{ background: '#041E27', color: '#FFFFFF', fontSize: '11px' }}
                  >
                    <span style={{ color: '#C6CACC' }}>Output:</span>
                    {step.output}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          §05  WHAT THRUST DELIVERS
      ════════════════════════════ */}
      <section
        id="deliverables"
        style={{ background: '#F0F7FA' }}
        className="px-6 pb-16 md:px-10 md:pb-24 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">

          {/* Divider */}
          <div
            className="mb-14 h-px w-full"
            style={{ background: '#D4E8EF' }}
          />

          {/* Header */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[560px]">
              <p className="label-s mb-3" style={{ color: '#2987A8', letterSpacing: '0.08em' }}>
                WHAT THRUST DELIVERS
              </p>
              <h2 className="display-section" style={{ color: '#041E27' }}>
                A scale-up package ready for the next major run.
              </h2>
            </div>
            <p className="body-s max-w-[420px] md:text-right" style={{ color: '#585A5C' }}>
              The end outcome of Thrust is not another post-batch report. It is a practical,
              technically grounded package anchored by a predictive model layer that helps
              your team commit to the next scale with greater confidence.
            </p>
          </div>

          {/* 3 standard deliverable cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div
                key={d.title}
                className="flex flex-col gap-4 rounded-2xl border p-6"
                style={{
                  background: '#FFFFFF',
                  borderColor: '#D4E8EF',
                }}
              >
                <h3 className="display-sub" style={{ color: '#041E27' }}>{d.title}</h3>
                <p className="body-s" style={{ color: '#585A5C' }}>{d.body}</p>
                <p
                  className="mt-auto border-t pt-4 body-s"
                  style={{ color: '#7B7E80', borderColor: '#EAF3F6' }}
                >
                  {d.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Capstone card — full width */}
          <div
            className="relative mt-4 overflow-hidden rounded-2xl border p-7 md:p-8"
            style={{
              background: '#FFFFFF',
              borderColor: '#D4E8EF',
            }}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-16">
              <div className="shrink-0">
                <span
                  className="inline-flex rounded-full px-3 py-1 label-s mb-4"
                  style={{ background: '#F0F7FA', color: '#585A5C', fontSize: '11px', letterSpacing: '0.06em' }}
                >
                  CAPSTONE
                </span>
                <h3
                  className="display-sub max-w-[22ch]"
                  style={{ color: '#041E27' }}
                >
                  Predictive hybrid model layer
                </h3>
              </div>
              <div className="flex flex-col gap-3 md:border-l md:pl-16" style={{ borderColor: '#D4E8EF' }}>
                <p className="body-s" style={{ color: '#585A5C' }}>
                  Mechanistic + data-driven models that simulate scale-up behaviour, quantify
                  uncertainty, and power soft sensors, deviation forecasts, and golden-batch
                  tracking.
                </p>
                <p
                  className="body-s pt-3 border-t"
                  style={{ color: '#041E27', fontWeight: 550, borderColor: '#EAF3F6' }}
                >
                  The technical IP that turns batch history into forward-looking scale-up
                  intelligence.
                </p>
              </div>
            </div>
            {/* Subtle corner accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(56,175,216,0.07), transparent 70%)' }}
            />
          </div>

          {/* Bottom disclaimer */}
          <p
            className="mt-8 text-center body-s max-w-[58ch] mx-auto"
            style={{ color: '#9FA3A6' }}
          >
            Thrust does not replace your process team. It helps your team see scale-up risk
            earlier, decide faster, and move toward industrial manufacturing with greater
            confidence.
          </p>
        </div>
      </section>
    </>
  );
}
