'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlastDoorIntro } from '../components/BlastDoorIntro';
import { CorporateNav } from '../components/CorporateNav';
import { AudioManager } from '../components/AudioManager';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { DivisionsSection } from '../components/home/DivisionsSection';
import { OperationsSection } from '../components/home/OperationsSection';
import { CareersSection } from '../components/home/CareersSection';
import { NewsSection } from '../components/home/NewsSection';
import { ContactSection } from '../components/home/ContactSection';
import { FooterSection } from '../components/home/FooterSection';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  // prevent background scroll while intro is playing
  useEffect(() => {
    document.body.style.overflow = introComplete ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [introComplete]);

  return (
    <>
      {/* corporate website — always mounted, fades in when intro ends */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introComplete ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <CorporateNav />
        <main>
          <HeroSection />
          <AboutSection />
          <CapabilitiesSection />
          <DivisionsSection />
          <OperationsSection />
          <CareersSection />
          <NewsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </motion.div>

      {/* blast-door intro — fixed overlay */}
      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <BlastDoorIntro onComplete={() => setIntroComplete(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AudioManager />
    </>
  );
}
