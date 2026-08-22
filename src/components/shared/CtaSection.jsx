import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { salon, waLink } from "@/data/config";

const CtaSection = () => (
  <section className="bg-champagne" data-testid="contact-cta-section">
    <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
      <div className="flex flex-col items-start gap-6">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-gold">Visit The Studio</span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-plum sm:text-5xl">
            Your chair is <em className="font-accent font-medium italic text-burgundy">waiting</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="max-w-md text-base leading-relaxed text-mauve">
            Walk in for a consultation or reserve your ritual in advance — we hold every appointment with care.
          </p>
        </Reveal>
        <Reveal delay={3} className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            data-testid="cta-book-appointment"
            className="inline-flex items-center rounded-full bg-plum px-8 py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-burgundy"
          >
            Book Appointment
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            data-testid="cta-whatsapp"
            className="inline-flex items-center gap-2 rounded-full border border-plum/25 px-8 py-3.5 text-sm font-semibold tracking-wide text-plum transition-colors duration-300 hover:border-gold hover:text-burgundy"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </Reveal>
      </div>
      <Reveal delay={2}>
        <div className="flex h-full flex-col justify-center gap-6 rounded-3xl border border-plum/10 bg-white p-9 shadow-luxe">
          <p className="flex items-start gap-4 text-sm leading-relaxed text-mauve">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span><strong className="block font-semibold text-plum">{salon.name}</strong>{salon.address}</span>
          </p>
          <a href={salon.phoneHref} data-testid="cta-call" className="flex items-center gap-4 text-sm text-mauve transition-colors duration-300 hover:text-burgundy">
            <Phone className="h-5 w-5 shrink-0 text-gold" /> {salon.phone}
          </a>
          <div className="flex flex-col gap-1.5 border-t border-plum/10 pt-5 text-sm text-mauve">
            {salon.hours.map((h) => (
              <span key={h.days} className="flex items-center gap-4">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <span className="w-40 font-medium text-plum">{h.days}</span> {h.time}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaSection;
