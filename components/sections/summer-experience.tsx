import Image from "next/image";
import { Leaf, Wind, Footprints } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { gallerySummer, summerHighlights } from "@/lib/site-data";

const icons = [Leaf, Wind, Footprints];

export function SummerExperience() {
  return (
    <section id="sommer" className="py-20 sm:py-24">
      <SectionShell>
        <div className="rounded-3xl border border-slate-300/20 bg-[linear-gradient(160deg,rgba(13,27,50,0.92),rgba(16,42,56,0.58))] p-6 sm:p-8 lg:p-10">
          <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <MotionReveal>
              <span className="section-eyebrow">Sommer als zweite Saison</span>
              <h2 className="headline-lg mt-4 text-white">Leicht, ruhig und hochwertig in den Bergen</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200/84 sm:text-base">
                Auch im Sommer bleibt Obertauern ein starker Ruckzugsort: klare Luft, weite Ausblicke und genug Ruhe fur echte Erholung.
              </p>

              <div className="mt-6 grid gap-3">
                {summerHighlights.map((highlight, index) => {
                  const Icon = icons[index % icons.length];

                  return (
                    <article key={highlight.title} className="rounded-xl border border-slate-300/20 bg-slate-900/30 p-4">
                      <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#bccadb]">
                        <Icon size={14} aria-hidden="true" /> Sommer
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-strong">{highlight.title}</h3>
                      <p className="mt-1 text-sm text-muted">{highlight.text}</p>
                    </article>
                  );
                })}
              </div>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="grid gap-3 sm:grid-cols-2">
                <article className="group relative h-72 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-64">
                  <Image
                    src={gallerySummer[0].src}
                    alt={gallerySummer[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/62 to-transparent" />
                </article>
                <article className="group relative h-72 overflow-hidden rounded-2xl border border-slate-300/20 sm:h-64">
                  <Image
                    src={gallerySummer[1].src}
                    alt={gallerySummer[1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                </article>
                <article className="group relative h-52 overflow-hidden rounded-2xl border border-slate-300/20 sm:col-span-2">
                  <Image
                    src={gallerySummer[2].src}
                    alt={gallerySummer[2].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                </article>
              </div>
            </MotionReveal>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
