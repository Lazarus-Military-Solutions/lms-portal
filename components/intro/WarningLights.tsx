'use client';

interface WarningLightsProps {
  active: boolean;
  /** which side of the panel this light is on */
  side: 'left' | 'right';
}

export function WarningLights({ active, side }: WarningLightsProps) {
  return (
    <div
      className={`absolute top-6 ${side === 'right' ? 'right-12' : 'left-12'} flex flex-col gap-3`}
    >
      {/* primary warning lamp */}
      <div
        className={`relative h-6 w-6 rounded-full border-2 border-slate-700 ${
          active ? 'animate-warning-flash' : ''
        }`}
        style={{
          background: active
            ? 'radial-gradient(circle, #ff8c00 20%, #c84800 70%, #3a1500 100%)'
            : 'radial-gradient(circle, #3a2000 40%, #1a0e00 100%)',
        }}
        aria-hidden="true"
      >
        {/* lens glare */}
        <div
          className="absolute top-0.5 left-1 h-1.5 w-2.5 rounded-full opacity-50"
          style={{ background: 'rgba(255,220,100,0.6)' }}
        />
      </div>

      {/* secondary indicator strip */}
      <div className="flex flex-col gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1 w-4 rounded-sm ${
              active
                ? i === 0
                  ? 'bg-amber-500/80 animate-warning-slow'
                  : 'bg-amber-900/40'
                : 'bg-slate-800'
            }`}
            style={active ? { animationDelay: `${i * 0.3}s` } : undefined}
          />
        ))}
      </div>
    </div>
  );
}
