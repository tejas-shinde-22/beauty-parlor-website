import { marqueeItems } from "@/data/config";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {marqueeItems.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="whitespace-nowrap px-10 font-display text-2xl font-light italic tracking-wide text-plum/80 sm:text-3xl">
          {item}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <div
    className="overflow-hidden border-y border-plum/10 bg-champagne py-7"
    data-testid="editorial-marquee"
    aria-hidden="true"
  >
    <div className="flex w-max animate-marquee">
      <Row />
      <Row />
    </div>
  </div>
);

export default Marquee;
