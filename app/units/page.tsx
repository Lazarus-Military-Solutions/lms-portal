'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LMS_COMPONENTS, ComponentStatus } from '@/data/units';

const STATUS_COLORS: Record<ComponentStatus, string> = {
  OPERATIONAL: 'text-emerald-400 border-emerald-900 bg-emerald-900/20',
  STANDBY: 'text-amber-400 border-amber-900 bg-amber-900/20',
  MAINTENANCE: 'text-orange-400 border-orange-900 bg-orange-900/20',
  TRAINING: 'text-blue-400 border-blue-900 bg-blue-900/20',
  INACTIVE: 'text-slate-500 border-slate-700 bg-slate-700/20',
};

export default function UnitsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnit, setSelectedUnit] = useState<typeof LMS_COMPONENTS[0] | null>(null);

  const filteredUnits = useMemo(() => {
    if (!searchTerm) return LMS_COMPONENTS;
    const term = searchTerm.toLowerCase();
    return LMS_COMPONENTS.filter(
      (u) =>
        u.id.toLowerCase().includes(term) ||
        u.name.toLowerCase().includes(term) ||
        u.abbreviation.toLowerCase().includes(term) ||
        u.commander.toLowerCase().includes(term) ||
        u.focus.some((f) => f.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen" style={{ background: '#050709' }}>
      {/* header */}
      <div
        className="border-b border-slate-800/50 px-6 py-4"
        style={{ background: '#080b13' }}
      >
        <Link href="/" className="mb-4 inline-block text-xs text-slate-600 hover:text-slate-400 transition">
          â† Back to Dashboard
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] tracking-[0.5em] text-slate-600 uppercase">LMS // Database</p>
            <h1 className="mt-1 text-2xl font-black tracking-widest text-slate-200 uppercase">Component Directory</h1>
            <p className="mt-1 text-[9px] text-slate-600">
              {LMS_COMPONENTS.length} total components | {filteredUnits.length} displayed
            </p>
          </div>
          <div className="text-right">
            <p className="text-[7px] tracking-[0.3em] text-slate-600 uppercase">Operational Units</p>
            <p className="text-[11px] text-emerald-400 font-mono">
              {LMS_COMPONENTS.filter((u) => u.status === 'OPERATIONAL').length}
            </p>
          </div>
        </div>
      </div>

      {/* search */}
      <div className="border-b border-slate-800/50 px-6 py-4" style={{ background: '#060810' }}>
        <input
          type="text"
          placeholder="Search by component name, abbreviation, commander, or focus area..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-[#556B2F] focus:bg-slate-900"
        />
      </div>

      {/* content */}
      <div className="flex gap-6 p-6">
        {/* units list */}
        <div className="flex-1 min-w-0">
          <div className="space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
            {filteredUnits.length === 0 ? (
              <div className="rounded border border-slate-800 bg-slate-900/30 p-4 text-center">
                <p className="text-sm text-slate-400">No components match your search.</p>
              </div>
            ) : (
              filteredUnits.map((unit) => (
                <motion.button
                  key={unit.id}
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full rounded border px-4 py-3 text-left transition ${
                    selectedUnit?.id === unit.id
                      ? 'border-[#556B2F]/60 bg-[#556B2F]/10'
                      : 'border-slate-800 bg-slate-900/30 hover:bg-slate-900/50'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-slate-600">{unit.abbreviation}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-200">{unit.name}</p>
                      <p className="mt-1 text-[10px] text-slate-500">{unit.personnel} personnel</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className={`rounded border px-2 py-0.5 text-[8px] tracking-widest ${STATUS_COLORS[unit.status]}`}>
                        {unit.status}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* detail panel */}
        {selectedUnit && (
          <motion.div
            className="w-96 shrink-0 rounded border border-slate-800 bg-slate-900/40 p-4 max-h-[calc(100vh-280px)] overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              {/* header */}
              <div>
                <p className="text-[8px] tracking-[0.3em] text-slate-600 uppercase">Component Record</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{selectedUnit.id}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-100">{selectedUnit.name}</h3>
                <p className="text-sm text-slate-600">{selectedUnit.abbreviation}</p>
              </div>

              {/* status */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Status</p>
                <div className={`mt-0.5 rounded border px-2 py-0.5 text-[8px] w-fit ${STATUS_COLORS[selectedUnit.status]}`}>
                  {selectedUnit.status}
                </div>
              </div>

              {/* established & headquarters */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Established</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedUnit.established}</p>
                <p className="mt-2 text-[7px] text-slate-600 uppercase">Headquarters</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedUnit.headquarters}</p>
              </div>

              {/* command */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Commander</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedUnit.commander}</p>
              </div>

              {/* personnel */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Personnel Strength</p>
                <p className="mt-0.5 text-2xl font-bold text-emerald-400">{selectedUnit.personnel}</p>
              </div>

              {/* description */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Description</p>
                <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{selectedUnit.description}</p>
              </div>

              {/* focus areas */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Focus Areas</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedUnit.focus.map((area) => (
                    <span
                      key={area}
                      className="rounded bg-[#556B2F]/20 px-2 py-0.5 text-[8px] text-[#dce7b4] border border-[#556B2F]/40"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* recent operations */}
              {selectedUnit.recentOperations.length > 0 && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Recent Operations</p>
                  <div className="mt-2 space-y-1">
                    {selectedUnit.recentOperations.map((op) => (
                      <p key={op} className="text-[10px] text-slate-400">
                        â€¢ {op}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
