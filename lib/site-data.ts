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
  primaryCta: { label: "Direkt buchen", href: "https://obertauern.capcorn.net/Ferienwohnungen%20Platzer-booking/Query?MB=5224&FL=20&zimDe=Ferienwohnung&LG=0" },
  secondaryCta: { label: "Unverbindlich anfragen", href: "#anfrage" },
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

export const bookingData = {
  title: "Direkt buchen",
  text: "Prüfen Sie freie Termine und buchen Sie die Ferienwohnung direkt im Buchungssystem.",
  primary: {
    label: "Direkt buchen",
    href: "https://obertauern.capcorn.net/Ferienwohnungen%20Platzer-booking/Query?MB=5224&FL=20&zimDe=Ferienwohnung&LG=0",
  },
  english: {
    label: "Book in English",
    href: "https://obertauern.capcorn.net/Ferienwohnungen%20Platzer-booking/Query?MB=5224&FL=20&zimEn=Apartment&LG=1",
  },
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
      src: "/assets/images/revision/house/house-winter-side-new.jpg",
      alt: "Hausansicht im Winter mit Parkplatz und Schnee",
    },
    {
      src: "/assets/images/revision/house/house-unterkunft-current.jpg",
      alt: "Hausansicht mit Zufahrt und Parkplatz vor dem Gebäude",
    },
    {
      src: "/assets/images/revision/house/balcony-winter-view-new.jpg",
      alt: "Winterblick vom Balkon auf Obertauern",
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
      { src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg", alt: "Wohnung B14 Küche mit Essplatz" },
      { src: "/assets/images/revision/apartments/b14/b14-sleeping-niche-new.jpg", alt: "Wohnung B14 Schlafnische mit Holzverkleidung" },
      { src: "/assets/images/revision/apartments/b14/b14-sleeping-niche-wide-new.jpg", alt: "Wohnung B14 Schlafbereich im Vollholz-Stil" },
      { src: "/assets/images/revision/apartments/b14/b14-bunk-bed-warm-new.jpg", alt: "Wohnung B14 Hochbett im warmen Holzstil" },
      { src: "/assets/images/revision/apartments/b14/b14-hall-garderobe-new.jpg", alt: "Wohnung B14 Garderobe und Flur" },
      { src: "/assets/images/revision/apartments/b14/b14-ski-boot-room-new.jpg", alt: "Schuh- und Skiraum der Unterkunft" },
      { src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg", alt: "Wohnung B14 Badezimmer" },
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
      { src: "/assets/images/revision/apartments/b4/b4-living-overview-new.jpg", alt: "Wohnung B4 Wohnraum mit Essbereich und Sofa" },
      { src: "/assets/images/revision/apartments/b4/b4-sofa-kitchen-new.jpg", alt: "Wohnung B4 Sofa und Küchenbereich" },
      { src: "/assets/images/revision/apartments/b4/b4-dining-kitchen-new.jpg", alt: "Wohnung B4 Essecke mit Küche" },
      { src: "/assets/images/revision/apartments/b4/b4-sofa-tv-new.jpg", alt: "Wohnung B4 Sofa mit TV" },
      { src: "/assets/images/revision/apartments/b4/b4-dining-warm-new.jpg", alt: "Wohnung B4 helle Essecke" },
      { src: "/assets/images/revision/apartments/b4/b4-sofa-kitchen-wide-new.jpg", alt: "Wohnung B4 Sofa und Küche in breiter Ansicht" },
      { src: "/assets/images/revision/apartments/b4/b4-room-overview-new.jpg", alt: "Wohnung B4 Raumübersicht mit Küchenzeile" },
      { src: "/assets/images/revision/apartments/b4/b4-dining-detail-new.jpg", alt: "Wohnung B4 Essbereich Detail" },
      { src: "/assets/images/revision/apartments/b4/b4-tv-balcony-new.jpg", alt: "Wohnung B4 Wohnraum mit TV und Balkonzugang" },
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
        src: "/assets/images/revision/winter/winter-slope-new.jpg",
        alt: "Skipiste in Obertauern mit Bergblick",
      },
      {
        src: "/assets/images/revision/winter/winter-sun-snow-new.jpg",
        alt: "Sonniger Wintertag auf der Piste",
      },
      {
        src: "/assets/images/revision/winter/winter-snow-landscape-new.jpg",
        alt: "Verschneite Winterlandschaft in Obertauern",
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
        src: "/assets/images/revision/summer/summer-panorama-new.jpg",
        alt: "Sommerpanorama in den Bergen",
      },
      {
        src: "/assets/images/revision/summer/summer-mountain-path-new.jpg",
        alt: "Bergweg im Sommer mit Weitblick",
      },
      {
        src: "/assets/images/revision/summer/summer-lake-new.jpg",
        alt: "Bergsee im Sommer",
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
      src: "/assets/images/revision/apartments/b14/b14-kitchen.jpg",
      alt: "Wohnung B14 Küche",
      title: "B14 Küche",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-sleeping-niche-new.jpg",
      alt: "Wohnung B14 Schlafnische",
      title: "B14 Schlafnische",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-sleeping-niche-wide-new.jpg",
      alt: "Wohnung B14 Schlafbereich im Holzstil",
      title: "B14 Schlafbereich",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bunk-bed-warm-new.jpg",
      alt: "Wohnung B14 Hochbett",
      title: "B14 Hochbett",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-hall-garderobe-new.jpg",
      alt: "Wohnung B14 Garderobe",
      title: "B14 Garderobe",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-ski-boot-room-new.jpg",
      alt: "Schuh- und Skiraum der Unterkunft",
      title: "Schuhraum",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b14/b14-bathroom.jpg",
      alt: "Wohnung B14 Badezimmer",
      title: "B14 Badezimmer",
      category: "b14",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-living-overview-new.jpg",
      alt: "Wohnung B4 Wohnraum mit Essbereich",
      title: "B4 Wohnraum",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-sofa-kitchen-new.jpg",
      alt: "Wohnung B4 Sofa und Küche",
      title: "B4 Sofa & Küche",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-dining-kitchen-new.jpg",
      alt: "Wohnung B4 Essecke mit Küche",
      title: "B4 Essbereich",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-sofa-tv-new.jpg",
      alt: "Wohnung B4 Sofa mit TV",
      title: "B4 TV-Bereich",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-dining-warm-new.jpg",
      alt: "Wohnung B4 helle Essecke",
      title: "B4 Essecke",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-sofa-kitchen-wide-new.jpg",
      alt: "Wohnung B4 Sofa und Küche in breiter Ansicht",
      title: "B4 Wohnküche",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-room-overview-new.jpg",
      alt: "Wohnung B4 Raumübersicht",
      title: "B4 Übersicht",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-dining-detail-new.jpg",
      alt: "Wohnung B4 Essbereich Detail",
      title: "B4 Detail",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-tv-balcony-new.jpg",
      alt: "Wohnung B4 TV-Bereich mit Balkonzugang",
      title: "B4 Balkonzugang",
      category: "b4",
    },
    {
      src: "/assets/images/revision/apartments/b4/b4-bathroom.jpg",
      alt: "Wohnung B4 Badezimmer",
      title: "B4 Badezimmer",
      category: "b4",
    },
    {
      src: "/assets/images/revision/winter/winter-slope-new.jpg",
      alt: "Skipiste in Obertauern",
      title: "Pistentag",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-sun-snow-new.jpg",
      alt: "Sonniger Wintertag im Schnee",
      title: "Sonne & Schnee",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-snow-landscape-new.jpg",
      alt: "Verschneite Winterlandschaft",
      title: "Schneelandschaft",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-balcony-slope-view-new.jpg",
      alt: "Blick vom Balkon auf Piste und Berge",
      title: "Balkonblick",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-mountain-neighborhood-new.jpg",
      alt: "Winterliche Umgebung der Unterkunft",
      title: "Winterumgebung",
      category: "winter",
    },
    {
      src: "/assets/images/revision/winter/winter-obertauern-panorama-new.jpg",
      alt: "Obertauern im Winterpanorama",
      title: "Ortspanorama",
      category: "winter",
    },
    {
      src: "/assets/images/revision/house/house-front-winter-new.jpg",
      alt: "Hausfront der Unterkunft im Winter",
      title: "Haus im Winter",
      category: "winter",
    },
    {
      src: "/assets/images/revision/house/balcony-mountain-view-new.jpg",
      alt: "Balkonblick auf die Berge",
      title: "Balkonblick",
      category: "winter",
    },
    {
      src: "/assets/images/revision/summer/summer-panorama-new.jpg",
      alt: "Sommerpanorama in den Bergen",
      title: "Sommerpanorama",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-mountain-path-new.jpg",
      alt: "Bergweg im Sommer",
      title: "Bergweg",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-lake-new.jpg",
      alt: "Bergsee im Sommer",
      title: "Bergsee",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-summit-view-new.jpg",
      alt: "Sommerlicher Ausblick vom Gipfel",
      title: "Gipfelblick",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-steinbock-new.jpg",
      alt: "Steinbock am Bergsee",
      title: "Steinbock",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-creek-evening-new.jpg",
      alt: "Bachlauf in der Abendstimmung",
      title: "Abendbach",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-alpine-trail-new.jpg",
      alt: "Almweg im Sommer",
      title: "Almweg",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-summit-cross-new.jpg",
      alt: "Gipfelkreuz in den Bergen",
      title: "Gipfelkreuz",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-waterfall-new.jpg",
      alt: "Wasserfall im Sommer",
      title: "Wasserfall",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-hut-new.jpg",
      alt: "Almhütte im Sommer",
      title: "Almhütte",
      category: "sommer",
    },
    {
      src: "/assets/images/revision/summer/summer-sup-lake-new.jpg",
      alt: "Stand-up-Paddling am See",
      title: "See & Ruhe",
      category: "sommer",
    },
  ],
};

export const pricingData = {
  title: "Preise",
  intro: "Die Preise gelten gleichermaßen für Wohnung B14 und Wohnung B4.",
  seasonRows: [
    { label: "Hauptsaison", value: "250 EUR", note: "pro Nacht" },
    { label: "Nebensaison", value: "180 EUR", note: "pro Nacht" },
  ],
  feeRows: [
    { label: "Wäschegarnitur", value: "15 EUR", note: "pro Garnitur" },
    { label: "Reinigungskostenanteil Wohnung", value: "50 EUR", note: "einmalig" },
  ],
  laundryIncluded: [
    "Badetuch",
    "Bettwäsche",
    "Leintuch",
    "Handtuch",
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
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Zirbenstra%C3%9Fe%203%2C%205562%20Obertauern%2C%20%C3%96sterreich",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Zirbenstra%C3%9Fe%203%2C%205562%20Obertauern%2C%20%C3%96sterreich&travelmode=driving",
  googleMapsDestinationQuery: "Zirbenstraße 3, 5562 Obertauern, Österreich",
  mapCtaLabel: "Adresse in Google Maps anzeigen",
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
