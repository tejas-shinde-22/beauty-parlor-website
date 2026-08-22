import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Lightbox = ({ items, index, onClose, onNav }) => {
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          data-testid="gallery-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-plum/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
        >
          <button
            data-testid="lightbox-close"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 hover:bg-cream hover:text-plum"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            data-testid="lightbox-prev"
            onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 hover:bg-cream hover:text-plum sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            data-testid="lightbox-next"
            onClick={(e) => { e.stopPropagation(); onNav(1); }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors duration-300 hover:bg-cream hover:text-plum sm:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <motion.figure
            key={item.src}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-h-full max-w-4xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src.replace("w=1200", "w=1600")}
              alt={item.caption}
              className="max-h-[76vh] w-auto max-w-full rounded-2xl object-contain shadow-luxe-lg"
            />
            <figcaption className="font-accent text-lg italic text-cream/80">
              {item.caption} · <span className="text-gold">{item.category}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
