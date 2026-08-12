'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { DatabaseDashboard } from '@/components/DatabaseDashboard';
import { BrandLogo } from '@/components/BrandLogo';

export default function PortalPage() {
  const [authed] = useState(true); // in-universe: all visitors are cleared

  return (
    <div className="min-h-screen" style={{ background: '#060810' }}>
      {/* portal access notice */}
      {authed && (
        <div className="relative">
          {/* breadcrumb back to public site */}
          <div
            className="flex items-center justify-between border-b border-slate-800/50 px-6 py-2"
            style={{ background: '#030406' }}
          >
            <BrandLogo href="/" imageClassName="h-5 w-auto brightness-0 invert" />
            <Link
              href="/"
              className="font-mono text-[8px] tracking-widest text-slate-600 uppercase transition hover:text-slate-400"
            >
              ← LMS Corporate Website
            </Link>
            <span className="font-mono text-[8px] tracking-widest text-[#556B2F] uppercase">
              EMPLOYEE PORTAL — DELTA CLEARANCE
            </span>
          </div>
          <DatabaseDashboard />
        </div>
      )}
    </div>
  );
}
