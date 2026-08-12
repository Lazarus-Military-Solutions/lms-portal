'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const CAREER_PATHS = [
  { title: 'FIELD OPERATIONS GROUP',  desc: 'Ground forces, tactical teams, and combat support. The primary operational arm of LMS.' },
  { title: 'AVIATION WING',           desc: 'Fixed-wing and rotary pilots, crew, and ground support across all aviation operations.' },
  { title: 'OPERATIONS COMMAND',      desc: 'Planning, coordination, intelligence, and operational management at the strategic level.' },
  { title: 'SPECIAL WARFARE',         desc: 'High-risk, specialized tactical capabilities. Reconnaissance, direct action, infiltration.' },
  { title: 'MEDICAL & LOGISTICS',     desc: 'Combat medics, trauma specialists, supply chain, and operational sustainment.' },
  { title: 'INTELLIGENCE DIVISION',   desc: 'Analysts, collection specialists, cyber operations, and threat assessment.' },
  { title: '90TH AIR MOBILITY',       desc: 'Specialized aviation rescue, MEDEVAC, and air mobility in high-risk environments.' },
  { title: 'ADMINISTRATION & HR',     desc: 'Corporate operations, personnel management, finance, and support roles.' },
];

export function CareersSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="careers"
      className="py-28"
      style={{ background: '#ffffff' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#556B2F] uppercase" data-text="— Join Lazarus Corporation">
            — Join Lazarus Corporation
          </span>
          <h2
            className="digital-intro mt-3 font-black tracking-tight text-[#111111]"
            data-text="BUILD YOUR FUTURE WITH LAZARUS."
            style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}
          >
            BUILD YOUR FUTURE
            <br />
            WITH LAZARUS.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#555555]">
            Lazarus Corporation recruits across a wide range of disciplines through its military
            subsidiary, Lazarus Military Solutions. LMS began as convoy security, became the
            world&apos;s largest private military company, collapsed in 2023, and is now rebuilding
            facility by facility. We recruit from everywhere: veterans, career-changers, the
            financially stuck, the desperate, and those simply looking for a purpose worth having.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[#777777]">
            Your path ahead — whether it be with the Field Operations Group, the Aviation Wing,
            Operations Command, or as a Special Warfare Operator — is undecided. That decision
            belongs to you.
          </p>
        </div>

        {/* career paths */}
        <div
          className={`mt-14 grid gap-px bg-[#e8e6e2] sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {CAREER_PATHS.map((path) => (
            <div
              key={path.title}
              className="group bg-white p-6 transition-colors hover:bg-[#f4f3f0]"
            >
              <h3 className="digital-intro mb-3 text-[10px] font-semibold tracking-[0.2em] text-[#111111] uppercase" data-text={path.title}>
                {path.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#666666]">{path.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-14 flex flex-wrap items-center gap-6 transition-all duration-700 delay-250 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="/portal"
            className="group inline-flex items-center gap-3 bg-[#111111] px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase transition-all hover:bg-[#222222]"
          >
            VIEW OPEN POSITIONS
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <p className="text-sm text-[#888888]">
            Positions available across all divisions worldwide.
          </p>
        </div>

        {/* disclaimer */}
        <p className="mt-10 border-t border-[#e8e6e2] pt-6 text-xs text-[#aaaaaa]">
          LMS currently recruits from across all backgrounds, including those who are financially
          constrained, between careers, or seeking a second chance. All candidates are subject to
          background verification, fitness assessment, and security clearance processing under
          Lazarus Corporation guidelines. Welcome to Lazarus.
        </p>
      </div>
    </section>
  );
}
