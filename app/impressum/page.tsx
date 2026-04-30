import Link from "next/link";
import { contactData } from "@/lib/site-data";

export default function ImpressumPage() {
  const phoneHref = `tel:${contactData.phone.replace(/\s+/g, "").replace(/\(0\)/g, "")}`;

  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl text-white">Impressum</h1>
      <p className="mt-4 text-slate-200/85">Informationspflichten gemaess 5 ECG und Offenlegung gemaess Mediengesetz.</p>

      <section className="mt-8 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Diensteanbieter</h2>
        <p>{contactData.name}</p>
        <p>{contactData.city}</p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href={phoneHref} className="hover:text-white">
            {contactData.phone}
          </a>
        </p>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${contactData.email}`} className="hover:text-white">
            {contactData.email}
          </a>
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Unternehmensgegenstand</h2>
        <p>Vermietung von Ferienwohnungen in Obertauern.</p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Haftung fuer Inhalte</h2>
        <p>
          Alle Inhalte wurden mit grosster Sorgfalt erstellt. Fuer Richtigkeit, Vollstaendigkeit und Aktualitaet kann jedoch
          keine Gewaehr uebernommen werden.
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Urheberrecht</h2>
        <p>
          Inhalte, Texte und Bilder dieser Website unterliegen dem Urheberrecht. Eine Verwendung ist nur mit ausdruecklicher
          Zustimmung zulaessig.
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Streitbeilegung</h2>
        <p>
          Verbraucher koennen Beschwerden an die EU-Online-Streitbeilegungsplattform richten:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-slate-400/70 underline-offset-2 hover:text-white"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>
      </section>

      <Link href="/" className="secondary-btn mt-8 inline-flex">
        Zuruck zur Startseite
      </Link>
    </main>
  );
}
