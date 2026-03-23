"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mountain, Car, Building2 } from "lucide-react";
import { heroData } from "@/lib/site-data";
import { SnowParticles } from "@/components/ui/snow-particles";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.images.length);
    }, 6800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden border-b border-slate-300/15">
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
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(4,10,20,0.9),rgba(5,13,26,0.72)_46%,rgba(5,10,20,0.38)_72%,rgba(5,9,18,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_24%,rgba(191,210,229,0.22),transparent_36%)]" />
      <SnowParticles />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-end px-5 pb-20 pt-36 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-4xl"
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
            <article className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Mountain size={14} /> Winterfokus
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Skigebiet und Bergwelt im direkten Fokus</p>
            </article>
            <article className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Building2 size={14} /> Zentrale Lage
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Ruhig am Ende einer Privatstrasse gelegen</p>
            </article>
            <article className="glass-panel rounded-2xl px-4 py-3">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-100/88">
                <Car size={14} /> Direkt parken
              </p>
              <p className="mt-1 text-sm text-slate-100/84">Parkplatze befinden sich unmittelbar beim Haus</p>
            </article>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center gap-2">
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
      </div>
    </section>
  );
}
