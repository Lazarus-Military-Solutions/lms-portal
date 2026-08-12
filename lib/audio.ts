// Silent fail if files are absent — drop assets into /public/audio/ to activate
let muted = false;
const listeners = new Set<() => void>();

if (typeof window !== 'undefined') {
  muted = sessionStorage.getItem('lms-muted') === 'true';
}

const cache: Record<string, HTMLAudioElement> = {};

export function playSound(name: string, volume = 0.5) {
  if (typeof window === 'undefined') return;
  if (muted) return;
  try {
    if (!cache[name]) {
      cache[name] = new Audio(`/audio/${name}.mp3`);
    }
    const a = cache[name];
    a.currentTime = 0;
    a.volume = Math.min(1, Math.max(0, volume));
    a.play().catch(() => {});
  } catch {
    // audio not available
  }
}

export function setMuted(value: boolean) {
  muted = value;
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('lms-muted', String(value));
  }
  listeners.forEach((l) => l());
}

export function isMuted() {
  return muted;
}

export function subscribeToMuted(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}
