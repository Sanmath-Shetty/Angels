import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuNavigation, LuCompass, LuImageOff } from 'react-icons/lu';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { nearbyAttractions } from '../../data/content';
import styles from './Attractions.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function AttractionImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={styles.placeholder}>
        <LuImageOff size={26} />
        <span>Photo coming soon</span>
      </div>
    );
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function AttractionCard({ spot }) {
  return (
    <motion.article className={styles.card} variants={fadeUp}>
      <div className={styles.imageWrap}>
        <AttractionImage src={spot.image} alt={spot.name} />
        <span className={styles.distancePill}>
          <LuNavigation size={13} /> {spot.distance}
        </span>
      </div>

      <div className={styles.body}>
        <h4>{spot.name}</h4>
        <p className={styles.location}>
          <LuMapPin size={14} /> {spot.location}
        </p>
        <p className={styles.desc}>{spot.desc}</p>

        <div className={styles.footer}>
          <span className={styles.duration}>
            <LuCompass size={14} /> {spot.duration} from Angels Avenue
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapsQuery)}`}
            target="_blank"
            rel="noreferrer"
            className={styles.directionsLink}
          >
            Directions <HiOutlineArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Attractions() {
  return (
    <section id="attractions" className={`section-pad ${styles.attractions}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Explore Karkala</span>
          <h2 className="section-title">Nearby Attractions</h2>
          <p className={styles.subtext}>
            Angels Avenue puts you minutes away from Karkala&rsquo;s finest heritage sites,
            temples, and hilltop views
          </p>
        </div>

        <motion.div
          className={styles.grid}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {nearbyAttractions.map((spot) => (
            <AttractionCard spot={spot} key={spot.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
