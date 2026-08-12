'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const NEWS = [
  {
    date: 'AUG 2028',
    category: 'CORPORATE',
    headline: 'LAZARUS CORP RESUMES MAJOR OPERATIONS',
    excerpt:
      'Lazarus Corporation confirms renewed industrial and logistics operations as the parent company rebuilds in parallel with LMS recovery efforts.',
  },
  {
    date: 'JUL 2028',
    category: 'OPERATIONS',
    headline: 'FIELD OPERATIONS GROUP COMPLETES REGIONAL ROTATION',
    excerpt:
      'The LMS Field Operations Group has completed its scheduled regional rotation, with new deployments now active under Operation DAWNBREAKER in Eastern Europe.',
  },
  {
    date: 'JUN 2028',
    category: 'CORPORATE',
    headline: 'CEO POWELL ADDRESSES ANNUAL CONTRACTOR CONFERENCE',
    excerpt:
      'CEO Haider Powell outlined LMS\'s strategic direction for the coming year, reaffirming the company\'s commitment to rebuilding operational capacity and restoring parent-company synergy.',
  },
];

export function NewsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="news"
      className="py-28"
      style={{ background: '#f4f3f0' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`mb-14 flex flex-col gap-4 transition-all duration-700 md:flex-row md:items-end md:justify-between ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#556B2F] uppercase" data-text="— Company Updates">
              — Company Updates
            </span>
            <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-[#111111] md:text-5xl" data-text="LATEST NEWS">
              LATEST NEWS
            </h2>
          </div>
          <a
            href="#"
            className="group hidden items-center gap-2 text-[9px] tracking-[0.2em] text-[#888888] uppercase transition-colors hover:text-[#111111] md:flex"
          >
            VIEW ALL RELEASES
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid gap-px bg-[#e0ddd8] md:grid-cols-3">
          {NEWS.map((item, i) => (
            <div
              key={item.headline}
              className={`group flex flex-col gap-5 bg-[#f4f3f0] p-8 transition-all duration-700 hover:bg-white ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[0.35em] text-[#888888] uppercase">{item.date}</span>
                <span className="font-mono text-[7px] tracking-widest text-[#aaaaaa] uppercase">{item.category}</span>
              </div>
              <h3 className="digital-intro text-[13px] font-bold leading-snug tracking-wide text-[#111111] uppercase" data-text={item.headline}>
                {item.headline}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-[#666666]">{item.excerpt}</p>
              <a
                href="#"
                className="group/link flex items-center gap-2 text-[9px] tracking-widest text-[#556B2F] uppercase"
              >
                READ MORE
                <span className="transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
