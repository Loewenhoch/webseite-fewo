import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const INQUIRY_RECIPIENT = "fewo@platzer.co.at";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type InquiryPayload = {
  firstName: string;
  lastName: string;
  street: string;
  zipCode: string;
  city: string;
  country: string;
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
    street: readString(source.street) || readString(source.address),
    zipCode: readString(source.zipCode) || readString(source.plz),
    city: readString(source.city) || readString(source.ort),
    country: readString(source.country) || readString(source.land),
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
  if (!payload.street) errors.push("Strasse fehlt.");
  if (!payload.zipCode) errors.push("PLZ fehlt.");
  if (!payload.city) errors.push("Ort fehlt.");
  if (!payload.country) errors.push("Land fehlt.");
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
    `Strasse: ${payload.street}`,
    `PLZ: ${payload.zipCode}`,
    `Ort: ${payload.city}`,
    `Land: ${payload.country}`,
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
    `<tr><td><strong>Strasse</strong></td><td>${escapeHtml(payload.street)}</td></tr>`,
    `<tr><td><strong>PLZ</strong></td><td>${escapeHtml(payload.zipCode)}</td></tr>`,
    `<tr><td><strong>Ort</strong></td><td>${escapeHtml(payload.city)}</td></tr>`,
    `<tr><td><strong>Land</strong></td><td>${escapeHtml(payload.country)}</td></tr>`,
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

function stripWrappingQuotes(value: string): string {
  const trimmed = value.trim();
  if (trimmed.length >= 2) {
    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      return trimmed.slice(1, -1);
    }
    if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
      return trimmed.slice(1, -1);
    }
  }

  return trimmed;
}

function readEnvFromLocalFile(name: string): string | undefined {
  const cwd = process.cwd();
  const candidates = [
    path.join(cwd, ".env.local"),
    path.join(cwd, "..", ".env.local"),
    path.join(cwd, "..", "..", ".env.local"),
  ];

  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) {
      continue;
    }

    const content = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
    const lines = content.split(/\r?\n/);

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        continue;
      }

      const separatorIndex = line.indexOf("=");
      if (separatorIndex <= 0) {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim().replace(/^\uFEFF/, "");
      if (key !== name) {
        continue;
      }

      const value = line.slice(separatorIndex + 1);
      return stripWrappingQuotes(value);
    }
  }

  return undefined;
}

function getEnv(name: string): string | undefined {
  const direct = process.env[name];
  if (typeof direct === "string" && direct.trim()) {
    return direct.trim();
  }

  const bomPrefix = String.fromCharCode(0xfeff);
  const bomDirect = process.env[`${bomPrefix}${name}`];
  if (typeof bomDirect === "string" && bomDirect.trim()) {
    return bomDirect.trim();
  }

  for (const [key, value] of Object.entries(process.env)) {
    if (key.replace(/^\uFEFF/, "") === name && typeof value === "string" && value.trim()) {
      return value.trim();
    }
  }

  const fromFile = readEnvFromLocalFile(name);
  if (typeof fromFile === "string" && fromFile.trim()) {
    return fromFile.trim();
  }

  return undefined;
}

function createTransporter() {
  const host = getEnv("SMTP_HOST");
  const portValue = getEnv("SMTP_PORT") ?? "587";
  const port = Number(portValue);
  const user = getEnv("SMTP_USER");
  const pass = getEnv("SMTP_PASS");
  const secure = (getEnv("SMTP_SECURE") ?? "false").toLowerCase() === "true";

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
      const missing = [
        getEnv("SMTP_HOST") ? null : "SMTP_HOST",
        getEnv("SMTP_USER") ? null : "SMTP_USER",
        getEnv("SMTP_PASS") ? null : "SMTP_PASS",
        Number.isFinite(Number(getEnv("SMTP_PORT") ?? "587")) ? null : "SMTP_PORT",
      ].filter(Boolean);

      console.error(
        "SMTP ist nicht konfiguriert. Bitte SMTP_* Umgebungsvariablen setzen.",
        missing.length > 0 ? `Fehlend/ungueltig: ${missing.join(", ")}` : "",
      );

      return NextResponse.json(
        {
          error:
            missing.length > 0
              ? `E-Mail-Versand ist nicht konfiguriert (fehlt: ${missing.join(", ")}).`
              : "E-Mail-Versand ist nicht konfiguriert.",
        },
        { status: 500 },
      );
    }

    const from = getEnv("SMTP_FROM") || getEnv("SMTP_USER");
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

