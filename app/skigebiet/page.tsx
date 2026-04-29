import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Snowflake, CircleDot, RefreshCw } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { skigebietData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skigebiet Obertauern | Ferienwohnungen Platzer",
  description:
    "100 km Pisten, 26 Lifte, 1.630–2.313 m Höhe. Alles über das Skigebiet Obertauern – Pistenverteilung, interaktiver Pistenplan und der berühmte Rundkurs.",
};

const PISTE_COLORS: Record<"blue" | "red" | "black", string> = {
  blue: "bg-blue-500",
  red: "bg-rose-500",
  black: "bg-slate-300",
};

const HIGHLIGHT_CARDS = [
  {
    icon: Snowflake,
    title: "Schneesicherheit",
    text: "Durch die Hochlage über 1.600 m und hohe Niederschlagsmengen zählt Obertauern zu den schneereichsten Orten der Alpen. Natürlicher Schnee von November bis Mai.",
  },
  {
    icon: CircleDot,
    title: "Der Rundkurs",
    text: "Die ringförmig angeordneten Lifte ermöglichen einen vollständigen Skikreis durch das gesamte Gebiet – ohne Ski abzuschnallen. Einzigartig in den Alpen.",
  },
  {
    icon: RefreshCw,
    title: "Moderne Anlagen",
    text: "26 Lifte und Seilbahnen mit kurzen Wartezeiten. Das Skigebiet wurde in den letzten Jahren kontinuierlich modernisiert.",
  },
];

export default function SkigebietPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-slate-100">
      <Header />

      <main className="pt-32 sm:pt-36">

        {/* ── Hero ── */}
        <SectionShell className="pb-16 sm:pb-20">
          <MotionReveal>
            <span className="section-eyebrow">{skigebietData.eyebrow}</span>
            <h1 className="headline-xl mt-5 text-white">{skigebietData.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {skigebietData.subtitle}
            </p>
          </MotionReveal>

          {/* Stats grid */}
          <MotionReveal delay={0.09}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {skigebietData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-slate-300/15 bg-gradient-to-br from-[rgba(13,27,49,0.90)] to-[rgba(8,17,33,0.72)] p-5 text-center sm:p-7"
                >
                  <p className="font-display text-3xl font-semibold text-white sm:text-[2.6rem]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.67rem] font-bold uppercase tracking-[0.18em] text-slate-400/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </SectionShell>

        <div className="section-divider mx-auto w-[90%] max-w-7xl" />

        {/* ── Piste breakdown + highlights ── */}
        <SectionShell className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Left: Pistenverteilung */}
            <MotionReveal>
              <span className="section-eyebrow">Pistenverteilung</span>
              <h2 className="headline-lg mt-4 text-white">100 km für jede Könnerstufe</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Die Pisten verteilen sich auf alle Schwierigkeitsgrade – vom breiten Anfängerhang bis zur
                anspruchsvollen schwarzen Abfahrt.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {skigebietData.pistes.map((piste) => {
                  const pct = piste.km;
                  return (
                    <div key={piste.label}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`h-2.5 w-2.5 rounded-full ${PISTE_COLORS[piste.color]}`} />
                          <span className="text-sm font-semibold text-slate-100/90">{piste.label}</span>
                        </div>
                        <span className="text-sm font-bold text-white/80">{piste.km} km</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800/70">
                        <div
                          className={`h-full rounded-full ${PISTE_COLORS[piste.color]}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </MotionReveal>

            {/* Right: Highlight cards */}
            <MotionReveal delay={0.1}>
              <div className="flex flex-col gap-4">
                {HIGHLIGHT_CARDS.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-300/15 bg-gradient-to-br from-[rgba(13,27,49,0.88)] to-[rgba(8,17,33,0.70)] p-5"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#cfe0f2]/20 bg-[#cfe0f2]/10 text-[#c8dff2]">
                        <Icon size={15} />
                      </span>
                      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300/80">
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-100/80">{text}</p>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </SectionShell>

        <div className="section-divider mx-auto w-[90%] max-w-7xl" />

        {/* ── Interaktiver Pistenplan ── */}
        <SectionShell className="py-16 sm:py-20">
          <MotionReveal>
            <span className="section-eyebrow">Pistenplan</span>
            <h2 className="headline-lg mt-4 text-white">Interaktiver Pistenplan</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              Den vollständigen interaktiven Pistenplan direkt im Browser – alle Lifte, Pisten und
              Schwierigkeitsgrade auf einen Blick. Für die Vollbildansicht den Link unten verwenden.
            </p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-300/20 shadow-[0_30px_60px_-30px_rgba(2,6,16,0.85)]">
              <iframe
                src={skigebietData.interactiveMapUrl}
                title="Interaktiver Pistenplan Obertauern"
                className="h-[520px] w-full border-0 sm:h-[660px]"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href={skigebietData.interactiveMapUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex items-center gap-2"
              >
                <ExternalLink size={14} aria-hidden="true" />
                {skigebietData.mapCtaLabel}
              </Link>
            </div>
          </MotionReveal>
        </SectionShell>

        {/* ── Pistenplan Übersicht Bild ── */}
        <SectionShell className="pb-20 sm:pb-28">
          <MotionReveal>
            <div className="group relative cursor-zoom-in overflow-hidden rounded-3xl border border-slate-300/20">
              <Image
                src={skigebietData.pistenplanImage}
                alt="Pistenplan Übersicht Obertauern"
                width={1600}
                height={900}
                data-lightbox="true"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute bottom-4 left-4">
                <span className="rounded-full border border-white/22 bg-black/58 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                  Pistenübersicht · Obertauern
                </span>
              </div>
            </div>
          </MotionReveal>
        </SectionShell>

      </main>
      <Footer />
    </div>
  );
}
