import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { seasonalData } from "@/lib/site-data";

export function SummerSection() {
  return (
    <section id="sommer" className="py-20 sm:py-24">
      <SectionShell>
        <div className="rounded-3xl border border-slate-300/20 bg-[linear-gradient(160deg,rgba(13,27,50,0.9),rgba(15,38,54,0.62))] p-6 sm:p-8 lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <MotionReveal>
              <span className="section-eyebrow">Sommer</span>
              <h2 className="headline-lg mt-4 text-white">{seasonalData.summer.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200/84 sm:text-base">{seasonalData.summer.text}</p>

              <div className="mt-6 grid gap-3">
                {seasonalData.summer.bullets.map((item, index) => (
                  <MotionReveal key={item} delay={index * 0.06}>
                    <article className="rounded-xl border border-slate-300/20 bg-slate-900/28 px-4 py-3">
                      <p className="text-sm text-slate-100/88">{item}</p>
                    </article>
                  </MotionReveal>
                ))}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="grid gap-3 sm:grid-cols-2">
                <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-60">
                  <Image
                    src={seasonalData.summer.images[0].src}
                    alt={seasonalData.summer.images[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/64 to-transparent" />
                </article>
                <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-60">
                  <Image
                    src={seasonalData.summer.images[1].src}
                    alt={seasonalData.summer.images[1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/64 to-transparent" />
                </article>
                <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:col-span-2 sm:h-56">
                  <Image
                    src={seasonalData.summer.images[2].src}
                    alt={seasonalData.summer.images[2].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/68 to-transparent" />
                </article>
              </div>
            </MotionReveal>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
