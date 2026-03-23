"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { galleryData, type GalleryCategoryId } from "@/lib/site-data";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("unterkunft");

  const filteredImages = useMemo(
    () => galleryData.images.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  return (
    <SectionShell id="galerie" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Galerie</span>
        <h2 className="headline-lg mt-4 text-white">Alle Fotos an einem Ort</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
          Unterkunft, Winter und Sommer sind in einer gemeinsamen Galerie gebundelt.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
        {galleryData.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition ${
              activeCategory === category.id
                ? "border border-[#c0d1e4]/60 bg-[#c0d1e4]/18 text-[#eaf1f8]"
                : "border border-slate-300/25 bg-slate-900/35 text-slate-200/84 hover:bg-slate-800/50"
            }`}
          >
            {category.label}
          </button>
        ))}
      </MotionReveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image) => (
          <article key={image.src} className="overflow-hidden rounded-2xl border border-slate-300/20 bg-slate-900/40">
            <div className="relative h-56 sm:h-60">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-slate-100/92">{image.title}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
