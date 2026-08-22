import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/shared/PageHero";
import Lightbox from "@/components/shared/Lightbox";
import CtaSection from "@/components/shared/CtaSection";
import { usePageMeta } from "@/hooks/usePageMeta";
import { gallery, galleryCategories, images } from "@/data/config";

const Gallery = () => {
  usePageMeta(
    "Gallery",
    "A portfolio of bridal looks, hair artistry, glass-skin rituals and our studio — browse the Unique Beauty Parlour gallery."
  );
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.category === filter)),
    [filter]
  );

  const nav = (dir) =>
    setLightbox((i) => (i + dir + items.length) % items.length);

  return (
    <>
      <PageHero
        testId="gallery-hero"
        overline="The Portfolio"
        titleLines={["Moments of", "Glow"]}
        description="Bridal mornings, colour alchemy and quiet spa hours — a curated look inside our world."
        image={images.bridal.four}
      />

      <section className="bg-cream" data-testid="gallery-section">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
          <div className="mb-12 flex flex-wrap gap-3" role="tablist" aria-label="Gallery filters">
            {galleryCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                data-testid={`gallery-filter-${c.toLowerCase()}`}
                onClick={() => { setFilter(c); setLightbox(null); }}
                className={`rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  filter === c
                    ? "bg-plum text-cream"
                    : "border border-plum/15 text-mauve hover:border-gold hover:text-burgundy"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.button
                  layout
                  key={g.src}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`gallery-item-${i}`}
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label={`Open ${g.caption}`}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}
                  />
                  <span className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-plum/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">{g.category}</span>
                    <span className="font-accent text-lg italic text-cream">{g.caption}</span>
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Lightbox items={items} index={lightbox} onClose={() => setLightbox(null)} onNav={nav} />
      <CtaSection />
    </>
  );
};

export default Gallery;
