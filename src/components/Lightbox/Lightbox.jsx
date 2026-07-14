import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import styles from './Lightbox.module.scss';

export default function Lightbox({ images, index, onClose, onNav }) {
  const open = index !== null;

  // Keyboard nav (Escape to close, arrows to browse) + lock background
  // scroll while the lightbox is open.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose, onNav]);

  const img = open ? images[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={img.label}
        >
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <HiOutlineX size={28} />
          </button>

          <button
            className={styles.navBtn}
            style={{ left: 20 }}
            onClick={(e) => { e.stopPropagation(); onNav(-1); }}
            aria-label="Previous image"
          >
            <HiChevronLeft size={30} />
          </button>

          <motion.div
            className={styles.frame}
            key={img.id}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={img.src} alt={img.label} />
            <p className={styles.caption}>{img.label}</p>
          </motion.div>

          <button
            className={styles.navBtn}
            style={{ right: 20 }}
            onClick={(e) => { e.stopPropagation(); onNav(1); }}
            aria-label="Next image"
          >
            <HiChevronRight size={30} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}