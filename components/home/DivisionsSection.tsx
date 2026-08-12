'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { LMS_COMPONENTS } from '@/data/units';

export function DivisionsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="divisions"
      className="py-28"
      style={{ background: '#0a0a0c' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div
          ref={ref}
          className={`mb-14 flex flex-col gap-4 transition-all duration-700 md:flex-row md:items-end md:justify-between ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#7a9340] uppercase" data-text="— Organizational Structure">
              — Organizational Structure
            </span>
            <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-white md:text-5xl" data-text="OUR DIVISIONS">
              OUR DIVISIONS
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/30">
            LMS is organized into specialized divisions that collectively span the full operational spectrum.
          </p>
        </div>

        {/* divisions grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {LMS_COMPONENTS.map((div, i) => (
            <div
              key={div.id}
              className={`group relative flex flex-col gap-4 border border-white/5 p-6 transition-all duration-700 hover:border-white/10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* status dot */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.4em] text-white/20 uppercase">
                  {div.abbreviation}
                </span>
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${
                    div.status === 'OPERATIONAL' ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
              </div>

              <h3 className="digital-intro text-sm font-bold tracking-wide text-white uppercase" data-text={div.name}>{div.name}</h3>

              <p className="text-xs leading-relaxed text-white/35">{div.description}</p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <p className="font-mono text-[8px] text-white/20 uppercase">Personnel</p>
                  <p className="mt-0.5 font-mono text-sm font-bold text-white/60">{div.personnel}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[8px] text-white/20 uppercase">Status</p>
                  <p className={`mt-0.5 font-mono text-[9px] font-semibold uppercase ${
                    div.status === 'OPERATIONAL' ? 'text-emerald-500/70' : 'text-amber-500/70'
                  }`}>
                    {div.status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
