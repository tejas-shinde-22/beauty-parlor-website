import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { salon, navLinks } from "@/data/config";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-champagne/85 shadow-luxe backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link to="/" data-testid="nav-logo" className="flex items-baseline gap-2">
            <span className={`font-display text-2xl font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-plum" : "text-cream"}`}>
              Unique
            </span>
            <span className={`hidden text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-500 sm:block ${scrolled ? "text-gold" : "text-gold"}`}>
              Beauty Parlour
            </span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-[width] after:duration-300 ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  } ${scrolled ? "text-ink hover:text-burgundy" : "text-cream/90 hover:text-cream"} ${isActive && scrolled ? "text-burgundy" : ""} ${isActive && !scrolled ? "text-cream" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="nav-book-appointment"
              className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 sm:inline-flex ${
                scrolled
                  ? "bg-plum text-cream hover:bg-burgundy"
                  : "bg-cream/95 text-plum hover:bg-gold"
              }`}
            >
              Book Appointment
            </Link>
            <button
              data-testid="nav-mobile-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 lg:hidden ${scrolled ? "text-plum" : "text-cream"}`}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-plum"
          >
            <div className="flex items-center justify-between px-6 py-4 sm:px-10">
              <span className="font-display text-2xl font-semibold text-cream">Unique</span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <NavLink
                    to={link.path}
                    data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-3 font-display text-4xl font-light tracking-tight transition-colors duration-300 ${
                        isActive ? "italic text-gold" : "text-cream hover:text-gold"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 border-t border-cream/10 px-8 py-8"
            >
              <a href={salon.phoneHref} data-testid="mobile-call-link" className="flex items-center gap-3 text-sm text-cream/70">
                <Phone className="h-4 w-4 text-gold" /> {salon.phone}
              </a>
              <Link
                to="/contact"
                data-testid="mobile-book-appointment"
                className="mt-2 inline-flex w-fit items-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-plum"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
