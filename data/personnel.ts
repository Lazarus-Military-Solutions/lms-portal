// LMS Personnel Database
export type PersonnelStatus = 'ACTIVE' | 'DEPLOYED' | 'TRAINING' | 'LEAVE' | 'MEDICAL' | 'ARCHIVED';
export type PersonnelRank = 'Recruit' | 'Specialist' | 'Sergeant' | 'Lieutenant' | 'Captain' | 'Major' | 'Colonel' | 'General';
export type ClearanceLevel = 'INTERNAL' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP SECRET';

export interface PersonnelRecord {
  serviceNumber: string;
  firstName: string;
  lastName: string;
  callsign?: string;
  rank: PersonnelRank;
  component: string;
  position: string;
  status: PersonnelStatus;
  dateJoined: string;
  clearanceLevel: ClearanceLevel;
  qualifications: string[];
  deployments: number;
  operations: number;
  awards: string[];
  disciplinaryRecords: number;
}

export const PERSONNEL: PersonnelRecord[] = [
  {
    serviceNumber: 'LMS-001',
    firstName: 'James',
    lastName: 'Anderson',
    callsign: 'CIPHER',
    rank: 'Colonel',
    component: 'Operations Command',
    position: 'Chief Operations Officer',
    status: 'ACTIVE',
    dateJoined: '2019-03-15',
    clearanceLevel: 'TOP SECRET',
    qualifications: ['CQB', 'Leadership', 'Tactical Planning', 'Field Operations'],
    deployments: 12,
    operations: 47,
    awards: ['Distinguished Service Medal', 'Commendation Medal'],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-002',
    firstName: 'Maria',
    lastName: 'Carter',
    callsign: 'PHOENIX',
    rank: 'Major',
    component: 'Field Operations Group',
    position: 'Field Operations Commander',
    status: 'DEPLOYED',
    dateJoined: '2020-07-22',
    clearanceLevel: 'SECRET',
    qualifications: ['CQB', 'Field Tactics', 'Team Leadership', 'Weapons Training'],
    deployments: 8,
    operations: 34,
    awards: ['Commendation Medal'],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-003',
    firstName: 'Robert',
    lastName: 'Williams',
    callsign: 'STORM',
    rank: 'Captain',
    component: 'Aviation Wing',
    position: 'Pilot',
    status: 'ACTIVE',
    dateJoined: '2021-02-10',
    clearanceLevel: 'CONFIDENTIAL',
    qualifications: ['Fixed Wing', 'Rotary Wing', 'Combat Flying', 'Emergency Procedures'],
    deployments: 5,
    operations: 22,
    awards: [],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-004',
    firstName: 'Sarah',
    lastName: 'Torres',
    callsign: 'MEDIC',
    rank: 'Sergeant',
    component: 'Medical Logistics',
    position: 'Medical Officer',
    status: 'ACTIVE',
    dateJoined: '2020-11-03',
    clearanceLevel: 'RESTRICTED',
    qualifications: ['Trauma Medicine', 'Field Triage', 'Emergency Response'],
    deployments: 6,
    operations: 28,
    awards: [],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-005',
    firstName: 'David',
    lastName: 'Mitchell',
    callsign: 'HAMMER',
    rank: 'Sergeant',
    component: 'Field Operations Group',
    position: 'Team Lead',
    status: 'TRAINING',
    dateJoined: '2022-05-18',
    clearanceLevel: 'INTERNAL',
    qualifications: ['CQB', 'Weapons Training', 'Team Coordination'],
    deployments: 3,
    operations: 12,
    awards: [],
    disciplinaryRecords: 1,
  },
  {
    serviceNumber: 'LMS-006',
    firstName: 'Emily',
    lastName: 'Richardson',
    callsign: 'INTEL',
    rank: 'Captain',
    component: 'Intelligence Division',
    position: 'Intelligence Analyst',
    status: 'ACTIVE',
    dateJoined: '2019-09-12',
    clearanceLevel: 'TOP SECRET',
    qualifications: ['Data Analysis', 'Threat Assessment', 'Network Security', 'Cryptography'],
    deployments: 2,
    operations: 18,
    awards: ['Commendation Medal'],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-007',
    firstName: 'Marcus',
    lastName: 'Bennett',
    callsign: 'RECON',
    rank: 'Specialist',
    component: 'Special Warfare',
    position: 'Scout',
    status: 'DEPLOYED',
    dateJoined: '2021-08-25',
    clearanceLevel: 'CONFIDENTIAL',
    qualifications: ['Surveillance', 'Reconnaissance', 'CQB', 'Evasion'],
    deployments: 4,
    operations: 16,
    awards: [],
    disciplinaryRecords: 0,
  },
  {
    serviceNumber: 'LMS-008',
    firstName: 'Jessica',
    lastName: 'Santos',
    callsign: 'GUARDIAN',
    rank: 'Lieutenant',
    component: 'Medical Logistics',
    position: 'Medical Commander',
    status: 'ACTIVE',
    dateJoined: '2018-04-06',
    clearanceLevel: 'SECRET',
    qualifications: ['Trauma Surgery', 'Medical Leadership', 'Emergency Response'],
    deployments: 7,
    operations: 31,
    awards: ['Distinguished Service Medal'],
    disciplinaryRecords: 0,
  },
];
