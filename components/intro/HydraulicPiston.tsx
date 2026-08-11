'use client';

interface HydraulicPistonProps {
  /** which panel outer edge to attach to */
  side: 'left' | 'right';
  active: boolean;
}

export function HydraulicPiston({ side, active }: HydraulicPistonProps) {
  const isLeft = side === 'left';

  return (
    <div
      className={`absolute top-[15%] ${isLeft ? 'left-3' : 'right-3'} flex flex-col items-center`}
      style={{ height: '70%' }}
      aria-hidden="true"
    >
      {/* cylinder body */}
      <div
        className="relative w-5 flex-1 rounded-sm"
        style={{
          background: 'linear-gradient(to right, #1a1e28, #22273200, #1e2230)',
          border: '1px solid rgba(60,70,90,0.5)',
          boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.5)',
        }}
      >
        {/* cylinder bands */}
        {[20, 40, 60, 80].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: 'rgba(60,70,90,0.4)',
            }}
          />
        ))}

        {/* chrome rod — extends from top of cylinder when active */}
        <div
          className={`absolute left-1 right-1 top-0 rounded-t-sm transition-none ${
            active ? 'animate-piston-extend' : ''
          }`}
          style={{
            height: active ? '62%' : '32%',
            marginTop: '-32%',
            background: 'linear-gradient(to right, #3a4050, #606880, #3a4050)',
            border: '1px solid rgba(80,90,110,0.6)',
            boxShadow: '0 0 4px rgba(0,0,0,0.4)',
          }}
        />

        {/* cap at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-3 rounded-b-sm"
          style={{
            background: 'linear-gradient(to bottom, #22273200, #2a2e40)',
            borderTop: '1px solid rgba(60,70,90,0.4)',
          }}
        />
      </div>

      {/* mount bracket */}
      <div
        className="h-3 w-7 rounded-sm"
        style={{
          background: '#1e2230',
          border: '1px solid rgba(50,60,80,0.6)',
        }}
      />
    </div>
  );
}
