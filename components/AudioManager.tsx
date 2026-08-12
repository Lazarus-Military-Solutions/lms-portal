'use client';

import { useSyncExternalStore } from 'react';
import { setMuted, isMuted, subscribeToMuted } from '@/lib/audio';

// useSyncExternalStore gives React a consistent server snapshot, avoiding hydration mismatch
const getSnapshot       = () => isMuted();
const getServerSnapshot = () => true; // always muted on server

export function AudioManager() {
  const muted = useSyncExternalStore(subscribeToMuted, getSnapshot, getServerSnapshot);

  function toggle() {
    // setMuted updates the module singleton; useSyncExternalStore re-reads getSnapshot on next render
    setMuted(!muted);
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-none border border-white/10 bg-black/60 px-3 py-2 text-[8px] tracking-widest text-slate-500 uppercase backdrop-blur transition hover:border-white/20 hover:text-slate-300"
      aria-label={muted ? 'Unmute sound' : 'Mute sound'}
      title={muted ? 'Sound off — click to enable' : 'Sound on — click to mute'}
    >
      <span className="text-[10px]">{muted ? '○' : '●'}</span>
      <span>{muted ? 'SOUND OFF' : 'SOUND ON'}</span>
    </button>
  );
}
