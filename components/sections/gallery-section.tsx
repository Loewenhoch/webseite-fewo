"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { galleryImages, type GalleryFilter } from "@/lib/site-data";

const tabs: Array<{ id: GalleryFilter; label: string }> = [
  { id: "unterkunft", label: "Unterkunft" },
  { id: "winter", label: "Winter" },
  { id: "sommer", label: "Sommer" },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("unterkunft");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => galleryImages.filter((item) => item.filter === activeFilter),
    [activeFilter],
  );

  return (
    <SectionShell id="galerie" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Galerie</span>
        <h2 className="headline-lg mt-4 text-white">Kuratierte Einblicke in Winter, Sommer und Unterkunft</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
          Unterkunft zeigt die neuen Bilder aus Wohnung B14 und B4; Winter und Sommer bleiben separat kuratiert.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.07} className="mt-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveFilter(tab.id);
              setActiveIndex(null);
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              activeFilter === tab.id
                ? "border border-[#bccadb]/55 bg-[#bccadb]/18 text-[#e6eef7]"
                : "border border-slate-300/25 bg-slate-900/35 text-slate-200/84 hover:bg-slate-800/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </MotionReveal>

      <motion.div layout className="gallery-masonry mt-8">
        {filtered.map((image, index) => (
          <motion.button
            key={`${image.src}-${activeFilter}-${index}`}
            layout
            whileHover={{ scale: 1.012 }}
            transition={{ duration: 0.25 }}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="gallery-item group mb-4 w-full overflow-hidden rounded-2xl border border-slate-300/20 bg-slate-900/45"
          >
            <div className="relative h-64 w-full sm:h-72">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1080px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-left text-xs text-slate-100/92 sm:text-sm">{image.alt}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/92 p-4"
            onClick={() => setActiveIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-slate-200/30 bg-slate-900/40 p-2 text-white"
              onClick={() => setActiveIndex(null)}
              aria-label="Lightbox schliessen"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="relative h-[82vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={filtered[activeIndex].src}
                alt={filtered[activeIndex].alt}
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
