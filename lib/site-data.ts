export type GalleryFilter = "winter" | "sommer" | "unterkunft";

export type GalleryImage = {
  src: string;
  alt: string;
  filter: GalleryFilter;
  featured?: boolean;
};

export type Highlight = {
  title: string;
  text: string;
};

export type WinterImage = {
  src: string;
  alt: string;
};

export const seoData = {
  title: "Ferienwohnungen Platzer | Premium Winterurlaub in Obertauern",
  description:
    "Ferienwohnungen Platzer in Obertauern: starke Winterlage, stilvolle Apartments und alpine Erholung zwischen Schnee, Bergen und Komfort.",
  siteUrl: "https://www.platzer-obertauern.at",
} as const;

export const brandData = {
  name: "Ferienwohnungen Platzer",
  locationTag: "Obertauern",
  heroHeadline: "Ferienwohnungen in Obertauern - Winterurlaub mit Berggefuhl",
  heroSubline:
    "Ihr Ruckzugsort zwischen Piste, Panorama und entspannter Wohnatmosphare. Im Winter kraftvoll inszeniert, im Sommer stilvoll ruhig.",
  // Neues Nutzerlogo (weiss) zentral hinterlegt.
  logo: "/assets/images/branding/logo-neu-weiss-2026.png",
} as const;

export const navData = [
  { label: "Unterkunft", href: "#unterkunft" },
  { label: "Ausstattung", href: "#ausstattung" },
  { label: "Winter", href: "#winter" },
  { label: "Sommer", href: "#sommer" },
  { label: "Galerie", href: "#galerie" },
  { label: "Preise", href: "#preise" },
  { label: "Lage", href: "#lage" },
  { label: "Anfrage", href: "#anfrage" },
] as const;

// Verbindliche Winter-Hauptbilder aus dem Ordner "Neue fotos zum ersetzten".
// Hero: bewusst cineastische Querformate fuer die erste visuelle Ebene.
export const heroWinterImages: WinterImage[] = [
  {
    src: "/assets/images/winter/custom/hero-cinematic-sunrise-piste.jpg",
    alt: "Goldenes Morgenlicht ueber praeparierten Pisten in Obertauern",
  },
  {
    src: "/assets/images/winter/custom/hero-ski-carving-panorama.jpg",
    alt: "Dynamischer Carving-Moment vor weitem Obertauern-Panorama",
  },
  {
    src: "/assets/images/winter/custom/hero-ski-duo-panorama.jpg",
    alt: "Zwei Skifahrer mit Blick ueber die verschneiten Berge",
  },
];

// Winter-Feature-Bilder fuer prominente Abschnitte und parallaxartige Trenner.
export const winterFeatureImages: WinterImage[] = [
  {
    src: "/assets/images/winter/custom/feature-freeride-slope.jpg",
    alt: "Freeride-Abfahrt an einem klaren Wintertag in Obertauern",
  },
  {
    src: "/assets/images/winter/custom/feature-horse-sleigh-sun.jpg",
    alt: "Pferdeschlitten im Sonnenlicht vor winterlicher Bergkulisse",
  },
];

// Kuratierte Unterkunfts-Highlights fuer den Bereich "Ihr stilvoller Ausgangspunkt in Obertauern".
export const apartmentShowcaseImages = [
  {
    src: "/assets/images/apartments/b4-kueche-01.jpg",
    alt: "Wohnung B4 mit Kuechenbereich und Essplatz",
  },
  {
    src: "/assets/images/apartments/b14-wohnbereich-01.jpg",
    alt: "Wohnung B14 mit gemuetlicher Sitzecke",
  },
  {
    src: "/assets/images/apartments/b14-haus-parkplatz.jpg",
    alt: "Hausansicht der Wohnung B14 inklusive Parkplatz",
  },
] as const;

export const interiorImages = apartmentShowcaseImages;

// Winter-Galerie nutzt ausschliesslich die neu bereitgestellten Winterfotos.
// Reihenfolge: Landschaft -> Aktivitaet -> vertikale Details fuer harmonischen Flow.
export const winterGalleryImages: GalleryImage[] = [
  {
    src: "/assets/images/winter/custom/gallery-snowmobile-valley.jpg",
    alt: "Schneemobilfahrt durch das Tal bei strahlendem Himmel",
    filter: "winter",
    featured: true,
  },
  {
    src: "/assets/images/winter/custom/gallery-family-sledding-square.jpg",
    alt: "Familienmoment auf der Rodelstrecke im weichen Winterlicht",
    filter: "winter",
  },
  {
    src: "/assets/images/winter/custom/gallery-snowbike-portrait.jpg",
    alt: "Action auf dem Snowbike am Hang",
    filter: "winter",
  },
  {
    src: "/assets/images/winter/custom/gallery-sunset-alpenglow-portrait.jpg",
    alt: "Alpengluehen ueber der Schneelandschaft bei Sonnenuntergang",
    filter: "winter",
  },
];

export const galleryWinter: GalleryImage[] = winterGalleryImages;

// TODO Sommerbilder kuratieren: Nur Sommermotive mit ruhiger Farbwelt behalten.
// Wenn Serien stilistisch brechen, besser durch neue ruhige Bergmotive ersetzen.
export const gallerySummer: GalleryImage[] = [
  {
    src: "/assets/images/summer/summer-05.jpeg",
    alt: "Sommer in Obertauern mit weitem Panoramablick",
    filter: "sommer",
    featured: true,
  },
  {
    src: "/assets/images/summer/summer-02.jpeg",
    alt: "Wanderkulisse in den Bergen",
    filter: "sommer",
  },
  {
    src: "/assets/images/summer/summer-04.jpeg",
    alt: "Alpine Natur fur ruhige Sommertage",
    filter: "sommer",
  },
];

// Bilder fuer "Wohnungen anschauen" in der Galerie-Kategorie Unterkunft.
export const apartmentGalleryImages: GalleryImage[] = [
  {
    src: "/assets/images/apartments/b14-haus-parkplatz.jpg",
    alt: "Wohnung B14: Hausansicht mit Parkplatz im Winter",
    filter: "unterkunft",
    featured: true,
  },
  {
    src: "/assets/images/apartments/b14-wohnbereich-01.jpg",
    alt: "Wohnung B14: Wohn- und Essbereich",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b4-kueche-01.jpg",
    alt: "Wohnung B4: Kueche mit Esszone",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b4-wohnbereich-01.jpg",
    alt: "Wohnung B4: Wohnbereich mit Sofa",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b4-essbereich-01.jpg",
    alt: "Wohnung B4: Essbereich in Holzoptik",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b14-stockbett-01.jpg",
    alt: "Wohnung B14: Schlafbereich mit Stockbett",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b4-bad-01.jpg",
    alt: "Wohnung B4: Badezimmer",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b14-bad-01.jpg",
    alt: "Wohnung B14: Badezimmer",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b14-wohnbereich-02.jpg",
    alt: "Wohnung B14: Wohnbereich mit Sitzgruppe",
    filter: "unterkunft",
  },
  {
    src: "/assets/images/apartments/b4-wohnbereich-02.jpg",
    alt: "Wohnung B4: offener Wohnbereich",
    filter: "unterkunft",
  },
];

export const galleryAccommodation: GalleryImage[] = apartmentGalleryImages;

export const galleryImages: GalleryImage[] = [
  ...galleryWinter,
  ...galleryAccommodation,
  ...gallerySummer,
];

export const accommodationData = {
  title: "Ihr stilvoller Ausgangspunkt in Obertauern",
  intro:
    "Ferienwohnungen Platzer steht fur klare Linien, warme Materialien und einen hochwertigen Rahmen fur aktive Wintertage in den Bergen.",
  text:
    "Morgens direkt Richtung Piste, abends ankommen und entspannen. Die zentrale Lage und die ruhige Wohnqualitat machen die Unterkunft zum idealen Ort fur Skiurlaub und alpine Auszeit.",
  facts: [
    // TODO Unterkunftsdaten ergaenzen: echte Werte fur Personen, Zimmer, Betten und Bader einsetzen.
    { label: "Personen", value: "Details folgen" },
    { label: "Zimmer", value: "Details folgen" },
    { label: "Betten", value: "Details folgen" },
    { label: "Badezimmer", value: "Details folgen" },
    { label: "Ausstattung", value: "Ausstattungsdetails werden ergaenzt" },
  ],
} as const;

export const featureCards = [
  { title: "Highspeed WLAN", text: "Zuverlassige Verbindung in allen Bereichen." },
  { title: "Parkplatz", text: "Entspannte Anreise mit kurzen Wegen." },
  { title: "Voll ausgestattete Kuche", text: "Flexibel kochen in modernem Ambiente." },
  { title: "Skiraum", text: "Praktisch verstaut nach einem langen Skitag." },
  { title: "Balkon mit Bergblick", text: "Panorama und frische Alpenluft inklusive." },
  { title: "TV & Entertainment", text: "Ruhige Abende nach aktiven Stunden draussen." },
  { title: "Modernes Bad", text: "Klares Design und angenehmer Komfort." },
  { title: "Wohnbereich", text: "Hochwertig, warm und einladend gestaltet." },
] as const;

export const winterHighlights: Highlight[] = [
  {
    title: "Direkt im Wintermodus",
    text: "Kurze Wege zu den Liften und ein schneller Start in den Skitag.",
  },
  {
    title: "Schneesichere Stimmung",
    text: "Obertauern steht fur verlassliche Winterbedingungen und lange Saisonen.",
  },
  {
    title: "Erholung nach der Piste",
    text: "Nach aktiven Stunden wartet ein stilvoller, ruhiger Wohnbereich.",
  },
  {
    title: "Zentrale Lage",
    text: "Ski, Restaurants und Infrastruktur komfortabel erreichbar.",
  },
];

export const summerHighlights: Highlight[] = [
  {
    title: "Bergluft & Weitblick",
    text: "Ruhige Sommertage mit klarer Luft und offenen Panoramen.",
  },
  {
    title: "Wandern & Natur",
    text: "Vielfaltige Wege fur aktive Tage und entspannte Touren.",
  },
  {
    title: "Bewusst entschleunigen",
    text: "Alpiner Ruckzug fur Erholung, Ruhe und neue Energie.",
  },
];

export const pricingData = {
  title: "Preise & Zimmerinfos",
  note: "Die vollstaendige Preisliste kann zusaetzlich als PDF hinterlegt werden.",
  pdfLabel: "Preisliste als PDF",
  pdfHref: "/assets/docs/preise-2025-2026.pdf",
  rows: [
    // TODO Preise ergaenzen: Saisonpreise, Mindestaufenthalt und Nebenkosten mit echten Daten fuellen.
    { label: "Saison Winter", value: "Preis auf Anfrage" },
    { label: "Saison Sommer", value: "Preis auf Anfrage" },
    { label: "Mindestaufenthalt", value: "Details folgen" },
    { label: "Endreinigung", value: "Details folgen" },
  ],
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

export const locationData = {
  title: "Mitten in Obertauern",
  text: "Die zentrale Lage verbindet kurze Wege zur Piste mit unkomplizierter Erreichbarkeit. Ideal fur Wintergaste, die morgens schnell ins Skigebiet und abends entspannt zuruck in die Unterkunft mochten.",
  mapEmbedUrl: "https://www.google.com/maps?q=Obertauern&output=embed",
  pistePlanImage: "/assets/images/documents/pistenplan-obertauern-2025.jpg",
} as const;

export const inquiryData = {
  title: "Unverbindlich anfragen",
  text: "Teilen Sie uns Ihren Wunschzeitraum mit. Wir melden uns schnell mit einem passenden Angebot.",
  cta: "Unverbindlich anfragen",
  success: "Vielen Dank. Ihre Anfrage wurde erfolgreich ubermittelt.",
} as const;
