"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/site-content";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % siteContent.heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[78svh] overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0">
        {siteContent.heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-900/45 to-slate-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(226,190,139,0.2),transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-3xl text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-white/90 backdrop-blur">
            Premium Unterkunft in Obertauern
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {siteContent.brand.claim}
          </h1>
          <p className="mt-4 text-lg text-white/90 sm:text-xl">{siteContent.brand.subClaim}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Stilvoll wohnen, aktiv geniessen und in den Bergen zur Ruhe kommen. Ferienwohnungen Platzer bietet den idealen Ausgangspunkt fur Ihren Winterurlaub und Sommeraufenthalt.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#anfrage"
              className="rounded-full bg-amber-200 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/30 transition-all hover:-translate-y-0.5 hover:bg-amber-100"
            >
              Jetzt anfragen
            </Link>
            <Link
              href="#preise"
              className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/20"
            >
              Preise ansehen
            </Link>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          {siteContent.heroImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-8 bg-amber-200" : "w-4 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
