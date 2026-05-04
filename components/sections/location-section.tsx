import Image from "next/image";
import Link from "next/link";
import { MapPin, Navigation, Mountain, Car } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { LocationDirections } from "@/components/ui/location-directions";
import { locationData } from "@/lib/site-data";

const KEY_FACTS = [
  {
    icon: MapPin,
    label: "Adresse",
    value: locationData.addressLine,
  },
  {
    icon: Mountain,
    label: "Lage",
    value: "Zentrum Obertauern - Ende einer Privatstraße",
  },
  {
    icon: Car,
    label: "Parkplatz",
    value: "Direkt beim Haus, kostenlos",
  },
];

export function LocationSection() {
  return (
    <SectionShell id="lage" className="section-band py-20 sm:py-28">
      <MotionReveal>
        <span className="section-eyebrow">Lage & Anreise</span>
        <h2 className="headline-lg mt-4 text-white">{locationData.title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {locationData.text}
        </p>
      </MotionReveal>

      <MotionReveal delay={0.06}>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {KEY_FACTS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="kinetic-card flex flex-col gap-2 rounded-2xl border border-white/22 bg-white/12 p-4 backdrop-blur-md sm:p-5"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/30 bg-white/16 text-[#e5f5ff]">
                  <Icon size={14} />
                </span>
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400/75">
                  {label}
                </span>
              </div>
              <p className="text-sm font-semibold leading-snug text-slate-100/90">{value}</p>
            </div>
          ))}
        </div>
      </MotionReveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.88fr] lg:gap-8">
        <MotionReveal delay={0.08}>
          <div className="flex flex-col gap-5">
            <div className="group kinetic-card relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/26 bg-white/12">
              <Image
                src={locationData.staticMapImage}
                alt="Lageplan Zirbenstraße 3, Obertauern"
                width={1400}
                height={900}
                data-lightbox="true"
                data-lightbox-group="lage"
                data-lightbox-title="Lageplan Zirbenstraße 3"
                className="image-lift h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-3 left-3">
                <span className="rounded-full border border-white/22 bg-black/58 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                  Zirbenstraße 3 - Obertauern
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/22 bg-white/12 p-5 backdrop-blur-md">
              <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400/75">
                Navigation & Anfahrt
              </p>
              <Link
                href={locationData.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-btn inline-flex items-center gap-2"
              >
                <Navigation size={14} aria-hidden="true" />
                {locationData.mapCtaLabel}
              </Link>
              <LocationDirections
                destinationQuery={locationData.googleMapsDestinationQuery}
                fallbackDirectionsUrl={locationData.googleMapsDirectionsUrl}
              />
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.13}>
          <div className="flex flex-col gap-5">
            <div className="group kinetic-card relative cursor-zoom-in overflow-hidden rounded-2xl border border-white/26 bg-white/12">
              <Image
                src="/assets/images/revision/documents/obertauern-anreise.png"
                alt="Anreise nach Obertauern"
                width={1000}
                height={776}
                data-lightbox="true"
                data-lightbox-group="lage"
                data-lightbox-title="Anreise nach Obertauern"
                className="image-lift h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute bottom-4 left-4">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/95">Obertauern</p>
                <p className="mt-0.5 text-[0.7rem] text-white/65">
                  Salzburg, Österreich - ca. 1740 m ü. M.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/22 bg-gradient-to-br from-[rgba(255,255,255,0.16)] to-[rgba(28,74,107,0.36)] p-5 backdrop-blur-md sm:p-6">
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-400/75">
                So finden Sie uns
              </p>
              <p className="text-sm leading-relaxed text-slate-100/80">
                Obertauern liegt auf der Tauernpass-Straße (B99) zwischen Radstadt und Mauterndorf.
                Die Zirbenstraße zweigt im Ortszentrum ab - das Haus liegt am Ende dieser Straße.
                Navigationsgeräte führen Sie zuverlässig direkt zum Haus.
              </p>
              <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-[#cfe0f2]/20 bg-slate-900/50 px-4 py-3">
                <MapPin size={14} className="shrink-0 text-[#c8dff2]" aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-100/90">
                  {locationData.addressLine}
                </span>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
