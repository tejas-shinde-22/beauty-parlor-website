import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Instagram, ArrowDown } from "lucide-react";
import Marquee from "@/components/shared/Marquee";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import ServiceCard from "@/components/shared/ServiceCard";
import PackageCard from "@/components/shared/PackageCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import OfferBanner from "@/components/shared/OfferBanner";
import CtaSection from "@/components/shared/CtaSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  salon, images, serviceCategories, packages, whyChooseUs, stats, testimonials, gallery,
} from "@/data/config";

const heroLines = ["Where Beauty", "Meets Confidence"];

const lineReveal = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.35 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-plum" data-testid="home-hero">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img src={images.hero} alt={images.heroAlt} className="h-full w-full object-cover" fetchPriority="high" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-plum/90 via-plum/55 to-plum/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum/70 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 pt-40 sm:px-10">
        <motion.span
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-7 block text-xs font-medium uppercase tracking-[0.32em] text-gold"
          data-testid="hero-overline"
        >
          {salon.name} · Est. {salon.established}
        </motion.span>

        <h1 className="font-display text-5xl font-light leading-[1.04] tracking-tight text-cream sm:text-7xl lg:text-8xl">
          {heroLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                variants={lineReveal}
                custom={i}
                initial="hidden"
                animate="visible"
              >
                {i === heroLines.length - 1 ? (
                  <>Meets <em className="font-accent font-medium italic text-gold">Confidence</em></>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Step into a sanctuary of couture hair, glass-skin rituals and bridal artistry —
          every detail composed around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
            data-testid="hero-book-appointment"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 text-sm font-semibold tracking-wide text-plum shadow-[0_16px_40px_-12px_rgba(197,160,89,0.55)] transition-colors duration-300 hover:bg-cream"
          >
            Book an Appointment <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            data-testid="hero-explore-services"
            className="inline-flex items-center rounded-full border border-cream/40 px-9 py-4 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:border-gold hover:text-gold"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/60"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

const WhyUs = () => (
  <section className="bg-cream" data-testid="why-choose-us">
    <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_1.4fr] lg:py-32">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          overline="Why Unique"
          title="The art of being"
          italic="looked after"
          description="Four promises we keep with every guest, every single visit — no fine print."
        />
        <Reveal delay={3} className="mt-8">
          <Link
            to="/about"
            data-testid="why-us-about-link"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-burgundy transition-colors duration-300 hover:text-gold"
          >
            Our story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div>
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.title} delay={i}>
            <div
              data-testid={`why-item-${i + 1}`}
              className="group flex gap-8 border-t border-plum/10 py-9 transition-colors duration-300 last:border-b hover:bg-champagne/60"
            >
              <span className="font-display text-4xl font-light text-gold/70 transition-colors duration-300 group-hover:text-gold sm:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-2 font-display text-2xl font-light text-plum sm:text-3xl">{item.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-mauve sm:text-base">{item.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yB = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-champagne" data-testid="salon-experience">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
        <div className="relative h-[30rem] sm:h-[36rem]">
          <motion.div style={{ y: yA }} className="absolute left-0 top-0 w-[72%] overflow-hidden rounded-3xl shadow-luxe-lg">
            <img src={images.interiors[0]} alt="Inside the Unique Beauty Parlour styling floor" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: yB }} className="absolute bottom-0 right-0 w-[52%] overflow-hidden rounded-3xl border-8 border-champagne shadow-luxe-lg">
            <img src={images.skin.spa} alt="Spa ritual at Unique Beauty Parlour" loading="lazy" className="aspect-square w-full object-cover" />
          </motion.div>
        </div>
        <div className="flex flex-col items-start gap-7">
          <SectionHeading
            overline="The Experience"
            title="A quiet hour that"
            italic="belongs to you"
            description="Soft light, calm music, warm towels and unhurried hands. From the welcome chai to the final mirror reveal, every ritual is designed to slow the world down."
          />
          <div className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl border border-plum/10 bg-plum/10 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i} className="bg-white">
                <div className="flex flex-col gap-1 p-6 text-center" data-testid={`stat-${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <span className="font-display text-3xl font-light text-burgundy">{s.value}</span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-mauve">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Transformations = () => (
  <section className="bg-plum" data-testid="transformations">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
      <SectionHeading
        overline="Transformations"
        title="From everyday to"
        italic="extraordinary"
        description="Real rituals, real results. A glimpse of what an afternoon at Unique can do."
        dark
      />
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:gap-14">
        {[
          { img: images.hair.treatment, label: "The Ritual", caption: "Consultation & care, before the magic" },
          { img: images.bridal.one, label: "The Reveal", caption: "Bridal couture, after" },
        ].map((t, i) => (
          <Reveal key={t.label} delay={i}>
            <figure className="group relative overflow-hidden rounded-3xl" data-testid={`transformation-${t.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              <img
                src={t.img}
                alt={t.caption}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-8">
                <span className="mb-2 inline-block rounded-full border border-gold/50 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {t.label}
                </span>
                <p className="font-accent text-xl italic text-cream/90">{t.caption}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const InstaGallery = () => (
  <section className="bg-cream" data-testid="insta-gallery">
    <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          overline="@uniquebeautyparlour"
          title="On the"
          italic="feed"
        />
        <Reveal delay={2}>
          <Link
            to="/gallery"
            data-testid="insta-view-gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-burgundy transition-colors duration-300 hover:text-gold"
          >
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {gallery.slice(0, 6).map((g, i) => (
          <Reveal key={g.src} delay={i}>
            <Link to="/gallery" data-testid={`insta-item-${i}`} className="group relative block aspect-square overflow-hidden rounded-2xl">
              <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
              <span className="absolute inset-0 flex items-center justify-center bg-plum/50 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-cream" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  usePageMeta(
    "Luxury Salon & Bridal Studio",
    "Unique Beauty Parlour — couture hair, premium facials, bridal makeup and signature beauty packages from ₹699. Book your appointment."
  );
  const featured = [
    serviceCategories[0].items[0],
    serviceCategories[1].items[2],
    serviceCategories[2].items[4],
    serviceCategories[3].items[0],
  ];

  return (
    <>
      <Hero />
      <Marquee />

      <section className="bg-cream" data-testid="featured-services">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              overline="Featured Rituals"
              title="Signature services,"
              italic="loved most"
              description="The four experiences our guests book again and again."
            />
            <Reveal delay={2}>
              <Link
                to="/services"
                data-testid="featured-view-all"
                className="inline-flex items-center gap-2 rounded-full border border-plum/20 px-7 py-3 text-sm font-semibold tracking-wide text-plum transition-colors duration-300 hover:border-gold hover:text-burgundy"
              >
                All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s, i) => (
              <ServiceCard key={s.name} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/60" data-testid="packages-section">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionHeading
            overline="Seasonal Packages"
            title="Curated packages,"
            italic="honest prices"
            description="Bundle your favourites and save — every package includes a complimentary consultation."
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p, i) => (
              <PackageCard key={p.id} pkg={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <Experience />
      <Transformations />
      <OfferBanner />

      <section className="bg-cream" data-testid="testimonials-section">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionHeading
            overline="Kind Words"
            title="Guests who"
            italic="glowed"
            description="Five hundred smiles and counting — here is what a few of them said."
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <InstaGallery />
      <CtaSection />
    </>
  );
};

export default Home;
