"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ActiveImage = {
  src: string;
  alt: string;
  title?: string;
  group: string;
  index: number;
  total: number;
  items: LightboxItem[];
};

type LightboxItem = {
  src: string;
  alt: string;
  title?: string;
};

type EncodedLightboxItem = Partial<LightboxItem>;

function getElementAlt(element: HTMLElement) {
  return element instanceof HTMLImageElement ? element.alt : element.dataset.lightboxAlt || "Bild";
}

function getElementSrc(element: HTMLElement) {
  return element instanceof HTMLImageElement ? element.currentSrc || element.src : element.dataset.lightboxSrc || "";
}

function parseLightboxItems(element: HTMLElement): LightboxItem[] | null {
  const encodedItems = element.dataset.lightboxItems;
  if (!encodedItems) return null;

  try {
    const items = JSON.parse(encodedItems) as EncodedLightboxItem[];
    const cleanItems = items
      .filter((item): item is LightboxItem => typeof item.src === "string" && item.src.length > 0)
      .map((item) => ({
        src: item.src,
        alt: item.alt || getElementAlt(element),
        title: item.title,
      }));

    return cleanItems.length > 0 ? cleanItems : null;
  } catch {
    return null;
  }
}

function readImageData(element: HTMLElement, index: number, total: number, items?: LightboxItem[]): ActiveImage {
  const src = getElementSrc(element);
  const fallbackItem = {
    src,
    alt: getElementAlt(element),
    title: element.dataset.lightboxTitle,
  };
  const lightboxItems = items && items.length > 0 ? items : [fallbackItem];
  const safeIndex = Math.min(Math.max(index, 0), lightboxItems.length - 1);
  const activeItem = lightboxItems[safeIndex] || fallbackItem;

  return {
    src: activeItem.src,
    alt: activeItem.alt,
    title: activeItem.title,
    group: element.dataset.lightboxGroup || "page",
    index: safeIndex,
    total: items && items.length > 0 ? lightboxItems.length : total,
    items: lightboxItems,
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
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const lightboxElement = target.closest("[data-lightbox='true']");
      if (!(lightboxElement instanceof HTMLElement)) return;

      const src = getElementSrc(lightboxElement);
      if (!src) return;

      const group = lightboxElement.dataset.lightboxGroup || "page";
      const customItems = parseLightboxItems(lightboxElement);
      const customIndex = Number.parseInt(lightboxElement.dataset.lightboxIndex || "", 10);

      if (customItems) {
        event.preventDefault();
        setActiveImage(
          readImageData(
            lightboxElement,
            Number.isNaN(customIndex) ? 0 : customIndex,
            customItems.length,
            customItems,
          ),
        );
        return;
      }

      const groupImages = findGroupImages(group);
      if (groupImages.length === 0) {
        event.preventDefault();
        setActiveImage(readImageData(lightboxElement, 0, 1));
        return;
      }

      const imageIndex = Math.max(0, groupImages.indexOf(lightboxElement as HTMLImageElement));
      const groupItems = groupImages.map((groupImage) => ({
        src: groupImage.currentSrc || groupImage.src,
        alt: groupImage.alt || "Bild",
        title: groupImage.dataset.lightboxTitle,
      }));

      event.preventDefault();
      setActiveImage(readImageData(groupImages[imageIndex], imageIndex, groupItems.length, groupItems));
    };

    document.addEventListener("click", handleDocumentClick, true);
    return () => document.removeEventListener("click", handleDocumentClick, true);
  }, []);

  const move = useCallback((direction: -1 | 1) => {
    setActiveImage((current) => {
      if (!current || current.total <= 1) return current;

      if (current.items.length > 1) {
        const nextIndex = (current.index + direction + current.items.length) % current.items.length;
        const nextItem = current.items[nextIndex];

        return {
          ...current,
          ...nextItem,
          index: nextIndex,
          total: current.items.length,
        };
      }

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
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

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
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current;
        touchStartX.current = null;
        if (startX === null || activeImage.total <= 1) return;

        const endX = event.changedTouches[0]?.clientX ?? startX;
        const deltaX = endX - startX;
        if (Math.abs(deltaX) < 48) return;

        event.stopPropagation();
        move(deltaX > 0 ? -1 : 1);
      }}
    >
      <button
        ref={closeButtonRef}
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

        {activeImage.total > 1 ? (
          <div
            className="flex max-w-[92vw] gap-2 overflow-x-auto rounded-2xl border border-white/12 bg-black/32 p-2 backdrop-blur-md"
            onClick={(event) => event.stopPropagation()}
          >
            {activeImage.items.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                aria-label={`Bild ${index + 1} anzeigen`}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition sm:h-14 sm:w-20 ${
                  index === activeImage.index
                    ? "border-white/80 opacity-100"
                    : "border-white/18 opacity-62 hover:opacity-100"
                }`}
                onClick={() =>
                  setActiveImage((current) =>
                    current
                      ? {
                          ...current,
                          ...item,
                          index,
                          total: current.items.length,
                        }
                      : current,
                  )
                }
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </figure>
    </div>
  );
}
