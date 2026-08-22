import { Star } from "lucide-react";
import Reveal from "./Reveal";

const TestimonialCard = ({ t, index = 0 }) => (
  <Reveal delay={index % 3} className="h-full">
    <figure
      data-testid={`testimonial-${t.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="flex h-full flex-col gap-6 rounded-3xl border border-plum/10 bg-white p-8 shadow-luxe transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-luxe-lg"
    >
      <div className="flex gap-1" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="flex-1 font-accent text-xl italic leading-relaxed text-ink/85">
        “{t.quote}”
      </blockquote>
      <figcaption className="flex items-center gap-4 border-t border-plum/10 pt-5">
        <img
          src={t.img}
          alt={t.name}
          loading="lazy"
          className="h-11 w-11 rounded-full border border-gold/40 object-cover"
        />
        <div>
          <span className="block text-sm font-semibold text-plum">{t.name}</span>
          <span className="block text-xs tracking-wide text-mauve">{t.service}</span>
        </div>
      </figcaption>
    </figure>
  </Reveal>
);

export default TestimonialCard;
