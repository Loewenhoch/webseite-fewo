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

      <MotionReveal delay={0.04}>
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-300/20 bg-[linear-gradient(165deg,rgba(13,27,49,0.92),rgba(8,17,33,0.84))]">
          <ul className="divide-y divide-slate-300/14">
            {featuresData.items.map((item, index) => (
              <li
                key={item}
                className={`flex items-start gap-3 px-5 py-4 sm:px-6 ${index % 2 === 0 ? "bg-slate-900/26" : "bg-slate-900/40"}`}
              >
                <span className="mt-[0.3rem] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#cfe0f2]/40 bg-[#cfe0f2]/14 text-[#d7e5f3]">
                  <Check size={12} />
                </span>
                <span className="text-sm leading-relaxed text-slate-100/90 sm:text-[0.95rem]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
