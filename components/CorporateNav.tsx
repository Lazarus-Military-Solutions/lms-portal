'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from '@/components/BrandLogo';

const NAV_LINKS = [
  { label: 'ABOUT',        href: '/#about'        },
  { label: 'CAPABILITIES', href: '/#capabilities'  },
  { label: 'DIVISIONS',    href: '/#divisions'     },
  { label: 'OPERATIONS',   href: '/#operations'    },
  { label: 'CAREERS',      href: '/#careers'       },
  { label: 'NEWS',         href: '/#news'          },
  { label: 'CONTACT',      href: '/#contact'       },
];

export function CorporateNav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.96)' : 'rgba(9,9,11,0.86)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.05)',
          backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* wordmark */}
          <BrandLogo href="/" priority className="gap-2" imageClassName="h-8 w-auto" showWordmark />

          {/* desktop links */}
          <div className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[9px] tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-white after:absolute after:-bottom-0.75 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* employee portal */}
            <Link
              href="/portal"
              className="hidden items-center gap-2 rounded-none border px-4 py-2 text-[9px] font-semibold tracking-[0.2em] uppercase transition-all duration-200 lg:flex"
              style={{
                borderColor: '#556B2F',
                color: '#a8b87c',
                background: 'rgba(85,107,47,0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(85,107,47,0.25)';
                e.currentTarget.style.color = '#c8d890';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(85,107,47,0.1)';
                e.currentTarget.style.color = '#a8b87c';
              }}
            >
              EMPLOYEE PORTAL
            </Link>

            {/* hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`h-px w-5 bg-white transition-all duration-200 ${menuOpen ? 'translate-y-1.25 rotate-45' : ''}`} />
              <span className={`h-px w-5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-px w-5 bg-white transition-all duration-200 ${menuOpen ? '-translate-y-1.25 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col pt-16 lg:hidden"
            style={{ background: 'rgba(9,9,11,0.98)', backdropFilter: 'blur(16px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-0 border-t border-white/5 px-6 py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-[11px] tracking-[0.3em] text-slate-300 uppercase"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  href="/portal"
                  onClick={() => setMenuOpen(false)}
                  className="inline-block border px-6 py-3 text-[9px] tracking-[0.25em] uppercase"
                  style={{ borderColor: '#556B2F', color: '#a8b87c' }}
                >
                  EMPLOYEE PORTAL
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
