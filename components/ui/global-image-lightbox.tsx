"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ActiveImage = {
  src: string;
  alt: string;
  title?: string;
  group: string;
  index: number;
  total: number;
};

type LightboxImage = ActiveImage;

function readImageData(image: HTMLImageElement, index: number, total: number): LightboxImage {
  return {
    src: image.currentSrc || image.src,
    alt: image.alt || "Bild",
    title: image.dataset.lightboxTitle,
    group: image.dataset.lightboxGroup || "page",
    index,
    total,
  };
}

function findGroupImages(group: string) {
  return Array.from(document.querySelectorAll("img[data-lightbox='true']")).filter(
    (node): node is HTMLImageElement =>
      node instanceof HTMLImageElement && (node.dataset.lightboxGroup || "page") === group,
  );
}

export function GlobalImageLightbox() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const image = target.closest("img[data-lightbox='true']");
      if (!(image instanceof HTMLImageElement)) return;

      const src = image.currentSrc || image.src;
      if (!src) return;

      const group = image.dataset.lightboxGroup || "page";
      const groupImages = findGroupImages(group);
      const images = groupImages.length > 0 ? groupImages : [image];
      const imageIndex = Math.max(0, images.indexOf(image));

      event.preventDefault();
      setActiveImage(readImageData(image, imageIndex, images.length));
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  const move = useCallback((direction: -1 | 1) => {
    setActiveImage((current) => {
      if (!current || current.total <= 1) return current;

      const images = findGroupImages(current.group);

      if (images.length <= 1) return current;

      const nextIndex = (current.index + direction + images.length) % images.length;
      return readImageData(images[nextIndex], nextIndex, images.length);
    });
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
      if (event.key === "ArrowLeft") {
        move(-1);
      }
      if (event.key === "ArrowRight") {
        move(1);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage, move]);

  if (!activeImage) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bildgrossansicht"
      className="fixed inset-0 z-[220] flex items-center justify-center bg-black/90 p-4"
      onClick={() => setActiveImage(null)}
    >
      <button
        type="button"
        aria-label="Bildgrossansicht schliessen"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition hover:bg-black/70"
        onClick={(event) => {
          event.stopPropagation();
          setActiveImage(null);
        }}
      >
        <X size={18} aria-hidden="true" />
      </button>

      {activeImage.total > 1 ? (
        <>
          <button
            type="button"
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white transition hover:bg-black/70 sm:left-5"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Naechstes Bild"
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white transition hover:bg-black/70 sm:right-5"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </>
      ) : null}

      <figure className="flex max-h-[92vh] flex-col items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[84vh] max-w-[95vw] rounded-xl object-contain shadow-[0_35px_90px_-30px_rgba(0,0,0,0.95)]"
          onClick={(event) => event.stopPropagation()}
        />
        <figcaption className="max-w-[95vw] text-center text-xs uppercase tracking-[0.13em] text-slate-200/85">
          {activeImage.title || activeImage.alt}
          {activeImage.total > 1 ? (
            <span className="ml-2 text-slate-400">
              {activeImage.index + 1} / {activeImage.total}
            </span>
          ) : null}
        </figcaption>
      </figure>
    </div>
  );
}
