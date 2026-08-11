export type OperationStatus = 'ACTIVE' | 'COMPLETED' | 'ARCHIVED' | 'CLASSIFIED' | 'CANCELLED';

export type ClassificationLevel =
  | 'PUBLIC' | 'INTERNAL' | 'RESTRICTED' | 'CONFIDENTIAL' | 'CLASSIFIED' | 'TOP SECRET';

export interface Operation {
  id: string;
  name: string;
  status: OperationStatus;
  date: string;
  endDate?: string;
  location: string;
  objective: string;
  participatingComponents: string[];
  summary: string;
  casualties: { lms: number; hostile: number; civilian: number };
  outcome: string;
  classification: ClassificationLevel;
}

export const operations: Operation[] = [
  {
    id: 'OP-2022-001',
    name: 'LONG RUN',
    status: 'ARCHIVED',
    date: '2022-03-14',
    endDate: '2022-09-02',
    location: 'South Iraq',
    objective: 'Secure strategic oil infrastructure and support allied ground forces in southwestern sectors.',
    participatingComponents: ['Field Operations Group', 'Aviation Wing', 'Medical Logistics', 'Operations Command'],
    summary: 'A large-scale multi-week operation in South Iraq. LMS forces engaged hostile elements across multiple sectors. Despite initial objectives being partially met, the operation resulted in catastrophic personnel losses and led to a fundamental restructuring of the organization. Designated the defining event of the LMS institutional collapse of 2023.',
    casualties: { lms: 247, hostile: 812, civilian: 31 },
    outcome: 'PARTIAL SUCCESS — Severe personnel losses. Organizational collapse of primary force structure. Long-term strategic setback.',
    classification: 'CLASSIFIED',
  },
  {
    id: 'OP-2027-004',
    name: 'DAWNBREAKER',
    status: 'ACTIVE',
    date: '2027-11-01',
    location: 'Eastern Europe',
    objective: 'Provide security and operational support to allied infrastructure in a contested zone. Prevent hostile encroachment on critical logistics nodes.',
    participatingComponents: ['Field Operations Group', 'Aviation Wing', 'Special Warfare', 'Operations Command'],
    summary: 'Ongoing operation providing security to key infrastructure nodes in a contested region. LMS elements are currently engaged in sustained patrol, security, and area denial operations. Aviation Wing is providing close air support and rapid mobility. Special Warfare elements conducting reconnaissance deep in contested areas.',
    casualties: { lms: 12, hostile: 89, civilian: 0 },
    outcome: 'ONGOING',
    classification: 'RESTRICTED',
  },
  {
    id: 'OP-2027-002',
    name: 'IRON VEIL',
    status: 'COMPLETED',
    date: '2027-04-17',
    endDate: '2027-07-30',
    location: 'North Africa',
    objective: 'Disruption of hostile logistics network and protection of civilian aid corridors.',
    participatingComponents: ['Field Operations Group', 'Special Warfare', 'Operations Command'],
    summary: 'Targeted disruption operation against hostile supply lines. LMS Special Warfare elements conducted precision direct action strikes while Field Operations Group secured corridors for civilian aid distribution. Intelligence assets provided continuous support throughout.',
    casualties: { lms: 3, hostile: 156, civilian: 0 },
    outcome: 'SUCCESS — Logistics network disrupted. Aid corridors secured for 90-day window.',
    classification: 'CONFIDENTIAL',
  },
  {
    id: 'OP-2026-008',
    name: 'GHOST TIDE',
    status: 'COMPLETED',
    date: '2026-08-10',
    endDate: '2026-10-15',
    location: 'North Africa',
    objective: 'Extraction of allied personnel from hostile-controlled territory.',
    participatingComponents: ['Aviation Wing', 'Medical Logistics', 'Field Operations Group'],
    summary: 'Personnel extraction operation. Aviation Wing provided primary extraction capability via rotary-wing assets. FOG elements provided ground security for extraction LZ. MEDLOG established a forward surgical team for processing evacuated personnel. 34 allied nationals extracted across 7 sorties.',
    casualties: { lms: 1, hostile: 23, civilian: 0 },
    outcome: 'SUCCESS — All 34 personnel extracted. Minimal LMS losses.',
    classification: 'CONFIDENTIAL',
  },
  {
    id: 'OP-2026-003',
    name: 'SWIFT EAGLE',
    status: 'COMPLETED',
    date: '2026-03-05',
    endDate: '2026-04-12',
    location: 'Central Asia',
    objective: 'Establish and maintain forward air base for LMS Aviation Wing assets.',
    participatingComponents: ['Aviation Wing', 'Medical Logistics'],
    summary: 'Establishment of a forward operating base for Aviation Wing operations in Central Asia. Operation completed without significant hostile contact. FOB became operational on schedule and remained active through 2027.',
    casualties: { lms: 0, hostile: 0, civilian: 0 },
    outcome: 'SUCCESS — Forward base established and fully operational.',
    classification: 'INTERNAL',
  },
  {
    id: 'OP-2025-011',
    name: 'IRON PHOENIX',
    status: 'COMPLETED',
    date: '2025-08-20',
    endDate: '2025-11-30',
    location: 'West Africa',
    objective: 'Rebuilding LMS operational presence and restoring field credibility post-Long Run.',
    participatingComponents: ['Field Operations Group', 'Operations Command'],
    summary: 'The first large-scale operation following the reorganization under CEO Powell. Primarily served as a proving ground for rebuilt LMS forces. Limited hostilities. Primarily advisory and security operations for client government.',
    casualties: { lms: 2, hostile: 14, civilian: 0 },
    outcome: 'SUCCESS — Objectives met. Confidence in rebuilt forces validated.',
    classification: 'INTERNAL',
  },
];
