"use client";

import Script from "next/script";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/routing";
import type { UiMessages } from "@/lib/i18n/ui";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type RequestLabels = UiMessages["productRequest"];

export function ProductRequestForm({
  locale,
  product,
  labels,
  turnstileSiteKey,
}: {
  locale: Locale;
  product: { name: string; productName: string; catNo: string; slug: string };
  labels: RequestLabels;
  turnstileSiteKey: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isLiveMode = Boolean(turnstileSiteKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    if (!isLiveMode) {
      return;
    }

    const data = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch("/api/product-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          productSlug: product.slug,
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          phone: data.get("phone"),
          country: data.get("country"),
          quantity: data.get("quantity"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
          turnstileToken: data.get("cf-turnstile-response"),
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      window.turnstile?.reset();
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-bio-cyan focus:ring-4 focus:ring-bio-cyan/10";

  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-mist p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-slate-900">{labels.title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{labels.intro}</p>

      <div className="mt-6 rounded-2xl border border-bio-cyan/20 bg-white px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-bio-teal">
          {labels.product}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">{product.name}</p>
        <p className="mt-0.5 text-xs text-slate-500">
          {product.productName} · {product.catNo}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            {labels.name} <span className="text-bio-teal" aria-label={labels.required}>*</span>
            <input className={inputClass} name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {labels.email} <span className="text-bio-teal" aria-label={labels.required}>*</span>
            <input className={inputClass} type="email" name="email" autoComplete="email" required maxLength={254} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {labels.organization} <span className="text-bio-teal" aria-label={labels.required}>*</span>
            <input className={inputClass} name="organization" autoComplete="organization" required maxLength={160} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {labels.phone}
            <input className={inputClass} type="tel" name="phone" autoComplete="tel" maxLength={50} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {labels.country}
            <input className={inputClass} name="country" autoComplete="country-name" maxLength={100} />
          </label>
          <label className="text-sm font-medium text-slate-700">
            {labels.quantity}
            <input className={inputClass} name="quantity" maxLength={100} />
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          {labels.message} <span className="text-bio-teal" aria-label={labels.required}>*</span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            name="message"
            required
            minLength={10}
            maxLength={4000}
            placeholder={labels.messagePlaceholder}
          />
        </label>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-slate-300 text-bio-teal focus:ring-bio-cyan"
          />
          <span>{labels.consent}</span>
        </label>

        <label className="hidden" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        </label>

        {isLiveMode && (
          <>
            <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
            <div
              className="cf-turnstile min-h-[65px]"
              data-sitekey={turnstileSiteKey}
              data-theme="light"
              data-action="product_request"
            />
          </>
        )}

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "submitting" ? labels.submitting : labels.submit}
          </button>
          <p aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-700"}`}>
            {status === "success"
              ? labels.success
              : status === "error"
                ? labels.error
                : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
