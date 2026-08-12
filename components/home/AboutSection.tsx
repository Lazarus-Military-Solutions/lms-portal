'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BRAND, CORPORATE_TIMELINE, LORE_EXPLANATION } from '@/lib/branding';

const STATS = [
  { n: '38+', label: 'Regions of Operations' },
  { n: '800,000+', label: 'Dissidents Oppressed' },
  { n: '20,000+', label: 'Total Employees' },
];

export function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-28" style={{ background: '#f7f6f3' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#556B2F] uppercase" data-text="— About the Group">
            — About the Group
          </span>
          <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-[#111111] md:text-5xl" data-text={BRAND.corporationName}>
            {BRAND.corporationName}
          </h2>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg leading-relaxed text-[#333333]">
              {BRAND.corporationName} was established in 1963 as a biomedical and pharmaceutical corporation. During the Vietnam War era, the company secured major contracts with the United States Department of Defense, establishing a long-term public and private sector relationship that would later drive its international expansion.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#555555]">
              By the 2000s, Lazarus had become a multinational megacorporation spanning biomedical products, industrial operations, corporate services, and defense contracting. In 2003, it founded {BRAND.subsidiaryName} as its dedicated military subsidiary, building a fully militarized force that expanded from convoy security into expeditionary warfare, special operations, intelligence, logistics, aviation, and medical support.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#777777]">
              The 2023 destruction of SPECWARCOM in Southern Iraq caused catastrophic losses across both Lazarus and LMS. Approximately eighty percent of LMS personnel and assets were lost. Surviving structures remained, however, and in 2027 Haider Powell began a major reconstruction campaign that returned LMS to operation by 2028. Lazarus Corporation itself is also back in the field, but in a weakened recovery state.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-6 border border-[#e0ddd8] bg-white p-6">
              <p className="font-mono text-[8px] tracking-[0.4em] text-[#888888] uppercase">Corporate Structure</p>
              <div className="mt-4 space-y-2 text-sm text-[#444444]">
                <p><span className="font-semibold text-[#111111]">{BRAND.corporationName}</span> → Biomedical & Pharmaceuticals, Defense & Government Contracting, Industrial Operations, Corporate Services</p>
                <p><span className="font-semibold text-[#111111]">{BRAND.subsidiaryName}</span> → Private Military Company / Fully Militarized Corporate Force</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-20 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="digital-intro mb-8 font-mono text-[9px] tracking-[0.45em] text-[#888888] uppercase" data-text="— Corporate Timeline">
            — Corporate Timeline
          </p>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-20 w-px bg-[#e0ddd8]" />
            <div className="space-y-10">
              {CORPORATE_TIMELINE.map((item) => (
                <div key={item.year} className="flex gap-8">
                  <div className="relative flex w-20 shrink-0 justify-end">
                    <span className="digital-intro relative z-10 bg-[#f7f6f3] py-0.5 pr-4 font-mono text-xs font-bold text-[#111111]" data-text={item.year}>
                      {item.year}
                    </span>
                    <div className="absolute top-1.75 -right-px h-2 w-2 rounded-full border-2 border-[#556B2F]" style={{ background: '#f7f6f3' }} />
                  </div>
                  <div>
                    <p className="digital-intro text-sm font-semibold text-[#111111]" data-text={item.title}>{item.title}</p>
                    <p className="digital-intro pt-0.5 text-sm leading-relaxed text-[#555555]" data-text={item.summary}>{item.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="digital-intro mb-5 font-mono text-[9px] tracking-[0.42em] text-[#888888] uppercase" data-text="— Operational Statistics">
              — Operational Statistics
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`stat-panel border border-[#d8d4cd] bg-white p-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${260 + i * 120}ms` }}
                >
                  <p className="digital-intro font-mono text-[clamp(26px,3.8vw,42px)] font-black leading-none text-[#101010]" data-text={s.n}>
                    {s.n}
                  </p>
                  <p className="digital-intro mt-2 font-mono text-[9px] tracking-[0.26em] text-[#5a5a5a] uppercase" data-text={s.label}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <details className="mt-10 border border-[#e0ddd8] bg-white p-5">
            <summary className="cursor-pointer list-none font-mono text-[8px] tracking-[0.4em] text-[#888888] uppercase">
              Weren&apos;t they dead?
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-[#444444]">
              {LORE_EXPLANATION.answer}
            </p>
            <p className="mt-3 text-[11px] italic text-[#888888]" title={LORE_EXPLANATION.easterEgg}>
              Internal reconstruction note available to cleared staff.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
