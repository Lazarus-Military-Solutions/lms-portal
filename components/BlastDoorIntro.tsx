'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorPanel } from './DoorPanel';

interface BlastDoorIntroProps {
  onComplete: () => void;
}

type Phase = 'booting' | 'granted' | 'opening' | 'fading';

const BOOT_LINES = [
  { text: 'LAZARUS MILITARY SOLUTIONS — NODE v4.2.1', dim: false },
  { text: 'BIOS integrity check ............... OK', dim: true },
  { text: 'Loading kernel modules ............. OK', dim: true },
  { text: 'Encryption layer AES-256 ........... OK', dim: true },
  { text: 'Establishing secure channel ........ OK', dim: true },
  { text: 'Biometric verification ............. PASS', dim: true },
  { text: 'Clearance level DELTA .............. CONFIRMED', dim: true },
  { text: 'ACCESS GRANTED', dim: false },
];

export function BlastDoorIntro({ onComplete }: BlastDoorIntroProps) {
  const [phase, setPhase] = useState<Phase>('booting');
  const [visibleLines, setVisibleLines] = useState(0);
  const [doorsOpen, setDoorsOpen] = useState(false);

  const advance = useCallback(() => {
    setPhase('granted');

    const t1 = setTimeout(() => setPhase('opening'), 900);
    const t2 = setTimeout(() => setDoorsOpen(true), 1300);
    const t3 = setTimeout(() => setPhase('fading'), 3200);
    const t4 = setTimeout(onComplete, 3800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  useEffect(() => {
    let line = 0;
    let cleanup: (() => void) | undefined;

    const interval = setInterval(() => {
      line++;
      setVisibleLines(line);

      if (line >= BOOT_LINES.length) {
        clearInterval(interval);
        setTimeout(() => {
          cleanup = advance();
        }, 350);
      }
    }, 260);

    return () => {
      clearInterval(interval);
      cleanup?.();
    };
  }, [advance]);

  // try to play a sound when doors open — silently skips if file is absent
  useEffect(() => {
    if (!doorsOpen) return;
    const audio = new Audio('/sounds/blast-door-open.mp3');
    audio.volume = 0.35;
    audio.play().catch(() => {});
  }, [doorsOpen]);

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      animate={{ opacity: phase === 'fading' ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{ background: '#050709' }}
    >
      <DoorPanel side="left" isOpen={doorsOpen} />
      <DoorPanel side="right" isOpen={doorsOpen} />

      {/* seam glow when doors part */}
      <AnimatePresence>
        {doorsOpen && (
          <motion.div
            className="absolute top-0 bottom-0 w-px z-10 pointer-events-none"
            style={{ left: '50%', background: 'rgba(124,252,0,0.9)', boxShadow: '0 0 24px 10px rgba(124,252,0,0.25)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.08, 0.55, 1] }}
          />
        )}
      </AnimatePresence>

      {/* boot terminal */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <motion.div
            key="boot"
            className="relative z-20 w-full max-w-md px-10 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="space-y-[5px]">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.p
                  key={i}
                  className={`text-[11px] tracking-wide leading-5 ${
                    line.text === 'ACCESS GRANTED'
                      ? 'text-emerald-400 font-semibold'
                      : i === 0
                      ? 'text-slate-300'
                      : 'text-slate-600'
                  }`}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.12 }}
                >
                  {line.text !== 'ACCESS GRANTED' && (
                    <span className="text-emerald-800 mr-2">&gt;</span>
                  )}
                  {line.text}
                </motion.p>
              ))}
              {visibleLines < BOOT_LINES.length && (
                <span className="inline-block mt-1 h-[13px] w-[7px] bg-emerald-500/80 animate-pulse" />
              )}
            </div>
          </motion.div>
        )}

        {(phase === 'granted' || phase === 'opening') && (
          <motion.div
            key="granted"
            className="relative z-20 text-center font-mono"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-[9px] tracking-[0.55em] text-emerald-800 uppercase">Clearance Level Delta</p>
            <p
              className="mt-2 text-[32px] font-black tracking-[0.28em] text-emerald-400 uppercase leading-none"
              style={{ textShadow: '0 0 40px rgba(52,211,153,0.5)' }}
            >
              Access Granted
            </p>
            <p className="mt-3 text-[8px] tracking-[0.5em] text-slate-700 uppercase">
              Initializing secure portal
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
