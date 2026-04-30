"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-[linear-gradient(90deg,#f8fbff,#88c8e8,#f5d27c)] shadow-[0_0_22px_rgba(136,200,232,0.6)]"
      style={{ scaleX }}
    />
  );
}
