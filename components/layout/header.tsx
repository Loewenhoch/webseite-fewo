"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brandData, navData } from "@/lib/site-data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-7">
      <div
        className={`mx-auto grid h-16 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center rounded-2xl border px-5 transition-all duration-400 ${
          isScrolled
            ? "glass-panel border-slate-200/30 shadow-[0_20px_44px_-26px_rgba(2,6,16,0.9)]"
            : "border-slate-200/20 bg-slate-950/32"
        }`}
      >
        {/* Left: Nav (desktop) */}
        <nav className="hidden items-center gap-3 lg:flex">
          {navData.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-slate-200/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: hamburger left */}
        <button
          type="button"
          aria-label={isOpen ? "Menue schliessen" : "Menue oeffnen"}
          className="inline-flex rounded-xl border border-slate-300/25 bg-slate-900/55 p-2 text-slate-100 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center justify-center" aria-label="Zur Startseite">
          <Image
            src={brandData.logo}
            alt={`${brandData.name} Logo`}
            width={280}
            height={186}
            sizes="(max-width: 640px) 110px, 130px"
            className="h-15 w-auto object-contain mix-blend-screen opacity-95"
          />
        </Link>

        {/* Right: Nav (desktop) */}
        <nav className="hidden items-center justify-end gap-3 lg:flex">
          {navData.slice(4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-slate-200/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: empty right placeholder */}
        <div className="lg:hidden" />
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-2xl border border-slate-200/30 bg-slate-950/90 p-4 shadow-[0_26px_40px_-24px_rgba(2,6,16,0.95)] backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navData.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-100/90 transition hover:bg-slate-800/70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
