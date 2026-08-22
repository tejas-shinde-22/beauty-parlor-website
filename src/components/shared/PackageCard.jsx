import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const PackageCard = ({ pkg, index = 0 }) => {
  const featured = pkg.featured;
  return (
    <Reveal delay={index % 3} className="h-full">
      <article
        data-testid={`package-card-${pkg.id}`}
        className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 ${
          featured
            ? "border-gold/40 bg-plum text-cream shadow-luxe-lg"
            : "border-plum/10 bg-white text-ink shadow-luxe hover:shadow-luxe-lg"
        }`}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <span
              className={`mb-3 inline-block rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                featured ? "bg-gold/15 text-gold" : "bg-blush text-burgundy"
              }`}
            >
              {pkg.tag}
            </span>
            <h3 className="font-display text-2xl font-light leading-snug sm:text-[1.7rem]">
              {pkg.name}
            </h3>
          </div>
          <div
            className={`shrink-0 rounded-2xl border px-4 py-2.5 text-center ${
              featured ? "border-gold/50 bg-gold/10" : "border-burgundy/25 bg-champagne"
            }`}
          >
            <span className={`block text-[10px] font-medium uppercase tracking-[0.2em] ${featured ? "text-gold" : "text-mauve"}`}>
              Only
            </span>
            <span className={`font-display text-xl font-semibold ${featured ? "text-gold" : "text-burgundy"}`}>
              ₹{pkg.price.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
        <ul className="flex flex-1 flex-col gap-3">
          {pkg.inclusions.map((inc) => (
            <li key={inc} className={`flex items-center gap-3 text-sm ${featured ? "text-cream/85" : "text-mauve"}`}>
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${featured ? "bg-gold/20 text-gold" : "bg-burgundy/10 text-burgundy"}`}>
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {inc}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          data-testid={`package-book-${pkg.id}`}
          className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${
            featured
              ? "bg-gold text-plum hover:bg-cream"
              : "bg-plum text-cream hover:bg-burgundy"
          }`}
        >
          Book This Package
        </Link>
      </article>
    </Reveal>
  );
};

export default PackageCard;
