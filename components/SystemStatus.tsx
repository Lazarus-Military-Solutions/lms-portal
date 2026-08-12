'use client';

import { useEffect, useState } from 'react';

type StatusState = 'OPERATIONAL' | 'STANDBY' | 'ALERT' | 'OFFLINE';

interface StatusItem {
  id: string;
  label: string;
  state: StatusState;
  value: string;
}

const SYSTEMS: StatusItem[] = [
  { id: 'net',   label: 'Network',     state: 'OPERATIONAL', value: '99.8%'   },
  { id: 'enc',   label: 'Encryption',  state: 'OPERATIONAL', value: 'AES-256' },
  { id: 'auth',  label: 'Auth Layer',  state: 'OPERATIONAL', value: 'Active'  },
  { id: 'db',    label: 'Database',    state: 'OPERATIONAL', value: '12 ms'   },
  { id: 'intel', label: 'Intel Feed',  state: 'STANDBY',     value: '—'       },
  { id: 'comms', label: 'Comms',       state: 'OPERATIONAL', value: 'Secure'  },
];

const STATE_COLOR: Record<StatusState, string> = {
  OPERATIONAL: 'text-emerald-400',
  STANDBY:     'text-amber-400',
  ALERT:       'text-red-400',
  OFFLINE:     'text-slate-600',
};

const DOT_COLOR: Record<StatusState, string> = {
  OPERATIONAL: 'bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.8)]',
  STANDBY:     'bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.8)]',
  ALERT:       'bg-red-400 shadow-[0_0_5px_rgba(248,113,113,0.8)]',
  OFFLINE:     'bg-slate-700',
};

const READINESS = [85, 92, 78, 96, 88, 94, 91];

export function SystemStatus() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
  const dateStr = now
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .toUpperCase();

  return (
    <div className="flex h-full flex-col gap-3 font-mono">
      {/* live clock */}
      <div className="rounded border border-slate-800 bg-slate-900/50 p-3">
        <p className="mb-1 text-[7px] tracking-[0.45em] text-slate-600 uppercase">System Clock</p>
        <p className="text-xl font-black tracking-widest text-emerald-400">{timeStr}</p>
        <p className="mt-0.5 text-[8px] tracking-widest text-slate-600">{dateStr}</p>
      </div>

      {/* subsystem status */}
      <div className="flex-1 rounded border border-slate-800 bg-slate-900/50 p-3">
        <p className="mb-3 text-[7px] tracking-[0.45em] text-slate-600 uppercase">System Status</p>
        <div className="space-y-2.5">
          {SYSTEMS.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-1.5 w-1.5 shrink-0 rounded-full ${DOT_COLOR[item.state]}`} />
                <span className="text-[10px] tracking-wide text-slate-400">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-slate-600">{item.value}</span>
                <span className={`text-[7px] tracking-wider ${STATE_COLOR[item.state]}`}>
                  {item.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* readiness bar chart */}
      <div className="rounded border border-slate-800 bg-slate-900/50 p-3">
        <p className="mb-2 text-[7px] tracking-[0.45em] text-slate-600 uppercase">Readiness Index</p>
        <div className="flex h-8 items-end gap-1">
          {READINESS.map((val, i) => (
            <div key={i} className="relative flex-1 rounded-sm bg-slate-800/60" style={{ height: '100%' }}>
              <div
                className="absolute bottom-0 left-0 right-0 rounded-sm bg-emerald-600/60"
                style={{ height: `${val}%` }}
              />
            </div>
          ))}
        </div>
        <p className="mt-1.5 text-[8px] tracking-widest text-emerald-400">94% NOMINAL</p>
      </div>
    </div>
  );
}
