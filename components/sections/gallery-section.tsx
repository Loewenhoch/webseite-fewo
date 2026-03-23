"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { galleryData, type GalleryCategoryId } from "@/lib/site-data";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>("b14");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);

  const filteredImages = useMemo(
    () => galleryData.images.filter((image) => image.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => {
          if (prev === null) return 0;
          return (prev + 1) % filteredImages.length;
        });
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => {
          if (prev === null) return 0;
          return (prev - 1 + filteredImages.length) % filteredImages.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filteredImages.length]);

  const goPrevious = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  const goNext = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % filteredImages.length;
    });
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      setPointerStartX(event.clientX);
    }
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;

    if (delta > 50) {
      goPrevious();
    }
    if (delta < -50) {
      goNext();
    }

    setPointerStartX(null);
  };

  return (
    <SectionShell id="galerie" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Galerie</span>
        <h2 className="headline-lg mt-4 text-white">Bilder nach Bereichen geordnet</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
          Die Galerie ist nach Wohnungen, Saison und Hausbereich getrennt. Klick auf ein Bild offnet die Grossansicht mit Navigation.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
        {galleryData.categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => {
              setActiveCategory(category.id);
              setActiveIndex(null);
            }}
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

      <motion.div layout className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image, index) => (
          <motion.button
            key={`${image.src}-${activeCategory}`}
            layout
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-2xl border border-slate-300/20 bg-slate-900/40 text-left"
          >
            <div className="relative h-56 sm:h-60">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-slate-100/92">{image.title}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/94 px-3 py-6 sm:px-6"
            role="dialog"
            aria-modal="true"
            aria-label="Bildansicht"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Schliessen"
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-300/35 bg-slate-900/55 p-2 text-white"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              aria-label="Vorheriges Bild"
              onClick={(event) => {
                event.stopPropagation();
                goPrevious();
              }}
              className="absolute left-2 rounded-full border border-slate-300/35 bg-slate-900/55 p-2 text-white sm:left-4"
            >
              <ChevronLeft size={18} />
            </button>

            <motion.div
              key={filteredImages[activeIndex].src}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.26 }}
              className="relative flex h-[82vh] w-full max-w-6xl flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="relative h-full overflow-hidden rounded-2xl"
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
              >
                <Image
                  src={filteredImages[activeIndex].src}
                  alt={filteredImages[activeIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-slate-100/86">
                <p>{filteredImages[activeIndex].title}</p>
                <p>
                  {activeIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Naechstes Bild"
              onClick={(event) => {
                event.stopPropagation();
                goNext();
              }}
              className="absolute right-2 rounded-full border border-slate-300/35 bg-slate-900/55 p-2 text-white sm:right-4"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}
