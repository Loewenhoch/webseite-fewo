"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { bookingData, inquiryData } from "@/lib/site-data";

type InquiryFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  arrival: string;
  departure: string;
  persons: string;
  message: string;
  privacyAccepted: boolean;
};

type InquiryFormErrors = Partial<Record<keyof InquiryFormState, string>>;

const initialForm: InquiryFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress: "",
  postalCode: "",
  city: "",
  country: "",
  arrival: "",
  departure: "",
  persons: "",
  message: "",
  privacyAccepted: false,
};

function nextDateIso(dateValue: string): string | undefined {
  if (!dateValue) return undefined;

  const parsed = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return undefined;

  parsed.setDate(parsed.getDate() + 1);
  return parsed.toISOString().slice(0, 10);
}

function validateForm(form: InquiryFormState): InquiryFormErrors {
  const errors: InquiryFormErrors = {};

  if (!form.firstName.trim()) errors.firstName = "Bitte Vornamen eingeben.";
  if (!form.lastName.trim()) errors.lastName = "Bitte Nachnamen eingeben.";

  if (!form.email.trim()) {
    errors.email = "Bitte E-Mail-Adresse eingeben.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Bitte gueltige E-Mail-Adresse eingeben.";
  }

  if (!form.phone.trim()) errors.phone = "Bitte Telefonnummer eingeben.";
  if (!form.streetAddress.trim()) errors.streetAddress = "Bitte Adresse eingeben.";
  if (!form.postalCode.trim()) errors.postalCode = "Bitte PLZ eingeben.";
  if (!form.city.trim()) errors.city = "Bitte Ort eingeben.";
  if (!form.country.trim()) errors.country = "Bitte Land eingeben.";
  if (!form.arrival) errors.arrival = "Bitte Anreise waehlen.";
  if (!form.departure) errors.departure = "Bitte Abreise waehlen.";

  if (form.arrival && form.departure && form.arrival >= form.departure) {
    errors.departure = "Abreise muss nach der Anreise liegen.";
  }

  if (!form.persons || Number(form.persons) <= 0) {
    errors.persons = "Bitte gueltige Personenanzahl eingeben.";
  }

  if (!form.message.trim()) errors.message = "Bitte Nachricht eingeben.";
  if (!form.privacyAccepted) errors.privacyAccepted = "Bitte Datenschutz bestaetigen.";

  return errors;
}

export function InquirySection() {
  const [form, setForm] = useState<InquiryFormState>(initialForm);
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitErrorMessage, setSubmitErrorMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const minDeparture = useMemo(() => nextDateIso(form.arrival), [form.arrival]);

  useEffect(() => {
    if (form.arrival && form.departure && form.departure <= form.arrival) {
      setForm((prev) => ({ ...prev, departure: "" }));
    }
  }, [form.arrival, form.departure]);

  const updateField = <K extends keyof InquiryFormState>(key: K, value: InquiryFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

    if (submitState !== "idle") {
      setSubmitState("idle");
      setSubmitErrorMessage("");
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitErrorMessage("Bitte die markierten Felder pruefen.");

      const firstErrorField = Object.keys(nextErrors)[0] as keyof InquiryFormState | undefined;
      if (firstErrorField) {
        const firstErrorElement = document.querySelector<HTMLElement>(`[name="${firstErrorField}"]`);
        firstErrorElement?.focus();
      }

      return;
    }

    setSubmitState("idle");
    setSubmitErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const responseData = (await response.json().catch(() => null)) as { error?: string } | null;
        const serverError = responseData?.error || "Anfrage konnte nicht gesendet werden.";
        throw new Error(serverError);
      }

      setSubmitState("success");
      setForm(initialForm);
      setErrors({});
      setSubmitErrorMessage("");
    } catch (error) {
      setSubmitState("error");
      const errorMessage = error instanceof Error ? error.message : "Anfrage konnte nicht gesendet werden.";
      setSubmitErrorMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionShell id="anfrage" className="section-band py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionReveal>
          <span className="section-eyebrow">Anfrage</span>
          <h2 className="headline-lg mt-4 text-white">{inquiryData.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{inquiryData.text}</p>
          <div className="mt-7 rounded-2xl border border-white/24 bg-white/12 p-5 backdrop-blur-md">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-slate-300/75">
              {bookingData.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-100/82">{bookingData.text}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={bookingData.primary.href}
                target="_blank"
                rel="noreferrer"
                className="primary-btn inline-flex"
              >
                {bookingData.primary.label}
              </a>
              <a
                href={bookingData.english.href}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn inline-flex"
              >
                {bookingData.english.label}
              </a>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-white/26 bg-[linear-gradient(160deg,rgba(255,255,255,0.16),rgba(32,77,111,0.44))] p-6 shadow-[0_30px_70px_-42px_rgba(0,0,0,0.9)] backdrop-blur-md"
          >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  Vorname
                  <input
                    name="firstName"
                    autoComplete="given-name"
                    className="form-input mt-1"
                    value={form.firstName}
                    onChange={(event) => updateField("firstName", event.target.value)}
                  />
                  {errors.firstName ? <span className="mt-1 block text-xs text-red-300">{errors.firstName}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Nachname
                  <input
                    name="lastName"
                    autoComplete="family-name"
                    className="form-input mt-1"
                    value={form.lastName}
                    onChange={(event) => updateField("lastName", event.target.value)}
                  />
                  {errors.lastName ? <span className="mt-1 block text-xs text-red-300">{errors.lastName}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  E-Mail
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="form-input mt-1"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-red-300">{errors.email}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Telefon
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="form-input mt-1"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                  />
                  {errors.phone ? <span className="mt-1 block text-xs text-red-300">{errors.phone}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  Adresse
                  <input
                    name="streetAddress"
                    autoComplete="street-address"
                    className="form-input mt-1"
                    value={form.streetAddress}
                    onChange={(event) => updateField("streetAddress", event.target.value)}
                  />
                  {errors.streetAddress ? <span className="mt-1 block text-xs text-red-300">{errors.streetAddress}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Ort
                  <input
                    name="city"
                    autoComplete="address-level2"
                    className="form-input mt-1"
                    value={form.city}
                    onChange={(event) => updateField("city", event.target.value)}
                  />
                  {errors.city ? <span className="mt-1 block text-xs text-red-300">{errors.city}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  PLZ
                  <input
                    name="postalCode"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    className="form-input mt-1"
                    value={form.postalCode}
                    onChange={(event) => updateField("postalCode", event.target.value)}
                  />
                  {errors.postalCode ? <span className="mt-1 block text-xs text-red-300">{errors.postalCode}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Land
                  <input
                    name="country"
                    autoComplete="country-name"
                    className="form-input mt-1"
                    value={form.country}
                    onChange={(event) => updateField("country", event.target.value)}
                  />
                  {errors.country ? <span className="mt-1 block text-xs text-red-300">{errors.country}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="text-sm text-slate-100/90">
                  Anreise
                  <input
                    name="arrival"
                    type="date"
                    min={today}
                    className="form-input mt-1"
                    value={form.arrival}
                    onChange={(event) => updateField("arrival", event.target.value)}
                  />
                  {errors.arrival ? <span className="mt-1 block text-xs text-red-300">{errors.arrival}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Abreise
                  <input
                    name="departure"
                    type="date"
                    min={minDeparture}
                    className="form-input mt-1"
                    value={form.departure}
                    onChange={(event) => updateField("departure", event.target.value)}
                  />
                  {errors.departure ? <span className="mt-1 block text-xs text-red-300">{errors.departure}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Personen
                  <input
                    name="persons"
                    type="number"
                    min={1}
                    max={12}
                    step={1}
                    inputMode="numeric"
                    className="form-input mt-1"
                    value={form.persons}
                    onChange={(event) => updateField("persons", event.target.value)}
                  />
                  {errors.persons ? <span className="mt-1 block text-xs text-red-300">{errors.persons}</span> : null}
                </label>
              </div>

              <label className="mt-4 block text-sm text-slate-100/90">
                Nachricht
                <textarea
                  name="message"
                  className="form-input mt-1 min-h-32 resize-y"
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
                {errors.message ? <span className="mt-1 block text-xs text-red-300">{errors.message}</span> : null}
              </label>

              <label className="mt-4 flex items-start gap-2 text-xs text-slate-300/88 sm:text-sm">
                <input
                  name="privacyAccepted"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-400/45 bg-slate-900"
                  checked={form.privacyAccepted}
                  onChange={(event) => updateField("privacyAccepted", event.target.checked)}
                />
                <span>
                  Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Daten für die Anfrage zu.
                </span>
              </label>
              {errors.privacyAccepted ? (
                <span className="mt-1 block text-xs text-red-300">{errors.privacyAccepted}</span>
              ) : null}

              <button type="submit" disabled={isSubmitting} className="primary-btn mt-6 w-full disabled:cursor-not-allowed disabled:opacity-80">
                {isSubmitting ? "Anfrage wird gesendet..." : inquiryData.cta}
              </button>

              {submitState === "success" ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-300/30 bg-emerald-900/25 px-3 py-2 text-sm text-emerald-200">
                  <CircleCheck size={16} aria-hidden="true" />
                  {inquiryData.success}
                </p>
              ) : null}

              {submitState === "error" ? (
                <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-red-300/28 bg-red-900/20 px-3 py-2 text-sm text-red-200">
                  <CircleAlert size={16} aria-hidden="true" />
                  {submitErrorMessage || "Bitte Eingaben pruefen oder spaeter erneut versuchen."}
                </p>
              ) : null}
          </form>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
