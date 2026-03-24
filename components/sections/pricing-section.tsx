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
      </SectionShell>
    </section>
  );
}
