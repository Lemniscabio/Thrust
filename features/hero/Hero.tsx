// Thrust hero section.
//
// Background layers (bottom → top):
//   1. Linear gradient: deep teal-black (#041E27) → teal-blue (#38AFD8) → sky (#E2F3FE)
//   2. Scientific graph grid: major lines every 80px, minor every 20px — teal-tinted
//   3. SVG fractal grain: feTurbulence noise at low opacity
//   4. Copper accent glow: radial gradient with #D86138 ~10% usage
//   5. Content

import Link from 'next/link';
import { HeroNav } from './HeroNav';
import { HeroVisual } from './HeroVisual';

const NAV_ITEMS = [
  { label: 'Request a fit conversation', href: '#start' },
] as const;

export function Hero() {
  return (
    <>
      <HeroNav brand="Thrust" brandSuffix="by Lemnisca" items={NAV_ITEMS} />

      <section
        id="top"
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: [
            // Teal spectrum gradient — dark (#041E27) at top, sky at bottom fold
            'linear-gradient(180deg, #041E27 0%, #071E2B 8%, #0E3E4F 22%, #1B617A 42%, #2987A8 60%, #38AFD8 76%, #80D4FA 90%, #E2F3FE 100%)',
          ].join(', '),
        }}
      >
        {/* ── 1. Graph grid (major 80px / minor 20px) ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              // Minor grid lines
              'linear-gradient(rgba(56,175,216,0.04) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(56,175,216,0.04) 1px, transparent 1px)',
              // Major grid lines
              'linear-gradient(rgba(56,175,216,0.10) 1px, transparent 1px)',
              'linear-gradient(90deg, rgba(56,175,216,0.10) 1px, transparent 1px)',
            ].join(', '),
            backgroundSize: '20px 20px, 20px 20px, 80px 80px, 80px 80px',
          }}
        />

        {/* ── 2. SVG fractal grain ── */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity: 0.055, mixBlendMode: 'overlay' }}
        >
          <filter id="thrust-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.68"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#thrust-grain)" />
        </svg>

        {/* ── 3. Copper accent glow (~10%) ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              'radial-gradient(ellipse 55% 45% at 72% 38%, rgba(216,97,56,0.09) 0%, transparent 68%)',
              'radial-gradient(ellipse 40% 50% at 15% 72%, rgba(216,97,56,0.06) 0%, transparent 60%)',
            ].join(', '),
          }}
        />

        {/* ── 4. Soft bottom fade — preserves atmospheric gradient continuity ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[280px]"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, rgba(240,247,250,0.18) 40%, rgba(240,247,250,0.55) 72%, rgba(240,247,250,0.88) 90%, #F0F7FA 100%)',
          }}
        />

        {/* ── Content ── */}
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1320px] flex-col justify-center px-6 pt-32 pb-12 md:min-h-0 md:px-10 md:pt-40 md:pb-40 md:justify-start lg:px-14">
          <div className="-mt-5 grid grid-cols-1 items-end gap-12 md:mt-0 md:grid-cols-12 md:gap-0">

            {/* Left — headline + CTAs */}
            <div className="md:col-span-6 md:pr-10">
              {/* <p
                className="label-m text-teal-200 motion-settle"
                style={{ animationDelay: '0ms' }}
              >
                Lemnisca Thrust
              </p> */}

              <h1
                className="display-hero mt-4 max-w-[18ch] text-white motion-settle"
                style={{ animationDelay: '120ms' }}
              >
                Move from pilot evidence to{' '}
                <span className="relative inline-block">
                  <span className="accent-italic text-white">industrial-scale</span>
                  {/* Copper accent underline */}
                  <span
                    aria-hidden
                    className="motion-hairline absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                    style={{
                      animationDelay: '900ms',
                      background: 'linear-gradient(90deg, #D86138, rgba(216,97,56,0.3))',
                    }}
                  />
                </span>{' '}
                confidence.
              </h1>

              <p
                className="body-m mt-5 max-w-[40ch] motion-settle md:mt-4 md:max-w-[56ch]"
                style={{ animationDelay: '240ms', color: 'rgba(128,212,250,0.82)' }}
              >
                Thrust handles the{' '}
                <strong className="font-[600] text-white">heavy technical lifting of fermentation scale-up,</strong>
                {' '}turning your batch and process data into{' '}
                <strong className="font-[600] text-white">predictive models</strong>
                {' '}that take you from pilot to commercial scale with fewer costly iterations and far greater confidence.
              </p>

              <div
                className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 motion-settle md:mt-6"
                style={{ animationDelay: '360ms' }}
              >
                {/* Primary CTA — copper pill */}
                <Link
                  href="#start"
                  className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-[500] tracking-[-0.005em] text-white transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-[0.97]"
                  style={{
                    background: '#D86138',
                    boxShadow: '0 1px 0 rgba(0,0,0,0.14), 0 8px 22px -10px rgba(216,97,56,0.55)',
                  }}
                >
                  <span>Request a Thrust fit conversation</span>
                  <span aria-hidden>→</span>
                </Link>

                {/* Ghost link */}
                <GhostLink href="#program">See how Thrust works</GhostLink>
              </div>
            </div>

            {/* Right — visual */}
            {/* <div className="flex items-end justify-center md:col-span-6 md:justify-end"> */}
            <div className="flex items-end justify-center md:col-span-6 md:justify-end md:-translate-y-10">
              <div className="w-full max-w-[760px]">
                <HeroVisual />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-[15px] font-[500] text-white transition-[opacity,transform] duration-150 ease-out hover:opacity-80 active:scale-[0.985]"
    >
      <span className="relative">
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-full"
          style={{ background: 'rgba(255,255,255,0.3)' }}
        />
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full"
          style={{ background: 'rgba(255,255,255,0.85)' }}
        />
      </span>
      <span aria-hidden className="text-[17px] leading-none opacity-70">→</span>
    </a>
  );
}
