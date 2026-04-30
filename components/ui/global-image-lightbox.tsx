"use client";

import { useEffect, useState } from "react";

type ActiveImage = {
  src: string;
  alt: string;
};

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

      event.preventDefault();
      setActiveImage({
        src,
        alt: image.alt || "Bild",
      });
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  useEffect(() => {
    if (!activeImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

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
        className="absolute right-4 top-4 rounded-full border border-white/35 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
        onClick={(event) => {
          event.stopPropagation();
          setActiveImage(null);
        }}
        >
          Schliessen
        </button>

      <figure className="flex max-h-[92vh] flex-col items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="max-h-[84vh] max-w-[95vw] rounded-xl object-contain shadow-[0_35px_90px_-30px_rgba(0,0,0,0.95)]"
          onClick={(event) => event.stopPropagation()}
        />
        <figcaption className="max-w-[95vw] text-center text-xs uppercase tracking-[0.13em] text-slate-200/85">
          {activeImage.alt}
        </figcaption>
      </figure>
    </div>
  );
}
