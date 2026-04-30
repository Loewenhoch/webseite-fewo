export type GalleryCategoryId = "b14" | "b4" | "winter" | "sommer";

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
    "Ferienwohnungen Platzer in Obertauern: zentrale und ruhige Lage, zwei gepflegte Wohnungen (B14 und B4), Winterfokus und klare Infos für Ihre Anfrage.",
  siteUrl: "https://www.platzer-obertauern.at",
} as const;

export const brandData = {
  name: "Ferienwohnungen Platzer",
  locationTag: "Obertauern",
  logo: "/assets/images/branding/logo-neu-weiss-2026.png",
  heroHeadline: "Winterurlaub in Obertauern. Ruhig wohnen. Schnell auf der Piste.",
  heroSubline:
    "Ferienwohnungen in zentraler Lage am Ende einer Privatstraße mit Parkplatz direkt beim Haus.",
} as const;

export const navData = [
  { label: "Unterkunft", href: "#unterkunft" },
  { label: "Ausstattung", href: "#ausstattung" },
  { label: "Winter & Sommer", href: "#erlebnis" },
  { label: "Skigebiet", href: "/skigebiet" },
  { label: "Galerie", href: "#galerie" },
  { label: "Preise", href: "#preise" },
  { label: "Lage", href: "#lage" },
  { label: "Anfrage", href: "#anfrage" },
] as const;

export const heroData = {
  eyebrow: "Ferienwohnungen Platzer",
  headline: "Winterurlaub in Obertauern. Ruhig wohnen. Schnell auf der Piste.",
  subline:
    "Ferienwohnungen in zentraler Lage am Ende einer Privatstraße. Parkplatz direkt beim Haus, vollständige Ausstattung und kurze Wege im Skiurlaub.",
  primaryCta: { label: "Jetzt anfragen", href: "#anfrage" },
  secondaryCta: { label: "Preise ansehen", href: "#preise" },
  images: [
    {
      src: "/assets/images/revision/winter/winter-ski-carving.jpg",
      alt: "Skifahrer auf der Piste mit Blick auf Obertauern",
    },
    {
      src: "/assets/images/revision/winter/winter-evening-panorama.jpg",
      alt: "Abendstimmung über Obertauern im Winter",
    },
    {
      src: "/assets/images/winter/custom/hero-ski-duo-panorama.jpg",
      alt: "Zwei Skifahrer mit Panoramablick über Obertauern",
    },
  ],
} as const;

export const accommodationIntroData = {
  title: "Unterkunft",
  intro:
    "Ferienwohnungen Platzer liegt zentral in Obertauern und trotzdem ruhig am Ende einer Privatstraße.",
  text:
    "Direkt beim Haus stehen Parkplätze zur Verfügung. Damit bleibt der Aufenthalt unkompliziert: morgens schnell ins Skigebiet, abends entspannt zurück in die Wohnung. Auch im Sommer ist die Lage ein praktischer Ausgangspunkt für Touren und ruhige Tage in den Bergen.",
  bullets: [
    "Zentral in Obertauern",
    "Ruhige Lage am Ende einer Privatstraße",
    "Parkplätze direkt beim Haus",
    "Geeignet für Winterurlaub und Sommeraufenthalt",
  ],
  images: [
    {
      src: "/assets/images/revision/house/house-parking-lane.jpg",
      alt: "Hausansicht mit Parkplatz im Winter",
    },
    {
      src: "/assets/images/revision/house/house-unterkunft-current.jpg",
      alt: "Hausansicht mit Zufahrt und Parkplatz vor dem Gebäude",
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
    subtitle: "Bauernmöbel aus Vollholz, kompakt und wohnlich",
    description:
      "Die Wohnung B14 ist im klassischen Vollholz-Stil eingerichtet und verbindet Wohn-, Ess- und Schlafzonen auf praktikable Weise für den Urlaub.",
    occupancy: "Bis zu 6 Personen (je nach Belegung)",
    beds: "6 Betten",
    style: "Bauernmöbel Vollholz (Voglauer)",
    highlights: [
      "Sitz- und Essbereich mit Trennoption per Rollo",
      "Küche komplett ausgestattet",
      "Bad mit Badewanne und Duschvorhang",
      "Südbalkon",
    ],
    images: [
      { src: "/assets/images/revision/apartments/b14/b14-living-dining.jpg", alt: "Wohnung B14 Wohn- und Essbereich" },
      { src: "/assets/images/revision/apartments/b14/b14-lounge.jpg", alt: "Wohnung B14 Sitzbereich" },
      { src: "/assets/images/revision/apartments/b14/b14-bunk-bed.jpg", alt: "Wohnung B14 Stockbett" },
      { src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg", alt: "Wohnung B14 Badezimmer" },
      { src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg", alt: "Wohnung B14 Küche mit Essplatz" },
    ],
  },
  b4: {
    id: "b4",
    title: "Wohnung B4",
    subtitle: "Landhausstil in heller Eiche mit klarer Aufteilung",
    description:
      "Die Wohnung B4 setzt auf einen helleren Landhausstil und bietet einen offenen Wohnraum mit Schlafmöglichkeiten und integrierter Küche.",
    occupancy: "Bis zu 6 Personen (je nach Belegung)",
    beds: "6 Betten",
    style: "Landhausstil in Eiche hell",
    highlights: [
      "Offener Wohnbereich mit TV",
      "Kompletter Küchenblock mit Geräten und Utensilien",
      "Bad mit Badewanne und Duschvorhang",
      "Südbalkon",
    ],
    images: [
      { src: "/assets/images/revision/apartments/b4/b4-kitchen-living.jpg", alt: "Wohnung B4 Küche und Wohnbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-kitchen-dining.jpg", alt: "Wohnung B4 Küchen- und Essbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-lounge.jpg", alt: "Wohnung B4 Sitzbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-living-tv.jpg", alt: "Wohnung B4 Wohnbereich mit TV" },
      { src: "/assets/images/revision/apartments/b4/b4-sofa-bed.jpg", alt: "Wohnung B4 Ausziehdoppelbett" },
      { src: "/assets/images/revision/apartments/b4/b4-room-overview.jpg", alt: "Wohnung B4 Raumübersicht" },
      { src: "/assets/images/revision/apartments/b4/b4-bathroom.jpg", alt: "Wohnung B4 Badezimmer" },
    ],
  },
};

export const featuresData = {
  title: "Ausstattung",
  subtitle: "Nur echte und verlässliche Angaben für den Aufenthalt.",
} as const;

export type FeatureIconKey = "bed" | "kitchen" | "bath" | "tv" | "extras";

export const featureGroupsData: {
  iconKey: FeatureIconKey;
  label: string;
  items: string[];
}[] = [
  {
    iconKey: "bed",
    label: "Wohnen & Schlafen",
    items: [
      "Einrichtung im Landhausstil / Bauernmöbel / Vollholz (je nach Wohnung)",
      "Bettwäsche, Hand- und Badetücher, Geschirrtücher, Zusatzdecken",
      "Südbalkon mit Liegemöglichkeit",
    ],
  },
  {
    iconKey: "kitchen",
    label: "Küche",
    items: [
      "Küche komplett ausgestattet (Toaster, Wasserkocher, Nespresso + Filterkapseln)",
      "Kühlschrank mit Gefrierfach, Mikrowelle, Herdplatten, Backrohr, Geschirrspüler",
      "Geschirr, Gläser, Kochutensilien sowie Geschirrspültabs und Spülmittel vorhanden",
    ],
  },
  {
    iconKey: "bath",
    label: "Badezimmer",
    items: [
      "Badezimmer mit Badewanne, Duschvorhang, Waschbecken und Haarfön",
    ],
  },
  {
    iconKey: "tv",
    label: "Unterhaltung & Komfort",
    items: [
      "TV mit Kabelanschluss, WLAN und Alexa",
    ],
  },
  {
    iconKey: "extras",
    label: "Sonstiges",
    items: [
      "Hunde auf Anfrage erlaubt",
      "Parkplätze direkt beim Haus",
    ],
  },
];

export const seasonalData = {
  winter: {
    title: "Winter in Obertauern",
    text:
      "Der Winter ist die Hauptsaison: kurze Wege ins Skigebiet, klare Bergluft und eine Unterkunft, in die man nach dem Skitag gerne zurückkommt.",
    bullets: [
      "Skiurlaub mit schneller Erreichbarkeit der Lifte",
      "Schneesichere Höhenlage in Obertauern",
      "Alpine Atmosphäre mit klarem Winterfokus",
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
    { id: "b14", label: "Wohnung B14" },
    { id: "b4", label: "Wohnung B4" },
    { id: "winter", label: "Winter" },
    { id: "sommer", label: "Sommer" },
  ],
  images: [
    {
      src: "/assets/images/revision/apartments/b14/b14-living-dining.jpg",
      alt: "Wohnung B14 Wohn- und Essbereich",
      title: "B14 Wohnbereich",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-lounge.jpg",
      alt: "Wohnung B14 Sitzbereich",
      title: "B14 Sitzecke",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bunk-bed.jpg",
      alt: "Wohnung B14 Stockbett",
      title: "B14 Schlafbereich",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg",
      alt: "Wohnung B14 Badezimmer",
      title: "B14 Badezimmer",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg",
      alt: "Wohnung B14 Küche",
      title: "B14 Küche",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-kitchen-living.jpg",
      alt: "Wohnung B4 Küche und Wohnbereich",
      title: "B4 Wohnküche",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-kitchen-dining.jpg",
      alt: "Wohnung B4 Essbereich",
      title: "B4 Essbereich",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-lounge.jpg",
      alt: "Wohnung B4 Sitzbereich",
      title: "B4 Sitzecke",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-living-tv.jpg",
      alt: "Wohnung B4 Wohnbereich mit TV",
      title: "B4 Wohnbereich",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-sofa-bed.jpg",
      alt: "Wohnung B4 Schlafsofa",
      title: "B4 Schlafplatz",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-room-overview.jpg",
      alt: "Wohnung B4 Raumübersicht",
      title: "B4 Übersicht",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-bathroom.jpg",
      alt: "Wohnung B4 Badezimmer",
      title: "B4 Badezimmer",
      category: "b4",
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
      title: "Winteratmosphäre",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-evening-panorama.jpg",
      alt: "Obertauern in der Abenddämmerung",
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
  ],
};

export const pricingData = {
  title: "Preise",
  rows: [
    { label: "Wohnung B14", value: "201,67 EUR pro Nacht" },
    { label: "Wohnung B4", value: "201,67 EUR pro Nacht" },
    { label: "Betten Wohnung B14", value: "6 Betten" },
    { label: "Betten Wohnung B4", value: "6 Betten" },
  ],
} as const;

export const skigebietData = {
  eyebrow: "Skigebiet Obertauern",
  title: "100 km Piste. Schneesicher von November bis Mai.",
  subtitle:
    "Obertauern gehört zu den schneereichsten Skigebieten der Alpen. Auf 1.630 bis 2.313 Metern Höhe bietet das Gebiet lange Saisonen, moderne Liftanlagen und abwechslungsreiche Pisten für alle Könnerstufen – direkt vor der Haustüre.",
  stats: [
    { value: "100 km", label: "Markierte Pisten" },
    { value: "26", label: "Lifte & Seilbahnen" },
    { value: "1.630 – 2.313 m", label: "Höhenbereich" },
    { value: "Nov – Mai", label: "Skisaison" },
  ],
  pistes: [
    { color: "blue" as const, label: "Blau · leicht", km: 38 },
    { color: "red" as const, label: "Rot · mittel", km: 44 },
    { color: "black" as const, label: "Schwarz · schwer", km: 18 },
  ],
  circuit: {
    title: "Der Obertauern Rundkurs",
    text: "Obertauern ist bekannt für seinen einzigartigen Skikreis: Die Lifte sind ringförmig angeordnet, sodass man von fast jedem Punkt eine vollständige Runde durch das gesamte Skigebiet fahren kann – ohne die Ski abzuschnallen. Das macht den Ort besonders attraktiv für mehrtägige Aufenthalte.",
  },
  snowInfo: {
    title: "Schneesicherheit",
    text: "Durch die Lage auf über 1.600 Metern und die hohe Niederschlagsmenge zählt Obertauern zu den schneereichsten Orten Österreichs. Natürlicher Schnee liegt oft von November bis Mai. Zusätzliche Beschneiungsanlagen sichern die Saison auch in schneearmen Jahren.",
  },
  interactiveMapUrl: "https://winter.intermaps.com/obertauern?zoomCalculationMode=fitWidth",
  pistenplanImage: "/assets/images/revision/documents/pistenplan-overview.jpg",
  mapCtaLabel: "Pistenplan im Vollbild öffnen",
} as const;

export const pistePlanData = {
  title: "Interaktiver Pistenplan",
  text: "Hier sehen Sie den Pistenplan als Übersicht. Den interaktiven Plan öffnen Sie direkt über den Link darunter.",
  image: "/assets/images/revision/documents/pistenplan-overview.jpg",
  interactiveSlopeMapUrl: "https://winter.intermaps.com/obertauern?zoomCalculationMode=fitWidth",
  ctaLabel: "Interaktiven Pistenplan öffnen",
} as const;

export const locationData = {
  title: "Lage & Anreise",
  text:
    "Die Unterkunft befindet sich in der Zirbenstraße 3 im Zentrum von Obertauern, am ruhigen Ende einer Privatstraße. Restaurants, Infrastruktur und Skigebiet sind gut erreichbar – der Parkplatz direkt beim Haus macht die Anreise unkompliziert.",
  addressLine: "Zirbenstraße 3, 5562 Obertauern",
  coordinates: "47.248932, 13.561535",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=47.248932,13.561535",
  googleMapsDestinationQuery: "Zirbenstraße 3, 5562 Obertauern, Österreich",
  mapCtaLabel: "In Google Maps öffnen",
  staticMapImage: "/assets/images/revision/documents/location-map-current.png",
} as const;

export const inquiryData = {
  title: "Unverbindlich anfragen",
  text: "Senden Sie uns Ihre Reisedaten. Wir melden uns mit einem passenden Angebot zurück.",
  cta: "Anfrage senden",
  success: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.",
} as const;

export const contactData = {
  name: "Ferienwohnungen Platzer",
  city: "Zirbenstraße 3, 5562 Obertauern",
  phone: "+43(0)664 41 66 339",
  email: "fewo@platzer.co.at",
} as const;

export const legalLinks = {
  impressum: "/impressum",
  datenschutz: "/datenschutz",
  agb: "/assets/docs/agb/AGBH_061115.pdf",
} as const;
