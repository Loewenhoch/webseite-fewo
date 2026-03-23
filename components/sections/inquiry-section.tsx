"use client";

import { FormEvent, useMemo, useState } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { inquiryData } from "@/lib/site-data";

type InquiryFormState = {
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

type InquiryFormErrors = Partial<Record<keyof InquiryFormState, string>>;

const initialForm: InquiryFormState = {
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
  if (!form.arrival) errors.arrival = "Bitte Anreise waehlen.";
  if (!form.departure) errors.departure = "Bitte Abreise waehlen.";

  if (form.arrival && form.departure && form.arrival > form.departure) {
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

  const minDeparture = useMemo(() => form.arrival || undefined, [form.arrival]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("error");
      setSubmitErrorMessage("Bitte die markierten Felder pruefen.");
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
    <section id="anfrage" className="py-20 sm:py-24">
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <span className="section-eyebrow">Anfrage</span>
            <h2 className="headline-lg mt-4 text-white">{inquiryData.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{inquiryData.text}</p>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-slate-300/23 bg-[linear-gradient(160deg,rgba(15,30,55,0.9),rgba(8,18,35,0.84))] p-6 shadow-[0_30px_55px_-35px_rgba(0,0,0,0.9)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  Vorname
                  <input
                    className="form-input mt-1"
                    value={form.firstName}
                    onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
                  />
                  {errors.firstName ? <span className="mt-1 block text-xs text-red-300">{errors.firstName}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Nachname
                  <input
                    className="form-input mt-1"
                    value={form.lastName}
                    onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
                  />
                  {errors.lastName ? <span className="mt-1 block text-xs text-red-300">{errors.lastName}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-100/90">
                  E-Mail
                  <input
                    type="email"
                    className="form-input mt-1"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  />
                  {errors.email ? <span className="mt-1 block text-xs text-red-300">{errors.email}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Telefon
                  <input
                    type="tel"
                    className="form-input mt-1"
                    value={form.phone}
                    onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                  />
                  {errors.phone ? <span className="mt-1 block text-xs text-red-300">{errors.phone}</span> : null}
                </label>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <label className="text-sm text-slate-100/90">
                  Anreise
                  <input
                    type="date"
                    className="form-input mt-1"
                    value={form.arrival}
                    onChange={(event) => setForm((prev) => ({ ...prev, arrival: event.target.value }))}
                  />
                  {errors.arrival ? <span className="mt-1 block text-xs text-red-300">{errors.arrival}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Abreise
                  <input
                    type="date"
                    min={minDeparture}
                    className="form-input mt-1"
                    value={form.departure}
                    onChange={(event) => setForm((prev) => ({ ...prev, departure: event.target.value }))}
                  />
                  {errors.departure ? <span className="mt-1 block text-xs text-red-300">{errors.departure}</span> : null}
                </label>

                <label className="text-sm text-slate-100/90">
                  Personen
                  <input
                    type="number"
                    min={1}
                    className="form-input mt-1"
                    value={form.persons}
                    onChange={(event) => setForm((prev) => ({ ...prev, persons: event.target.value }))}
                  />
                  {errors.persons ? <span className="mt-1 block text-xs text-red-300">{errors.persons}</span> : null}
                </label>
              </div>

              <label className="mt-4 block text-sm text-slate-100/90">
                Nachricht
                <textarea
                  className="form-input mt-1 min-h-32 resize-y"
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                />
                {errors.message ? <span className="mt-1 block text-xs text-red-300">{errors.message}</span> : null}
              </label>

              <label className="mt-4 flex items-start gap-2 text-xs text-slate-300/88 sm:text-sm">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-400/45 bg-slate-900"
                  checked={form.privacyAccepted}
                  onChange={(event) => setForm((prev) => ({ ...prev, privacyAccepted: event.target.checked }))}
                />
                <span>
                  Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Daten fur die Anfrage zu.
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
    </section>
  );
}
