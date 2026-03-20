import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { winterFeatureImages, winterHighlights } from "@/lib/site-data";

export function WinterExperience() {
  return (
    <section id="winter" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(13,37,70,0.8),transparent_55%)]" />
      <SectionShell className="relative">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr]">
          <MotionReveal>
            <article className="group relative min-h-[27rem] overflow-hidden rounded-3xl border border-slate-300/20">
              <Image
                // Hauptmotiv aus den neu kuratierten Winter-Feature-Bildern.
                src={winterFeatureImages[0].src}
                alt={winterFeatureImages[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0.24),rgba(5,10,20,0.88)_72%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="section-eyebrow">Winter-Erlebnis</span>
                <h2 className="headline-lg mt-4 max-w-2xl text-white">
                  Obertauern im Fokus: morgens auf die Piste, abends in Ruhe ankommen.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-100/84 sm:text-base">
                  Hier steht der Winter im Mittelpunkt. Schnee, Berge und eine Unterkunft, die den aktiven Tag stilvoll ausklingen lasst.
                </p>
              </div>
            </article>
          </MotionReveal>

          <div className="grid gap-3">
            {winterHighlights.map((highlight, index) => (
              <MotionReveal key={highlight.title} delay={index * 0.05}>
                <article className="lux-card rounded-2xl p-5 transition duration-300 hover:border-[#bccadb]/45">
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d4e1ef]">
                    <CheckCircle2 size={14} aria-hidden="true" /> Highlight
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-strong">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{highlight.text}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
