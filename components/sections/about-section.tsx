import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { accommodationData, interiorImages } from "@/lib/site-data";

export function AboutSection() {
  return (
    <SectionShell id="unterkunft" className="py-22 sm:py-26">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
        <MotionReveal>
          <span className="section-eyebrow">Unterkunft</span>
          <h2 className="headline-lg mt-4 text-white">{accommodationData.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{accommodationData.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{accommodationData.text}</p>
          <Link href="#galerie" className="secondary-btn mt-6 inline-flex">
            Wohnungen anschauen
          </Link>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {accommodationData.facts.map((fact, index) => (
              <MotionReveal key={fact.label} delay={index * 0.06}>
                <article className="lux-card rounded-2xl px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-300/70">{fact.label}</p>
                  <p className="mt-2 text-sm font-semibold text-strong">{fact.value}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="group relative h-[17.5rem] overflow-hidden rounded-2xl border border-slate-300/20">
              <Image
                src={interiorImages[0].src}
                alt={interiorImages[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
            </article>

            <article className="group relative h-[17.5rem] overflow-hidden rounded-2xl border border-slate-300/20">
              <Image
                src={interiorImages[1].src}
                alt={interiorImages[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
            </article>

            <article className="group relative h-[14.5rem] overflow-hidden rounded-2xl border border-slate-300/20 sm:col-span-2">
              <Image
                src={interiorImages[2].src}
                alt={interiorImages[2].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-slate-100/88">Wohnung B14: Hausansicht mit Parkplatz</p>
            </article>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
