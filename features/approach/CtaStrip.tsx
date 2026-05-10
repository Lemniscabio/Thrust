// Inline CTA strip — sits between Approach and next section.
// Full-width gradient band: teal spectrum from palette.

import Link from 'next/link';

export function CtaStrip() {
  return (
    <div
      className="relative overflow-hidden px-6 py-10 md:px-10 lg:px-14"
      style={{
        background: 'linear-gradient(100deg, #041E27 0%, #0E3E4F 30%, #1B617A 62%, #2987A8 100%)',
      }}
    >
      {/* Grain overlay */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0.04, mixBlendMode: 'overlay' }}
      >
        <filter id="strip-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#strip-grain)"/>
      </svg>

      {/* Subtle copper accent glow right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 40% 120% at 95% 50%, rgba(216,97,56,0.1), transparent 65%)',
        }}
      />

      <div className="relative mx-auto flex max-w-[1320px] flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-12">

        {/* Left — text */}
        <div>
          <p className="display-sub text-white">
            Preparing for the{' '}
            <span className="relative inline-block">
              <span>next scale?</span>
              {/* Copper underline */}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[2.5px] w-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #D86138, rgba(216,97,56,0.35))' }}
              />
            </span>
          </p>
          <p className="body-s mt-2 max-w-[520px]" style={{ color: 'rgba(128,212,250,0.72)' }}>
            Use the data you already have before the next expensive batch becomes the teacher.
          </p>
        </div>

        {/* Right — CTA */}
        <Link
          href="#start"
          className="inline-flex shrink-0 items-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-[500] tracking-[-0.005em] text-white transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-[0.97]"
          style={{
            background: 'rgba(4,30,39,0.55)',
            border: '1px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 16px rgba(4,30,39,0.3)',
          }}
        >
          <span>Request a Thrust fit conversation</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
