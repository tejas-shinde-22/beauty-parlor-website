import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { offer } from "@/data/config";

const OfferBanner = () => (
  <section className="relative overflow-hidden bg-burgundy" data-testid="offer-banner">
    <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-gold/25" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-gold/20" aria-hidden="true" />
    <div className="pointer-events-none absolute bottom-6 right-1/4 h-2 w-2 rounded-full bg-gold/60" aria-hidden="true" />
    <div className="pointer-events-none absolute left-1/3 top-8 h-1.5 w-1.5 rounded-full bg-gold/50" aria-hidden="true" />

    <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-24 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> {offer.overline} · Limited Time
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {offer.title}{" "}
            <em className="font-accent font-medium italic text-gold">{offer.subtitle}</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="max-w-md text-base leading-relaxed text-cream/70">{offer.note}</p>
        </Reveal>
      </div>
      <Reveal delay={2}>
        <Link
          to="/contact"
          data-testid="offer-book-now"
          className="inline-flex items-center rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-wide text-plum shadow-[0_16px_40px_-12px_rgba(197,160,89,0.6)] transition-colors duration-300 hover:bg-cream"
        >
          {offer.cta}
        </Link>
      </Reveal>
    </div>
  </section>
);

export default OfferBanner;
