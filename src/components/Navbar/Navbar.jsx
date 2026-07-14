import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import useScrolled from '../../hooks/useScrolled';
import useSectionNav from '../../hooks/useSectionNav';
import { navLinks } from '../../data/content';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const sectionNav = useSectionNav();
  const burgerRef = useRef(null);
  const closeBtnRef = useRef(null);

  const goTo = (href) => {
    setOpen(false);
    sectionNav(href);
  };

  // Accessibility: move focus into the mobile menu when it opens, return
  // focus to the trigger button when it closes, lock background scroll,
  // and let Escape close it -- same pattern as the Lightbox dialog.
  useEffect(() => {
    if (!open) return undefined;

    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
      burgerRef.current?.focus();
    };
  }, [open]);

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className={`container ${styles.inner}`}>
        <button type="button" className={styles.logo} onClick={() => goTo('#home')}>
          <img src="/images/logo-mark.webp" alt="Angels Avenue" className={styles.logoIcon} />
          <span className={styles.logoText}>Angels Avenue</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navLinks.map((link) => (
            <button type="button" key={link.href} className={styles.navLink} onClick={() => goTo(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>

        <button type="button" className={styles.bookBtn} onClick={() => goTo('#booking')}>
          Book Now
        </button>

        <button
          type="button"
          ref={burgerRef}
          className={styles.burger}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <HiOutlineMenu size={26} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className={styles.mobileMenu}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button type="button" ref={closeBtnRef} className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close menu">
                <HiOutlineX size={26} />
              </button>
              <div className={styles.mobileLinks}>
                {navLinks.map((link, i) => (
                  <motion.button
                    type="button"
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                    onClick={() => goTo(link.href)}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  className={styles.mobileBookBtn}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.07, duration: 0.4 }}
                  onClick={() => goTo('#booking')}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
