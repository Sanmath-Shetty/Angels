import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { reviews } from '../../data/content';
import styles from './Reviews.module.scss';

function Stars({ rating }) {
  return (
    <span className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <HiStar key={i} size={15} className={i < Math.round(rating) ? styles.filled : styles.empty} />
      ))}
      <span className={styles.ratingNum}>{rating.toFixed(1)}</span>
    </span>
  );
}

function Card({ r }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHead}>
        <div className={styles.avatar}>{r.initials}</div>
        <div>
          <h3>{r.name}</h3>
          {r.location && <p>{r.location}</p>}
        </div>
      </div>
      <Stars rating={r.rating} />
      <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
      <span className={styles.date}>{r.date}</span>
    </div>
  );
}

export default function Reviews() {
  const track = [...reviews, ...reviews];

  return (
    <section id="reviews" className={`section-pad ${styles.reviews}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Guest Voices</span>
          <h2 className="section-title">What Our Guests Say</h2>
          <p className={styles.subtext}>Real experiences from real travellers</p>
        </div>
      </div>

      <motion.div
        className={styles.marquee}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.marqueeTrack}>
          {track.map((r, i) => (
            <Card r={r} key={`${r.name}-${i}`} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
