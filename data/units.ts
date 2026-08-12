// LMS Units/Components Database
export type ComponentStatus = 'OPERATIONAL' | 'STANDBY' | 'MAINTENANCE' | 'TRAINING' | 'INACTIVE';

export interface LMSComponent {
  id: string;
  name: string;
  abbreviation: string;
  status: ComponentStatus;
  established: string;
  headquarters: string;
  commander: string;
  personnel: number;
  description: string;
  focus: string[];
  recentOperations: string[];
}

export const LMS_COMPONENTS: LMSComponent[] = [
  {
    id: 'FOG',
    name: 'Field Operations Group',
    abbreviation: 'FOG',
    status: 'OPERATIONAL',
    established: '2005-03-20',
    headquarters: 'Primary Base',
    commander: 'Major Maria Carter (PHOENIX)',
    personnel: 287,
    description:
      'Primary tactical and field operations unit. Handles ground-based combat operations, security operations, and tactical training.',
    focus: ['Combat Operations', 'Tactical Training', 'Security Operations', 'Field Command'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-038 Ghost Tide', 'OP-035 Thunderstrike'],
  },
  {
    id: 'AW',
    name: 'Aviation Wing',
    abbreviation: 'AW',
    status: 'OPERATIONAL',
    established: '2008-06-15',
    headquarters: 'Primary Base',
    commander: 'Captain Robert Williams (STORM)',
    personnel: 156,
    description:
      'Aviation support, transport, reconnaissance, and combat aviation. Includes helicopter and fixed-wing aircraft operations.',
    focus: ['Combat Aviation', 'Transport', 'Reconnaissance', 'Air Support'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-038 Ghost Tide', 'OP-025 Exodus'],
  },
  {
    id: 'OC',
    name: 'Operations Command',
    abbreviation: 'OC',
    status: 'OPERATIONAL',
    established: '2003-01-10',
    headquarters: 'Primary Base',
    commander: 'Colonel James Anderson (CIPHER)',
    personnel: 95,
    description:
      'Central operational coordination and strategic mission planning. Oversees and coordinates all LMS field operations globally.',
    focus: ['Strategic Planning', 'Mission Coordination', 'Intelligence Analysis', 'Logistics Coordination'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-025 Exodus'],
  },
  {
    id: 'ML',
    name: 'Medical Logistics',
    abbreviation: 'MEDLOG',
    status: 'OPERATIONAL',
    established: '2006-09-12',
    headquarters: 'Primary Base',
    commander: 'Lieutenant Jessica Santos (GUARDIAN)',
    personnel: 124,
    description:
      'Medical support, field triage, trauma care, and logistics coordination. Integrated with 90th Air Mobility Rescue Group.',
    focus: ['Medical Support', 'Field Triage', 'Logistics', 'Emergency Response'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-038 Ghost Tide', 'OP-032 Compass Rose'],
  },
  {
    id: 'AMR',
    name: '90th Air Mobility Rescue Group',
    abbreviation: '90th AMRG',
    status: 'OPERATIONAL',
    established: '2010-04-22',
    headquarters: 'Primary Base',
    commander: 'Major Richard Hayes',
    personnel: 87,
    description:
      'Specialized aviation-based rescue and medical evacuation unit. Operates in coordination with Aviation Wing and Medical Logistics.',
    focus: ['Medical Evacuation', 'Rescue Operations', 'Air Transport', 'Emergency Response'],
    recentOperations: ['OP-032 Compass Rose', 'OP-038 Ghost Tide'],
  },
  {
    id: 'SW',
    name: 'Special Warfare',
    abbreviation: 'SW',
    status: 'OPERATIONAL',
    established: '2009-11-08',
    headquarters: 'Primary Base',
    commander: 'Captain Edward Foster',
    personnel: 68,
    description:
      'Specialized tactical operations. Includes reconnaissance, direct action, and high-risk mission specialists.',
    focus: ['Reconnaissance', 'Direct Action', 'Special Operations', 'Infiltration'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-039 Iron Veil', 'OP-028 Blackhawk'],
  },
  {
    id: 'ID',
    name: 'Intelligence Division',
    abbreviation: 'ID',
    status: 'OPERATIONAL',
    established: '2007-02-01',
    headquarters: 'Primary Base',
    commander: 'Captain Emily Richardson (INTEL)',
    personnel: 73,
    description:
      'Intelligence gathering, analysis, and cyber operations. Provides tactical and strategic intelligence support.',
    focus: ['Intelligence Analysis', 'Cyber Operations', 'Threat Assessment', 'Data Security'],
    recentOperations: ['OP-042 Dawnbreaker', 'OP-028 Blackhawk'],
  },
  {
    id: 'HR',
    name: 'Human Resources Command',
    abbreviation: 'HR',
    status: 'OPERATIONAL',
    established: '2004-05-17',
    headquarters: 'Primary Base',
    commander: 'Colonel Thomas Wright',
    personnel: 45,
    description:
      'Personnel management, recruitment, training coordination, and administrative operations for all LMS components.',
    focus: ['Personnel Management', 'Recruitment', 'Training Coordination', 'Record Management'],
    recentOperations: [],
  },
];
