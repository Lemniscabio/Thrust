import type { Metadata } from 'next';
import { Hero } from '@/features/hero/Hero';
import { ProblemSection } from '@/features/problem/ProblemSection';
import { ApproachSection } from '@/features/approach/ApproachSection';
import { CtaStrip } from '@/features/approach/CtaStrip';
import { ProgramSection } from '@/features/program/ProgramSection';
import { StartSection } from '@/features/start/StartSection';
import { FaqFooterSection } from '@/features/faq-footer/FaqFooterSection';

export const metadata: Metadata = {
  title: 'Thrust · predictive scale-up for fermentation · Lemnisca',
  description:
    'Move from pilot evidence to industrial-scale confidence. Thrust turns batch and process data into predictive models for fermentation scale-up.',
  alternates: { canonical: 'https://lemnisca.bio/thrust' },
};

// Narrative architecture:
//   §01 Hero
//   §02 Problem
//   §03 Approach / Solutions
//   §04 Program (how it works)
//   §05 Deliverables
//   §06 Start (exclusive pilot)
export default function ThrustPage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ApproachSection />
      <CtaStrip />
      <ProgramSection />
      <StartSection />
      <FaqFooterSection />
      {/* Remaining sections to be built section-by-section */}
    </>
  );
}
