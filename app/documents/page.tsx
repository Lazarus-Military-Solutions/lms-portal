'use client';

import Link from 'next/link';

const DOCUMENTS = [
  {
    id: 'DOC-001',
    name: 'Operational Security Guidelines',
    category: 'Security',
    classification: 'CONFIDENTIAL',
    date: '2028-03-15',
    size: '2.4 MB',
  },
  {
    id: 'DOC-002',
    name: 'Field Operations Manual v4.2',
    category: 'Operations',
    classification: 'RESTRICTED',
    date: '2028-01-20',
    size: '15.8 MB',
  },
  {
    id: 'DOC-003',
    name: 'Medical Protocols — Combat Theater',
    category: 'Medical',
    classification: 'INTERNAL',
    date: '2028-06-01',
    size: '4.1 MB',
  },
  {
    id: 'DOC-004',
    name: 'Personnel Onboarding Packet',
    category: 'HR',
    classification: 'INTERNAL',
    date: '2027-11-30',
    size: '1.9 MB',
  },
  {
    id: 'DOC-005',
    name: 'Aviation Wing SOPs',
    category: 'Aviation',
    classification: 'RESTRICTED',
    date: '2028-04-10',
    size: '8.5 MB',
  },
  {
    id: 'DOC-006',
    name: 'Intelligence Assessment — Eastern Theater',
    category: 'Intelligence',
    classification: 'SECRET',
    date: '2028-07-12',
    size: '3.2 MB',
  },
];

const CLASSIFICATION_COLORS: Record<string, string> = {
  INTERNAL: 'text-slate-400',
  RESTRICTED: 'text-blue-400',
  CONFIDENTIAL: 'text-amber-400',
  SECRET: 'text-red-500',
  'TOP SECRET': 'text-purple-500',
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#050709' }}>
      {/* header */}
      <div
        className="border-b border-slate-800/50 px-6 py-4"
        style={{ background: '#080b13' }}
      >
        <Link href="/" className="mb-4 inline-block text-xs text-slate-600 hover:text-slate-400 transition">
          ← Back to Dashboard
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] tracking-[0.5em] text-slate-600 uppercase">LMS // Database</p>
            <h1 className="mt-1 text-2xl font-black tracking-widest text-slate-200 uppercase">Document Archive</h1>
            <p className="mt-1 text-[9px] text-slate-600">{DOCUMENTS.length} documents indexed</p>
          </div>
          <div className="text-right">
            <p className="text-[7px] tracking-[0.3em] text-slate-600 uppercase">Storage Used</p>
            <p className="text-[11px] text-slate-400 font-mono">35.9 MB</p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="p-6">
        {/* notice */}
        <div className="mb-6 rounded border border-amber-900/40 bg-amber-900/10 px-4 py-3">
          <p className="text-[9px] text-amber-500 tracking-widest uppercase">
            System Notice — Documents are indexed but access is subject to clearance verification.
          </p>
        </div>

        {/* doc list */}
        <div className="space-y-2">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center justify-between rounded border border-slate-800 bg-slate-900/30 px-4 py-3"
            >
              <div className="flex items-start gap-4">
                <div className="rounded bg-slate-800/60 px-2 py-1 text-[8px] text-slate-500 font-mono">
                  {doc.id}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-200">{doc.name}</p>
                  <p className="mt-0.5 text-[10px] text-slate-600">
                    {doc.category} • {doc.date} • {doc.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className={`text-[10px] font-semibold ${CLASSIFICATION_COLORS[doc.classification]}`}>
                  {doc.classification}
                </p>
                <button className="rounded border border-slate-700 px-2 py-1 text-[9px] text-slate-500 hover:text-slate-300 hover:border-slate-500 transition">
                  REQUEST ACCESS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
