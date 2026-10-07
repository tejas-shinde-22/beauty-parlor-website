import { motion } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CtaSection from "@/components/shared/CtaSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { salon, images, stats, serviceCategories, testimonials, whyChooseUs } from "@/data/config";
import { HeartHandshake, Eye, Quote } from "lucide-react";

// Non-staff imagery for the "About the Parlour" section
const parlourImages = {
  hair: images.hair.spa,
  skin: images.skin.glow,
  beauty: images.beauty.makeup,
  bridal: images.bridal.one,
};

const About = () => {
  usePageMeta(
    "Our Story",
    `Discover ${salon.name} — five years of craft, care and five hundred glowing clients.`
  );

  return (
    <>
      <PageHero
        testId="about-hero"
        overline="Our Story"
        titleLines={["Beauty, practised", "as an art"]}
        description={`Since ${salon.established}, one promise has guided every chair, every ritual and every reveal.`}
        image={images.interiors[1]}
      />

      <section className="bg-cream" data-testid="about-story">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-luxe-lg">
              <img src={images.interiors[3]} alt={`The ${salon.name} studio`} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-4 w-1/2 overflow-hidden rounded-3xl border-8 border-cream shadow-luxe-lg sm:-right-10"
            >
              <img src={images.bridal.two} alt={`A bride styled at ${salon.name}`} loading="lazy" className="aspect-square w-full object-cover" />
            </motion.div>
          </div>
          <div className="flex flex-col items-start gap-6 pt-8 lg:pt-0">
            <SectionHeading
              overline="Est. 2019"
              title="A small studio with"
              italic="big standards"
              description="Unique began as two chairs and a belief: that a neighbourhood parlour could feel like a five-star retreat. Today, our artists have crafted over five hundred bridal, hair and skin stories — yet every guest is still welcomed like the first."
            />
            <Reveal delay={3}>
              <p className="font-accent text-2xl italic leading-relaxed text-burgundy">
                “तुमचं सौंदर्य, आमची जबाबदारी — your beauty is our responsibility. It is written on our wall, and practised at every chair.”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-champagne" data-testid="about-mission">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 py-24 sm:px-10 lg:grid-cols-2">
          {[
            { icon: HeartHandshake, title: "Our Mission", text: "To make luxury beauty honest and accessible — premium products, certified artists and transparent prices, wrapped in an experience that slows the world down for an hour." },
            { icon: Eye, title: "Our Vision", text: "To be the parlour every family trusts across generations — the place daughters visit before their weddings because their mothers did." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border border-plum/10 bg-white p-10 shadow-luxe" data-testid={`about-${c.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-3xl font-light text-plum">{c.title}</h3>
                <p className="text-base leading-relaxed text-mauve">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-plum" data-testid="about-stats">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-6 py-20 sm:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i}>
              <div className="flex flex-col items-center gap-2 text-center" data-testid={`about-stat-${i}`}>
                <span className="font-display text-5xl font-light text-gold sm:text-6xl">{s.value}</span>
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-cream/60">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream" data-testid="about-parlour">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionHeading
            overline="About the Parlour"
            title="Beauty, care &"
            italic="confidence"
            description="From precision hair and radiant skin to everyday essentials and bridal makeup — every service is tailored to you, in a welcoming, hygienic space."
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i}>
                <article className="group" data-testid={`parlour-${cat.id}`}>
                  <div className="overflow-hidden rounded-3xl">
                    <img
                      src={parlourImages[cat.id]}
                      alt={cat.title}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-light text-plum">{cat.title}</h3>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{cat.items.length} services</p>
                  <p className="mt-3 text-sm leading-relaxed text-mauve">{cat.blurb}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-champagne" data-testid="about-trust">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
          <SectionHeading
            overline="Why Clients Trust Us"
            title="Trust, earned"
            italic="chair by chair"
            align="center"
          />
          <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal key={w.title} delay={i}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-plum/10 bg-white p-8 shadow-luxe" data-testid={`trust-${i}`}>
                  <span className="font-display text-4xl font-light text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-light text-plum">{w.title}</h3>
                  <p className="text-sm leading-relaxed text-mauve">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2} className="mt-20">
            <figure className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center" data-testid="about-testimonial">
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="font-accent text-2xl italic leading-relaxed text-ink/85 sm:text-3xl">
                “{testimonials[0].quote}”
              </blockquote>
              <figcaption className="text-sm font-semibold tracking-wide text-burgundy">
                {testimonials[0].name} <span className="font-normal text-mauve">· {testimonials[0].service}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default About;
