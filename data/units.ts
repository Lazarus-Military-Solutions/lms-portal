export type UnitStatus = 'ACTIVE' | 'REBUILDING' | 'INACTIVE' | 'CLASSIFIED';

export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
  type: string;
  status: UnitStatus;
  strength: number;
  location: string;
  commander: string;
  description: string;
  capabilities: string[];
  subordinateUnits?: string[];
  classification: string;
  established: string;
}

export const units: Unit[] = [
  {
    id: 'FOG',
    name: 'Field Operations Group',
    abbreviation: 'FOG',
    type: 'Ground Operations',
    status: 'ACTIVE',
    strength: 847,
    location: 'Multiple Active AOs',
    commander: 'Major Torres, S. (VIPER)',
    description: 'The primary ground combat and field operations element of Lazarus Military Solutions. FOG provides the main force projection capability, conducting direct action, security operations, area denial, and field missions globally. Rebuilt from near-total loss following Operation Long Run.',
    capabilities: ['Direct Action', 'Security Operations', 'Area Denial', 'Reconnaissance', 'Personnel Recovery', 'Cordon & Search', 'Convoy Escort'],
    subordinateUnits: ['1st FOG Battalion', '2nd FOG Battalion', '3rd FOG Battalion (Rebuilding)'],
    classification: 'INTERNAL',
    established: '2015-04-10',
  },
  {
    id: 'AW',
    name: 'Aviation Wing',
    abbreviation: 'AW',
    type: 'Aviation',
    status: 'ACTIVE',
    strength: 214,
    location: 'LMS Air Station Alpha / Eastern Europe FOB',
    commander: 'Captain Nakamura, K. (RAPTOR)',
    description: 'LMS Aviation Wing provides air transport, close air support, aerial reconnaissance, and search & rescue operations. Currently operating a mixed fleet of rotary and fixed-wing assets acquired during the post-Long Run rearmament. Includes the specialized 90th Air Mobility Rescue Group.',
    capabilities: ['Air Transport', 'Close Air Support', 'Aerial Reconnaissance', 'MEDEVAC', 'Combat Search & Rescue', 'Airdrop Logistics'],
    subordinateUnits: ['1st Aviation Squadron', '90th Air Mobility Rescue Group'],
    classification: 'INTERNAL',
    established: '2016-09-01',
  },
  {
    id: 'OPCMD',
    name: 'Operations Command',
    abbreviation: 'OPCMD',
    type: 'Command & Control',
    status: 'ACTIVE',
    strength: 156,
    location: 'LMS Primary Operations Center',
    commander: 'Colonel Powell, H.A. (SHEPHERD)',
    description: 'The command, control, and coordination element of LMS. OPCMD provides strategic oversight, mission planning, intelligence analysis, and operational coordination for all LMS components worldwide. Serves as the nerve center of all LMS activities.',
    capabilities: ['Strategic Planning', 'Mission Coordination', 'Intelligence Analysis', 'Signals Intelligence', 'Communications', 'Logistics Oversight', 'Personnel Management'],
    classification: 'RESTRICTED',
    established: '2015-01-01',
  },
  {
    id: 'MEDLOG',
    name: 'Medical Logistics',
    abbreviation: 'MEDLOG',
    type: 'Medical & Logistics',
    status: 'ACTIVE',
    strength: 312,
    location: 'Multiple Forward Locations',
    commander: 'Lieutenant Okafor, C. (MEDIC)',
    description: 'MEDLOG provides comprehensive medical support and logistical sustainment to all LMS elements worldwide. Includes forward surgical teams, trauma care capability, casualty evacuation, and full supply chain management for medical and operational materiel.',
    capabilities: ['Combat Trauma Care', 'Forward Surgical Teams', 'Medical Supply Chain', 'CASEVAC', 'Pharmaceutical Management', 'Operational Logistics Support'],
    subordinateUnits: ['Alpha Medical Team', 'Bravo Medical Team', 'Charlie Medical Team', 'Logistics Section'],
    classification: 'INTERNAL',
    established: '2016-02-14',
  },
  {
    id: 'SW',
    name: 'Special Warfare',
    abbreviation: 'SW',
    type: 'Special Operations',
    status: 'ACTIVE',
    strength: 89,
    location: 'CLASSIFIED',
    commander: 'CLASSIFIED',
    description: 'LMS Special Warfare provides precision direct action, special reconnaissance, counter-intelligence, and specialized operations capabilities beyond FOG capability. Personnel are selected from top-performing LMS elements across all components. Operations require OPCMD authorization.',
    capabilities: ['Direct Action', 'Special Reconnaissance', 'Counter-Intelligence', 'HALO/HAHO', 'Advanced CQB', 'Sensitive Site Exploitation'],
    classification: 'CLASSIFIED',
    established: '2018-06-01',
  },
  {
    id: '90AMRG',
    name: '90th Air Mobility Rescue Group',
    abbreviation: '90th AMRG',
    type: 'Aviation / Rescue',
    status: 'REBUILDING',
    strength: 47,
    location: 'LMS Air Station Alpha',
    commander: 'VACANT — Pending appointment',
    description: 'The 90th AMRG provides specialized air mobility and personnel rescue capabilities under the Aviation Wing. Suffered significant losses during Operation Long Run in 2022. Currently undergoing rebuilding and reequipping. Expected full operational capability by early 2029.',
    capabilities: ['Personnel Rescue', 'Aeromedical Evacuation', 'Combat SAR', 'Air Mobility Support', 'Overwater Rescue'],
    classification: 'INTERNAL',
    established: '2017-11-22',
  },
];
