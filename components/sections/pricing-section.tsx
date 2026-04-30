import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { bookingData, pricingData } from "@/lib/site-data";

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

      <MotionReveal delay={0.12}>
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/24 bg-white/12 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-300/75">
              Online buchen
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100/82">{bookingData.text}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={bookingData.primary.href}
              target="_blank"
              rel="noreferrer"
              className="primary-btn inline-flex"
            >
              {bookingData.primary.label}
            </a>
            <a
              href={bookingData.english.href}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn inline-flex"
            >
              {bookingData.english.label}
            </a>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
