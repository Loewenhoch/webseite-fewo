import { Check } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { featuresData } from "@/lib/site-data";

export function FeaturesSection() {
  return (
    <SectionShell id="ausstattung" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Ausstattung</span>
        <h2 className="headline-lg mt-4 text-white">{featuresData.title}</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted sm:text-base">{featuresData.subtitle}</p>
      </MotionReveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.items.map((item, index) => (
          <MotionReveal key={item} delay={index * 0.03}>
            <article className="lux-card h-full rounded-2xl px-4 py-4">
              <p className="inline-flex items-start gap-2 text-sm leading-relaxed text-slate-100/88">
                <Check size={15} className="mt-[0.14rem] shrink-0 text-[#cfe0f2]" />
                {item}
              </p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
