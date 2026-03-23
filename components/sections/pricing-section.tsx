import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { pricingData } from "@/lib/site-data";

export function PricingSection() {
  return (
    <section id="preise" className="py-20 sm:py-24">
      <SectionShell>
        <MotionReveal>
          <span className="section-eyebrow">Preise</span>
          <h2 className="headline-lg mt-4 text-white">{pricingData.title}</h2>
        </MotionReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.rows.map((row, index) => (
            <MotionReveal key={row.label} delay={index * 0.05}>
              <article className="lux-card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-300/72">{row.label}</p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-strong">{row.value}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.1}>
          <div className="mt-7 rounded-2xl border border-[#c2d3e5]/35 bg-[#c2d3e5]/8 p-5 text-sm text-[#e8f0f9]">
            <p>{pricingData.note}</p>
          </div>
        </MotionReveal>
      </SectionShell>
    </section>
  );
}
