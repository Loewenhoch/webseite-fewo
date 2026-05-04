import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { bookingData, pricingData } from "@/lib/site-data";

export function PricingSection() {
  return (
    <SectionShell id="preise" className="py-20 sm:py-24">
      <MotionReveal>
        <span className="section-eyebrow">Preise</span>
        <h2 className="headline-lg mt-4 text-white">{pricingData.title}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">{pricingData.intro}</p>
      </MotionReveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <MotionReveal delay={0.04}>
          <article className="lux-card kinetic-card relative overflow-hidden rounded-2xl p-5 sm:p-6">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/12 blur-2xl" />
            <p className="relative text-xs font-bold uppercase tracking-[0.16em] text-slate-100/72">
              Saisonpreise
            </p>
            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              {pricingData.seasonRows.map((row) => (
                <div key={row.label} className="rounded-xl border border-white/18 bg-slate-950/22 p-4">
                  <p className="text-sm font-semibold text-slate-100/82">{row.label}</p>
                  <p className="mt-2 font-display text-4xl font-semibold leading-none text-white">{row.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-300/70">{row.note}</p>
                </div>
              ))}
            </div>
          </article>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <article className="kinetic-card rounded-2xl border border-white/24 bg-white/12 p-5 backdrop-blur-md sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300/75">
              Zusatzkosten
            </p>
            <div className="mt-5 grid gap-3">
              {pricingData.feeRows.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-4 rounded-xl border border-white/16 bg-slate-950/24 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-100/88">{row.label}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300/68">{row.note}</p>
                  </div>
                  <p className="shrink-0 text-lg font-semibold text-white">{row.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-white/16 bg-white/8 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300/72">
                Wäschegarnitur enthält
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-100/82">
                {pricingData.laundryIncluded.join(", ")}
              </p>
            </div>
          </article>
        </MotionReveal>
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
