'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TRAINING_COURSES, TrainingStatus, TrainingCategory, TRAINING_STATISTICS } from '@/data/training';

const STATUS_COLORS: Record<TrainingStatus, string> = {
  COMPLETED:   'text-emerald-400 border-emerald-900 bg-emerald-900/20',
  IN_PROGRESS: 'text-orange-400 border-orange-900 bg-orange-900/20',
  NOT_STARTED: 'text-slate-500 border-slate-700 bg-slate-700/20',
  PENDING:     'text-blue-400 border-blue-900 bg-blue-900/20',
  FAILED:      'text-red-400 border-red-900 bg-red-900/20',
};

const CATEGORY_LABELS: Record<TrainingCategory, string> = {
  BMT:                 'Basic Military Training',
  RECRUIT_ORIENTATION: 'Recruit Orientation',
  MEDICAL_TRAINING:    'Medical Training',
  OFFICER_TRAINING:    'Officer Training',
  CQB:                 'Close Quarter Battle',
  AVIATION:            'Aviation',
  FIELD_OPERATIONS:    'Field Operations',
  SPECIALIZED:         'Specialized',
};

export default function TrainingPage() {
  const [searchTerm, setSearchTerm]     = useState('');
  const [statusFilter, setStatusFilter] = useState<TrainingStatus | 'ALL'>('ALL');
  const [selectedCourse, setSelectedCourse] = useState<typeof TRAINING_COURSES[0] | null>(null);

  const filteredCourses = useMemo(() => {
    let filtered = TRAINING_COURSES;
    if (statusFilter !== 'ALL') filtered = filtered.filter((c) => c.status === statusFilter);
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.courseId.toLowerCase().includes(term) ||
          c.name.toLowerCase().includes(term) ||
          c.instructor.toLowerCase().includes(term) ||
          c.category.toLowerCase().includes(term)
      );
    }
    return filtered;
  }, [searchTerm, statusFilter]);

  const statuses = Array.from(new Set(TRAINING_COURSES.map((c) => c.status))) as TrainingStatus[];

  return (
    <div className="min-h-screen" style={{ background: '#050709' }}>
      {/* header */}
      <div className="border-b border-slate-800/50 px-6 py-4" style={{ background: '#080b13' }}>
        <Link href="/portal" className="mb-4 inline-block text-xs text-slate-600 hover:text-slate-400 transition">
          ← Back to Portal
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] tracking-[0.5em] text-slate-600 uppercase">LMS // Database</p>
            <h1 className="mt-1 text-2xl font-black tracking-widest text-slate-200 uppercase">Training Catalog</h1>
            <p className="mt-1 text-[9px] text-slate-600">
              {TRAINING_COURSES.length} total courses | {filteredCourses.length} displayed
            </p>
          </div>
          <div className="text-right">
            <p className="text-[7px] tracking-[0.3em] text-slate-600 uppercase">Completed</p>
            <p className="text-[11px] text-emerald-400 font-mono">{TRAINING_STATISTICS.completedCourses}</p>
          </div>
        </div>
      </div>

      {/* stats bar */}
      <div className="border-b border-slate-800/50 px-6 py-3 grid grid-cols-5 gap-4" style={{ background: '#060810' }}>
        <div>
          <p className="text-[7px] text-slate-600 uppercase">Total</p>
          <p className="mt-0.5 text-lg font-bold text-slate-300">{TRAINING_STATISTICS.totalCourses}</p>
        </div>
        <div>
          <p className="text-[7px] text-slate-600 uppercase">Completed</p>
          <p className="mt-0.5 text-lg font-bold text-emerald-400">{TRAINING_STATISTICS.completedCourses}</p>
        </div>
        <div>
          <p className="text-[7px] text-slate-600 uppercase">In Progress</p>
          <p className="mt-0.5 text-lg font-bold text-orange-400">{TRAINING_STATISTICS.inProgressCourses}</p>
        </div>
        <div>
          <p className="text-[7px] text-slate-600 uppercase">Pending</p>
          <p className="mt-0.5 text-lg font-bold text-blue-400">{TRAINING_STATISTICS.pendingCourses}</p>
        </div>
        <div>
          <p className="text-[7px] text-slate-600 uppercase">Avg Score</p>
          <p className="mt-0.5 text-lg font-bold text-slate-300">{TRAINING_STATISTICS.averageScore}%</p>
        </div>
      </div>

      {/* search & filters */}
      <div className="border-b border-slate-800/50 px-6 py-4 space-y-3" style={{ background: '#050709' }}>
        <input
          type="text"
          placeholder="Search by course ID, name, instructor, or category..."
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
            All Courses
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
        {/* courses list */}
        <div className="flex-1 min-w-0">
          <div className="space-y-3 max-h-[calc(100vh-380px)] overflow-y-auto">
            {filteredCourses.length === 0 ? (
              <div className="rounded border border-slate-800 bg-slate-900/30 p-4 text-center">
                <p className="text-sm text-slate-400">No courses match your filters.</p>
              </div>
            ) : (
              filteredCourses.map((course) => (
                <motion.button
                  key={course.courseId}
                  onClick={() => setSelectedCourse(course)}
                  className={`w-full rounded border px-4 py-3 text-left transition ${
                    selectedCourse?.courseId === course.courseId
                      ? 'border-[#556B2F]/60 bg-[#556B2F]/10'
                      : 'border-slate-800 bg-slate-900/30 hover:bg-slate-900/50'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-slate-600">{course.courseId}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-200">{course.name}</p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        {CATEGORY_LABELS[course.category]} • {course.duration}
                      </p>
                      <p className="text-[9px] text-slate-600">Instructor: {course.instructor}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className={`rounded border px-2 py-0.5 text-[8px] tracking-widest ${STATUS_COLORS[course.status]}`}>
                        {course.status}
                      </div>
                      {course.score && (
                        <p className="mt-1 text-[10px] font-bold text-emerald-400">{course.score}%</p>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))
            )}
          </div>
        </div>

        {/* detail panel */}
        {selectedCourse && (
          <motion.div
            className="w-96 shrink-0 rounded border border-slate-800 bg-slate-900/40 p-4 max-h-[calc(100vh-280px)] overflow-y-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-4">
              <div>
                <p className="text-[8px] tracking-[0.3em] text-slate-600 uppercase">Training Record</p>
                <p className="mt-1 font-mono text-xs text-slate-400">{selectedCourse.courseId}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-100">{selectedCourse.name}</h3>
              </div>
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Status</p>
                <div className={`mt-0.5 rounded border px-2 py-0.5 text-[8px] w-fit ${STATUS_COLORS[selectedCourse.status]}`}>
                  {selectedCourse.status}
                </div>
              </div>
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Category</p>
                <p className="mt-0.5 text-sm text-slate-300">{CATEGORY_LABELS[selectedCourse.category]}</p>
              </div>
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Instructor</p>
                <p className="mt-0.5 text-sm text-slate-300">{selectedCourse.instructor}</p>
              </div>
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Timeline</p>
                <div className="mt-2 space-y-1 text-[11px] text-slate-400">
                  <p>Duration: {selectedCourse.duration}</p>
                  <p>Start: {selectedCourse.startDate}</p>
                  {selectedCourse.endDate && <p>End: {selectedCourse.endDate}</p>}
                </div>
              </div>
              <div className="border-t border-slate-800/50 pt-3">
                <p className="text-[7px] text-slate-600 uppercase">Description</p>
                <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{selectedCourse.description}</p>
              </div>
              {(selectedCourse.score || selectedCourse.qualification) && (
                <div className="border-t border-slate-800/50 pt-3">
                  {selectedCourse.score && (
                    <div>
                      <p className="text-[7px] text-slate-600 uppercase">Score</p>
                      <p className="mt-0.5 text-2xl font-bold text-emerald-400">{selectedCourse.score}%</p>
                    </div>
                  )}
                  {selectedCourse.qualification && (
                    <div className={selectedCourse.score ? 'mt-2' : ''}>
                      <p className="text-[7px] text-slate-600 uppercase">Qualification</p>
                      <p className="mt-0.5 text-sm text-amber-400 font-semibold">{selectedCourse.qualification}</p>
                    </div>
                  )}
                </div>
              )}
              {selectedCourse.prerequisite && (
                <div className="border-t border-slate-800/50 pt-3">
                  <p className="text-[7px] text-slate-600 uppercase">Prerequisite</p>
                  <p className="mt-0.5 text-sm text-slate-300">{selectedCourse.prerequisite}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
