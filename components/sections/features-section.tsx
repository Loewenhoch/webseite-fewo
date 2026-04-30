"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  UtensilsCrossed,
  Bath,
  Tv2,
  PawPrint,
  Expand,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { featuresData, featureGroupsData, apartmentData } from "@/lib/site-data";
import type { FeatureIconKey } from "@/lib/site-data";

const ICON_MAP: Record<FeatureIconKey, React.ComponentType<{ size?: number }>> = {
  bed: Bed,
  kitchen: UtensilsCrossed,
  bath: Bath,
  tv: Tv2,
  extras: PawPrint,
};

const TABS = [
  { key: "b14" as const, label: "Wohnung B14" },
  { key: "b4" as const, label: "Wohnung B4" },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"b14" | "b4">("b14");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const images = apartmentData[activeTab].images;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, 3800);
    return () => clearInterval(id);
  }, [images.length, paused]);

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  const current = images[activeIndex];

  return (
    <SectionShell id="ausstattung" className="section-band py-20 sm:py-28">
      <MotionReveal>
        <span className="section-eyebrow">Ausstattung</span>
        <h2 className="headline-lg mt-4 text-white">{featuresData.title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">{featuresData.subtitle}</p>
      </MotionReveal>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_440px]">

        {/* ── Left: Categorized features ── */}
        <div className="flex flex-col gap-4">
          {featureGroupsData.map((group, gi) => {
            const Icon = ICON_MAP[group.iconKey];
            return (
              <MotionReveal key={group.label} delay={gi * 0.08}>
                <div className="kinetic-card rounded-2xl border border-white/22 bg-gradient-to-br from-[rgba(255,255,255,0.16)] to-[rgba(34,78,112,0.38)] p-5 backdrop-blur-md sm:p-6">
                  <div className="mb-3.5 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/16 text-[#e5f5ff]">
                      <Icon size={16} />
                    </span>
                    <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300/80">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item, ii) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          duration: 0.42,
                          delay: gi * 0.08 + ii * 0.06,
                          ease: [0.2, 0.7, 0.2, 1],
                        }}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d4ef]/60" />
                        <span className="text-sm leading-relaxed text-slate-100/85">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* ── Right: Apartment image panel ── */}
        <MotionReveal delay={0.12} className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-3xl border border-white/28 bg-white/12 shadow-[0_32px_80px_-44px_rgba(2,12,24,0.95)] backdrop-blur-md">

            {/* Tab switcher with sliding indicator */}
            <div className="relative flex border-b border-slate-300/12">
              <motion.div
                className="absolute inset-y-0 w-1/2 bg-white/18"
                animate={{ x: activeTab === "b14" ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.key);
                    setActiveIndex(0);
                  }}
                  className={`relative z-10 flex-1 px-3 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-slate-400/70 hover:text-slate-200/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Image carousel */}
            <div
              className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeIndex}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="image-lift object-cover"
                    data-lightbox="true"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Hover overlay — pointer-events-none so clicks reach the img */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/22">
                <span className="flex items-center gap-1.5 rounded-full border border-white/35 bg-black/52 px-3.5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Expand size={12} />
                  Vergrößern
                </span>
              </div>

              {/* Prev / Next arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/52 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-black/70 group-hover:opacity-100"
                    aria-label="Voriges Bild"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/52 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-black/70 group-hover:opacity-100"
                    aria-label="Naechstes Bild"
                  >
                    <ChevronRight size={15} />
                  </button>
                </>
              )}
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Bild ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-5 bg-slate-200/90"
                        : "w-1.5 bg-slate-500/50 hover:bg-slate-400/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[0.7rem] tabular-nums text-slate-400/60">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
