import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const INQUIRY_RECIPIENT = "fewo@platzer.co.at";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type InquiryPayload = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  persons: string;
  message: string;
  privacyAccepted: boolean;
};

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function readPayload(body: unknown): InquiryPayload {
  const source = body && typeof body === "object" ? (body as Record<string, unknown>) : {};

  return {
    firstName: readString(source.firstName),
    lastName: readString(source.lastName),
    address: readString(source.address),
    email: readString(source.email),
    phone: readString(source.phone),
    arrival: readString(source.arrival),
    departure: readString(source.departure),
    persons: readString(source.persons),
    message: readString(source.message),
    privacyAccepted: source.privacyAccepted === true,
  };
}

function validatePayload(payload: InquiryPayload): string[] {
  const errors: string[] = [];
  const personsCount = Number(payload.persons);

  if (!payload.firstName) errors.push("Vorname fehlt.");
  if (!payload.lastName) errors.push("Nachname fehlt.");
  if (!payload.address) errors.push("Adresse fehlt.");
  if (!payload.email) {
    errors.push("E-Mail fehlt.");
  } else if (!EMAIL_REGEX.test(payload.email)) {
    errors.push("E-Mail ist ungueltig.");
  }
  if (!payload.arrival) errors.push("Anreise fehlt.");
  if (!payload.departure) errors.push("Abreise fehlt.");
  if (payload.arrival && payload.departure && payload.arrival > payload.departure) {
    errors.push("Abreise liegt vor der Anreise.");
  }
  if (!Number.isFinite(personsCount) || personsCount <= 0) {
    errors.push("Personenanzahl ist ungueltig.");
  }
  if (!payload.message) errors.push("Nachricht fehlt.");
  if (!payload.privacyAccepted) errors.push("Datenschutz fehlt.");

  return errors;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPlainText(payload: InquiryPayload): string {
  const phoneText = payload.phone || "Nicht angegeben";

  return [
    "Neue unverbindliche Anfrage ueber die Website",
    "",
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Adresse: ${payload.address}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${phoneText}`,
    `Anreise: ${payload.arrival}`,
    `Abreise: ${payload.departure}`,
    `Personen: ${payload.persons}`,
    "",
    "Nachricht:",
    payload.message,
    "",
    "Datenschutz akzeptiert: Ja",
  ].join("\n");
}

function formatHtml(payload: InquiryPayload): string {
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const phoneText = payload.phone || "Nicht angegeben";

  return [
    "<h2>Neue unverbindliche Anfrage ueber die Website</h2>",
    "<table cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>",
    `<tr><td><strong>Name</strong></td><td>${escapeHtml(fullName)}</td></tr>`,
    `<tr><td><strong>Adresse</strong></td><td>${escapeHtml(payload.address)}</td></tr>`,
    `<tr><td><strong>E-Mail</strong></td><td>${escapeHtml(payload.email)}</td></tr>`,
    `<tr><td><strong>Telefon</strong></td><td>${escapeHtml(phoneText)}</td></tr>`,
    `<tr><td><strong>Anreise</strong></td><td>${escapeHtml(payload.arrival)}</td></tr>`,
    `<tr><td><strong>Abreise</strong></td><td>${escapeHtml(payload.departure)}</td></tr>`,
    `<tr><td><strong>Personen</strong></td><td>${escapeHtml(payload.persons)}</td></tr>`,
    "</table>",
    "<p><strong>Nachricht</strong></p>",
    `<p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>`,
    "<p><em>Datenschutz akzeptiert: Ja</em></p>",
  ].join("");
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !user || !pass || !Number.isFinite(port)) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const payload = readPayload(body);
    const validationErrors = validatePayload(payload);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          error: "Formularangaben sind ungueltig.",
          details: validationErrors,
        },
        { status: 400 },
      );
    }

    const transporter = createTransporter();
    if (!transporter) {
      console.error("SMTP ist nicht konfiguriert. Bitte SMTP_* Umgebungsvariablen setzen.");

      return NextResponse.json(
        {
          error: "E-Mail-Versand ist nicht konfiguriert.",
        },
        { status: 500 },
      );
    }

    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const subject = `Neue unverbindliche Anfrage - ${payload.firstName} ${payload.lastName}`.trim();

    await transporter.sendMail({
      from,
      to: INQUIRY_RECIPIENT,
      replyTo: payload.email,
      subject,
      text: formatPlainText(payload),
      html: formatHtml(payload),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Versenden der Anfrage:", error);
    return NextResponse.json({ error: "Versand fehlgeschlagen." }, { status: 500 });
  }
}
