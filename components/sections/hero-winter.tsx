"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Snowflake, Mountain, ShieldCheck } from "lucide-react";
import { brandData, heroWinterImages } from "@/lib/site-data";
import { SnowParticles } from "@/components/ui/snow-particles";

export function HeroWinter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.75]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroWinterImages.length);
    }, 6200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden border-b border-slate-300/15"
    >
      <motion.div style={{ y: yParallax }} className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroWinterImages[activeIndex].src}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="hero-zoom absolute inset-0"
          >
            <Image
              src={heroWinterImages[activeIndex].src}
              alt={heroWinterImages[activeIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[linear-gradient(112deg,rgba(4,9,18,0.94),rgba(7,17,33,0.72)_45%,rgba(6,12,25,0.38)_70%,rgba(3,6,12,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_25%,rgba(192,207,226,0.26),transparent_36%)]" />
      <SnowParticles />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-20 pt-36 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-4xl"
        >
          <span className="section-eyebrow">Premium Winter Escape</span>
          <h1 className="headline-xl mt-5 text-white">{brandData.heroHeadline}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-100/85 sm:text-lg">
            {brandData.heroSubline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#anfrage" className="primary-btn">
              Jetzt anfragen
            </Link>
            <Link href="#preise" className="secondary-btn">
              Preise ansehen
            </Link>
          </div>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/84">
                <Snowflake size={14} /> Winterfokus
              </p>
              <p className="mt-1 text-sm text-slate-100/90">Fur Skiurlaub und Snowboardtage optimiert</p>
            </div>
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/84">
                <Mountain size={14} /> Obertauern
              </p>
              <p className="mt-1 text-sm text-slate-100/90">Zentrale Lage fur kurze Wege zur Piste</p>
            </div>
            <div className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/84">
                <ShieldCheck size={14} /> Premium Komfort
              </p>
              <p className="mt-1 text-sm text-slate-100/90">Ruhige Apartments mit hochwertiger Stimmung</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center gap-2">
          {heroWinterImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Hero Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-10 bg-[#d7e3f0]" : "w-4 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
