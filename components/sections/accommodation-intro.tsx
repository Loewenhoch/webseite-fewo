import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { accommodationIntroData, apartmentData } from "@/lib/site-data";

export function AccommodationIntro() {
  const apartments = [apartmentData.b14, apartmentData.b4];

  return (
    <SectionShell id="unterkunft" className="section-band py-20 sm:py-24">
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
        <MotionReveal>
          <span className="section-eyebrow">Unterkunft</span>
          <h2 className="headline-lg mt-4 text-white">{accommodationIntroData.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{accommodationIntroData.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{accommodationIntroData.text}</p>

          <div className="mt-6 grid gap-3">
            {accommodationIntroData.bullets.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.06}>
                <article className="lux-card kinetic-card rounded-2xl px-4 py-3">
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
                <article className="kinetic-card rounded-2xl border border-white/25 bg-white/12 p-4 backdrop-blur-md">
                  <h3 className="text-base font-semibold text-strong">{apartment.title}</h3>
                  <p className="mt-2 text-sm text-slate-100/84">{apartment.occupancy}</p>
                  <p className="mt-1 text-sm text-muted">{apartment.beds}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="relative min-h-[28rem] sm:min-h-[34rem]">
            <article className="group absolute inset-x-0 top-0 h-80 overflow-hidden rounded-3xl border border-white/30 bg-white/10 shadow-[0_34px_80px_-44px_rgba(2,12,24,0.95)] sm:h-[32rem] lg:left-6">
              <Image
                src={accommodationIntroData.images[1].src}
                alt={accommodationIntroData.images[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                data-lightbox="true"
                className="image-lift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/34 via-transparent to-white/10" />
            </article>

            <article className="group absolute -bottom-2 left-4 h-36 w-44 overflow-hidden rounded-2xl border border-white/35 bg-white/12 shadow-[0_24px_50px_-30px_rgba(2,12,24,0.95)] backdrop-blur sm:bottom-5 sm:h-44 sm:w-60">
              <Image
                src={accommodationIntroData.images[0].src}
                alt={accommodationIntroData.images[0].alt}
                fill
                sizes="240px"
                data-lightbox="true"
                className="image-lift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/34 to-transparent" />
            </article>

            <article className="group absolute -right-2 bottom-12 h-32 w-40 overflow-hidden rounded-2xl border border-white/35 bg-white/12 shadow-[0_24px_50px_-30px_rgba(2,12,24,0.95)] backdrop-blur sm:right-0 sm:h-40 sm:w-52">
              <Image
                src={accommodationIntroData.images[2].src}
                alt={accommodationIntroData.images[2].alt}
                fill
                sizes="208px"
                data-lightbox="true"
                className="image-lift object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/34 to-transparent" />
            </article>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
