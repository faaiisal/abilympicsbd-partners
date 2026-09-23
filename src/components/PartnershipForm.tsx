"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content";
import { SectionHeading } from "./SectionHeading";

export function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Abilympics Bangladesh partnership inquiry");
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Organization: ${form.get("organization")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone")}`,
      `Partnership interest: ${form.get("interest")}`,
      `Message: ${form.get("message")}`,
    ].join("\n"));
    setSubmitted(true);
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-brand-charcoal py-20 text-white lg:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading dark eyebrow="Connect with secretariat" title="Join the Mission to Helsinki 2027" description="Direct portal for corporate sponsors, media allies, technology providers, and academic institutions." />
          <h2 id="contact-title" className="sr-only">Partnership inquiry form</h2>
          <a href="https://partners.epyra.agency" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-black uppercase tracking-wider text-white">Become a Partner <span className="material-symbols-outlined" style={{fontSize: '18px'}} aria-hidden="true">arrow_outward</span></a>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-12 grid max-w-5xl gap-5 rounded-3xl border border-slate-200 bg-white p-6 text-brand-slate shadow-raised sm:p-8 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">Your name<input required name="name" type="text" className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none" /></label>
            <label className="grid gap-2 text-sm font-semibold">Organization<input required name="organization" type="text" className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none" /></label>
            <label className="grid gap-2 text-sm font-semibold">Work email<input required name="email" type="email" className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none" /></label>
            <label className="grid gap-2 text-sm font-semibold">Phone / WhatsApp<input name="phone" type="tel" className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none" /></label>
          </div>
          <label className="grid gap-2 text-sm font-semibold">Partnership interest<select required name="interest" defaultValue="" className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none"><option value="" disabled>Select an opportunity</option><option>Official Partner</option><option>Corporate Partner</option><option>Technology Partner</option><option>Media Partner</option><option>Supporting Partner</option><option>Direct Engagement</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Message<textarea required name="message" rows={4} className="rounded-lg border border-slate-300 px-3 py-2.5 font-normal focus:border-brand-green focus:outline-none" /></label>
          <button type="submit" className="rounded-lg bg-brand-green px-5 py-3 font-bold text-white hover:bg-brand-green-dark">Send partnership inquiry</button>
          {submitted ? <p role="status" className="text-sm text-brand-green">Your email client should open with the inquiry details.</p> : null}
        </form>
      </div>
    </section>
  );
}