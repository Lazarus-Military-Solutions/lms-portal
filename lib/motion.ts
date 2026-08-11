"use client";

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

export const hoverLift = {
  whileHover: { y: -4, scale: 1.01 },
  transition: { duration: 0.2, ease: "easeOut" as const },
};
