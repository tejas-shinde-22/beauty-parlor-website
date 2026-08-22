import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { salon, navLinks, serviceCategories, waLink } from "@/data/config";

const Footer = () => (
  <footer className="bg-plum text-cream" data-testid="footer">
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Link to="/" data-testid="footer-logo" className="font-display text-3xl font-semibold tracking-tight">
            Unique <span className="font-light italic text-gold">Beauty Parlour</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            {salon.tagline}. A luxury salon experience crafted with care, hygiene and artistry since {salon.established}.
          </p>
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" data-testid="footer-instagram" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" data-testid="footer-facebook" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-4" aria-label="Footer">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Explore</span>
          {navLinks.map((l) => (
            <Link key={l.path} to={l.path} data-testid={`footer-link-${l.label.toLowerCase()}`} className="w-fit text-sm text-cream/70 transition-colors duration-300 hover:text-gold">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Services</span>
          {serviceCategories.map((c) => (
            <Link key={c.id} to="/services" data-testid={`footer-service-${c.id}`} className="w-fit text-sm text-cream/70 transition-colors duration-300 hover:text-gold">
              {c.title}
            </Link>
          ))}
          <Link to="/contact" data-testid="footer-link-booking" className="w-fit text-sm text-cream/70 transition-colors duration-300 hover:text-gold">
            Book Appointment
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Visit Us</span>
          <p className="flex items-start gap-3 text-sm leading-relaxed text-cream/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {salon.address}
          </p>
          <a href={salon.phoneHref} data-testid="footer-phone" className="flex items-center gap-3 text-sm text-cream/70 transition-colors duration-300 hover:text-gold">
            <Phone className="h-4 w-4 shrink-0 text-gold" /> {salon.phone}
          </a>
          <a href={`mailto:${salon.email}`} data-testid="footer-email" className="flex items-center gap-3 text-sm text-cream/70 transition-colors duration-300 hover:text-gold">
            <Mail className="h-4 w-4 shrink-0 text-gold" /> {salon.email}
          </a>
          <div className="flex flex-col gap-1 text-sm text-cream/70">
            {salon.hours.map((h) => (
              <span key={h.days} className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-gold" />
                {h.days}: {h.time}
              </span>
            ))}
          </div>
          <a href={waLink} target="_blank" rel="noreferrer" data-testid="footer-whatsapp" className="mt-1 inline-flex w-fit items-center rounded-full border border-gold/40 px-6 py-2.5 text-sm font-semibold text-gold transition-colors duration-300 hover:bg-gold hover:text-plum">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-t border-cream/10 pt-10">
        <p className="whitespace-nowrap text-center font-display text-[13vw] font-light leading-none tracking-tight text-cream/[0.06] lg:text-[9rem]" aria-hidden="true">
          Unique Beauty
        </p>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-cream/40 sm:flex-row">
          <span>© {new Date().getFullYear()} {salon.name}. All rights reserved.</span>
          <span>Crafted with care · Demo template</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
