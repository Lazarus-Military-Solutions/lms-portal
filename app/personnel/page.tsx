'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PERSONNEL, ClearanceLevel } from '@/data/personnel';

const CLEARANCE_COLORS: Record<ClearanceLevel, string> = {
  INTERNAL: 'text-slate-500 border-slate-700',
  RESTRICTED: 'text-blue-400 border-blue-900',
  CONFIDENTIAL: 'text-amber-400 border-amber-900',
  SECRET: 'text-red-500 border-red-900',
  'TOP SECRET': 'text-purple-500 border-purple-900',
};

const STATUS_COLORS: Record<string, string> = {
  ACTIVE: 'text-emerald-400 border-emerald-900',
  DEPLOYED: 'text-orange-400 border-orange-900',
  TRAINING: 'text-blue-400 border-blue-900',
  LEAVE: 'text-slate-400 border-slate-700',
  MEDICAL: 'text-red-400 border-red-900',
  ARCHIVED: 'text-slate-600 border-slate-800',
};

export default function PersonnelPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<typeof PERSONNEL[0] | null>(null);

  const filteredPersonnel = useMemo(() => {
    if (!searchTerm) return PERSONNEL;
    const term = searchTerm.toLowerCase();
    return PERSONNEL.filter(
      (p) =>
        p.serviceNumber.toLowerCase().includes(term) ||
        p.firstName.toLowerCase().includes(term) ||
        p.lastName.toLowerCase().includes(term) ||
        p.callsign?.toLowerCase().includes(term) ||
        p.component.toLowerCase().includes(term) ||
        p.position.toLowerCase().includes(term)
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
            <h1 className="mt-1 text-2xl font-black tracking-widest text-slate-200 uppercase">Personnel Records</h1>
            <p className="mt-1 text-[9px] text-slate-600">
              {PERSONNEL.length} total records | {filteredPersonnel.length} displayed
            </p>
          </div>
          <div className="text-right">
            <p className="text-[7px] tracking-[0.3em] text-slate-600 uppercase">Security Level</p>
            <p className="text-[11px] text-emerald-400 font-mono">DELTA CLEARANCE</p>
          </div>
        </div>
      </div>

      {/* search & filter */}
      <div className="border-b border-slate-800/50 px-6 py-4" style={{ background: '#060810' }}>
        <input
          type="text"
          placeholder="Search by service number, name, callsign, unit, or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-[#556B2F] focus:bg-slate-900"
        />
      </div>

      {/* content */}
      <div className="flex gap-6 p-6">
        {/* personnel list */}
        <div className="flex-1 min-w-0">
          <div className="space-y-2 max-h-[calc(100vh-240px)] overflow-y-auto">
            {filteredPersonnel.length === 0 ? (
              <div className="rounded border border-slate-800 bg-slate-900/30 p-4 text-center">
                <p className="text-sm text-slate-400">No records match your search.</p>
              </div>
            ) : (
              filteredPersonnel.map((person) => (
                <motion.button
                  key={person.serviceNumber}
                  onClick={() => setSelectedRecord(person)}
                  className={`w-full rounded border px-4 py-3 text-left transition ${
                    selectedRecord?.serviceNumber === person.serviceNumber
                      ? 'border-[#556B2F]/60 bg-[#556B2F]/10'
                      : 'border-slate-800 bg-slate-900/30 hover:bg-slate-900/50'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-slate-600">{person.serviceNumber}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-200">
                        {person.lastName}, {person.firstName}
                        {person.callsign && <span className="text-slate-600"> / {person.callsign}</span>}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        {person.rank} Â· {person.component}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div
                        className={`mb-1 rounded border px-2 py-0.5 text-[8px] tracking-widest ${
                          STATUS_COLORS[person.status]
                        }`}
                      >
                        {person.status}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* detail panel */}
        {selectedRecord && (
          <motion.div
            className="w-80 shrink-0 rounded border border-slate-800 bg-slate-900/40 p-4 max-h-[calc(100vh-240px)] overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              {/* header */}
              <div>
                <p className="text-[8px] tracking-[0.3em] text-slate-600 uppercase">Personnel Record</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{selectedRecord.serviceNumber}</p>
                <h3 className="mt-2 text-sm font-bold text-slate-100">
                  {selectedRecord.lastName}, {selectedRecord.firstName}
                </h3>
                {selectedRecord.callsign && (
                  <p className="text-xs text-slate-500">Callsign: {selectedRecord.callsign}</p>
                )}
              </div>

              {/* rank & status */}
              <div className="border-t border-slate-800/50 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[7px] text-slate-600 uppercase">Rank</p>
                    <p className="mt-0.5 text-sm text-slate-300">{selectedRecord.rank}</p>
                  </div>
                  <div>
                    <p className="text-[7px] text-slate-600 uppercase">Status</p>
                    <div className={`mt-0.5 rounded border px-2 py-0.5 text-[8px] w-fit ${STATUS_COLORS[selectedRecord.status]}`}>
                      {selectedRecord.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* component & position */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Component</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedRecord.component}</p>
                <p className="text-[7px] text-slate-600 uppercase">Position</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedRecord.position}</p>
              </div>

              {/* clearance */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Clearance Level</p>
                <div className={`mt-0.5 rounded border px-2 py-0.5 text-[8px] w-fit ${CLEARANCE_COLORS[selectedRecord.clearanceLevel]}`}>
                  {selectedRecord.clearanceLevel}
                </div>
              </div>

              {/* service record */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Service Record</p>
                <div className="mt-2 space-y-1 text-[11px] text-slate-400">
                  <p>Date Joined: {selectedRecord.dateJoined}</p>
                  <p>Deployments: {selectedRecord.deployments}</p>
                  <p>Operations: {selectedRecord.operations}</p>
                  <p>Disciplinary Records: {selectedRecord.disciplinaryRecords}</p>
                </div>
              </div>

              {/* qualifications */}
              {selectedRecord.qualifications.length > 0 && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Qualifications</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {selectedRecord.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded bg-slate-800/60 px-2 py-0.5 text-[8px] text-slate-400"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* awards */}
              {selectedRecord.awards.length > 0 && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Awards</p>
                  <div className="mt-2 space-y-1">
                    {selectedRecord.awards.map((award) => (
                      <p key={award} className="text-[10px] text-amber-400">
                        â—† {award}
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
