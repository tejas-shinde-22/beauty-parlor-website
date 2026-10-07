import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const ServiceCard = ({ service, index = 0, hidePrice = false }) => (
  <Reveal delay={index % 3} className="h-full">
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-plum/10 bg-white shadow-luxe transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-luxe-lg"
      data-testid={`service-card-${service.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.img}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {!hidePrice && (
          <span className="absolute right-4 top-4 rounded-full bg-cream/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-plum backdrop-blur-sm">
            From ₹{service.price.toLocaleString("en-IN")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-display text-2xl font-light text-plum">{service.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-mauve">{service.desc}</p>
        <Link
          to="/contact"
          data-testid={`service-book-${service.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium tracking-wide text-burgundy transition-colors duration-300 hover:text-gold"
        >
          Book Now
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  </Reveal>
);

export default ServiceCard;
