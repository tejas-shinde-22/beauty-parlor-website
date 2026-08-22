import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Reveal = ({ children, delay = 0, className = "", once = true }) => (
  <motion.div
    className={className}
    variants={fadeUp}
    custom={delay}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-60px" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
