export const BRAND = {
  corporationName: 'Lazarus Corporation',
  corporationEstablished: '1963',
  corporationIndustry: 'Biomedical & Pharmaceuticals',
  subsidiaryName: 'Lazarus Military Solutions',
  subsidiaryEstablished: '2003',
  logoSrc: '/images/lazarus-logo.svg',
} as const;

export const CORPORATE_TIMELINE = [
  {
    year: '1963',
    title: 'Lazarus Corporation founded',
    summary: 'Lazarus Corporation is established as a biomedical and pharmaceutical company.',
  },
  {
    year: 'Vietnam War Era',
    title: 'U.S. Department of Defense contracts',
    summary: 'Biomedical and pharmaceutical contracts establish durable ties with the U.S. government.',
  },
  {
    year: '2003',
    title: 'Lazarus Military Solutions founded',
    summary: 'LMS is created as Lazarus Corporation\'s dedicated military and security subsidiary.',
  },
  {
    year: '2012–2023',
    title: 'World\'s largest PMC',
    summary: 'LMS grows into the world\'s dominant private military company through global expansion.',
  },
  {
    year: '2023',
    title: 'SPECWARCOM destroyed',
    summary: 'Destruction in Southern Iraq triggers catastrophic losses and corporate collapse.',
  },
  {
    year: '2023–2027',
    title: 'Reconstruction and decline',
    summary: 'Surviving Lazarus and LMS elements endure while the corporation rebuilds from decline.',
  },
  {
    year: '2027',
    title: 'Haider Powell takes control',
    summary: 'Powell assumes control of LMS and launches a major reorganization campaign.',
  },
  {
    year: '2027–2028',
    title: 'Re-armament and re-militarization',
    summary: 'Recruitment, procurement, logistics, and training systems are rebuilt around surviving command elements.',
  },
  {
    year: '2028',
    title: 'Recovered but weakened',
    summary: 'Lazarus Corporation resumes major operations in a weakened state while LMS becomes the world\'s second-largest PMC.',
  },
] as const;

export const LORE_EXPLANATION = {
  question: 'How did Lazarus Military Solutions survive? Weren\'t they destroyed in 2023?',
  answer:
    'LMS suffered catastrophic losses and was effectively dismantled as a functioning military organization. However, the company itself was never fully erased. Surviving personnel, infrastructure, records, equipment, subsidiaries, financial assets, and command elements remained. Following Haider Powell\'s takeover in 2027, LMS underwent an aggressive reconstruction campaign built on rapid recruitment and the rebuilding of its operational structure.',
  easterEgg: 'We spammed high school interns. Lmao.',
} as const;
