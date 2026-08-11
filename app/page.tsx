'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BlastDoorIntro } from '../components/BlastDoorIntro';
import { DatabaseDashboard } from '../components/DatabaseDashboard';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative h-screen overflow-hidden">
      {/* dashboard always mounted so it's visible as doors open */}
      <DatabaseDashboard />

      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            className="absolute inset-0 z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlastDoorIntro onComplete={() => setIntroComplete(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
