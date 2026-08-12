'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { OPERATIONS, OperationStatus, Classification } from '@/data/operations';

const STATUS_COLORS: Record<OperationStatus, string> = {
  ACTIVE: 'text-red-400 border-red-900 bg-red-900/20',
  PLANNING: 'text-blue-400 border-blue-900 bg-blue-900/20',
  COMPLETED: 'text-emerald-400 border-emerald-900 bg-emerald-900/20',
  ARCHIVED: 'text-slate-500 border-slate-700 bg-slate-700/20',
  CLASSIFIED: 'text-purple-400 border-purple-900 bg-purple-900/20',
  CANCELLED: 'text-orange-400 border-orange-900 bg-orange-900/20',
  ON_HOLD: 'text-amber-400 border-amber-900 bg-amber-900/20',
};

const CLASSIFICATION_COLORS: Record<Classification, string> = {
  PUBLIC: 'text-slate-500',
  INTERNAL: 'text-slate-400',
  RESTRICTED: 'text-blue-400',
  CONFIDENTIAL: 'text-amber-400',
  SECRET: 'text-red-500',
  'TOP SECRET': 'text-purple-500',
};

export default function OperationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OperationStatus | 'ALL'>('ALL');
  const [selectedOp, setSelectedOp] = useState<typeof OPERATIONS[0] | null>(null);

  const filteredOps = useMemo(() => {
    let filtered = OPERATIONS;

    if (statusFilter !== 'ALL') {
      filtered = filtered.filter((op) => op.status === statusFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (op) =>
          op.id.toLowerCase().includes(term) ||
          op.name.toLowerCase().includes(term) ||
          op.codename.toLowerCase().includes(term) ||
          op.location.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [searchTerm, statusFilter]);

  const statuses = Array.from(new Set(OPERATIONS.map((o) => o.status))) as OperationStatus[];

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
            <h1 className="mt-1 text-2xl font-black tracking-widest text-slate-200 uppercase">Operations Archive</h1>
            <p className="mt-1 text-[9px] text-slate-600">
              {OPERATIONS.length} total operations | {filteredOps.length} displayed
            </p>
          </div>
          <div className="text-right">
            <p className="text-[7px] tracking-[0.3em] text-slate-600 uppercase">Active Ops</p>
            <p className="text-[11px] text-red-500 font-mono">{OPERATIONS.filter((o) => o.status === 'ACTIVE').length}</p>
          </div>
        </div>
      </div>

      {/* search & filters */}
      <div className="border-b border-slate-800/50 px-6 py-4 space-y-3" style={{ background: '#060810' }}>
        <input
          type="text"
          placeholder="Search by operation ID, name, codename, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-300 placeholder-slate-600 outline-none transition focus:border-[#556B2F] focus:bg-slate-900"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`rounded border px-3 py-1.5 text-xs font-medium transition ${
              statusFilter === 'ALL'
                ? 'border-[#556B2F] bg-[#556B2F]/20 text-slate-200'
                : 'border-slate-700 text-slate-500 hover:text-slate-300'
            }`}
          >
            All Operations
          </button>
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`rounded border px-3 py-1.5 text-xs font-medium transition ${
                statusFilter === status
                  ? 'border-[#556B2F] bg-[#556B2F]/20 text-slate-200'
                  : 'border-slate-700 text-slate-500 hover:text-slate-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* content */}
      <div className="flex gap-6 p-6">
        {/* operations list */}
        <div className="flex-1 min-w-0">
          <div className="space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
            {filteredOps.length === 0 ? (
              <div className="rounded border border-slate-800 bg-slate-900/30 p-4 text-center">
                <p className="text-sm text-slate-400">No operations match your filters.</p>
              </div>
            ) : (
              filteredOps.map((op) => (
                <motion.button
                  key={op.id}
                  onClick={() => setSelectedOp(op)}
                  className={`w-full rounded border px-4 py-3 text-left transition ${
                    selectedOp?.id === op.id
                      ? 'border-[#556B2F]/60 bg-[#556B2F]/10'
                      : 'border-slate-800 bg-slate-900/30 hover:bg-slate-900/50'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-slate-600">{op.id}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-200">{op.name}</p>
                      <p className="text-[10px] text-slate-500 font-mono">{op.codename}</p>
                      <p className="mt-1 text-[11px] text-slate-600">
                        {op.location} â€¢ {op.startDate}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className={`rounded border px-2 py-0.5 text-[8px] tracking-widest ${STATUS_COLORS[op.status]}`}>
                        {op.status}
                      </div>
                      <p className={`mt-1 text-[8px] ${CLASSIFICATION_COLORS[op.classification]}`}>
                        {op.classification}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* detail panel */}
        {selectedOp && (
          <motion.div
            className="w-96 shrink-0 rounded border border-slate-800 bg-slate-900/40 p-4 max-h-[calc(100vh-280px)] overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              {/* header */}
              <div>
                <p className="text-[8px] tracking-[0.3em] text-slate-600 uppercase">Operation Record</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{selectedOp.id}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-100">{selectedOp.name}</h3>
                <p className="text-sm text-slate-600 font-mono">Codename: {selectedOp.codename}</p>
              </div>

              {/* status & classification */}
              <div className="border-t border-slate-800/50 pt-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[7px] text-slate-600 uppercase">Status</p>
                    <div className={`mt-0.5 rounded border px-2 py-0.5 text-[8px] w-fit ${STATUS_COLORS[selectedOp.status]}`}>
                      {selectedOp.status}
                    </div>
                  </div>
                  <div>
                    <p className="text-[7px] text-slate-600 uppercase">Classification</p>
                    <p className={`mt-0.5 text-[10px] ${CLASSIFICATION_COLORS[selectedOp.classification]}`}>
                      {selectedOp.classification}
                    </p>
                  </div>
                </div>
              </div>

              {/* dates */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Timeline</p>
                <div className="mt-2 space-y-1 text-[11px] text-slate-400">
                  <p>Start: {selectedOp.startDate}</p>
                  {selectedOp.endDate && <p>End: {selectedOp.endDate}</p>}
                </div>
              </div>

              {/* location & objective */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Location</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedOp.location}</p>
                <p className="mt-2 text-[7px] text-slate-600 uppercase">Objective</p>
                <p className="mt-0.5 text-[11px] text-slate-400">{selectedOp.objective}</p>
              </div>

              {/* components & personnel */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Components</p>
                <div className="mt-2 space-y-1">
                  {selectedOp.components.map((comp) => (
                    <p key={comp} className="text-[10px] text-slate-400">
                      â€¢ {comp}
                    </p>
                  ))}
                </div>
                <p className="mt-2 text-[7px] text-slate-600 uppercase">Personnel</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedOp.personnel} deployed</p>
              </div>

              {/* summary */}
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Summary</p>
                <p className="mt-1 text-[11px] text-slate-400">{selectedOp.summary}</p>
              </div>

              {/* outcome */}
              {selectedOp.outcome && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Outcome</p>
                  <p className="mt-0.5 text-[11px] text-slate-300">{selectedOp.outcome}</p>
                </div>
              )}

              {/* casualties */}
              {selectedOp.casualties !== undefined && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Casualties</p>
                  <p className={`mt-0.5 text-sm ${selectedOp.casualties === 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {selectedOp.casualties}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
