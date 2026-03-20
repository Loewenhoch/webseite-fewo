import Link from "next/link";
import { FileText, Sparkles } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { pricingData } from "@/lib/site-data";

export function PricingSection() {
  return (
    <section id="preise" className="py-20 sm:py-24">
      <SectionShell>
        <MotionReveal>
          <span className="section-eyebrow">Preise & Zimmerinfos</span>
          <h2 className="headline-lg mt-4 text-white">Transparente Basis fur Ihre Reiseplanung</h2>
        </MotionReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.rows.map((row, index) => (
            <MotionReveal key={row.label} delay={index * 0.05}>
              <article className="lux-card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-300/72">{row.label}</p>
                <p className="mt-2 text-lg font-semibold text-strong">{row.value}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.12}>
        <div className="mt-7 rounded-2xl border border-[#bccadb]/38 bg-[#bccadb]/10 p-5 text-sm text-[#e5edf7]">
            <p className="inline-flex items-center gap-2 font-semibold">
              <Sparkles size={15} aria-hidden="true" />
              {pricingData.note}
            </p>
            <Link href={pricingData.pdfHref} target="_blank" className="secondary-btn mt-4 inline-flex items-center gap-2">
              <FileText size={15} aria-hidden="true" />
              {pricingData.pdfLabel}
            </Link>
          </div>
        </MotionReveal>
      </SectionShell>
    </section>
  );
}
