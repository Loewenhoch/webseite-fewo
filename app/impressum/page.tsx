import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl text-white">Impressum</h1>
      <p className="mt-4 text-slate-200/85">
        Platzhalterseite fur das Impressum. Die vollstandigen rechtlichen Angaben werden erganzt.
      </p>
      <p className="mt-6 text-sm text-slate-300/72">
        Hinweis: Diese Seite wurde als Strukturvorlage vorbereitet und kann jederzeit mit den finalen Daten aktualisiert werden.
      </p>
      <Link href="/" className="secondary-btn mt-8 inline-flex">
        Zuruck zur Startseite
      </Link>
    </main>
  );
}
