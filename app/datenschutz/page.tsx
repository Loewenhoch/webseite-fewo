import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl text-white">Datenschutz</h1>
      <p className="mt-4 text-slate-200/85">
        Platzhalterseite fur die Datenschutzerklarung. Die finalen Inhalte konnen hier erganzt werden.
      </p>
      <p className="mt-6 text-sm text-slate-300/72">
        Hinweis: Diese Seite ist vorbereitet, damit die Navigation bereits vollstandig ist und spater nur noch Text eingesetzt werden muss.
      </p>
      <Link href="/" className="secondary-btn mt-8 inline-flex">
        Zuruck zur Startseite
      </Link>
    </main>
  );
}
