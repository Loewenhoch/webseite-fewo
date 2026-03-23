import Image from "next/image";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import type { ApartmentInfo } from "@/lib/site-data";

type ApartmentSectionProps = {
  id: string;
  apartment: ApartmentInfo;
  reversed?: boolean;
};

export function ApartmentSection({ id, apartment, reversed = false }: ApartmentSectionProps) {
  return (
    <SectionShell id={id} className="py-12 sm:py-14">
      <div className={`grid items-start gap-8 lg:grid-cols-[1fr_1fr] ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <MotionReveal>
          <span className="section-eyebrow">Wohnung</span>
          <h3 className="headline-lg mt-4 text-white">{apartment.title}</h3>
          <p className="mt-3 text-base text-slate-100/85">{apartment.subtitle}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{apartment.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <article className="lux-card rounded-2xl px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300/72">Belegung</p>
              <p className="mt-1 text-sm font-semibold text-strong">{apartment.occupancy}</p>
            </article>
            <article className="lux-card rounded-2xl px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300/72">Schlafplatze</p>
              <p className="mt-1 text-sm font-semibold text-strong">{apartment.beds}</p>
            </article>
            <article className="lux-card rounded-2xl px-4 py-3 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-300/72">Stil</p>
              <p className="mt-1 text-sm font-semibold text-strong">{apartment.style}</p>
            </article>
          </div>

          <div className="mt-6 grid gap-2">
            {apartment.highlights.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.05}>
                <p className="rounded-xl border border-slate-300/18 bg-slate-900/34 px-3 py-2 text-sm text-slate-100/86">
                  {item}
                </p>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="group relative h-64 overflow-hidden rounded-2xl border border-slate-300/20 sm:col-span-2 sm:h-72">
              <Image
                src={apartment.images[0].src}
                alt={apartment.images[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
            </article>

            {apartment.images.slice(1, 5).map((image) => (
              <article
                key={image.src}
                className="group relative h-44 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-48"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 21vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/54 to-transparent" />
              </article>
            ))}
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
