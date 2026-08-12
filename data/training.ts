// LMS Training Database
export type TrainingStatus = 'COMPLETED' | 'IN_PROGRESS' | 'NOT_STARTED' | 'PENDING' | 'FAILED';
export type TrainingCategory =
  | 'BMT'
  | 'RECRUIT_ORIENTATION'
  | 'MEDICAL_TRAINING'
  | 'OFFICER_TRAINING'
  | 'CQB'
  | 'AVIATION'
  | 'FIELD_OPERATIONS'
  | 'SPECIALIZED';

export interface TrainingRecord {
  courseId: string;
  name: string;
  category: TrainingCategory;
  status: TrainingStatus;
  instructor: string;
  startDate: string;
  endDate?: string;
  score?: number;
  qualification?: string;
  duration: string; // e.g., "4 weeks"
  description: string;
  prerequisite?: string;
}

export const TRAINING_COURSES: TrainingRecord[] = [
  {
    courseId: 'BMT-001',
    name: 'Basic Military Training',
    category: 'BMT',
    status: 'COMPLETED',
    instructor: 'Sergeant Major Collins',
    startDate: '2022-01-10',
    endDate: '2022-03-15',
    score: 94,
    qualification: 'BMT Certificate',
    duration: '10 weeks',
    description:
      'Foundational military training covering marksmanship, physical conditioning, tactical movement, and basic combat skills.',
  },
  {
    courseId: 'ROE-001',
    name: 'Recruit Orientation & Ethics',
    category: 'RECRUIT_ORIENTATION',
    status: 'COMPLETED',
    instructor: 'Colonel Anderson',
    startDate: '2022-03-18',
    endDate: '2022-03-29',
    score: 89,
    qualification: 'Orientation Certificate',
    duration: '2 weeks',
    description:
      'Introduction to LMS operations, organizational structure, ethical guidelines, and operational procedures.',
    prerequisite: 'BMT-001',
  },
  {
    courseId: 'CQB-101',
    name: 'Close Quarter Battle Fundamentals',
    category: 'CQB',
    status: 'COMPLETED',
    instructor: 'Captain Harrison',
    startDate: '2022-04-05',
    endDate: '2022-06-10',
    score: 97,
    qualification: 'CQB Level 1',
    duration: '10 weeks',
    description:
      'Advanced hand-to-hand combat, weapon retention, and tactical unarmed defense for operational personnel.',
    prerequisite: 'BMT-001',
  },
  {
    courseId: 'FO-201',
    name: 'Field Operations Core',
    category: 'FIELD_OPERATIONS',
    status: 'IN_PROGRESS',
    instructor: 'Major Carter',
    startDate: '2028-07-15',
    endDate: undefined,
    score: undefined,
    qualification: undefined,
    duration: '12 weeks',
    description:
      'Tactical field operations, squad dynamics, mission planning, and advanced combat scenarios. Ongoing.',
    prerequisite: 'CQB-101',
  },
  {
    courseId: 'MED-150',
    name: 'Field Trauma Medicine',
    category: 'MEDICAL_TRAINING',
    status: 'COMPLETED',
    instructor: 'Dr. Rachel Moore',
    startDate: '2024-02-10',
    endDate: '2024-04-20',
    score: 92,
    qualification: 'Combat Medic',
    duration: '10 weeks',
    description: 'Battlefield trauma assessment, emergency triage, and field medical procedures.',
    prerequisite: 'BMT-001',
  },
  {
    courseId: 'AVN-301',
    name: 'Rotary Wing Flight Operations',
    category: 'AVIATION',
    status: 'COMPLETED',
    instructor: 'Captain Williams',
    startDate: '2021-09-12',
    endDate: '2022-02-18',
    score: 96,
    qualification: 'Rotary Wing Pilot',
    duration: '24 weeks',
    description:
      'Helicopter flight operations, tactical insertions, emergency procedures, and combat flying techniques.',
    prerequisite: 'BMT-001',
  },
  {
    courseId: 'OFF-401',
    name: 'Officer Leadership & Command',
    category: 'OFFICER_TRAINING',
    status: 'COMPLETED',
    instructor: 'Colonel Anderson',
    startDate: '2019-06-01',
    endDate: '2019-09-15',
    score: 95,
    qualification: 'Officer Commission',
    duration: '16 weeks',
    description:
      'Officer-level training covering command structure, strategic decision-making, personnel management, and mission coordination.',
    prerequisite: 'CQB-101, FO-201',
  },
  {
    courseId: 'SPC-500',
    name: 'Advanced Reconnaissance & Surveillance',
    category: 'SPECIALIZED',
    status: 'PENDING',
    instructor: 'Captain Marcus Reeves',
    startDate: '2028-09-01',
    endDate: undefined,
    score: undefined,
    qualification: undefined,
    duration: '8 weeks',
    description:
      'Specialized training in advanced reconnaissance techniques, surveillance operations, and infiltration procedures.',
    prerequisite: 'FO-201, CQB-101',
  },
  {
    courseId: 'INT-250',
    name: 'Intelligence Analysis Fundamentals',
    category: 'SPECIALIZED',
    status: 'COMPLETED',
    instructor: 'Captain Emily Richardson',
    startDate: '2023-05-10',
    endDate: '2023-07-22',
    score: 91,
    qualification: 'Intelligence Analyst',
    duration: '12 weeks',
    description:
      'Intelligence gathering, data analysis, threat assessment, and operational intelligence preparation.',
    prerequisite: 'ROE-001',
  },
  {
    courseId: 'CYB-300',
    name: 'Cyber Security Operations',
    category: 'SPECIALIZED',
    status: 'NOT_STARTED',
    instructor: 'Dr. James Chen',
    startDate: '2028-10-15',
    endDate: undefined,
    score: undefined,
    qualification: undefined,
    duration: '14 weeks',
    description:
      'Network security, cyber threat assessment, system hardening, and digital defense operations. Scheduled to start.',
    prerequisite: 'INT-250',
  },
];

export const TRAINING_STATISTICS = {
  totalCourses: TRAINING_COURSES.length,
  completedCourses: TRAINING_COURSES.filter((c) => c.status === 'COMPLETED').length,
  inProgressCourses: TRAINING_COURSES.filter((c) => c.status === 'IN_PROGRESS').length,
  pendingCourses: TRAINING_COURSES.filter((c) => c.status === 'PENDING').length,
  averageScore:
    Math.round(
      TRAINING_COURSES.filter((c) => c.score)
        .reduce((sum, c) => sum + (c.score || 0), 0) / TRAINING_COURSES.filter((c) => c.score).length
    ) || 0,
};
