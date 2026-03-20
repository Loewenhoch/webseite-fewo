"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { winterFeatureImages } from "@/lib/site-data";

export function WinterDivider() {
  const dividerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-56, 56]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1.08, 1.02]);

  return (
    <section aria-label="Winterstimmung Trenner" className="py-4 sm:py-6">
      <div
        ref={dividerRef}
        className="relative mx-auto h-[15rem] w-[90%] max-w-7xl overflow-hidden rounded-3xl border border-slate-300/20"
      >
        <motion.div style={{ y: yParallax, scale: scaleParallax }} className="absolute inset-0">
          <Image
            // Parallax-Trennbild aus den neu kuratierten Winter-Feature-Bildern.
            src={winterFeatureImages[1].src}
            alt={winterFeatureImages[1].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 90vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(4,10,20,0.72),rgba(5,12,25,0.3)_55%,rgba(4,8,16,0.66)_100%)]" />

        <div className="relative flex h-full items-end px-5 pb-6 sm:px-8 sm:pb-7">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-100/86 sm:text-sm">
            Winterstimmung in Obertauern
          </p>
        </div>
      </div>
    </section>
  );
}
