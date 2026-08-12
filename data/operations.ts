// LMS Operations Database
export type OperationStatus = 'ACTIVE' | 'PLANNING' | 'COMPLETED' | 'ARCHIVED' | 'CLASSIFIED' | 'CANCELLED' | 'ON_HOLD';
export type Classification = 'PUBLIC' | 'INTERNAL' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP SECRET';

export interface Operation {
  id: string;
  name: string;
  codename: string;
  status: OperationStatus;
  classification: Classification;
  startDate: string;
  endDate?: string;
  location: string;
  objective: string;
  components: string[];
  personnel: number;
  summary: string;
  outcome?: string;
  casualties?: number;
  success?: boolean;
}

export const OPERATIONS: Operation[] = [
  {
    id: 'OP-042',
    name: 'Dawnbreaker',
    codename: 'DAWNBREAKER',
    status: 'ACTIVE',
    classification: 'SECRET',
    startDate: '2028-08-01',
    location: 'Eastern Europe',
    objective: 'Counter-intelligence and field operations in disputed territory',
    components: ['Field Operations Group', 'Aviation Wing', 'Intelligence Division'],
    personnel: 87,
    summary: 'Ongoing counter-intelligence and tactical operations. Phase 2 of 4 currently underway.',
    outcome: undefined,
    casualties: 2,
    success: undefined,
  },
  {
    id: 'OP-039',
    name: 'Iron Veil',
    codename: 'IRON_VEIL',
    status: 'ON_HOLD',
    classification: 'TOP SECRET',
    startDate: '2028-07-28',
    location: 'Central Asia',
    objective: 'Strategic resource assessment and facility protection',
    components: ['Special Warfare', 'Operations Command'],
    personnel: 45,
    summary: 'Classified operation on standby. Phase 1 of 3. Full briefing available to TOP SECRET clearance only.',
    outcome: undefined,
    casualties: 0,
    success: undefined,
  },
  {
    id: 'OP-038',
    name: 'Ghost Tide',
    codename: 'GHOST_TIDE',
    status: 'COMPLETED',
    classification: 'CONFIDENTIAL',
    startDate: '2028-07-10',
    endDate: '2028-07-31',
    location: 'South Pacific',
    objective: 'Rescue and extraction operation',
    components: ['Aviation Wing', 'Field Operations Group', 'Medical Logistics'],
    personnel: 62,
    summary: 'Successful rescue and extraction operation. All objectives completed.',
    outcome: 'SUCCESSFUL',
    casualties: 0,
    success: true,
  },
  {
    id: 'OP-035',
    name: 'Thunderstrike',
    codename: 'THUNDERSTRIKE',
    status: 'COMPLETED',
    classification: 'SECRET',
    startDate: '2028-06-12',
    endDate: '2028-06-28',
    location: 'Middle East',
    objective: 'Counter-terrorism and facility interdiction',
    components: ['Field Operations Group', 'Special Warfare'],
    personnel: 78,
    summary: 'Tactical strike operation completed successfully with minimal casualties.',
    outcome: 'SUCCESSFUL',
    casualties: 3,
    success: true,
  },
  {
    id: 'OP-032',
    name: 'Compass Rose',
    codename: 'COMPASS_ROSE',
    status: 'ARCHIVED',
    classification: 'RESTRICTED',
    startDate: '2028-05-01',
    endDate: '2028-05-20',
    location: 'Africa',
    objective: 'Humanitarian logistics and peacekeeping support',
    components: ['Medical Logistics', '90th Air Mobility Rescue Group'],
    personnel: 55,
    summary: 'Humanitarian and logistics operation. Archived after successful completion.',
    outcome: 'SUCCESSFUL',
    casualties: 0,
    success: true,
  },
  {
    id: 'OP-028',
    name: 'Blackhawk',
    codename: 'BLACKHAWK',
    status: 'COMPLETED',
    classification: 'TOP SECRET',
    startDate: '2028-04-10',
    endDate: '2028-04-18',
    location: 'Classified',
    objective: '[REDACTED]',
    components: ['Special Warfare', 'Intelligence Division'],
    personnel: 32,
    summary: '[REDACTED] Clearance level TOP SECRET required for full briefing.',
    outcome: undefined,
    casualties: undefined,
    success: undefined,
  },
  {
    id: 'OP-025',
    name: 'Exodus',
    codename: 'EXODUS',
    status: 'ARCHIVED',
    classification: 'CONFIDENTIAL',
    startDate: '2028-03-15',
    endDate: '2028-03-31',
    location: 'Eastern Europe',
    objective: 'Personnel evacuation and supply delivery',
    components: ['Aviation Wing', 'Operations Command'],
    personnel: 42,
    summary: 'Supply and evacuation operation completed. All personnel safely withdrawn.',
    outcome: 'SUCCESSFUL',
    casualties: 0,
    success: true,
  },
];
