export type GalleryCategoryId = "unterkunft" | "winter" | "sommer";

export type GalleryCategory = {
  id: GalleryCategoryId;
  label: string;
};

export type CuratedGalleryImage = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategoryId;
};

export type ApartmentImage = {
  src: string;
  alt: string;
};

export type ApartmentInfo = {
  id: "b14" | "b4";
  title: string;
  subtitle: string;
  description: string;
  occupancy: string;
  beds: string;
  style: string;
  highlights: string[];
  images: ApartmentImage[];
};

export const seoData = {
  title: "Ferienwohnungen Platzer | Obertauern",
  description:
    "Ferienwohnungen Platzer in Obertauern: zentrale und ruhige Lage, zwei gepflegte Wohnungen (B14 und B4), Winterfokus und klare Infos fur Ihre Anfrage.",
  siteUrl: "https://www.platzer-obertauern.at",
} as const;

export const brandData = {
  name: "Ferienwohnungen Platzer",
  locationTag: "Obertauern",
  logo: "/assets/images/branding/logo-neu-weiss-2026.png",
  heroHeadline: "Winterurlaub in Obertauern. Ruhig wohnen. Schnell auf der Piste.",
  heroSubline:
    "Zwei Ferienwohnungen in zentraler Lage am Ende einer Privatstrasse mit Parkplatz direkt beim Haus.",
} as const;

export const navData = [
  { label: "Unterkunft", href: "#unterkunft" },
  { label: "Ausstattung", href: "#ausstattung" },
  { label: "Winter & Sommer", href: "#erlebnis" },
  { label: "Galerie", href: "#galerie" },
  { label: "Preise", href: "#preise" },
  { label: "Lage", href: "#lage" },
  { label: "Anfrage", href: "#anfrage" },
] as const;

export const heroData = {
  eyebrow: "Ferienwohnungen Platzer",
  headline: "Winterurlaub in Obertauern. Ruhig wohnen. Schnell auf der Piste.",
  subline:
    "Zwei Ferienwohnungen in zentraler Lage am Ende einer Privatstrasse. Parkplatz direkt beim Haus, klare Ausstattung und kurze Wege in den Skiurlaub.",
  primaryCta: { label: "Jetzt anfragen", href: "#anfrage" },
  secondaryCta: { label: "Preise ansehen", href: "#preise" },
  images: [
    {
      src: "/assets/images/revision/winter/winter-ski-carving.jpg",
      alt: "Skifahrer auf der Piste mit Blick auf Obertauern",
    },
    {
      src: "/assets/images/revision/winter/winter-evening-panorama.jpg",
      alt: "Abendstimmung uber Obertauern im Winter",
    },
    {
      src: "/assets/images/revision/winter/winter-horse-sleigh.jpg",
      alt: "Pferdeschlittenfahrt in verschneiter Winterlandschaft",
    },
  ],
} as const;

export const accommodationIntroData = {
  title: "Unterkunft & Lage",
  intro:
    "Ferienwohnungen Platzer liegt zentral in Obertauern und trotzdem ruhig am Ende einer Privatstrasse.",
  text:
    "Direkt beim Haus stehen Parkplatze zur Verfugung. Damit bleibt der Aufenthalt unkompliziert: morgens schnell ins Skigebiet, abends entspannt zuruck in die Wohnung. Auch im Sommer ist die Lage ein praktischer Ausgangspunkt fur Touren und ruhige Tage in den Bergen.",
  bullets: [
    "Zentral in Obertauern",
    "Ruhige Lage am Ende einer Privatstrasse",
    "Parkplatze direkt beim Haus",
    "Geeignet fur Winterurlaub und Sommeraufenthalt",
  ],
  images: [
    {
      src: "/assets/images/revision/house/house-front-winter.jpg",
      alt: "Hausansicht der Unterkunft im Winter",
    },
    {
      src: "/assets/images/revision/house/house-front-dog.jpg",
      alt: "Hausansicht mit Zufahrt und Parkplatz vor dem Gebaeude",
    },
    {
      src: "/assets/images/revision/house/house-slope-side.jpg",
      alt: "Blick auf die direkte Umgebung der Unterkunft",
    },
  ],
} as const;

export const apartmentData: { b14: ApartmentInfo; b4: ApartmentInfo } = {
  b14: {
    id: "b14",
    title: "Wohnung B14",
    subtitle: "Bauernmobel aus Vollholz, kompakt und wohnlich",
    description:
      "Die Wohnung B14 ist im klassischen Vollholz-Stil eingerichtet und verbindet Wohn-, Ess- und Schlafzonen auf praktikable Weise fur den Urlaub.",
    occupancy: "Bis zu 4 Personen (je nach Belegung)",
    beds: "1 Stockbett (2 Betten)",
    style: "Bauernmobel Vollholz (Voglauer)",
    highlights: [
      "Sitz- und Essbereich mit Trennoption per Rollo",
      "Kuche komplett ausgestattet",
      "Bad mit Badewanne und Duschvorhang",
      "Sudbalkon",
    ],
    images: [
      // Wohnung B14: Nur Bilder aus "uberarbeitung datein  fewo/footos wohnung b14"
      { src: "/assets/images/revision/apartments/b14/b14-living-dining.jpg", alt: "Wohnung B14 Wohn- und Essbereich" },
      { src: "/assets/images/revision/apartments/b14/b14-lounge.jpg", alt: "Wohnung B14 Sitzbereich" },
      { src: "/assets/images/revision/apartments/b14/b14-bunk-bed.jpg", alt: "Wohnung B14 Stockbett" },
      { src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg", alt: "Wohnung B14 Badezimmer" },
      { src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg", alt: "Wohnung B14 Kuche mit Essplatz" },
    ],
  },
  b4: {
    id: "b4",
    title: "Wohnung B4",
    subtitle: "Landhausstil in heller Eiche mit klarer Aufteilung",
    description:
      "Die Wohnung B4 setzt auf einen helleren Landhausstil und bietet einen offenen Wohnraum mit Schlafmoglichkeiten und integrierter Kuche.",
    occupancy: "Bis zu 4 Personen (je nach Belegung)",
    beds: "2 Betten (vorlaufige Angabe)",
    style: "Landhausstil in Eiche hell",
    highlights: [
      "Offener Wohnbereich mit TV",
      "Kompletter Kuchenblock mit Geraten und Utensilien",
      "Bad mit Badewanne und Duschvorhang",
      "Sudbalkon",
    ],
    images: [
      // Wohnung B4: Nur Bilder aus "uberarbeitung datein  fewo/footos wohnung b4"
      { src: "/assets/images/revision/apartments/b4/b4-kitchen-living.jpg", alt: "Wohnung B4 Kuche und Wohnbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-kitchen-dining.jpg", alt: "Wohnung B4 Kuchen- und Essbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-lounge.jpg", alt: "Wohnung B4 Sitzbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-living-tv.jpg", alt: "Wohnung B4 Wohnbereich mit TV" },
      { src: "/assets/images/revision/apartments/b4/b4-sofa-bed.jpg", alt: "Wohnung B4 Ausziehdoppelbett" },
      { src: "/assets/images/revision/apartments/b4/b4-room-overview.jpg", alt: "Wohnung B4 Raumubersicht" },
      { src: "/assets/images/revision/apartments/b4/b4-bathroom.jpg", alt: "Wohnung B4 Badezimmer" },
    ],
  },
};

export const featuresData = {
  title: "Ausstattung",
  subtitle: "Nur echte und verlassliche Angaben fur den Aufenthalt.",
  items: [
    "Einrichtung im Landhausstil / Bauernmobel / Vollholz (je nach Wohnung)",
    "Bettwasche, Hand- und Badetucher, Geschirrtucher, Zusatzdecken",
    "Kuche mit Grundausstattung (Toaster, Wasserkocher, Kaffeemoglichkeit)",
    "Kuhlschrank mit Gefrierfach, Mikrowelle, Herdplatten, Backrohr, Geschirrspuler",
    "Geschirr, Glaser, Kochutensilien sowie Geschirrspultabs und Spulmittel vorhanden",
    "TV mit Kabelanschluss und WLAN",
    "Badezimmer mit Badewanne, Duschvorhang, Waschbecken und Haarfon",
    "Sudbalkon",
    "Hunde auf Anfrage erlaubt",
    "Parkplatze direkt beim Haus",
  ],
} as const;

export const seasonalData = {
  winter: {
    title: "Winter in Obertauern",
    text:
      "Der Winter ist die Hauptsaison: kurze Wege ins Skigebiet, klare Bergluft und eine Unterkunft, in die man nach dem Skitag gerne zuruckkommt.",
    bullets: [
      "Skiurlaub mit schneller Erreichbarkeit der Lifte",
      "Schneesichere Hohenlage in Obertauern",
      "Alpine Atmosphare mit klarem Winterfokus",
    ],
    images: [
      {
        src: "/assets/images/revision/winter/winter-ski-carving.jpg",
        alt: "Skitag in Obertauern",
      },
      {
        src: "/assets/images/revision/winter/winter-evening-panorama.jpg",
        alt: "Winterliches Obertauern bei Abendlicht",
      },
      {
        src: "/assets/images/revision/winter/winter-mountain-vertical.jpg",
        alt: "Verschneiter Berg mit Liftanlagen",
      },
    ],
  },
  summer: {
    title: "Sommer als zweite Saison",
    text:
      "Im Sommer steht die ruhige Bergseite von Obertauern im Vordergrund: klare Luft, Natur und Touren zwischen Tal und Gipfel.",
    bullets: [
      "Wandern und Biken in alpiner Umgebung",
      "Ruhige Tage mit Weitblick",
      "Praktischer Standort auch ohne Winterbetrieb",
    ],
    images: [
      {
        src: "/assets/images/revision/summer/summer-bike-trail.jpg",
        alt: "Mountainbike-Tour im Sommer",
      },
      {
        src: "/assets/images/revision/summer/summer-bike-valley.jpg",
        alt: "Biketour mit Talblick",
      },
      {
        src: "/assets/images/revision/summer/summer-lake-vertical.jpg",
        alt: "Bergsee bei Sommerwetter",
      },
    ],
  },
} as const;

export const galleryData: {
  categories: GalleryCategory[];
  images: CuratedGalleryImage[];
} = {
  categories: [
    { id: "unterkunft", label: "Unterkunft" },
    { id: "winter", label: "Winter" },
    { id: "sommer", label: "Sommer" },
  ],
  images: [
    {
      src: "/assets/images/revision/apartments/b14/b14-living-dining.jpg",
      alt: "Wohnung B14 Wohn- und Essbereich",
      title: "B14 Wohnbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-lounge.jpg",
      alt: "Wohnung B14 Sitzbereich",
      title: "B14 Sitzecke",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bunk-bed.jpg",
      alt: "Wohnung B14 Stockbett",
      title: "B14 Schlafbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg",
      alt: "Wohnung B14 Badezimmer",
      title: "B14 Badezimmer",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg",
      alt: "Wohnung B14 Kuche",
      title: "B14 Kuche",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-kitchen-living.jpg",
      alt: "Wohnung B4 Kuche und Wohnbereich",
      title: "B4 Wohnkuche",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-kitchen-dining.jpg",
      alt: "Wohnung B4 Essbereich",
      title: "B4 Essbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-lounge.jpg",
      alt: "Wohnung B4 Sitzbereich",
      title: "B4 Sitzecke",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-living-tv.jpg",
      alt: "Wohnung B4 Wohnbereich mit TV",
      title: "B4 Wohnbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-sofa-bed.jpg",
      alt: "Wohnung B4 Schlafsofa",
      title: "B4 Schlafplatz",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-room-overview.jpg",
      alt: "Wohnung B4 Raumubersicht",
      title: "B4 Ubersicht",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-bathroom.jpg",
      alt: "Wohnung B4 Badezimmer",
      title: "B4 Badezimmer",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/winter/winter-ski-carving.jpg",
      alt: "Skifahren in Obertauern",
      title: "Pistentag",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-horse-sleigh.jpg",
      alt: "Pferdeschlitten im Winter",
      title: "Winteratmosphare",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-evening-panorama.jpg",
      alt: "Obertauern in der Abenddammerung",
      title: "Abendpanorama",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-mountain-vertical.jpg",
      alt: "Verschneiter Berg mit Lift",
      title: "Bergkulisse",
      category: "winter",
    },
    {
      src: "/assets/images/revision/summer/summer-bike-trail.jpg",
      alt: "Sommerlicher Bike-Trail",
      title: "Sommeraktiv",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-bike-valley.jpg",
      alt: "Biketour im Tal",
      title: "Talrunde",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-lake-vertical.jpg",
      alt: "Bergsee im Sommer",
      title: "Natur & Ruhe",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/house/house-front-winter.jpg",
      alt: "Hausansicht im Winter",
      title: "Hausansicht",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/house/house-slope-side.jpg",
      alt: "Unterkunft mit Schneeflache vor dem Haus",
      title: "Direkte Umgebung",
      category: "unterkunft",
    },
    {
      src: "/assets/images/revision/house/house-neighborhood-view.jpg",
      alt: "Ruhige Umgebung der Unterkunft",
      title: "Nachbarschaft",
      category: "unterkunft",
    },
  ],
};

export const pricingData = {
  title: "Preise",
  note: "Die detaillierte Preisstaffelung finden Sie in der aktuellen PDF-Preisliste.",
  pdfLabel: "Preisliste als PDF offnen",
  // Preise und Saisoninfos lassen sich hier zentral anpassen.
  pdfHref: "/assets/docs/preise-2025-2026.pdf",
  rows: [
    { label: "Wintersaison", value: "laut Preisliste / auf Anfrage je Zeitraum" },
    { label: "Sommersaison", value: "laut Preisliste / auf Anfrage je Zeitraum" },
    { label: "Endreinigung", value: "laut Preisliste" },
    { label: "Kurtaxe", value: "laut aktueller Gemeindevorgabe" },
  ],
} as const;

export const pistePlanData = {
  title: "Interaktiver Pistenplan",
  text: "Scannen Sie den QR-Code oder offnen Sie den Pistenplan direkt im Browser.",
  qrImage: "/assets/images/revision/documents/interactive-slope-map-qr.png",
  // QR-Code automatisch ausgelesen. Falls sich der Link andert, bitte hier aktualisieren.
  interactiveSlopeMapUrl: "https://winter.intermaps.com/obertauern?zoomCalculationMode=fitWidth",
  ctaLabel: "Interaktiven Pistenplan offnen",
} as const;

export const locationData = {
  title: "Lage",
  text:
    "Die Unterkunft liegt im Zentrum von Obertauern, am Ende einer Privatstrasse. Dadurch bleibt es ruhig, wahrend Restaurants, Infrastruktur und Skigebiet gut erreichbar sind.",
  addressLine: "Obertauern - 5562 Obertauern",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ferienwohnungen+Platzer+Obertauern",
  mapCtaLabel: "In Google Maps offnen",
  staticMapImage: "/assets/images/revision/documents/location-map-marked.jpg",
} as const;

export const inquiryData = {
  title: "Unverbindlich anfragen",
  text: "Senden Sie uns Ihre Reisedaten. Wir melden uns mit einem passenden Angebot zuruck.",
  cta: "Anfrage senden",
  success: "Vielen Dank. Ihre Anfrage wurde erfolgreich ubermittelt.",
} as const;

export const contactData = {
  name: "Ferienwohnungen Platzer",
  city: "Obertauern - 5562 Obertauern",
  phone: "+43(0)664 41 66 339",
  email: "fewo@platzer.co.at",
} as const;

export const legalLinks = {
  impressum: "/impressum",
  datenschutz: "/datenschutz",
  agb: "/assets/docs/agb/AGBH_061115.pdf",
} as const;

