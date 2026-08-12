'use client';

import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';

const FOOTER_NAV = [
  { label: 'ABOUT',        href: '/#about'        },
  { label: 'CAPABILITIES', href: '/#capabilities'  },
  { label: 'DIVISIONS',    href: '/#divisions'     },
  { label: 'OPERATIONS',   href: '/#operations'    },
  { label: 'CAREERS',      href: '/#careers'       },
  { label: 'NEWS',         href: '/#news'          },
  { label: 'CONTACT',      href: '/#contact'       },
];

const LEGAL_LINKS = [
  'Privacy Policy',
  'Terms of Service',
  'Contractor Code of Conduct',
  'Security Policy',
];

export function FooterSection() {
  return (
    <footer
      style={{ background: '#050507' }}
      className="border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* brand */}
          <div className="md:col-span-1">
            <BrandLogo href="/" imageClassName="h-10 w-auto" showWordmark />
            <div className="mt-4 space-y-0.5">
              <p className="text-xs italic text-white/25">Oppress the Wrong,</p>
              <p className="text-xs italic text-white/25">Liberate the Misguided,</p>
              <p className="text-xs italic text-white/25">Per Quamlibet Methodum.</p>
            </div>
            <p className="mt-5 text-xs text-white/20">
              A Lazarus Corporation Company
            </p>
          </div>

          {/* nav */}
          <div>
            <p className="mb-4 font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">Navigation</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {FOOTER_NAV.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[10px] tracking-[0.15em] text-white/30 uppercase transition hover:text-white/60"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* portal + legal */}
          <div>
            <p className="mb-4 font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">Internal</p>
            <Link
              href="/portal"
              className="inline-block border border-white/10 px-5 py-2.5 text-[9px] tracking-[0.2em] text-white/40 uppercase transition hover:border-[#556B2F]/50 hover:text-white/70"
            >
              EMPLOYEE PORTAL
            </Link>
            <div className="mt-8">
              <p className="mb-3 font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">Legal</p>
              <div className="space-y-2">
                {LEGAL_LINKS.map((l) => (
                  <a
                    key={l}
                    href="#"
                    className="block text-[9px] tracking-wide text-white/20 transition hover:text-white/40"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="font-mono text-[9px] text-white/15">
            © 2028 Lazarus Military Solutions. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-white/10">
            A Lazarus Corporation Company · Second Cold War Era Operations
          </p>
        </div>
      </div>
    </footer>
  );
}
