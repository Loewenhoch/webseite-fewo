import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactData, legalLinks, navData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-300/15 bg-[linear-gradient(180deg,#090f1d,#070c18)] py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div>
          <p className="font-display text-3xl text-white">{contactData.name}</p>
          <p className="mt-2 text-sm text-slate-300/80">{contactData.city}</p>

          <div className="mt-5 space-y-2 text-sm text-slate-200/90">
            <p className="inline-flex items-center gap-2">
              <Phone size={15} aria-hidden="true" />
              <a href={`tel:${contactData.phone}`} className="hover:text-white">
                {contactData.phone}
              </a>
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail size={15} aria-hidden="true" />
              <a href={`mailto:${contactData.email}`} className="hover:text-white">
                {contactData.email}
              </a>
            </p>
            <p className="inline-flex items-center gap-2 text-slate-300/75">
              <MapPin size={15} aria-hidden="true" />
              Obertauern
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/70">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200/88">
            {navData.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/70">Rechtliches</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-200/88">
            <li>
              <Link href={legalLinks.impressum} className="hover:text-white">
                Impressum
              </Link>
            </li>
            <li>
              <Link href={legalLinks.datenschutz} className="hover:text-white">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href={legalLinks.agb} target="_blank" className="hover:text-white">
                AGB
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-slate-300/10 px-5 pt-6 text-xs text-slate-300/65 sm:px-8 lg:px-12">
        <p>
          (c) {new Date().getFullYear()} {contactData.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
