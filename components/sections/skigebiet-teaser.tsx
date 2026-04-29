import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { skigebietData } from "@/lib/site-data";

export function SkigebietTeaser() {
  return (
    <SectionShell id="skigebiet-teaser" className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-12 lg:items-center">

        {/* Left: Text + Stats + CTA */}
        <MotionReveal>
          <span className="section-eyebrow">Skigebiet Obertauern</span>
          <h2 className="headline-lg mt-4 text-white">100 km Piste direkt vor der Tür</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Obertauern zählt zu den schneereichsten Skigebieten der Alpen — 26 Lifte, 100 km
            markierte Pisten und der berühmte Rundkurs auf 1.630 bis 2.313 m Höhe.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {skigebietData.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-300/15 bg-slate-900/35 px-4 py-3 text-center"
              >
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-slate-400/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <Link
              href="/skigebiet"
              className="primary-btn inline-flex items-center gap-2 text-sm"
            >
              Alles über das Skigebiet
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>

        {/* Right: Pistenplan image */}
        <MotionReveal delay={0.1}>
          <Link href="/skigebiet" className="group block overflow-hidden rounded-2xl border border-slate-300/20">
            <div className="relative">
              <Image
                src={skigebietData.pistenplanImage}
                alt="Pistenplan Obertauern – Alles über das Skigebiet"
                width={900}
                height={520}
                className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <p className="text-sm font-bold text-white">Pistenplan Obertauern</p>
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/55 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  Mehr erfahren
                  <ArrowRight size={11} />
                </span>
              </div>
            </div>
          </Link>
        </MotionReveal>

      </div>
    </SectionShell>
  );
}
