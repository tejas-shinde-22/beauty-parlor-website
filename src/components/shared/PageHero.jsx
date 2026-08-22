import { motion } from "framer-motion";

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const PageHero = ({ overline, titleLines, description, image, testId }) => (
  <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-plum" data-testid={testId}>
    <motion.img
      src={image}
      alt=""
      initial={{ scale: 1.15, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-plum/20" />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-44 sm:px-10">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mb-6 block text-xs font-medium uppercase tracking-[0.3em] text-gold"
      >
        {overline}
      </motion.span>
      <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
        {titleLines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              variants={lineReveal}
              custom={i}
              initial="hidden"
              animate="visible"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
