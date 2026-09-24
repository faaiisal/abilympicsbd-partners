"use client";

import { FormEvent, useState } from "react";
import { SectionHeading } from "./SectionHeading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function PartnershipForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/partnership", {
        method: "POST",
        body: formData,
      });

      let json: { error?: string } = {};
      try {
        json = await response.json();
      } catch {
        setErrorMessage("The server returned an invalid response. Please try again.");
        setStatus("error");
        return;
      }

      if (!response.ok) {
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading dark eyebrow="Connect with secretariat" title="Join the Mission to Helsinki 2027" description="Direct portal for corporate sponsors, media allies, technology providers, and academic institutions." />
          <h2 id="contact-title" className="sr-only">Partnership inquiry form</h2>
          <a href="#contact" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white">Become a Partner <span className="material-symbols-outlined" style={{ fontSize: '18px' }} aria-hidden="true">arrow_outward</span></a>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div role="status" className="mx-auto mt-12 max-w-5xl rounded-3xl border border-emerald-500/30 bg-emerald-950/40 p-12 text-center">
            <span className="material-symbols-outlined text-emerald-400" style={{ fontSize: '48px' }} aria-hidden="true">check_circle</span>
            <h3 className="mt-4 font-heading text-2xl font-black text-white">Inquiry Received!</h3>
            <p className="mt-2 text-slate-300">
              Thank you for reaching out. We have sent a confirmation to your email and our secretariat will respond within <strong className="text-white">2–3 business days</strong>.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-lg border border-emerald-500/40 px-5 py-2.5 text-sm font-bold text-emerald-300 hover:bg-emerald-900/40 transition-colors"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-12 grid max-w-5xl gap-5 rounded-3xl border border-slate-200 bg-white p-6 text-brand-slate shadow-raised sm:p-8 lg:p-12"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Your name
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Organization
                <input
                  required
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Work email
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Phone / WhatsApp
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  disabled={isSubmitting}
                  className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold">
              Partnership interest
              <select
                required
                name="interest"
                defaultValue=""
                disabled={isSubmitting}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
              >
                <option value="" disabled>Select an opportunity</option>
                <option>Official Partner</option>
                <option>Corporate Partner</option>
                <option>Technology Partner</option>
                <option>Media Partner</option>
                <option>Supporting Partner</option>
                <option>Direct Engagement</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold">
              Message
              <textarea
                required
                name="message"
                rows={4}
                disabled={isSubmitting}
                className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none disabled:opacity-50"
              />
            </label>

            {/* Error message */}
            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                <span className="material-symbols-outlined shrink-0" style={{ fontSize: '18px' }} aria-hidden="true">error</span>
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-green px-5 py-3 font-bold text-white hover:bg-brand-green-dark disabled:cursor-not-allowed disabled:opacity-60 transition-all"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin" style={{ fontSize: '18px' }} aria-hidden="true">progress_activity</span>
                  Sending…
                </>
              ) : (
                <>
                  Send partnership inquiry
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }} aria-hidden="true">send</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}