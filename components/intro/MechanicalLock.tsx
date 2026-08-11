'use client';

interface MechanicalLockProps {
  /** false = retract animation plays */
  isLocked: boolean;
  /** vertical index (0-3), used for staggered animation delay */
  index: number;
}

export function MechanicalLock({ isLocked, index }: MechanicalLockProps) {
  const delay = `${index * 90}ms`;

  return (
    <div
      className="absolute left-0 right-0 flex items-center justify-center"
      style={{ height: '22px' }}
      aria-hidden="true"
    >
      {/* left bolt arm — extends from left panel toward seam */}
      <div
        className={`h-4 origin-right ${!isLocked ? 'animate-lock-l' : ''}`}
        style={{
          width: '13%',
          animationDelay: delay,
          background: 'linear-gradient(to right, #1e2230, #2c3040, #353a4a)',
          borderTop: '1px solid rgba(80,90,110,0.5)',
          borderBottom: '1px solid rgba(0,0,0,0.6)',
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.04), 0 2px 6px rgba(0,0,0,0.5)',
          transformOrigin: 'right center',
        }}
      >
        {/* bolt tip */}
        <div
          className="absolute right-0 top-0 bottom-0 w-3"
          style={{
            background: 'linear-gradient(to right, #2c3040, #414860)',
            borderRight: '2px solid #505870',
          }}
        />
      </div>

      {/* center seam gap / lock pin hole */}
      <div
        className="relative z-10 h-5 w-4 rounded-sm"
        style={{
          background: 'linear-gradient(to bottom, #080b12, #0d1018)',
          border: '1px solid rgba(60,70,90,0.4)',
          boxShadow: 'inset 0 0 4px rgba(0,0,0,0.9)',
        }}
      >
        <div
          className="absolute inset-x-1 top-1 h-0.5 rounded-full"
          style={{ background: isLocked ? '#505870' : '#1a1d24' }}
        />
      </div>

      {/* right bolt arm — extends from right panel toward seam */}
      <div
        className={`h-4 origin-left ${!isLocked ? 'animate-lock-r' : ''}`}
        style={{
          width: '13%',
          animationDelay: delay,
          background: 'linear-gradient(to left, #1e2230, #2c3040, #353a4a)',
          borderTop: '1px solid rgba(80,90,110,0.5)',
          borderBottom: '1px solid rgba(0,0,0,0.6)',
          boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.04), 0 2px 6px rgba(0,0,0,0.5)',
          transformOrigin: 'left center',
        }}
      >
        {/* bolt tip */}
        <div
          className="absolute left-0 top-0 bottom-0 w-3"
          style={{
            background: 'linear-gradient(to left, #2c3040, #414860)',
            borderLeft: '2px solid #505870',
          }}
        />
      </div>
    </div>
  );
}
