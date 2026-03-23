import Image from "next/image";
import { Snowflake, Sun } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { seasonalData } from "@/lib/site-data";

export function SeasonsOverview() {
  return (
    <SectionShell id="erlebnis" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Winter & Sommer</span>
        <h2 className="headline-lg mt-4 text-white">Obertauern ganzjahrig erleben</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">
          Schwerpunkt ist der Winterurlaub. Im Sommer bleibt die Lage ein ruhiger Ausgangspunkt fur Wander- und Biketage.
        </p>
      </MotionReveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <MotionReveal>
          <article className="overflow-hidden rounded-3xl border border-slate-300/20 bg-[linear-gradient(160deg,rgba(12,28,52,0.92),rgba(8,18,36,0.84))]">
            <div className="relative h-56">
              <Image
                src={seasonalData.winter.images[0].src}
                alt={seasonalData.winter.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
            </div>
            <div className="p-5">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/84">
                <Snowflake size={14} /> Winter
              </p>
              <h3 className="mt-2 text-xl font-semibold text-strong">{seasonalData.winter.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-100/86">
                {seasonalData.winter.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <article className="overflow-hidden rounded-3xl border border-slate-300/20 bg-[linear-gradient(160deg,rgba(17,42,56,0.9),rgba(9,26,41,0.82))]">
            <div className="relative h-56">
              <Image
                src={seasonalData.summer.images[0].src}
                alt={seasonalData.summer.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
            </div>
            <div className="p-5">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-200/84">
                <Sun size={14} /> Sommer
              </p>
              <h3 className="mt-2 text-xl font-semibold text-strong">{seasonalData.summer.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-100/86">
                {seasonalData.summer.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
