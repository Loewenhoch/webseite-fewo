export type GalleryCategory = "unterkunft" | "winter" | "sommer";

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

export type Feature = {
  title: string;
  description: string;
};

export type PriceItem = {
  label: string;
  value: string;
};

export const siteContent = {
  seo: {
    title: "Ferienwohnungen Platzer | Ferienwohnungen in Obertauern",
    description:
      "Moderne Ferienwohnungen Platzer in Obertauern: ideal fur Skiurlaub im Winter und Erholung in den Bergen im Sommer. Jetzt unverbindlich anfragen.",
    siteUrl: "https://www.platzer-obertauern.at",
  },
  brand: {
    name: "Ferienwohnungen Platzer",
    claim: "Ferienwohnungen in Obertauern - Urlaub direkt in den Bergen",
    subClaim: "Perfekt fur Skiurlaub und Sommerauszeit",
    logo: "/assets/images/branding/logo-neu-weiss-2026.png",
  },
  navItems: [
    { label: "Unterkunft", href: "#unterkunft" },
    { label: "Ausstattung", href: "#ausstattung" },
    { label: "Winter & Sommer", href: "#erleben" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise", href: "#preise" },
    { label: "Lage", href: "#lage" },
    { label: "Anfrage", href: "#anfrage" },
  ],
  heroImages: [
    // Winter-Hero nutzt die neu kuratierten Bilder aus "Neue fotos zum ersetzten".
    {
      src: "/assets/images/winter/custom/hero-cinematic-sunrise-piste.jpg",
      alt: "Goldenes Morgenlicht ueber den Pisten in Obertauern",
    },
    {
      src: "/assets/images/winter/custom/hero-ski-carving-panorama.jpg",
      alt: "Dynamischer Carving-Moment in Obertauern",
    },
    {
      src: "/assets/images/winter/custom/hero-ski-duo-panorama.jpg",
      alt: "Panoramablick mit zwei Skifahrern",
    },
  ],
  about: {
    title: "Ihre Auszeit in Obertauern",
    intro:
      "Ferienwohnungen Platzer verbindet alpine Gemutlichkeit mit modernem Wohnkomfort. Die zentrale Lage ermoglicht kurze Wege zu Liften, Restaurants und den schonsten Touren der Region.",
    text:
      "Ob sportlicher Skiurlaub, entspannte Tage im Schnee oder ruhige Sommerwochen mit Wandern und frischer Bergluft: Hier finden Sie den passenden Ausgangspunkt fur jede Jahreszeit.",
    facts: [
      // TODO Unterkunftsdaten erganzen: Werte bei Personen, Zimmern, Betten, Badern und Ausstattung einfach anpassen.
      { label: "Personen", value: "Platzhalter" },
      { label: "Zimmer", value: "Platzhalter" },
      { label: "Betten", value: "Platzhalter" },
      { label: "Badezimmer", value: "Platzhalter" },
      { label: "Ausstattung", value: "Weitere Details folgen" },
    ],
  },
  features: [
    {
      title: "Schnelles WLAN",
      description: "Stabile Verbindung in allen Wohnbereichen.",
    },
    {
      title: "Parkplatz",
      description: "Bequeme Anreise mit reservierten Stellflachen.",
    },
    {
      title: "Voll ausgestattete Kuche",
      description: "Kochen wie zuhause mit moderner Grundausstattung.",
    },
    {
      title: "Skiraum",
      description: "Praktischer Stauraum fur Ski und Ausrustung.",
    },
    {
      title: "Balkon mit Bergblick",
      description: "Freier Blick auf die alpine Landschaft.",
    },
    {
      title: "TV",
      description: "Gemutliche Abende nach aktiven Urlaubstagen.",
    },
    {
      title: "Modernes Bad",
      description: "Hochwertige Ausstattung mit klarer Formensprache.",
    },
    {
      title: "Wohnbereich",
      description: "Warme Materialien fur entspannte Stunden.",
    },
  ] as Feature[],
  seasons: {
    winter: {
      title: "Winterurlaub in Obertauern",
      text: "Direkt ins Skigebiet starten, lange Skitage genieBen und den Abend in einer ruhigen, komfortablen Ferienwohnung ausklingen lassen. Der Winter steht bei uns im Mittelpunkt.",
      image: "/assets/images/winter/custom/feature-freeride-slope.jpg",
      alt: "Freeride-Abfahrt im verschneiten Obertauern",
    },
    summer: {
      title: "Sommer in den Bergen",
      text: "Wandern, durchatmen und Natur erleben: Obertauern bietet im Sommer weite Panoramen, klare Luft und ideale Bedingungen fur aktive wie entspannte Urlaubstage.",
      image: "/assets/images/summer/summer-05.jpeg",
      alt: "Bergsommer rund um Obertauern",
    },
  },
  gallery: [
    // Winter-Galerie nutzt die neu kuratierten Winterfotos.
    {
      src: "/assets/images/apartments/b14-haus-parkplatz.jpg",
      alt: "Wohnung B14 mit Hausansicht und Parkplatz",
      category: "unterkunft",
    },
    {
      src: "/assets/images/apartments/b14-wohnbereich-01.jpg",
      alt: "Wohnung B14 mit Sitzecke",
      category: "unterkunft",
    },
    {
      src: "/assets/images/apartments/b4-kueche-01.jpg",
      alt: "Wohnung B4 mit Kuechenbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/apartments/b4-wohnbereich-01.jpg",
      alt: "Wohnung B4 mit Wohnbereich",
      category: "unterkunft",
    },
    {
      src: "/assets/images/apartments/b4-bad-01.jpg",
      alt: "Wohnung B4 Badezimmer",
      category: "unterkunft",
    },
    {
      src: "/assets/images/winter/custom/gallery-snowmobile-valley.jpg",
      alt: "Schneemobilfahrt im Tal",
      category: "winter",
    },
    {
      src: "/assets/images/winter/custom/gallery-family-sledding-square.jpg",
      alt: "Familienmoment auf der Rodelstrecke",
      category: "winter",
    },
    {
      src: "/assets/images/winter/custom/gallery-snowbike-portrait.jpg",
      alt: "Action auf dem Snowbike am Hang",
      category: "winter",
    },
    {
      src: "/assets/images/summer/summer-01.jpeg",
      alt: "Sommerliche Berge in Obertauern",
      category: "sommer",
    },
    {
      src: "/assets/images/summer/summer-03.jpeg",
      alt: "Wandergebiet im Sommer",
      category: "sommer",
    },
    {
      src: "/assets/images/summer/summer-06.jpeg",
      alt: "Natur und Erholung in den Bergen",
      category: "sommer",
    },
  ] as GalleryImage[],
  pricing: {
    title: "Zimmerinfo & Preise",
    note: "Die vollstandige Preisliste kann zusatzlich als PDF hinterlegt werden.",
    pdfLabel: "Preisliste als PDF",
    pdfHref: "/assets/docs/preise-2025-2026.pdf",
    items: [
      // TODO Preise erganzen: Saisonpreise und Nebenkosten hier direkt austauschen.
      { label: "Saison Winter", value: "Preis auf Anfrage" },
      { label: "Saison Sommer", value: "Preis auf Anfrage" },
      { label: "Mindestaufenthalt", value: "Platzhalter" },
      { label: "Endreinigung", value: "Platzhalter" },
    ] as PriceItem[],
  },
  location: {
    title: "Zentrale Lage in Obertauern",
    text: "Die Unterkunft liegt in Obertauern und bietet kurze Wege zu Liften, Einkaufsmoglichkeiten und Freizeitangeboten. Perfekt fur aktive Wintertage und entspannte Sommerausfluge.",
    addressLine: "Obertauern - 5562 Obertauern",
    mapEmbedUrl: "https://www.google.com/maps?q=Obertauern&output=embed",
    pistePlanImage: "/assets/images/documents/pistenplan-obertauern-2025.jpg",
  },
  inquiry: {
    title: "Unverbindlich anfragen",
    text: "Senden Sie uns Ihre Wunschdaten - wir melden uns zeitnah mit einem passenden Angebot.",
    cta: "Unverbindlich anfragen",
    successMessage:
      "Vielen Dank fur Ihre Anfrage. Wir melden uns so schnell wie moglich bei Ihnen.",
  },
  contact: {
    name: "Ferienwohnungen Platzer",
    location: "Obertauern - 5562 Obertauern",
    phone: "+43(0)664 41 66 339",
    email: "fewo@platzer.co.at",
    fax: "Optional auf Anfrage",
  },
  legalLinks: {
    impressum: "/impressum",
    datenschutz: "/datenschutz",
    agb: "/assets/docs/agb/AGBH_061115.pdf",
  },
} as const;
