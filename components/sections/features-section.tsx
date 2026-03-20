import {
  Wifi,
  Car,
  CookingPot,
  Snowflake,
  Mountain,
  Tv,
  Bath,
  Sofa,
  LucideIcon,
} from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { featureCards } from "@/lib/site-data";

const iconMap: LucideIcon[] = [Wifi, Car, CookingPot, Snowflake, Mountain, Tv, Bath, Sofa];

export function FeaturesSection() {
  return (
    <SectionShell id="ausstattung" className="pb-20 sm:pb-24">
      <MotionReveal>
        <span className="section-eyebrow">Ausstattung</span>
        <h2 className="headline-lg mt-4 text-white">Komfort, der den Skitag abrundet</h2>
      </MotionReveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((card, index) => {
          const Icon = iconMap[index % iconMap.length];

          return (
            <MotionReveal key={card.title} delay={index * 0.04}>
              <article className="lux-card h-full rounded-2xl p-5 transition duration-400 hover:-translate-y-1 hover:border-[#b9c7d8]/45">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#b9c7d8]/45 bg-[#b9c7d8]/10 text-[#dbe6f2]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-strong">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
