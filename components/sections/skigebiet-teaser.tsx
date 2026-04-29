import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { skigebietData } from "@/lib/site-data";

export function SkigebietTeaser() {
  return (
    <SectionShell id="skigebiet-teaser" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Skigebiet Obertauern</span>
        <h2 className="headline-lg mt-4 text-white">100 km Piste direkt vor der Tür</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Obertauern zählt zu den schneereichsten Skigebieten der Alpen — 26 Lifte, 100 km
          markierte Pisten und der berühmte Rundkurs auf 1.630 bis 2.313 Metern Höhe.
        </p>
      </MotionReveal>

      <MotionReveal delay={0.07}>
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {skigebietData.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-slate-300/15 bg-slate-900/35 py-5 text-center"
            >
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-400/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </MotionReveal>

      <MotionReveal delay={0.1}>
        <div className="group mt-8 cursor-zoom-in overflow-hidden rounded-3xl border border-slate-300/20">
          <Image
            src={skigebietData.pistenplanImage}
            alt="Pistenplan Obertauern Übersicht"
            width={1600}
            height={900}
            data-lightbox="true"
            className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/skigebiet"
            className="primary-btn inline-flex items-center gap-2"
          >
            <Mountain size={15} aria-hidden="true" />
            Skigebiet & Pistenplan
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href={skigebietData.interactiveMapUrl}
            target="_blank"
            rel="noreferrer"
            className="secondary-btn inline-flex items-center gap-2"
          >
            Interaktiver Pistenplan
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
