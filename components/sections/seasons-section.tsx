import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-content";

export function SeasonsSection() {
  return (
    <section id="erleben" className="bg-slate-950 py-20 text-white sm:py-24">
      <SectionContainer>
        <Reveal>
          <p className="section-eyebrow section-eyebrow-dark">Winter & Sommer erleben</p>
          <h2 className="section-title mt-3 text-white">Alpine Erlebnisse das ganze Jahr</h2>
          <p className="mt-4 max-w-3xl text-white/75">
            Obertauern begeistert mit schneesicheren Wintermonaten und ruhigen Sommerwochen in klarer Bergluft. Der Schwerpunkt liegt auf Skiurlaub und aktiven Tagen im Schnee.
          </p>
        </Reveal>

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
              <div className="absolute inset-0">
                <Image
                  src={siteContent.seasons.winter.image}
                  alt={siteContent.seasons.winter.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="relative flex min-h-[23rem] flex-col justify-end p-7 sm:p-9">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200/95">Winterfokus</p>
                <h3 className="mt-2 font-display text-3xl text-white">{siteContent.seasons.winter.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85">{siteContent.seasons.winter.text}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={120}>
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
              <div className="absolute inset-0">
                <Image
                  src={siteContent.seasons.summer.image}
                  alt={siteContent.seasons.summer.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
              <div className="relative flex min-h-[23rem] flex-col justify-end p-7 sm:p-9">
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200/95">Sommerauszeit</p>
                <h3 className="mt-2 font-display text-3xl text-white">{siteContent.seasons.summer.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{siteContent.seasons.summer.text}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
