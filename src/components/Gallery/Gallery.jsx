import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../../data/content';
import Lightbox from '../Lightbox/Lightbox.jsx';
import styles from './Gallery.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const nav = useCallback((dir) => {
    setActiveIndex((i) => (i + dir + galleryImages.length) % galleryImages.length);
  }, []);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  return (
    <section id="gallery" className={`section-pad ${styles.gallery}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Visual Tour</span>
          <h2 className="section-title">Our Gallery</h2>
          <p className={styles.subtext}>A glimpse of the beauty that awaits you at Angels Avenue</p>
        </div>

        <motion.div
          className={styles.masonry}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.id}
              className={`${styles.tile} ${styles['tile' + (i % 5)]}`}
              variants={fadeUp}
              onClick={() => setActiveIndex(i)}
            >
              <img src={img.src} alt={img.label} loading="lazy" />
              <span className={styles.glassCaption}>
                <span className={styles.category}>{img.category}</span>
                <span className={styles.label}>{img.label}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Lightbox
        images={galleryImages}
        index={activeIndex}
        onClose={closeLightbox}
        onNav={nav}
      />
    </section>
  );
}