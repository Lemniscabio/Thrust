// §06 Start — exclusive 10-day pilot CTA
// Exact structural copy of Tune's SprintCta, colours mapped to Thrust teal + copper palette.
// Layout: left = headline + copy | right = 4 steps + white CTA card

import Link from 'next/link';

const STEPS = [
  {
    title: 'Understand the scale-up context',
    desc: 'Current scale, target scale, process history, constraints, transfer context, and milestones.',
  },
  {
    title: 'Review the data',
    desc: 'Batch records, time-series trends, deviations, offline measurements, summaries, notes, and transfer history.',
  },
  {
    title: 'Identify the divergence risk',
    desc: 'Where batches may be separating, where the process may be fragile, and what must be understood before the next transition.',
  },
  {
    title: 'Recommend the next move',
    desc: 'Whether Thrust is a fit, and what a longer engagement should focus on.',
  },
] as const;

export function StartSection({ id = 'start' }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden px-6 py-20 md:px-8 md:py-28"
      style={{ background: '#F0F7FA' }}
    >
      <div className="mx-auto max-w-[1280px]">
        <div
          className="relative overflow-hidden rounded-[34px] border shadow-[0_34px_90px_-52px_rgba(4,30,39,0.52)]"
          style={{ borderColor: 'rgba(56,175,216,0.28)' }}
        >
          <div className="px-7 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">

            {/* Background gradient */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage: [
                  'radial-gradient(ellipse 68% 50% at 20% 20%, rgba(41,135,168,0.38) 0%, transparent 72%)',
                  'radial-gradient(ellipse 82% 58% at 86% 18%, rgba(14,62,79,0.42) 0%, transparent 72%)',
                  'radial-gradient(ellipse 90% 56% at 50% 100%, rgba(2,8,12,0.96) 0%, rgba(4,12,18,0.82) 54%, transparent 88%)',
                  'linear-gradient(180deg, #071E2B 0%, #0E3E4F 26%, #1B617A 46%, #0D3344 68%, #041E27 100%)',
                ].join(', '),
              }}
            />

            {/* Top inner highlight */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[180px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 46%, transparent 100%)',
              }}
            />

            {/* Subtle teal sheen drift */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background:
                  'radial-gradient(circle at 26% 14%, rgba(128,212,250,0.18) 0%, transparent 32%)',
              }}
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">

              {/* ── Left — headline + copy ── */}
              <div>
                <p
                  className="inline-flex items-center rounded-full border px-3.5 py-1.5 label-s"
                  style={{
                    borderColor: 'rgba(56,175,216,0.35)',
                    background: 'rgba(56,175,216,0.12)',
                    color: 'rgba(128,212,250,0.95)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  Free · Limited to 4 programs this quarter
                </p>

                <p
                  className="mt-3 label-s"
                  style={{ color: 'rgba(128,212,250,0.5)', letterSpacing: '0.07em' }}
                >
                  EXCLUSIVE 10-DAY THRUST PILOT
                </p>

                <h2
                  className="mt-6 max-w-[11ch] font-medium leading-[0.96] tracking-[-0.058em] text-white"
                  style={{ fontSize: 'clamp(2.7rem,5vw,5rem)' }}
                >
                  Start with an exclusive free 10-day technical pilot.
                </h2>

                <div className="mt-7 max-w-[42rem] space-y-4">
                  <p
                    className="leading-[1.62] tracking-[-0.018em]"
                    style={{ fontSize: 'clamp(1rem,1.15vw,1.25rem)', color: 'rgba(128,212,250,0.82)' }}
                  >
                    The first step into Thrust is a focused 10-day technical pilot, at no cost. We
                    review your current process, available batch data, and scale-up context to
                    determine whether a longer Thrust engagement can create a meaningful path toward
                    industrial-scale readiness.
                  </p>
                  <p
                    className="leading-[1.56] tracking-[-0.018em] text-white"
                    style={{ fontSize: 'clamp(1rem,1.15vw,1.25rem)' }}
                  >
                    This is not the product. It is the entry point into the program.
                  </p>
                </div>
              </div>

              {/* ── Right — steps + CTA card ── */}
              <div
                className="relative rounded-[28px] border p-4 md:p-5"
                style={{
                  borderColor: 'rgba(255,255,255,0.1)',
                  background: 'rgba(7,28,43,0.4)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                }}
              >
                {/* Connector line left of right column */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-5 top-10 hidden h-[calc(100%-80px)] w-px lg:block"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(56,175,216,0) 0%, rgba(56,175,216,0.3) 18%, rgba(56,175,216,0.55) 50%, rgba(56,175,216,0.3) 82%, rgba(56,175,216,0) 100%)',
                  }}
                />

                {/* Steps */}
                <div className="space-y-3">
                  {STEPS.map((step, index) => (
                    <div
                      key={step.title}
                      className="group flex items-start gap-4 rounded-[18px] border px-4 py-4 transition-[background-color,border-color,transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-28px_rgba(0,0,0,0.38)] md:px-5"
                      style={{
                        borderColor: 'rgba(255,255,255,0.07)',
                        background: 'rgba(14,52,68,0.34)',
                      }}
                    >
                      <span
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white transition-[transform,filter] duration-150 ease-out group-hover:scale-[1.05] group-hover:brightness-110"
                        style={{
                          background: 'linear-gradient(180deg, #D86138 0%, #B84F25 100%)',
                          boxShadow: '0 10px 24px -16px rgba(216,97,56,0.8)',
                        }}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p
                          className="font-medium leading-[1.35] tracking-[-0.015em] text-white md:text-[18px]"
                          style={{ fontSize: 'clamp(0.95rem,1.1vw,1.125rem)' }}
                        >
                          {step.title}
                        </p>
                        <p
                          className="mt-1 leading-[1.5] tracking-[-0.01em]"
                          style={{ fontSize: '12px', color: 'rgba(128,212,250,0.55)' }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA white card */}
                <div
                  className="mt-5 rounded-[30px] border px-6 py-7 md:px-7 md:py-8"
                  style={{
                    borderColor: 'rgba(56,175,216,0.32)',
                    background:
                      'linear-gradient(180deg, rgba(244,249,252,0.98) 0%, rgba(255,255,255,0.98) 100%)',
                    boxShadow: '0 24px 58px -42px rgba(4,30,39,0.42)',
                  }}
                >
                  <h3
                    className="max-w-[20ch] font-medium leading-[1.08] tracking-[-0.038em]"
                    style={{
                      fontSize: 'clamp(1.3rem,1.6vw,1.9rem)',
                      color: '#041E27',
                    }}
                  >
                    If your pilot works but industrial scale still feels uncertain, Thrust may be the next step.
                  </h3>
                  <p
                    className="mt-4 max-w-[40ch] leading-[1.56] tracking-[-0.012em]"
                    style={{ fontSize: '13px', color: '#50607D' }}
                  >
                    We accept 4 free Thrust pilots per quarter so the senior technical team stays
                    directly involved in every program. If the program is a strong fit, we propose
                    the longer engagement required to build the scale-up package for your next
                    major run.
                  </p>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center rounded-full px-5 py-3 text-[14px] font-medium tracking-[-0.015em] text-white transition-[background-color,box-shadow,transform] duration-150 ease-out hover:opacity-90 active:scale-[0.97]"
                      style={{
                        background: '#D86138',
                        boxShadow: '0 18px 42px -26px rgba(216,97,56,0.54)',
                      }}
                    >
                      Request a Thrust fit conversation
                      <span aria-hidden className="ml-3 text-[20px] leading-none">→</span>
                    </Link>
                  </div>

                  <p
                    className="mt-6 max-w-[42ch] leading-[1.5] tracking-[-0.01em]"
                    style={{ fontSize: '12px', color: '#607295' }}
                  >
                    We accept a limited number of Thrust programs each quarter so the senior
                    technical team can stay directly involved.
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
