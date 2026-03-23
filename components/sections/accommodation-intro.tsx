import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { accommodationIntroData, apartmentData } from "@/lib/site-data";

export function AccommodationIntro() {
  const apartments = [apartmentData.b14, apartmentData.b4];

  return (
    <SectionShell id="unterkunft" className="py-20 sm:py-24">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
        <MotionReveal>
          <span className="section-eyebrow">Unterkunft</span>
          <h2 className="headline-lg mt-4 text-white">{accommodationIntroData.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{accommodationIntroData.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{accommodationIntroData.text}</p>

          <div className="mt-6 grid gap-3">
            {accommodationIntroData.bullets.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.06}>
                <article className="lux-card rounded-2xl px-4 py-3">
                  <p className="inline-flex items-center gap-2 text-sm text-slate-100/88">
                    <CheckCircle2 size={15} className="text-[#c8d6e7]" />
                    {item}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {apartments.map((apartment, index) => (
              <MotionReveal key={apartment.id} delay={index * 0.05}>
                <article className="rounded-2xl border border-slate-300/20 bg-slate-900/35 p-4">
                  <h3 className="text-base font-semibold text-strong">{apartment.title}</h3>
                  <p className="mt-2 text-sm text-slate-100/84">{apartment.occupancy}</p>
                  <p className="mt-1 text-sm text-muted">{apartment.beds}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-56">
              <Image
                src={accommodationIntroData.images[0].src}
                alt={accommodationIntroData.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/62 to-transparent" />
            </article>

            <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-56">
              <Image
                src={accommodationIntroData.images[1].src}
                alt={accommodationIntroData.images[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/58 to-transparent" />
            </article>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
