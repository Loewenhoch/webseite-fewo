import Image from "next/image";
import Link from "next/link";
import { MapPin, Route, ExternalLink } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { LocationDirections } from "@/components/ui/location-directions";
import { SectionShell } from "@/components/ui/section-shell";
import { contactData, locationData, pistePlanData } from "@/lib/site-data";

export function LocationSection() {
  return (
    <SectionShell id="lage" className="py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionReveal>
          <span className="section-eyebrow">Lage</span>
          <h2 className="headline-lg mt-4 text-white">{locationData.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{locationData.text}</p>

          <div className="mt-6 rounded-2xl border border-slate-300/20 bg-slate-900/35 p-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-strong">
              <MapPin size={15} aria-hidden="true" />
              {contactData.city}
            </p>
            <p className="mt-2 text-sm text-muted">{locationData.addressLine}</p>
            <p className="mt-1 text-xs text-muted">Koordinaten: {locationData.coordinates}</p>
            <Link href={locationData.googleMapsUrl} target="_blank" className="secondary-btn mt-4 inline-flex items-center gap-2">
              <Route size={15} aria-hidden="true" />
              {locationData.mapCtaLabel}
            </Link>
            <LocationDirections
              destinationQuery={locationData.googleMapsDestinationQuery}
              fallbackMapsUrl={locationData.googleMapsUrl}
            />
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-300/20">
            <Image
              src={locationData.staticMapImage}
              alt="Lageplan in Obertauern"
              width={1400}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="lux-card rounded-3xl p-6 sm:p-7">
            <p className="section-eyebrow">Pistenplan</p>
            <h3 className="mt-4 text-2xl font-semibold text-strong">{pistePlanData.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{pistePlanData.text}</p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-300/18 bg-white/90 p-2">
              <Image
                src={pistePlanData.image}
                alt="Pistenplan Obertauern"
                width={900}
                height={500}
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>

            <Link
              href={pistePlanData.interactiveSlopeMapUrl}
              target="_blank"
              className="primary-btn mt-6 inline-flex items-center gap-2"
            >
              <Route size={15} aria-hidden="true" />
              {pistePlanData.ctaLabel}
              <ExternalLink size={14} aria-hidden="true" />
            </Link>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
