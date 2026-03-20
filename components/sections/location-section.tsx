import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { contactData, locationData } from "@/lib/site-data";

export function LocationSection() {
  return (
    <SectionShell id="lage" className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionReveal>
          <span className="section-eyebrow">Lage</span>
          <h2 className="headline-lg mt-4 text-white">{locationData.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{locationData.text}</p>

          <div className="mt-6 rounded-2xl border border-slate-300/20 bg-slate-900/35 p-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-strong">
              <MapPin size={15} aria-hidden="true" />
              {contactData.city}
            </p>
            <p className="mt-2 text-sm text-muted">Schnelle Erreichbarkeit, zentrale Lage und idealer Ausgangspunkt fur Aktivitaten.</p>
            <p className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-300/72">
              <Navigation size={14} aria-hidden="true" />
              Weitere Details folgen
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-300/20">
            <Image
              src={locationData.pistePlanImage}
              alt="Pistenplan Obertauern"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-slate-300/20 bg-slate-900/45 shadow-[0_24px_46px_-32px_rgba(1,4,10,0.86)]">
            <iframe
              title="Karte Obertauern"
              src={locationData.mapEmbedUrl}
              className="h-[30rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
