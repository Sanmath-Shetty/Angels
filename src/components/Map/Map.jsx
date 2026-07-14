import { motion } from 'framer-motion';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { siteInfo } from '../../data/content';
import styles from './Map.module.scss';

export default function MapSection() {
  return (
    <section className={`section-pad ${styles.mapSection}`}>
      <div className="container">
        <motion.div
          className={styles.glassContainer}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mapWrap}>
            <iframe
              title="Angels Avenue location on Google Maps"
              src="https://maps.google.com/maps?q=Angels+Avenue+Karkala+Karnataka&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className={styles.infoBar}>
            <div>
              <p className={styles.eyebrow}>📍 Angels Avenue, Karkala</p>
              <p className={styles.sub}>Opposite Bethanya Church</p>
            </div>
            <a href={siteInfo.mapsLink} target="_blank" rel="noreferrer" className={styles.link}>
              Get Directions <HiOutlineArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
