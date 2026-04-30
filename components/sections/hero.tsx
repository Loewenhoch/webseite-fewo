"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mountain, Car, Building2 } from "lucide-react";
import { heroData } from "@/lib/site-data";
import { SnowParticles } from "@/components/ui/snow-particles";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -14]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.images.length);
    }, 6800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative isolate min-h-[100svh] overflow-hidden border-b border-white/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroData.images[activeIndex].src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroData.images[activeIndex].src}
            alt={heroData.images[activeIndex].alt}
            fill
            priority
            sizes="100vw"
            className="hero-zoom object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,24,42,0.74),rgba(17,49,78,0.48)_44%,rgba(239,246,251,0.08)_70%,rgba(8,22,38,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_24%,rgba(255,223,154,0.22),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(128,207,238,0.28),transparent_32%)]" />
      <SnowParticles />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-20 pt-36 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-4xl"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <span className="section-eyebrow">{heroData.eyebrow}</span>
          <h1 className="headline-xl mt-5 max-w-4xl text-white">{heroData.headline}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-100/86 sm:text-lg">{heroData.subline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={heroData.primaryCta.href} className="primary-btn">
              {heroData.primaryCta.label}
            </Link>
            <Link href={heroData.secondaryCta.href} className="secondary-btn">
              {heroData.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <motion.article
              className="glass-panel kinetic-card rounded-2xl px-4 py-3"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Mountain size={14} /> Winterfokus
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Skigebiet und Bergwelt im direkten Fokus</p>
            </motion.article>
            <motion.article
              className="glass-panel kinetic-card rounded-2xl px-4 py-3"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Building2 size={14} /> Zentrale Lage
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Ruhig am Ende einer Privatstrasse gelegen</p>
            </motion.article>
            <motion.article
              className="glass-panel kinetic-card rounded-2xl px-4 py-3"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Car size={14} /> Direkt parken
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Parkplatze befinden sich unmittelbar beim Haus</p>
            </motion.article>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
          {heroData.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Hero Bild ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-10 bg-[#d9e4f1]" : "w-4 bg-white/42 hover:bg-white/70"
              }`}
            />
          ))}
          </div>
          <Link
            href="#unterkunft"
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/12 px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/86 backdrop-blur-md transition hover:bg-white/20 sm:inline-flex"
          >
            Weiter
            <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ArrowDown size={13} />
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
