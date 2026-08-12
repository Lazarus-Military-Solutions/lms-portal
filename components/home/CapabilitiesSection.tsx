'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const CAPABILITIES = [
  {
    symbol: '▦',
    title: 'SECURITY OPERATIONS',
    description:
      'Protective security, facility hardening, high-risk security operations, and personnel protective services for clients operating in contested environments.',
  },
  {
    symbol: '◈',
    title: 'FIELD OPERATIONS',
    description:
      'Ground-based operational and security capabilities delivered by LMS\'s Field Operations Group. Tactical execution, area control, and force protection.',
  },
  {
    symbol: '◎',
    title: 'AVIATION',
    description:
      'Transport, reconnaissance, medical evacuation, and combat aviation support via the LMS Aviation Wing and 90th Air Mobility Rescue Group.',
  },
  {
    symbol: '⊕',
    title: 'LOGISTICS',
    description:
      'Medical logistics, supply chain management, operational sustainment, and transportation infrastructure for complex multi-theater operations.',
  },
  {
    symbol: '◇',
    title: 'SPECIALIZED OPERATIONS',
    description:
      'High-risk, specialized military and security capabilities. Reconnaissance, direct action, infiltration, and specialized intelligence collection.',
  },
  {
    symbol: '▣',
    title: 'CONSULTING & PLANNING',
    description:
      'Operational planning, security consulting, threat assessment, and strategic advisory services for governments, corporations, and institutional partners.',
  },
];

export function CapabilitiesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="capabilities"
      className="py-28"
      style={{ background: '#0f0f11' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="digital-intro font-mono text-[9px] tracking-[0.45em] text-[#7a9340] uppercase" data-text="— What We Deliver">
            — What We Deliver
          </span>
          <h2 className="digital-intro mt-3 text-4xl font-black tracking-tight text-white md:text-5xl" data-text="CAPABILITIES">
            CAPABILITIES
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/40">
            LMS delivers a full spectrum of defense, security, and operational capabilities across
            multiple domains — on the ground, in the air, and in the planning room.
          </p>
        </div>

        {/* grid */}
        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.title} {...cap} delay={i * 80} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  symbol,
  title,
  description,
  delay,
  visible,
}: {
  symbol: string;
  title: string;
  description: string;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col gap-5 p-8 transition-all duration-700 hover:bg-white/3 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{
        background: '#0c0c0e',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* top border accent on hover */}
      <div
        className="absolute left-0 top-0 h-px w-0 bg-[#556B2F] transition-all duration-300 group-hover:w-full"
      />

      <span className="text-3xl text-white/20 transition-colors duration-200 group-hover:text-[#7a9340]">
        {symbol}
      </span>
      <div>
        <h3 className="digital-intro text-[11px] font-semibold tracking-[0.2em] text-white uppercase" data-text={title}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/40">{description}</p>
      </div>
      <span className="mt-auto text-[9px] tracking-widest text-[#556B2F] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Learn More →
      </span>
    </div>
  );
}
