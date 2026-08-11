'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SystemStatus } from './SystemStatus';

type Module = 'overview' | 'personnel' | 'operations' | 'intel' | 'training';

const NAV: { id: Module; label: string; count?: number }[] = [
  { id: 'overview',    label: 'Overview'    },
  { id: 'personnel',   label: 'Personnel',  count: 247 },
  { id: 'operations',  label: 'Operations', count: 12  },
  { id: 'intel',       label: 'Intel Feed', count: 4   },
  { id: 'training',    label: 'Training',   count: 18  },
];

export function DatabaseDashboard() {
  const [active, setActive] = useState<Module>('overview');

  return (
    <div
      className="flex h-screen flex-col overflow-hidden font-mono"
      style={{ background: '#060810' }}
    >
      {/* top bar */}
      <div
        className="flex h-12 flex-shrink-0 items-center justify-between border-b border-slate-800/50 px-6"
        style={{ background: '#080b13' }}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-[#556B2F]">
            <span className="text-[8px] font-black text-white">LM</span>
          </div>
          <span className="text-[11px] tracking-[0.3em] text-slate-300 uppercase">
            Lazarus Military Solutions
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-[9px] tracking-[0.2em] text-slate-600 uppercase">
            Secure Operations Portal
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ boxShadow: '0 0 5px rgba(52,211,153,0.8)' }}
            />
            <span className="text-[8px] tracking-widest text-emerald-500">SYSTEM OPERATIONAL</span>
          </div>
          <span className="text-[8px] tracking-wider text-slate-600">DELTA CLEARANCE</span>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 overflow-hidden">
        {/* left nav */}
        <div
          className="flex w-48 flex-shrink-0 flex-col border-r border-slate-800/50 py-4"
          style={{ background: '#070a10' }}
        >
          <p className="mb-3 px-4 text-[7px] tracking-[0.45em] text-slate-600 uppercase">Modules</p>
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center justify-between border-l-2 px-4 py-2 text-left transition-colors ${
                active === item.id
                  ? 'border-[#556B2F] bg-[#556B2F]/10 text-slate-200'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="text-[10px] tracking-wide uppercase">{item.label}</span>
              {item.count !== undefined && (
                <span className="text-[9px] text-slate-700">{item.count}</span>
              )}
            </button>
          ))}

          <div className="mt-auto border-t border-slate-800/50 px-4 pt-4">
            <p className="text-[7px] tracking-[0.3em] text-slate-700 uppercase">Operator</p>
            <p className="mt-1 text-[10px] text-slate-400">ANDERSON, J.</p>
            <p className="text-[8px] text-slate-600">Colonel · CMD</p>
          </div>
        </div>

        {/* main content */}
        <div className="flex-1 overflow-y-auto p-6">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {active === 'overview'   && <OverviewPanel />}
            {active === 'personnel'  && <PersonnelPanel />}
            {active === 'operations' && <OperationsPanel />}
            {active === 'intel'      && <IntelPanel />}
            {active === 'training'   && <TrainingPanel />}
          </motion.div>
        </div>

        {/* right sidebar */}
        <div
          className="w-56 flex-shrink-0 border-l border-slate-800/50 p-4"
          style={{ background: '#070a10' }}
        >
          <SystemStatus />
        </div>
      </div>
    </div>
  );
}

/* ── panel header helper ── */
function PanelHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="text-[7px] tracking-[0.5em] text-slate-600 uppercase">{eyebrow}</p>
      <h2 className="mt-1 text-[15px] font-bold tracking-widest text-slate-200 uppercase">{title}</h2>
    </div>
  );
}

/* ── stat card helper ── */
function StatCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  const positive = delta.startsWith('+') && delta !== '+0';
  return (
    <div className="rounded border border-slate-800 bg-slate-900/40 p-3">
      <p className="text-[7px] tracking-widest text-slate-600 uppercase">{label}</p>
      <p className="mt-1.5 text-2xl font-black text-slate-200">{value}</p>
      <p className={`text-[8px] ${positive ? 'text-emerald-500' : 'text-slate-600'}`}>
        {delta} today
      </p>
    </div>
  );
}

/* ── Overview ── */
function OverviewPanel() {
  const stats = [
    { label: 'Active Personnel', value: '247', delta: '+3'  },
    { label: 'Deployed Units',   value: '12',  delta: '+0'  },
    { label: 'Open Ops',         value: '4',   delta: '+1'  },
    { label: 'Intel Alerts',     value: '4',   delta: '+4'  },
  ];

  const log = [
    { time: '08:42', level: 'INFO',  event: 'Operation DAWNBREAKER status updated'     },
    { time: '07:15', level: 'AUDIT', event: 'Personnel record LMS-047 modified'        },
    { time: '06:30', level: 'ALERT', event: 'Intel feed sync — 4 new entries'          },
    { time: '05:00', level: 'INFO',  event: 'Automated readiness check completed'      },
  ];

  const levelColor: Record<string, string> = {
    INFO:  'text-slate-600',
    AUDIT: 'text-blue-400',
    ALERT: 'text-amber-500',
  };

  return (
    <div className="space-y-6">
      <PanelHeader eyebrow="Operations Overview" title="Command Status" />
      <div className="grid grid-cols-4 gap-3">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <div className="rounded border border-slate-800 bg-slate-900/40 p-4">
        <p className="mb-3 text-[7px] tracking-[0.45em] text-slate-600 uppercase">Activity Log</p>
        <div className="space-y-2">
          {log.map((entry, i) => (
            <div key={i} className="flex items-start gap-3 text-[10px]">
              <span className="w-10 flex-shrink-0 text-slate-600">{entry.time}</span>
              <span className={`flex-shrink-0 ${levelColor[entry.level]}`}>[{entry.level}]</span>
              <span className="text-slate-400">{entry.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Personnel ── */
const PERSONNEL = [
  { id: 'LMS-001', name: 'Anderson, J.',  rank: 'Colonel',     unit: 'CMD',   status: 'ACTIVE',    clearance: 'TOP SECRET'  },
  { id: 'LMS-002', name: 'Carter, M.',    rank: 'Major',       unit: 'OPS',   status: 'DEPLOYED',  clearance: 'SECRET'      },
  { id: 'LMS-003', name: 'Williams, R.',  rank: 'Captain',     unit: 'INTEL', status: 'ACTIVE',    clearance: 'TOP SECRET'  },
  { id: 'LMS-004', name: 'Torres, S.',    rank: 'Lt. Colonel', unit: 'LOG',   status: 'TRAINING',  clearance: 'SECRET'      },
  { id: 'LMS-005', name: 'Mitchell, D.',  rank: 'Sergeant',    unit: 'OPS',   status: 'ACTIVE',    clearance: 'CONFIDENTIAL'},
];

const STATUS_BADGE: Record<string, string> = {
  ACTIVE:   'text-emerald-400 border-emerald-900',
  DEPLOYED: 'text-amber-400 border-amber-900',
  LEAVE:    'text-slate-400 border-slate-700',
  TRAINING: 'text-blue-400 border-blue-900',
};

function PersonnelPanel() {
  return (
    <div className="space-y-4">
      <PanelHeader eyebrow="Database" title="Personnel Records" />
      <div className="overflow-hidden rounded border border-slate-800">
        <table className="w-full text-[10px]">
          <thead>
            <tr className="border-b border-slate-800" style={{ background: '#0a0d15' }}>
              {['ID', 'Name', 'Rank', 'Unit', 'Status', 'Clearance'].map((h) => (
                <th key={h} className="px-4 py-2.5 text-left font-normal tracking-[0.3em] text-slate-600 uppercase">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERSONNEL.map((p, i) => (
              <tr
                key={p.id}
                className={`border-b border-slate-800/40 transition-colors hover:bg-slate-800/20 ${
                  i % 2 !== 0 ? 'bg-slate-900/20' : ''
                }`}
              >
                <td className="px-4 py-2.5 text-slate-600">{p.id}</td>
                <td className="px-4 py-2.5 text-slate-300">{p.name}</td>
                <td className="px-4 py-2.5 text-slate-400">{p.rank}</td>
                <td className="px-4 py-2.5 text-slate-500">{p.unit}</td>
                <td className="px-4 py-2.5">
                  <span className={`rounded border px-2 py-0.5 text-[7px] tracking-wider ${STATUS_BADGE[p.status]}`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-[8px] tracking-wide text-slate-600">{p.clearance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Operations ── */
function OperationsPanel() {
  const ops = [
    { id: 'OP-042', name: 'DAWNBREAKER', status: 'ACTIVE',    phase: 'Phase 2 / 4', unit: 'Alpha-7', start: '2026-08-01' },
    { id: 'OP-039', name: 'IRON VEIL',   status: 'STANDBY',   phase: 'Phase 1 / 3', unit: 'Bravo-3', start: '2026-07-28' },
    { id: 'OP-038', name: 'GHOST TIDE',  status: 'COMPLETE',  phase: 'Phase 3 / 3', unit: 'Delta-1', start: '2026-07-10' },
  ];

  const opBadge: Record<string, string> = {
    ACTIVE:   'text-emerald-400 border-emerald-900',
    STANDBY:  'text-amber-400 border-amber-900',
    COMPLETE: 'text-slate-600 border-slate-700',
  };

  return (
    <div className="space-y-4">
      <PanelHeader eyebrow="Operations" title="Active Operations" />
      <div className="space-y-3">
        {ops.map((op) => (
          <div key={op.id} className="rounded border border-slate-800 bg-slate-900/30 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[8px] tracking-widest text-slate-600">{op.id}</p>
                <p className="mt-0.5 text-[13px] font-bold tracking-widest text-slate-200 uppercase">
                  Operation {op.name}
                </p>
              </div>
              <span className={`rounded border px-2 py-0.5 text-[7px] tracking-widest ${opBadge[op.status]}`}>
                {op.status}
              </span>
            </div>
            <div className="mt-3 flex gap-6 text-[9px] text-slate-500">
              <span>Phase: <span className="text-slate-400">{op.phase}</span></span>
              <span>Unit: <span className="text-slate-400">{op.unit}</span></span>
              <span>Started: <span className="text-slate-400">{op.start}</span></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Intel Feed ── */
function IntelPanel() {
  const items = [
    { cls: 'SECRET',      title: 'Regional threat assessment — Sector 7',        time: '06:30' },
    { cls: 'CONFIDENTIAL',title: 'Logistics route update — Northern corridor',   time: '05:12' },
    { cls: 'SECRET',      title: 'Personnel movement report — Unit BRAVO-3',     time: '04:45' },
    { cls: 'TOP SECRET',  title: '[REDACTED] — Full brief in secure terminal',   time: '02:00' },
  ];

  const clsColor: Record<string, string> = {
    'TOP SECRET':    'text-red-500',
    'SECRET':        'text-amber-500',
    'CONFIDENTIAL':  'text-blue-400',
  };

  return (
    <div className="space-y-4">
      <PanelHeader eyebrow="Intelligence" title="Intel Feed" />
      <div className="rounded border border-amber-900/30 bg-amber-900/5 p-3">
        <p className="text-[8px] tracking-widest text-amber-500 uppercase">
          4 unreviewed briefings require attention
        </p>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start justify-between rounded border border-slate-800 bg-slate-900/30 p-3"
          >
            <div>
              <span className={`text-[7px] tracking-[0.4em] ${clsColor[item.cls] ?? 'text-slate-500'}`}>
                {item.cls}
              </span>
              <p className="mt-1 text-[11px] text-slate-300">{item.title}</p>
            </div>
            <span className="ml-4 flex-shrink-0 text-[9px] text-slate-600">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Training ── */
function TrainingPanel() {
  const modules = [
    { code: 'TRN-101', name: 'Field Operations Protocol',   enrolled: 42, pct: 78 },
    { code: 'TRN-204', name: 'Secure Communications',       enrolled: 31, pct: 55 },
    { code: 'TRN-305', name: 'Combat Medical Response',     enrolled: 18, pct: 90 },
    { code: 'TRN-412', name: 'Intelligence Analysis',       enrolled: 12, pct: 34 },
  ];

  return (
    <div className="space-y-4">
      <PanelHeader eyebrow="LMS" title="Training Modules" />
      <div className="space-y-3">
        {modules.map((m) => (
          <div key={m.code} className="rounded border border-slate-800 bg-slate-900/30 p-4">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <p className="text-[8px] tracking-widest text-slate-600">{m.code}</p>
                <p className="mt-0.5 text-[13px] text-slate-200">{m.name}</p>
              </div>
              <span className="text-[9px] text-slate-500">{m.enrolled} enrolled</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-emerald-700" style={{ width: `${m.pct}%` }} />
              </div>
              <span className="w-8 text-right text-[9px] text-emerald-500">{m.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
