"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export function MotionReveal({ children, delay = 0, y = 26, className = "" }: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.24, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.78, delay, ease: [0.18, 0.82, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}
