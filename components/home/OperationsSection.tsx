'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const FEATURED = {
  id: 'OP-LONG-RUN',
  codename: 'OPERATION LONG RUN',
  date: '2023',
  location: 'Southern Iraq',
  classification: 'DECLASSIFIED',
  status: 'CONCLUDED',
  summary:
    'The defining catastrophe of LMS history. Operation Long Run culminated in the destruction of SPECWARCOM in Southern Iraq, where LMS Special Operations Forces and supporting command structures were devastated. Lazarus Corporation entered a period of collapse, more than 5,000 facilities were lost or abandoned, and the organization ceased to function as the dominant PMC it had been.',
  outcome: 'SPECWARCOM destroyed. Approx. 80% of LMS forces lost. 5,000+ facilities affected. Corporate collapse.',
};

const OPERATIONS = [
  {
    id: 'OP-042',
    codename: 'DAWNBREAKER',
    date: 'AUG 2028',
    location: 'Eastern Europe',
    status: 'ACTIVE',
    summary: 'Active multi-component operation supporting the Lazarus recovery campaign across contested Eastern European territory.',
  },
  {
    id: 'OP-039',
    codename: 'IRON VEIL',
    date: 'JUL 2028',
    location: 'Undisclosed',
    status: 'STANDBY',
    summary: 'Planning and pre-positioning operation tied to corporate reconstruction efforts. Details classified.',
  },
  {
    id: 'OP-032',
    codename: 'COMPASS ROSE',
    date: 'MAR 2027',
    location: 'Sub-Saharan Africa',
    status: 'COMPLETED',
    summary: 'Humanitarian corridor protection and medical logistics operation conducted during the decline period.',
  },
];

const STATUS_STYLE: Record<string, string> = {
  ACTIVE:     'text-red-400 border-red-900/50',
  STANDBY:    'text-amber-400 border-amber-900/50',
  COMPLETED:  'text-emerald-400 border-emerald-900/50',
  CONCLUDED:  'text-slate-400 border-slate-700',
};

export function OperationsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="operations"
      className="py-28"
      style={{ background: '#07080a' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#7a9340] uppercase" data-text="— Operational Archive">
            — Operational Archive
          </span>
          <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-white md:text-5xl" data-text="OPERATIONS">
            OPERATIONS
          </h2>
        </div>

        {/* featured operation — Long Run */}
        <div
          className={`mb-8 border border-white/8 p-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ background: 'linear-gradient(135deg, #111113 0%, #0d0d0f 100%)' }}
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex-1">
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <span className={`border px-3 py-1 font-mono text-[8px] tracking-widest uppercase ${STATUS_STYLE[FEATURED.status]}`}>
                  {FEATURED.status}
                </span>
                <span className="font-mono text-[8px] tracking-widest text-white/20 uppercase">
                  {FEATURED.classification}
                </span>
              </div>
              <h3 className="digital-intro text-3xl font-black tracking-tight text-white" data-text={FEATURED.codename}>{FEATURED.codename}</h3>
              <div className="mt-2 flex gap-6">
                <span className="font-mono text-[10px] text-white/30">{FEATURED.location}</span>
                <span className="font-mono text-[10px] text-white/30">{FEATURED.date}</span>
              </div>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/50">{FEATURED.summary}</p>
              <p className="mt-4 text-[11px] text-white/25">{FEATURED.outcome}</p>
            </div>
            <div className="shrink-0 self-end">
              <a
                href="/operations"
                className="group inline-flex items-center gap-2 border border-white/15 px-6 py-3 text-[9px] tracking-widest text-white/40 uppercase transition-all hover:border-white/30 hover:text-white/70"
              >
                READ CASE STUDY
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* secondary operations */}
        <div className="grid gap-3 md:grid-cols-3">
          {OPERATIONS.map((op, i) => (
            <div
              key={op.id}
              className={`group border border-white/5 p-6 transition-all duration-700 hover:border-white/10 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <span className="font-mono text-[8px] text-white/20">{op.id}</span>
                <span className={`border px-2 py-0.5 font-mono text-[7px] tracking-widest uppercase ${STATUS_STYLE[op.status]}`}>
                  {op.status}
                </span>
              </div>
              <h4 className="mb-1 text-sm font-bold tracking-wide text-white">{op.codename}</h4>
              <p className="mb-3 font-mono text-[9px] text-white/25">{op.location} · {op.date}</p>
              <p className="text-xs leading-relaxed text-white/30">{op.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
