'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { Eyebrow } from '@/design-system/primitives/Eyebrow';

const FAQS = [
  {
    question: 'What does Thrust actually deliver at the end of an engagement?',
    answer:
      'A scale-up package: a calibrated predictive model of your process, a divergence signal map showing where and when batches fail, a risk-ranked list of scale-sensitive parameters, and a set of decision rules for your next run. Everything is documented and transferable, not locked in our tooling.',
  },
  {
    question: 'We have strong internal engineers. Why bring in Thrust?',
    answer:
      'Probably the right call if you have a senior process modeller with fermentation scale-up experience and bandwidth. If you do not, the question is opportunity cost. Every month of unguided iteration is runway burned. Thrust compresses the diagnostic cycle into weeks; doing it internally takes a quarter or two you would rather spend on biology.',
  },
  {
    question: 'How is Thrust different from DataHow, Insilico, or other modelling platforms?',
    answer:
      'Those platforms are built for late-stage manufacturing: characterised processes, large clean datasets, regulated GMP environments. Thrust is built for scale-up: messy batch histories, unstable baselines, small experiment budgets, and a team still working out what the process actually is. Different stage, different question.',
  },
  {
    question: 'We have IP concerns about sharing batch data.',
    answer:
      'NDA before any data moves. Anonymised aggregate learnings only, never named, never linked to your program. We work under strict confidentiality and can operate within your infrastructure if preferred. The data never leaves your control without explicit sign-off.',
  },
  {
    question: 'What if the models say we are not ready to scale?',
    answer:
      'You keep the full report and the prioritised experiment list. That verdict is a roadmap, not a rejection. Many programs come back to Thrust three to six months later with the data the assessment said they needed. Knowing early is the point — the alternative is discovering it at 50,000 litres.',
  },
] as const;

export function FaqFooterSection({ id = 'faq' }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { once: true, margin: '-80px 0px' });

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden"
      style={{
        backgroundImage: [
          // Teal radial glows mirroring Tune's blue radials
          'radial-gradient(ellipse 90% 58% at 50% 20%, rgba(41,135,168,0.52) 0%, rgba(14,62,79,0.32) 38%, transparent 72%)',
          'radial-gradient(ellipse 70% 60% at 18% 50%, rgba(4,30,39,0.56) 0%, transparent 70%)',
          'radial-gradient(ellipse 82% 46% at 62% 110%, rgba(2,8,12,0.98) 0%, rgba(4,14,20,0.72) 50%, transparent 76%)',
          // Teal spectrum linear gradient — white → light teal → mid teal → deep teal → near black
          'linear-gradient(180deg, #F0F7FA 0%, #D4E8EF 10%, #80D4FA 24%, #38AFD8 36%, #2987A8 48%, #1B617A 62%, #0E3E4F 76%, #041E27 90%, #020C10 100%)',
        ].join(', '),
      }}
    >
      {/* Top fade — seamless from #F0F7FA */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
        style={{
          background:
            'linear-gradient(180deg, #F0F7FA 0%, rgba(240,247,250,0.92) 16%, rgba(212,232,239,0.62) 40%, rgba(128,212,250,0.14) 74%, transparent 100%)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pt-24 pb-12 md:px-10 md:pt-32 lg:px-14">
        <div className="mx-auto max-w-[1080px]">
          <Eyebrow>Common Questions</Eyebrow>

          <div className="mt-14 border-t border-white/14">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="border-b border-white/14 py-6">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                    className="group flex w-full cursor-pointer items-start justify-between gap-6 rounded-[18px] text-left transition-colors duration-150 ease-out hover:text-white"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`max-w-[28ch] text-[22px] font-medium leading-[1.18] tracking-[-0.018em] transition-colors duration-150 ease-out ${
                        isOpen ? 'text-white' : 'text-white/92 group-hover:text-white'
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      className="mt-1 text-[24px] leading-none"
                      style={{ color: 'rgba(128,212,250,0.85)' }}
                      animate={{ rotate: isOpen ? 45 : 0, x: isOpen ? 0 : 2 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0, y: -6 }}
                        animate={{ height: 'auto', opacity: 1, y: 0 }}
                        exit={{ height: 0, opacity: 0, y: -4 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="origin-top overflow-hidden"
                      >
                        <p
                          className="body-m mt-4 max-w-[58ch]"
                          style={{ color: 'rgba(128,212,250,0.82)' }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer wordmark */}
        <footer ref={footerRef} className="relative mt-24 pt-10 md:mt-32">
          <div className="mt-1 overflow-hidden">
            <motion.div
              aria-label="Thrust by Lemnisca"
              className="flex items-end justify-center gap-4 text-left md:gap-8"
              initial={{ opacity: 0, y: 18 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[clamp(3rem,13vw,12rem)] font-medium leading-none tracking-[-0.08em] text-white">
                THRUST
              </p>
              <div className="mb-3 flex flex-col items-start justify-end md:mb-5">
                <p
                  className="mb-1 text-[14px] font-medium tracking-[-0.02em] md:mb-1.5 md:text-[16px]"
                  style={{ color: 'rgba(128,212,250,0.88)' }}
                >
                  by
                </p>
                <p className="text-[clamp(1.3rem,3.6vw,3.2rem)] font-medium leading-none tracking-[-0.05em] text-white/96">
                  Lemnisca
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
}
