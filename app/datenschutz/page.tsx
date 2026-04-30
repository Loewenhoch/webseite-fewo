import Link from "next/link";
import { contactData } from "@/lib/site-data";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl text-white">Datenschutz</h1>
      <p className="mt-4 text-slate-200/85">
        Diese Datenschutzhinweise informieren ueber Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf
        dieser Website.
      </p>

      <section className="mt-8 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Verantwortliche Stelle</h2>
        <p>{contactData.name}</p>
        <p>{contactData.city}</p>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${contactData.email}`} className="hover:text-white">
            {contactData.email}
          </a>
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Verarbeitete Daten</h2>
        <p>
          Bei Nutzung des Anfrageformulars verarbeiten wir folgende Angaben: Vorname, Nachname, E-Mail, Telefonnummer,
          Adresse, PLZ, Ort, Land, Reisezeitraum, Personenanzahl und Nachricht.
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Zweck und Rechtsgrundlage</h2>
        <p>
          Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage und zur Vorbereitung eines Angebots. Rechtsgrundlage ist Art.
          6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahmen) sowie unser berechtigtes Interesse an effizienter Kommunikation
          gem. Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Empfaenger und Speicherdauer</h2>
        <p>
          Die Daten werden nur an technisch notwendige Dienstleister (Hosting und E-Mail-Versand) uebermittelt. Wir speichern
          Anfragen nur so lange, wie es fuer die Bearbeitung erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mt-5 space-y-2 rounded-2xl border border-slate-300/18 bg-slate-900/35 p-5 text-sm text-slate-200/88">
        <h2 className="text-base font-semibold text-white">Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung, Datenuebertragbarkeit und Widerspruch
          gegen die Verarbeitung Ihrer Daten. Bei Fragen oder Anliegen kontaktieren Sie uns bitte direkt per E-Mail.
        </p>
      </section>

      <p className="mt-6 text-xs text-slate-300/72">Stand: April 2026</p>

      <Link href="/" className="secondary-btn mt-8 inline-flex">
        Zuruck zur Startseite
      </Link>
    </main>
  );
}
