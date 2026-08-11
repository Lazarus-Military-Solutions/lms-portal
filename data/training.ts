export type TrainingStatus = 'COMPLETED' | 'IN PROGRESS' | 'SCHEDULED' | 'FAILED' | 'WAIVED';

export interface TrainingCourse {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  enrolled: number;
  completionRate: number;
}

export interface TrainingRecord {
  id: string;
  course: string;
  category: string;
  status: TrainingStatus;
  instructor: string;
  startDate: string;
  endDate?: string;
  score?: number;
  qualification: string;
  location: string;
  classification: string;
}

export const trainingCourses: TrainingCourse[] = [
  {
    id: 'TRN-BMT-001',
    name: 'Basic Military Training',
    category: 'BMT',
    duration: '12 weeks',
    description: 'Foundation training covering basic military skills, physical conditioning, LMS discipline standards, and doctrine. Mandatory for all recruits.',
    enrolled: 142,
    completionRate: 74,
  },
  {
    id: 'TRN-RO-001',
    name: 'Recruit Orientation Program',
    category: 'RECRUIT ORIENTATION',
    duration: '2 weeks',
    description: 'Introduction to LMS culture, organizational structure, regulations, and the database portal system. Prerequisite to BMT.',
    enrolled: 178,
    completionRate: 96,
  },
  {
    id: 'TRN-MED-001',
    name: 'Combat Medicine Basics',
    category: 'MEDICAL TRAINING',
    duration: '4 weeks',
    description: 'Basic trauma care, hemorrhage control, and combat medicine protocols. Mandatory for all field-assigned personnel.',
    enrolled: 89,
    completionRate: 88,
  },
  {
    id: 'TRN-CQB-001',
    name: 'Close Quarters Battle',
    category: 'CQB',
    duration: '6 weeks',
    description: 'Advanced CQB techniques, room clearing, shoot/no-shoot decision-making, and close-range weapons proficiency.',
    enrolled: 56,
    completionRate: 68,
  },
  {
    id: 'TRN-AV-001',
    name: 'Aviation Orientation',
    category: 'AVIATION',
    duration: '3 weeks',
    description: 'Aviation safety, crew coordination, and air operations fundamentals for ground crew and support personnel.',
    enrolled: 31,
    completionRate: 92,
  },
  {
    id: 'TRN-FO-001',
    name: 'Field Operations Course',
    category: 'FIELD OPERATIONS',
    duration: '8 weeks',
    description: 'Advanced field operations including land navigation, terrain analysis, patrol, survival, and operational planning.',
    enrolled: 73,
    completionRate: 71,
  },
  {
    id: 'TRN-OFF-001',
    name: 'Officer Training Program',
    category: 'OFFICER TRAINING',
    duration: '16 weeks',
    description: 'Leadership, command authority, advanced tactical planning, and administrative management for officer candidates.',
    enrolled: 22,
    completionRate: 59,
  },
  {
    id: 'TRN-SPEC-001',
    name: 'Special Operations Selection',
    category: 'SPECIALIZED QUALIFICATIONS',
    duration: '4 weeks',
    description: 'Grueling selection course for LMS Special Warfare. Tests physical and psychological limits. Historical pass rate: 31%.',
    enrolled: 16,
    completionRate: 31,
  },
];

export const recentRecords: TrainingRecord[] = [
  {
    id: 'REC-2028-001',
    course: 'Basic Military Training',
    category: 'BMT',
    status: 'COMPLETED',
    instructor: 'MSGT Harmon, D.',
    startDate: '2028-01-06',
    endDate: '2028-03-29',
    score: 84,
    qualification: 'LMS Basic Combat Qualification',
    location: 'LMS Training Center Alpha',
    classification: 'INTERNAL',
  },
  {
    id: 'REC-2028-002',
    course: 'Field Operations Course',
    category: 'FIELD OPERATIONS',
    status: 'IN PROGRESS',
    instructor: 'CPT Brooks, A.',
    startDate: '2028-07-01',
    qualification: 'LMS Field Operator Qualification',
    location: 'LMS Training Center Alpha',
    classification: 'INTERNAL',
  },
  {
    id: 'REC-2028-003',
    course: 'Close Quarters Battle',
    category: 'CQB',
    status: 'COMPLETED',
    instructor: 'SSG Reeves, M. (SHADOW)',
    startDate: '2028-04-08',
    endDate: '2028-05-17',
    score: 91,
    qualification: 'CQB Operator Certification',
    location: 'LMS Training Center Bravo',
    classification: 'INTERNAL',
  },
  {
    id: 'REC-2028-004',
    course: 'Officer Training Program',
    category: 'OFFICER TRAINING',
    status: 'IN PROGRESS',
    instructor: 'MAJ Chen, L.',
    startDate: '2028-05-01',
    qualification: 'LMS Officer Commission',
    location: 'LMS Command Training Facility',
    classification: 'INTERNAL',
  },
  {
    id: 'REC-2028-005',
    course: 'Special Operations Selection',
    category: 'SPECIALIZED QUALIFICATIONS',
    status: 'SCHEDULED',
    instructor: 'CLASSIFIED',
    startDate: '2028-09-15',
    qualification: 'Special Warfare Qualification',
    location: 'CLASSIFIED',
    classification: 'RESTRICTED',
  },
];
