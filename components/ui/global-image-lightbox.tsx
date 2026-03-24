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

      const image = target.closest("img");
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
    const previousOverflow = document.body.style.overflow;
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
      return;
    }

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

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={activeImage.src}
        alt={activeImage.alt}
        className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-[0_35px_90px_-30px_rgba(0,0,0,0.95)]"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
