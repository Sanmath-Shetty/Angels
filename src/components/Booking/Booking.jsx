import { motion } from 'framer-motion';
import { HiOutlineCheck, HiOutlineChatAlt2 } from 'react-icons/hi';
import { bookingPlatforms, siteInfo } from '../../data/content';
import styles from './Booking.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Booking() {
  return (
    <section id="booking" className={`section-pad ${styles.booking}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Reserve Your Spot</span>
          <h2 className="section-title ">Book Your Stay</h2>
          <p className={styles.subtext}>Choose your preferred platform to book Angels Avenue</p>
        </div>

        <motion.div
          className={styles.grid}
          variants={{ show: { transition: { staggerChildren: 0.13 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {bookingPlatforms.map((p) => (
            <motion.div
              className={`${styles.card} ${p.highlight ? styles.highlight : ''}`}
              key={p.id}
              variants={fadeUp}
            >
              {p.highlight && <span className={styles.tag}>Most Popular</span>}
              <div className={styles.logoWrap}>
                <img src={p.logo} alt={`${p.name} logo`} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.perks}>
                {p.perks.map((perk) => (
                  <li key={perk}>
                    <HiOutlineCheck size={16} /> {perk}
                  </li>
                ))}
              </ul>
              <a href={p.link} target="_blank" rel="noreferrer" className={styles.cta}>
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.whatsappBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>Prefer to book directly? Get the best rates by contacting us on WhatsApp!</p>
          <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
            <HiOutlineChatAlt2 size={18} /> Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
