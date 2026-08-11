'use client';

import { motion } from 'framer-motion';

interface DoorPanelProps {
  side: 'left' | 'right';
  isOpen: boolean;
}

const RIVET_POSITIONS = [
  { top: '8%', left: '8%' },   { top: '8%', right: '8%' },
  { top: '28%', left: '8%' },  { top: '28%', right: '8%' },
  { top: '50%', left: '8%' },  { top: '50%', right: '8%' },
  { top: '72%', left: '8%' },  { top: '72%', right: '8%' },
  { top: '92%', left: '8%' },  { top: '92%', right: '8%' },
];

export function DoorPanel({ side, isOpen }: DoorPanelProps) {
  const isLeft = side === 'left';

  return (
    <motion.div
      className="absolute top-0 h-full w-1/2 overflow-hidden"
      style={{ [isLeft ? 'left' : 'right']: 0 }}
      initial={{ x: 0 }}
      animate={{ x: isOpen ? (isLeft ? '-100%' : '100%') : 0 }}
      transition={{ duration: 2.0, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* base metal surface */}
      <div
        className="relative h-full w-full"
        style={{
          background: 'linear-gradient(180deg, #14181f 0%, #0d1017 45%, #111620 100%)',
          borderRight: isLeft ? '1px solid rgba(100,116,139,0.12)' : 'none',
          borderLeft: isLeft ? 'none' : '1px solid rgba(100,116,139,0.12)',
        }}
      >
        {/* subtle horizontal scan lines */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.15) 3px, rgba(255,255,255,0.15) 4px)',
          }}
        />

        {/* rivets */}
        {RIVET_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className="absolute h-3 w-3 rounded-full border border-slate-600/60 bg-gradient-to-br from-slate-600 to-slate-800 shadow-inner"
            style={{ ...pos, transform: 'translate(-50%, -50%)' }}
          />
        ))}

        {/* top header strip */}
        <div
          className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-8 border-b border-slate-700/30"
          style={{ background: '#090c13' }}
        >
          <span className="text-[9px] tracking-[0.35em] text-slate-600 font-mono uppercase">
            Lazarus Mil.Sol.
          </span>
          <div
            className="h-2 w-2 rounded-full bg-red-600/80"
            style={{ boxShadow: '0 0 5px rgba(220,38,38,0.6)' }}
          />
        </div>

        {/* panel ID tag */}
        <div className="absolute top-16 px-8 font-mono">
          <span className="text-[8px] tracking-[0.45em] text-slate-700 uppercase">
            Panel-{isLeft ? '01' : '02'} / Sector-{isLeft ? 'A' : 'B'}
          </span>
        </div>

        {/* warning chevron stripes at the seam edge */}
        <div
          className={`absolute top-0 bottom-0 w-9 ${isLeft ? 'right-0' : 'left-0'}`}
          style={{
            backgroundImage: `repeating-linear-gradient(
              ${isLeft ? '135deg' : '45deg'},
              #c8920a 0px, #c8920a 9px,
              #181c25 9px, #181c25 18px
            )`,
            opacity: 0.65,
          }}
        />

        {/* large ghost label — left panel says BLAST, right says DOOR */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p
            className="font-mono font-black tracking-[0.3em] text-slate-800 select-none"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
          >
            {isLeft ? 'BLAST' : 'DOOR'}
          </p>
        </div>

        {/* horizontal panel seam lines */}
        {[32, 56, 74].map((pct) => (
          <div
            key={pct}
            className="absolute left-10 right-10 h-px"
            style={{
              top: `${pct}%`,
              background:
                'linear-gradient(90deg, transparent, rgba(100,116,139,0.18), transparent)',
            }}
          />
        ))}

        {/* lock status label */}
        <div
          className={`absolute bottom-20 font-mono ${isLeft ? 'left-10' : 'right-10 text-right'}`}
        >
          <p className="text-[7px] tracking-[0.35em] text-slate-700 uppercase">Lock Status</p>
          <p className="mt-0.5 text-[9px] tracking-[0.2em] text-red-600/70 uppercase">
            Engaged
          </p>
        </div>

        {/* bottom indicator dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full border ${
                i === 2
                  ? 'border-red-700 bg-red-900/60'
                  : 'border-slate-700/60 bg-slate-900/50'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
