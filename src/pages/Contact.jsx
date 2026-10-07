import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { salon, images, allServices, packages, timeSlots, waLink } from "@/data/config";

const inputCls =
  "w-full border-b border-plum/20 bg-transparent py-3 text-base text-ink placeholder:text-mauve/50 focus:border-gold focus:outline-none transition-colors duration-300";

const Field = ({ label, children, testId }) => (
  <label className="flex flex-col gap-1.5" data-testid={testId}>
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  usePageMeta(
    "Book an Appointment",
    `Reserve your ritual at ${salon.name} — call, WhatsApp or book online. Open Monday to Sunday in Kamothe.`
  );
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoCards = [
    { icon: Phone, title: "Call Us", value: salon.phone, href: salon.phoneHref, testId: "contact-call-card" },
    { icon: MessageCircle, title: "WhatsApp", value: salon.phone, href: waLink, testId: "contact-whatsapp-card" },
    { icon: MapPin, title: "Visit Us", value: salon.address, testId: "contact-address-card" },
  ];

  return (
    <>
      <PageHero
        testId="contact-hero"
        overline="Reservations"
        titleLines={["Book your", "moment"]}
        description="Tell us when, and we will keep the chai warm and the chair ready."
        image={images.interiors[2]}
      />

      <section className="bg-cream" data-testid="contact-section">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.3fr] lg:py-28">
          <div className="flex flex-col gap-8">
            <Reveal>
              <h2 className="font-display text-4xl font-light tracking-tight text-plum sm:text-5xl">
                Talk to <em className="font-accent font-medium italic text-burgundy">us</em>
              </h2>
            </Reveal>
            {infoCards.map((c, i) => (
              <Reveal key={c.title} delay={i}>
                <a
                  href={c.href || undefined}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-testid={c.testId}
                  className={`flex items-start gap-5 rounded-3xl border border-plum/10 bg-white p-7 shadow-luxe transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-luxe-lg ${!c.href ? "cursor-default" : ""}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">{c.title}</span>
                    <span className="whitespace-pre-line text-base leading-relaxed text-ink">{c.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={3}>
              <div className="rounded-3xl border border-plum/10 bg-white p-7 shadow-luxe" data-testid="contact-hours-card">
                <span className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  <Clock className="h-4 w-4" /> Opening Hours
                </span>
                {salon.hours.map((h) => (
                  <p key={h.days} className="flex justify-between border-b border-plum/5 py-2.5 text-sm last:border-0">
                    <span className="font-medium text-plum">{h.days}</span>
                    <span className="text-mauve">{h.time}</span>
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div id="booking-form" className="relative overflow-hidden rounded-3xl border border-plum/10 bg-white p-8 shadow-luxe sm:p-12" data-testid="booking-form-card">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex min-h-[28rem] flex-col items-center justify-center gap-6 text-center"
                    data-testid="booking-success"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 14 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/15 text-gold"
                    >
                      <CheckCircle2 className="h-10 w-10" />
                    </motion.span>
                    <h3 className="font-display text-4xl font-light text-plum">
                      Request received, <em className="font-accent italic text-burgundy">{form.name.split(" ")[0] || "gorgeous"}</em>
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-mauve">
                      Your {form.service || "appointment"} request for {form.date || "your chosen date"} at {form.time || "your chosen time"} is with our front desk.
                      We will confirm on <strong className="text-plum">{form.phone}</strong> within 30 minutes during working hours.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        data-testid="success-whatsapp"
                        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#1eb856]"
                      >
                        <MessageCircle className="h-4 w-4" /> Confirm faster on WhatsApp
                      </a>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", date: "", time: "", message: "" }); }}
                        data-testid="book-another"
                        className="rounded-full border border-plum/20 px-7 py-3 text-sm font-semibold text-plum transition-colors duration-300 hover:border-gold"
                      >
                        Book Another
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    onSubmit={onSubmit}
                    className="flex flex-col gap-8"
                    data-testid="booking-form"
                  >
                    <div>
                      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.28em] text-gold">Appointment</span>
                      <h3 className="font-display text-3xl font-light text-plum sm:text-4xl">Reserve your ritual</h3>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2">
                      <Field label="Full Name" testId="field-name">
                        <input required type="text" value={form.name} onChange={set("name")} placeholder="Aarohi Desai" className={inputCls} data-testid="input-name" />
                      </Field>
                      <Field label="Phone Number" testId="field-phone">
                        <input required type="tel" pattern="[0-9+ -]{10,}" value={form.phone} onChange={set("phone")} placeholder="+91 98XXX XXXXX" className={inputCls} data-testid="input-phone" />
                      </Field>
                      <Field label="Service" testId="field-service">
                        <select required value={form.service} onChange={set("service")} className={`${inputCls} cursor-pointer`} data-testid="input-service">
                          <option value="" disabled>Select a service or package</option>
                          <optgroup label="Packages">
                            {packages.map((p) => (
                              <option key={p.id} value={p.name}>{p.name} — ₹{p.price.toLocaleString("en-IN")}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Services">
                            {allServices.map((s) => (
                              <option key={s.name} value={s.name}>{s.name}</option>
                            ))}
                          </optgroup>
                        </select>
                      </Field>
                      <Field label="Preferred Date" testId="field-date">
                        <input required type="date" value={form.date} onChange={set("date")} min={new Date().toISOString().split("T")[0]} className={`${inputCls} cursor-pointer`} data-testid="input-date" />
                      </Field>
                      <Field label="Preferred Time" testId="field-time">
                        <select required value={form.time} onChange={set("time")} className={`${inputCls} cursor-pointer`} data-testid="input-time">
                          <option value="" disabled>Pick a time slot</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </Field>
                    </div>
                    <Field label="Message (optional)" testId="field-message">
                      <textarea rows={3} value={form.message} onChange={set("message")} placeholder="Anything we should know — occasion, allergies, preferred artist…" className={`${inputCls} resize-none`} data-testid="input-message" />
                    </Field>
                    <button
                      type="submit"
                      data-testid="booking-submit"
                      className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-plum py-4 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-burgundy sm:w-auto sm:px-12"
                    >
                      Request Appointment
                    </button>
                    <p className="text-xs leading-relaxed text-mauve/70">
                      This is a demo template — requests are not sent to a server. A live version confirms instantly via SMS & WhatsApp.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-champagne" data-testid="visit-section">
        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-10">
          <Reveal>
            <div className="grid gap-10 overflow-hidden rounded-3xl bg-plum p-8 shadow-luxe-lg sm:p-12 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-16" data-testid="visit-card">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Find Us</span>
                <h2 className="font-display text-4xl font-light tracking-tight text-cream sm:text-5xl">
                  Visit our <em className="font-accent font-medium italic text-gold">parlour</em>
                </h2>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">{salon.name}</p>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <p className="whitespace-pre-line text-base leading-relaxed text-cream/85" data-testid="visit-address">{salon.address}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <p className="text-base text-cream/85" data-testid="visit-phone">{salon.phone}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href={salon.phoneHref}
                  data-testid="visit-call"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-cream px-8 py-4 text-sm font-semibold tracking-wide text-plum transition-colors duration-300 hover:bg-gold hover:text-white"
                >
                  <Phone className="h-4 w-4" /> Call Us
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="visit-whatsapp"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-[#1eb856]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href="#booking-form"
                  data-testid="visit-book"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  <Clock className="h-4 w-4" /> Book Appointment
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
