"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { galleryData, type GalleryCategoryId } from "@/lib/site-data";

const GALLERY_HASH_PREFIX = "#galerie-";
const categoryIds = new Set<GalleryCategoryId>(galleryData.categories.map((category) => category.id));

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("b14");

  useEffect(() => {
    const readCategoryFromHash = () => {
      const nextCategory = window.location.hash.replace(GALLERY_HASH_PREFIX, "") as GalleryCategoryId;
      if (categoryIds.has(nextCategory)) {
        setActiveCategory(nextCategory);
      }
    };

    readCategoryFromHash();
    window.addEventListener("hashchange", readCategoryFromHash);
    return () => window.removeEventListener("hashchange", readCategoryFromHash);
  }, []);

  const filteredImages = useMemo(
    () => galleryData.images.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  const selectCategory = (category: GalleryCategoryId) => {
    setActiveCategory(category);
    window.history.replaceState(null, "", `${GALLERY_HASH_PREFIX}${category}`);
  };

  return (
    <SectionShell id="galerie" className="section-band py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Galerie</span>
        <h2 className="headline-lg mt-4 text-white">Alle Fotos an einem Ort</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
          Wohnung B14 und Wohnung B4 sind getrennt dargestellt, plus Winter und Sommer.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
        {galleryData.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => selectCategory(category.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              activeCategory === category.id
                ? "border border-white/60 bg-white/24 text-white shadow-[0_18px_34px_-26px_rgba(255,255,255,0.9)]"
                : "border border-white/25 bg-white/10 text-slate-100/84 hover:bg-white/16"
            }`}
          >
            {category.label}
          </button>
        ))}
      </MotionReveal>

      <motion.div layout className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
          <motion.article
            layout
            key={image.src}
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.42, delay: index * 0.035, ease: [0.2, 0.75, 0.2, 1] }}
            className="group kinetic-card overflow-hidden rounded-2xl border border-white/24 bg-white/12 transition hover:border-white/44"
          >
            <div className="relative h-56 sm:h-60">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                data-lightbox="true"
                data-lightbox-group={`gallery-${image.category}`}
                data-lightbox-title={image.title}
                className="image-lift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/58 via-transparent to-white/5" />
              <p className="absolute bottom-3 left-3 right-3 rounded-full border border-white/22 bg-black/24 px-3 py-1.5 text-sm text-slate-100/92 backdrop-blur-md">
                {image.title}
              </p>
            </div>
          </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionShell>
  );
}
