import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { pricingData } from "@/lib/site-data";

export function PricingSection() {
  return (
    <SectionShell id="preise" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Preise</span>
        <h2 className="headline-lg mt-4 text-white">{pricingData.title}</h2>
      </MotionReveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pricingData.rows.map((row, index) => (
          <MotionReveal key={row.label} delay={index * 0.05}>
            <article className="lux-card kinetic-card relative overflow-hidden rounded-2xl p-5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/12 blur-2xl" />
              <p className="relative text-xs uppercase tracking-[0.14em] text-slate-100/72">{row.label}</p>
              <p className="relative mt-2 text-lg font-semibold leading-relaxed text-strong">{row.value}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
