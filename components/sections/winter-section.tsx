import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { seasonalData } from "@/lib/site-data";

export function WinterSection() {
  return (
    <section id="winter" className="py-20 sm:py-24">
      <SectionShell>
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <article className="group relative min-h-[24rem] overflow-hidden rounded-3xl border border-slate-300/20">
              <Image
                src={seasonalData.winter.images[0].src}
                alt={seasonalData.winter.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,9,18,0.28),rgba(5,11,22,0.88)_76%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="section-eyebrow">Winter</span>
                <h2 className="headline-lg mt-4 text-white">{seasonalData.winter.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-100/84 sm:text-base">
                  {seasonalData.winter.text}
                </p>
              </div>
            </article>
          </MotionReveal>

          <div className="grid gap-3">
            {seasonalData.winter.bullets.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.06}>
                <article className="lux-card rounded-2xl px-4 py-4">
                  <h3 className="text-base font-semibold text-strong">{item}</h3>
                </article>
              </MotionReveal>
            ))}

            <MotionReveal delay={0.18}>
              <article className="group relative h-52 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-56">
                <Image
                  src={seasonalData.winter.images[1].src}
                  alt={seasonalData.winter.images[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/68 to-transparent" />
              </article>
            </MotionReveal>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
