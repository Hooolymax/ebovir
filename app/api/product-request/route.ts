import { NextResponse } from "next/server";
import { exosomeProducts as englishProducts } from "@/lib/content";
import { getContent } from "@/lib/i18n/content";
import { isLocale, type Locale } from "@/i18n/routing";

export const runtime = "nodejs";

const TEST_RECIPIENT = "volitantandre@gmail.com";
const TEST_TURNSTILE_SECRET = "1x0000000000000000000000000000000AA";

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function jsonError(status: number, code: string) {
  return NextResponse.json({ ok: false, code }, { status });
}

async function verifyTurnstile(token: string, request: Request) {
  const secret =
    process.env.TURNSTILE_SECRET_KEY ??
    (process.env.NODE_ENV === "development" ? TEST_TURNSTILE_SECRET : "");
  if (!secret || !token) return false;

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (forwardedFor) body.set("remoteip", forwardedFor);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
    cache: "no-store",
  });
  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) return jsonError(403, "invalid_origin");
    } catch {
      return jsonError(403, "invalid_origin");
    }
  }

  let input: Record<string, unknown>;
  try {
    input = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError(400, "invalid_json");
  }

  // Quietly accept bot submissions caught by the honeypot without sending mail.
  if (cleanString(input.website, 200)) return NextResponse.json({ ok: true });

  const localeValue = cleanString(input.locale, 10);
  const locale: Locale = isLocale(localeValue) ? localeValue : "en";
  const productSlug = cleanString(input.productSlug, 160);
  const englishProduct = englishProducts.items.find((item) => item.slug === productSlug);
  const localizedProduct = getContent(locale).exosomeProducts.items.find((item) => item.slug === productSlug);
  if (!englishProduct || !localizedProduct) return jsonError(400, "invalid_product");

  const name = cleanString(input.name, 120);
  const email = cleanString(input.email, 254).toLowerCase();
  const organization = cleanString(input.organization, 160);
  const phone = cleanString(input.phone, 50);
  const country = cleanString(input.country, 100);
  const quantity = cleanString(input.quantity, 100);
  const message = cleanString(input.message, 4000);
  const consent = input.consent === true;
  const turnstileToken = cleanString(input.turnstileToken, 2048);

  if (!name || !organization || message.length < 10 || !consent) {
    return jsonError(400, "invalid_fields");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return jsonError(400, "invalid_email");

  try {
    if (!(await verifyTurnstile(turnstileToken, request))) {
      return jsonError(400, "verification_failed");
    }
  } catch {
    return jsonError(503, "verification_unavailable");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = cleanString(process.env.PRODUCT_REQUEST_TO_EMAIL ?? TEST_RECIPIENT, 254).toLowerCase();
  if (!apiKey || !from) return jsonError(503, "email_not_configured");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipient)) {
    return jsonError(503, "recipient_not_configured");
  }

  const rows = [
    ["Product", `${localizedProduct.name} / ${englishProduct.name}`],
    ["Product name", englishProduct.productName],
    ["Catalogue No.", englishProduct.catNo],
    ["Locale", locale],
    ["Name", name],
    ["Email", email],
    ["Organization", organization],
    ["Phone", phone || "—"],
    ["Country / region", country || "—"],
    ["Requested quantity", quantity || "—"],
  ];
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border:1px solid #e2e8f0;background:#f8fafc">${escapeHtml(label)}</th><td style="padding:8px 12px;border:1px solid #e2e8f0">${escapeHtml(value)}</td></tr>`
    )
    .join("");
  const textRows = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const subject = `Product request — ${englishProduct.name} (${englishProduct.catNo})`;

  const emailResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [recipient],
      reply_to: email,
      subject,
      html: `<h1 style="font-family:Arial,sans-serif;font-size:22px">New EBOVIR product request</h1><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${htmlRows}</table><h2 style="font-family:Arial,sans-serif;font-size:18px;margin-top:24px">Request details</h2><p style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px;line-height:1.6">${escapeHtml(message)}</p>`,
      text: `New EBOVIR product request\n\n${textRows}\n\nRequest details:\n${message}`,
    }),
  });

  if (!emailResponse.ok) {
    console.error("Resend product request failed", emailResponse.status);
    return jsonError(502, "email_failed");
  }

  return NextResponse.json({ ok: true });
}
