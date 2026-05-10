'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type HeroNavProps = {
  brand: string;
  brandSuffix?: string;
  items: ReadonlyArray<{ label: string; href: string }>;
};

export function HeroNav({ brand, brandSuffix, items }: HeroNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 overflow-hidden transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-b shadow-[0_1px_0_rgba(56,175,216,0.12),0_8px_32px_-12px_rgba(4,30,39,0.12)]'
          : 'bg-transparent shadow-none border-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(240,247,250,0.72)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
        borderColor: 'rgba(56,175,216,0.14)',
      } : undefined}
    >
      {scrolled ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[1px] rounded-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
          }}
        />
      ) : null}

      <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2.5 transition-opacity duration-200 hover:opacity-85"
        >
          <span className={`text-[30px] leading-none font-semibold tracking-[-0.02em] transition-colors duration-300 ${scrolled ? 'text-teal-900' : 'text-white'}`}
            style={scrolled ? { color: '#041E27' } : undefined}>
            {brand}
          </span>
          {brandSuffix && (
            <span className={`text-[12px] font-medium tracking-[0.02em] transition-colors duration-300 ${scrolled ? 'text-teal-500' : 'text-white/60'}`}
              style={scrolled ? { color: '#2987A8' } : undefined}>
              {brandSuffix}
            </span>
          )}
        </Link>

        <nav className="flex items-center gap-7">
          {items.map((item) => (
            <NavItem key={item.label} item={item} scrolled={scrolled} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavItem({ item, scrolled }: { item: { label: string; href: string }; scrolled: boolean }) {
  const isCta = item.label.toLowerCase().includes('request') || item.label.toLowerCase().includes('fit');

  if (scrolled && isCta) {
    return (
      <Link
        href={item.href}
        className="inline-flex items-center rounded-full px-4 py-2 text-[14px] font-medium text-white transition-[background-color,box-shadow,transform] duration-150 ease-out hover:opacity-90 active:scale-[0.97]"
        style={{
          background: '#D86138',
          boxShadow: '0 12px 28px -18px rgba(216,97,56,0.6)',
        }}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      className={`group relative text-[14px] transition-[color,transform] duration-150 ease-out active:scale-[0.985] ${
        scrolled ? 'text-teal-700 hover:text-teal-900' : 'text-white/80 hover:text-white'
      }`}
      style={scrolled ? { color: '#1B617A' } : undefined}
    >
      <span>{item.label}</span>
      <span
        aria-hidden
        className={`absolute -bottom-1 left-0 h-px w-0 transition-[width] duration-200 ease-out group-hover:w-full ${
          scrolled ? 'bg-teal-500' : 'bg-white/60 group-hover:bg-white'
        }`}
        style={scrolled ? { background: '#2987A8' } : undefined}
      />
    </Link>
  );
}
