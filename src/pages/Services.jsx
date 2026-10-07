import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import ServiceCard from "@/components/shared/ServiceCard";
import OfferBanner from "@/components/shared/OfferBanner";
import CtaSection from "@/components/shared/CtaSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { serviceCategories, images } from "@/data/config";

const Services = () => {
  usePageMeta(
    "Services & Price List",
    "Hair artistry, premium facials, beauty essentials and bridal couture — explore every service with transparent starting prices."
  );

  return (
    <>
      <PageHero
        testId="services-hero"
        overline="Our Services"
        titleLines={["Rituals of", "Radiance"]}
        description="Four ateliers — hair, skin, beauty and bridal — each led by specialists who treat their craft as couture."
        image={images.hair.spa}
      />

      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          data-testid={`services-category-${cat.id}`}
          className={ci % 2 === 0 ? "bg-cream" : "bg-champagne"}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="mb-12 flex flex-col gap-4 border-b border-plum/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="mb-3 block text-xs font-medium uppercase tracking-[0.28em] text-gold">
                    {String(ci + 1).padStart(2, "0")} — {cat.items.length} services
                  </span>
                  <h2 className="font-display text-4xl font-light tracking-tight text-plum sm:text-5xl">
                    {cat.title}
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-mauve sm:text-base">{cat.blurb}</p>
              </div>
            </Reveal>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((s, i) => (
                <ServiceCard key={s.name} service={s} index={i} hidePrice={true} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <OfferBanner />
      <CtaSection />
    </>
  );
};

export default Services;
