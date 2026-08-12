'use client';

import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

export function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [0.97, 1.05]);
  const bannerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-1, 1], [3.5, -3.5]), { stiffness: 120, damping: 20, mass: 0.5 });
  const tiltY = useSpring(useTransform(mouseX, [-1, 1], [-4, 4]), { stiffness: 120, damping: 20, mass: 0.5 });
  const driftX = useSpring(useTransform(mouseX, [-1, 1], [-12, 12]), { stiffness: 90, damping: 22, mass: 0.6 });
  const driftY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), { stiffness: 90, damping: 22, mass: 0.6 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(px);
    mouseY.set(py);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ background: '#09090b' }}
    >
      {/* hero banner */}
      <div className="pointer-events-none absolute inset-0 perspective-[1300px]">
        <motion.div
          className="absolute inset-[-1%] transform-3d"
          initial={{ scale: 1.03, opacity: 0 }}
          animate={{ scale: 0.99, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.19, 1, 0.22, 1] }}
          style={{
            y: driftY,
            x: driftX,
            rotateX: tiltX,
            rotateY: tiltY,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              y: bannerY,
              scale: bannerScale,
              opacity: bannerOpacity,
              backgroundImage: "url('/images/lazarus-hero-banner.png')",
              backgroundPosition: 'center 18%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: 'translateZ(14px)',
            }}
          />

          <motion.div
            className="absolute inset-0"
            style={{
              y: bannerY,
              opacity: 0.25,
              backgroundImage: "url('/images/lazarus-hero-banner.png')",
              backgroundPosition: 'center 24%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(2px) saturate(1.1)',
              transform: 'translateZ(2px)',
            }}
          />
        </motion.div>
      </div>

      {/* dark wash for text readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(5,7,10,0.44) 0%, rgba(5,7,10,0.12) 42%, rgba(5,7,10,0.34) 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,7,10,0.24) 0%, rgba(5,7,10,0.06) 40%, rgba(5,7,10,0.54) 78%, rgba(247,246,243,0.95) 100%)',
        }}
      />

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(9,9,11,0) 0%, rgba(9,9,11,0.7) 100%)',
        }}
      />

      {/* accent gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 15% 40%, rgba(85,107,47,0.2) 0%, transparent 70%)',
        }}
      />

      {/* corner coordinates — decorative */}
      <span className="pointer-events-none absolute top-20 left-8 font-mono text-[9px] tracking-widest text-white/10 select-none">
        32°18′N 35°46′E
      </span>
      <span className="pointer-events-none absolute top-20 right-8 font-mono text-[9px] tracking-widest text-white/10 select-none">
        NODE 04 // SECTOR A
      </span>

      <motion.div
        className="absolute top-28 left-6 z-10 flex items-center gap-4 md:left-10 lg:left-12"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="h-px w-10 bg-[#556B2F]" />
        <span
          className="digital-intro digital-intro-run font-mono text-[9px] tracking-[0.45em] text-[#7a9340] uppercase"
          data-text="Lazarus Corporation · Established 1963 · LMS Subsidiary Established 2003"
        >
          Lazarus Corporation · Established 1963 · LMS Subsidiary Established 2003
        </span>
      </motion.div>

      {/* main content */}
      <div className="relative z-10 mt-auto mb-18 ml-6 w-[min(36rem,84vw)] md:mb-14 md:ml-10 lg:ml-12">

        {/* headline */}
        <motion.h1
          className="digital-intro digital-intro-run mb-3 font-black leading-[0.92] tracking-tight text-white"
          style={{ fontSize: 'clamp(22px, 4.4vw, 58px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          America&apos;s Top
          <br />
          Defense Provider.
        </motion.h1>

        {/* divider + tagline */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <div className="mb-3 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" style={{ maxWidth: '260px' }} />
          </div>
          <p
            className="digital-intro digital-intro-run font-semibold uppercase tracking-[0.22em] text-white/48"
            style={{ fontSize: 'clamp(9px, 1vw, 12px)' }}
          >
            Lazarus Military Solutions
          </p>
        </motion.div>

        {/* body */}
        <motion.p
          className="digital-intro digital-intro-run mb-7 max-w-120 text-[11px] leading-relaxed text-white/44 md:text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          Born from a biomedical and pharmaceutical corporation. Forged into a militarized subsidiary during the Second Cold War. A global security enterprise built for a world where the line between corporate power and military force no longer exists.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="digital-intro digital-intro-run flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            href="/#about"
            className="group inline-flex items-center gap-3 bg-white px-6 py-3 text-[10px] font-semibold tracking-[0.2em] text-black uppercase transition-all duration-200 hover:bg-white/90"
            style={{ color: '#000' }}
          >
            EXPLORE LMS
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="/#capabilities"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            OUR CAPABILITIES
          </a>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute right-10 bottom-16 z-10 h-34 w-34 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(2px)',
        }}
      />

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.4, duration: 0.6 }, y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut', delay: 1.8 } }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[7px] tracking-[0.4em] text-white/20 uppercase">Scroll</span>
          <div className="h-8 w-px bg-linear-to-b from-white/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
