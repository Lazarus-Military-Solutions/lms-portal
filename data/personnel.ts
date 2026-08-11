export type Rank =
  | 'Recruit' | 'Private' | 'Specialist' | 'Corporal'
  | 'Sergeant' | 'Staff Sergeant' | 'Master Sergeant'
  | 'Lieutenant' | 'Captain' | 'Major' | 'Lt. Colonel' | 'Colonel';

export type PersonnelStatus = 'ACTIVE' | 'DEPLOYED' | 'LEAVE' | 'TRAINING' | 'INACTIVE' | 'DECEASED';

export type ClassificationLevel =
  | 'PUBLIC' | 'INTERNAL' | 'RESTRICTED' | 'CONFIDENTIAL' | 'CLASSIFIED' | 'TOP SECRET';

export interface PersonnelRecord {
  serviceNumber: string;
  name: string;
  callsign: string;
  rank: Rank;
  component: string;
  position: string;
  status: PersonnelStatus;
  dateJoined: string;
  qualifications: string[];
  deployments: string[];
  operations: string[];
  awards: string[];
  disciplinaryRecord: string[];
  classification: ClassificationLevel;
}

export const personnel: PersonnelRecord[] = [
  {
    serviceNumber: 'LMS-00001',
    name: 'Powell, Haider A.',
    callsign: 'SHEPHERD',
    rank: 'Colonel',
    component: 'Operations Command',
    position: 'Chief Executive Officer',
    status: 'ACTIVE',
    dateJoined: '2019-03-12',
    qualifications: ['Special Operations', 'Executive Leadership', 'Strategic Planning', 'Crisis Management', 'Joint Operations'],
    deployments: ['South Iraq 2022', 'Central Africa 2020', 'Eastern Europe 2021'],
    operations: ['OPERATION LONG RUN', 'OPERATION IRON VEIL', 'OPERATION DAWNBREAKER'],
    awards: ['Distinguished Service Medal', 'Combat Action Badge', 'Meritorious Service Medal', 'Executive Leadership Commendation'],
    disciplinaryRecord: [],
    classification: 'RESTRICTED',
  },
  {
    serviceNumber: 'LMS-00047',
    name: 'Torres, Selena M.',
    callsign: 'VIPER',
    rank: 'Major',
    component: 'Field Operations Group',
    position: 'Operations Team Leader',
    status: 'DEPLOYED',
    dateJoined: '2025-01-08',
    qualifications: ['CQB', 'Field Operations', 'Leadership', 'SERE', 'Combat Driving'],
    deployments: ['Eastern Europe 2027', 'North Africa 2026'],
    operations: ['OPERATION DAWNBREAKER', 'OPERATION GHOST TIDE', 'OPERATION IRON VEIL'],
    awards: ['Field Operations Commendation', 'Combat Action Badge'],
    disciplinaryRecord: [],
    classification: 'INTERNAL',
  },
  {
    serviceNumber: 'LMS-00112',
    name: 'Nakamura, Kenji R.',
    callsign: 'RAPTOR',
    rank: 'Captain',
    component: 'Aviation Wing',
    position: 'Lead Pilot',
    status: 'ACTIVE',
    dateJoined: '2025-06-14',
    qualifications: ['Combat Aviation', 'Search & Rescue', 'Rotary Wing', 'Fixed Wing', 'Night Operations'],
    deployments: ['Central Asia 2026', 'Eastern Europe 2027'],
    operations: ['OPERATION IRON VEIL', 'OPERATION SWIFT EAGLE'],
    awards: ['Aviation Service Medal'],
    disciplinaryRecord: [],
    classification: 'INTERNAL',
  },
  {
    serviceNumber: 'LMS-00198',
    name: 'Okafor, Chidinma L.',
    callsign: 'MEDIC',
    rank: 'Lieutenant',
    component: 'Medical Logistics',
    position: 'Senior Medical Officer',
    status: 'ACTIVE',
    dateJoined: '2026-02-20',
    qualifications: ['Combat Medicine', 'Trauma Surgery', 'Medical Logistics', 'Triage Protocol', 'Pharmaceutical Management'],
    deployments: ['North Africa 2027'],
    operations: ['OPERATION GHOST TIDE'],
    awards: ['Medical Service Commendation'],
    disciplinaryRecord: [],
    classification: 'INTERNAL',
  },
  {
    serviceNumber: 'LMS-00341',
    name: 'Reeves, Marcus D.',
    callsign: 'SHADOW',
    rank: 'Sergeant',
    component: 'Special Warfare',
    position: 'Reconnaissance Specialist',
    status: 'ACTIVE',
    dateJoined: '2025-11-03',
    qualifications: ['Special Reconnaissance', 'CQB', 'HALO/HAHO', 'SERE', 'Counter-Intelligence', 'Advanced Marksmanship'],
    deployments: ['Eastern Europe 2027'],
    operations: ['OPERATION DAWNBREAKER'],
    awards: [],
    disciplinaryRecord: ['Minor insubordination – 2026-08-14. Resolved with formal reprimand.'],
    classification: 'RESTRICTED',
  },
  {
    serviceNumber: 'LMS-00512',
    name: 'Alvarez, Diego C.',
    callsign: 'MULE',
    rank: 'Specialist',
    component: 'Medical Logistics',
    position: 'Logistics Coordinator',
    status: 'TRAINING',
    dateJoined: '2027-04-01',
    qualifications: ['Logistics Management', 'Medical Supply Chain'],
    deployments: [],
    operations: [],
    awards: [],
    disciplinaryRecord: [],
    classification: 'PUBLIC',
  },
  {
    serviceNumber: 'LMS-00603',
    name: 'Zhao, Wei',
    callsign: 'ORACLE',
    rank: 'Staff Sergeant',
    component: 'Operations Command',
    position: 'Intelligence Analyst',
    status: 'ACTIVE',
    dateJoined: '2026-07-22',
    qualifications: ['Intelligence Analysis', 'SIGINT', 'Database Operations', 'Threat Assessment', 'Geospatial Analysis'],
    deployments: ['Eastern Europe 2027'],
    operations: ['OPERATION IRON VEIL', 'OPERATION DAWNBREAKER'],
    awards: ['Intelligence Service Medal'],
    disciplinaryRecord: [],
    classification: 'CLASSIFIED',
  },
  {
    serviceNumber: 'LMS-00718',
    name: 'Kowalski, Anna V.',
    callsign: 'FROST',
    rank: 'Staff Sergeant',
    component: 'Field Operations Group',
    position: 'Breacher / Demolitions',
    status: 'LEAVE',
    dateJoined: '2025-09-15',
    qualifications: ['Demolitions', 'Breaching', 'CQB', 'EOD Fundamentals'],
    deployments: ['North Africa 2026', 'Eastern Europe 2027'],
    operations: ['OPERATION IRON VEIL', 'OPERATION DAWNBREAKER'],
    awards: ['Combat Action Badge'],
    disciplinaryRecord: [],
    classification: 'INTERNAL',
  },
];

export const totalPersonnelCount = 1618;
export const deployedCount = 341;
export const trainingCount = 214;
