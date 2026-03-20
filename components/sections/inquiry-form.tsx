"use client";

import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, CircleCheck, CircleAlert } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Reveal } from "@/components/ui/reveal";
import { siteContent } from "@/lib/site-content";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  persons: string;
  message: string;
  privacyAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  arrival: "",
  departure: "",
  persons: "",
  message: "",
  privacyAccepted: false,
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.firstName.trim()) errors.firstName = "Bitte Vornamen eingeben.";
  if (!form.lastName.trim()) errors.lastName = "Bitte Nachnamen eingeben.";
  if (!form.email.trim()) {
    errors.email = "Bitte E-Mail-Adresse eingeben.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Bitte gultige E-Mail-Adresse eingeben.";
  }

  if (!form.arrival) errors.arrival = "Bitte Anreise auswahlen.";
  if (!form.departure) errors.departure = "Bitte Abreise auswahlen.";

  if (form.arrival && form.departure && form.arrival > form.departure) {
    errors.departure = "Abreise muss nach der Anreise liegen.";
  }

  if (!form.persons || Number(form.persons) <= 0) {
    errors.persons = "Bitte Anzahl Personen eingeben.";
  }

  if (!form.message.trim()) errors.message = "Bitte Nachricht eingeben.";
  if (!form.privacyAccepted) errors.privacyAccepted = "Bitte Datenschutz akzeptieren.";

  return errors;
}

export function InquiryFormSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");

  const minDeparture = useMemo(() => form.arrival || undefined, [form.arrival]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");

    try {
      // TODO Echte Buchungslogik verbinden: Hier kann spater ein API-Endpoint oder ein Buchungssystem integriert werden.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitState("success");
      setForm(initialState);
    } catch {
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200";

  return (
    <section id="anfrage" className="bg-slate-950 py-20 text-white sm:py-24">
      <SectionContainer>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_1fr]">
          <Reveal>
            <p className="section-eyebrow section-eyebrow-dark">Anfrage</p>
            <h2 className="section-title mt-3 text-white">{siteContent.inquiry.title}</h2>
            <p className="mt-4 text-white/75">{siteContent.inquiry.text}</p>

            <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm font-semibold text-amber-200">Verfugbarkeitskalender</p>
              <p className="mt-2 text-sm text-white/75">
                Kalender-Integration als Platzhalter vorbereitet. Weitere Details folgen.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs text-white/80">
                <CalendarDays size={14} aria-hidden="true" />
                Echtzeit-Verfugbarkeit kann spater angebunden werden.
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/15 bg-white p-6 text-slate-900 shadow-2xl shadow-black/20"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  Vorname
                  <input
                    className={inputClass}
                    type="text"
                    value={form.firstName}
                    onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
                  />
                  {errors.firstName ? <span className="mt-1 block text-xs text-red-600">{errors.firstName}</span> : null}
                </label>

                <label className="text-sm font-medium">
                  Nachname
                  <input
                    className={inputClass}
                    type="text"
                    value={form.lastName}
                    onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
                  />
                  {errors.lastName ? <span className="mt-1 block text-xs text-red-600">{errors.lastName}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-medium">
                  E-Mail
                  <input
                    className={inputClass}
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
                </label>

                <label className="text-sm font-medium">
                  Telefon
                  <input
                    className={inputClass}
                    type="tel"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  />
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="text-sm font-medium sm:col-span-1">
                  Anreise
                  <input
                    className={inputClass}
                    type="date"
                    value={form.arrival}
                    onChange={(event) => setForm((prev) => ({ ...prev, arrival: event.target.value }))}
                  />
                  {errors.arrival ? <span className="mt-1 block text-xs text-red-600">{errors.arrival}</span> : null}
                </label>

                <label className="text-sm font-medium sm:col-span-1">
                  Abreise
                  <input
                    className={inputClass}
                    type="date"
                    min={minDeparture}
                    value={form.departure}
                    onChange={(event) => setForm((prev) => ({ ...prev, departure: event.target.value }))}
                  />
                  {errors.departure ? <span className="mt-1 block text-xs text-red-600">{errors.departure}</span> : null}
                </label>

                <label className="text-sm font-medium sm:col-span-1">
                  Anzahl Personen
                  <input
                    className={inputClass}
                    type="number"
                    min={1}
                    value={form.persons}
                    onChange={(event) => setForm((prev) => ({ ...prev, persons: event.target.value }))}
                  />
                  {errors.persons ? <span className="mt-1 block text-xs text-red-600">{errors.persons}</span> : null}
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium">
                Nachricht
                <textarea
                  className={`${inputClass} min-h-32 resize-y`}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                />
                {errors.message ? <span className="mt-1 block text-xs text-red-600">{errors.message}</span> : null}
              </label>

              <label className="mt-4 flex items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                  checked={form.privacyAccepted}
                  onChange={(event) =>
                    setForm((prev) => ({
                      ...prev,
                      privacyAccepted: event.target.checked,
                    }))
                  }
                />
                <span>
                  Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.
                </span>
              </label>
              {errors.privacyAccepted ? (
                <span className="mt-1 block text-xs text-red-600">{errors.privacyAccepted}</span>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? "Anfrage wird gesendet..." : siteContent.inquiry.cta}
              </button>

              {submitState === "success" ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
                  <CircleCheck size={16} aria-hidden="true" />
                  {siteContent.inquiry.successMessage}
                </p>
              ) : null}

              {submitState === "error" ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
                  <CircleAlert size={16} aria-hidden="true" />
                  Bitte die markierten Felder prufen.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
