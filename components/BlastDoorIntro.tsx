'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoorPanel } from './DoorPanel';
import { playSound } from '@/lib/audio';

interface BlastDoorIntroProps {
  onComplete: () => void;
}

type Phase = 'booting' | 'granted' | 'opening' | 'fading';

const BOOT_LINES = [
  { text: 'LAZARUS MILITARY SOLUTIONS — CORPORATE NETWORK NODE v4.2.1', dim: false },
  { text: 'Initializing secure connection ............. OK',              dim: true  },
  { text: 'Verifying SSL certificate chain ........... OK',              dim: true  },
  { text: 'Authentication layer AES-256 .............. OK',              dim: true  },
  { text: 'Loading LMS operational database .......... OK',              dim: true  },
  { text: 'Establishing corporate network bridge ..... OK',              dim: true  },
  { text: 'Clearance level DELTA ..................... CONFIRMED',        dim: true  },
  { text: 'ACCESS GRANTED',                                              dim: false },
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

  // use audio module (silently skips if files absent)
  useEffect(() => {
    if (!doorsOpen) return;
    playSound('intro/door-open', 0.5);
  }, [doorsOpen]);

  useEffect(() => {
    if (phase === 'granted') playSound('intro/authenticate', 0.4);
  }, [phase]);

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      animate={{ opacity: phase === 'fading' ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      style={{ background: '#050709' }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.video
          src="/images/lazarus-logo-animation.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="LMS logo animation"
          className="h-auto max-h-[34vh] w-[min(42vw,420px)] object-contain opacity-60"
          animate={{
            opacity: phase === 'opening' ? 0.62 : phase === 'fading' ? 0.15 : 0,
            scale: phase === 'opening' ? 1.03 : 0.96,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
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

      {/* white bloom — cinematic door → corporate website transition */}
      <AnimatePresence>
        {phase === 'fading' && (
          <motion.div
            className="absolute inset-0 z-30 pointer-events-none"
            style={{ background: 'white' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.55, 0] }}
            transition={{ duration: 0.9, times: [0, 0.25, 1] }}
          />
        )}
      </AnimatePresence>

      {/* boot terminal */}
      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <motion.div
            key="boot"
            className="relative z-20 w-full max-w-md px-10 font-mono pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            <div className="space-y-1.25">
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
                <span className="inline-block mt-1 h-3.25 w-1.75 bg-emerald-500/80 animate-pulse" />
              )}
            </div>
          </motion.div>
        )}

        {(phase === 'granted' || phase === 'opening') && (
          <motion.div
            key="granted"
            className="relative z-20 mx-6 w-full max-w-140 border border-emerald-500/30 bg-black/65 p-6 text-center font-mono shadow-[0_0_40px_rgba(16,185,129,0.12)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              phase === 'opening'
                ? {
                    opacity: 0,
                    scale: 0.94,
                    y: -8,
                    clipPath: 'inset(0 0 100% 0)',
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    clipPath: 'inset(0 0 0% 0)',
                  }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(16,185,129,0.28), rgba(16,185,129,0.28) 1px, transparent 1px, transparent 4px)',
              }}
            />
            <p className="relative text-[9px] tracking-[0.55em] text-emerald-800 uppercase">Clearance Level Delta</p>
            <p
              className="intro-frame-glitch relative mt-2 text-[32px] font-black tracking-[0.28em] text-emerald-400 uppercase leading-none"
              data-text="Access Granted"
              style={{ textShadow: '0 0 40px rgba(52,211,153,0.5)' }}
            >
              Access Granted
            </p>
            <p className="relative mt-3 text-[8px] tracking-[0.5em] text-slate-600 uppercase">
              Initializing secure portal
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
