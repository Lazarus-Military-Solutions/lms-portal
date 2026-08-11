'use client';

import { useState, useEffect } from 'react';

interface StatusTerminalProps {
  visible: boolean;
  onComplete: () => void;
}

const PHASE_ONE = [
  { text: 'LAZARUS MILITARY SOLUTIONS', cls: 'text-base font-black tracking-[0.35em] text-white' },
  { text: 'LMS SECURE DATABASE NETWORK', cls: 'text-xs tracking-[0.4em] text-slate-400' },
  { text: '', cls: '' },
  { text: 'INITIALIZING SYSTEM...', cls: 'text-xs tracking-widest text-[#6b8f3f]' },
];

const PHASE_TWO = [
  '> Establishing secure connection...',
  '> Connecting to LMS network...',
  '> Authenticating database...',
  '> Verifying security protocols...',
  '> Loading personnel database...',
  '> Synchronizing operational records...',
  '> Access credentials verified.',
];

const PHASE_THREE = [
  { label: 'SECURITY STATUS', value: 'VERIFIED' },
  { label: 'DATABASE STATUS', value: 'ONLINE' },
  { label: 'NETWORK STATUS', value: 'SECURE' },
  { label: 'ACCESS LEVEL',   value: 'AUTHORIZED' },
];

export function StatusTerminal({ visible, onComplete }: StatusTerminalProps) {
  const [p1Lines, setP1Lines] = useState<number>(0);
  const [p2Lines, setP2Lines] = useState<number>(0);
  const [p3Lines, setP3Lines] = useState<number>(0);
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1 — header lines
    PHASE_ONE.forEach((_, i) => {
      timers.push(setTimeout(() => setP1Lines(i + 1), 200 + i * 220));
    });

    // Phase 2 — check lines
    PHASE_TWO.forEach((_, i) => {
      timers.push(setTimeout(() => setP2Lines(i + 1), 1100 + i * 290));
    });

    // Phase 3 — status table
    PHASE_THREE.forEach((_, i) => {
      timers.push(setTimeout(() => setP3Lines(i + 1), 3350 + i * 190));
    });

    // Granted line
    timers.push(setTimeout(() => setGranted(true), 4200));

    // Signal parent to begin door sequence
    timers.push(setTimeout(onComplete, 4900));

    return () => timers.forEach(clearTimeout);
  }, [visible, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center"
      style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
    >
      <div className="w-full max-w-lg px-8 select-none">

        {/* Phase 1 */}
        <div className="mb-5 space-y-1">
          {PHASE_ONE.slice(0, p1Lines).map((line, i) =>
            line.text ? (
              <p key={i} className={`animate-fade-up ${line.cls}`}>{line.text}</p>
            ) : (
              <div key={i} className="h-2" />
            )
          )}
        </div>

        {/* Phase 2 */}
        {p2Lines > 0 && (
          <div className="mb-5 space-y-0.5 border-t border-slate-800/60 pt-4">
            {PHASE_TWO.slice(0, p2Lines).map((line, i) => (
              <p key={i} className="animate-fade-up text-[11px] leading-5 text-slate-500">
                {line.endsWith('...') ? (
                  <>
                    {line}
                    {i === p2Lines - 1 && p2Lines < PHASE_TWO.length && (
                      <span className="animate-cursor-blink ml-0.5 inline-block">█</span>
                    )}
                  </>
                ) : (
                  <span className="text-emerald-700/80">{line}</span>
                )}
              </p>
            ))}
          </div>
        )}

        {/* Phase 3 */}
        {p3Lines > 0 && (
          <div className="mb-5 space-y-2 border-t border-slate-800/60 pt-4">
            {PHASE_THREE.slice(0, p3Lines).map((item, i) => (
              <div key={i} className="animate-fade-up flex justify-between">
                <span className="text-[9px] tracking-[0.35em] text-slate-600">{item.label}</span>
                <span className="text-[9px] tracking-[0.35em] text-emerald-400">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Granted */}
        {granted && (
          <div className="border-t border-slate-800/60 pt-4">
            <p
              className="animate-fade-up text-center text-sm font-black tracking-[0.45em] text-emerald-400"
              style={{ textShadow: '0 0 28px rgba(52,211,153,0.55)' }}
            >
              LMS DATABASE ACCESS GRANTED
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
