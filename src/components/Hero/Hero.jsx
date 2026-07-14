import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineCalendar, HiOutlineChatAlt2 } from 'react-icons/hi';
import { siteInfo, heroImage } from '../../data/content';
import styles from './Hero.module.scss';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className={styles.hero}>
      <motion.div className={styles.bgWrap} style={{ y }}>
        <motion.img
          src={heroImage}
          alt="Panoramic hilltop view from Angels Avenue homestay, Karkala"
          className={styles.bgImg}
          fetchPriority="high"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.28 }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className={styles.overlay} />
      </motion.div>

      <div className={styles.particles}>
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${(i * 7.3) % 100}%`,
              animationDelay: `${i * 1.1}s`,
              animationDuration: `${10 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      <motion.div className={styles.content} style={{ opacity }}>
        <div className="container">
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {siteInfo.tagline}
          </motion.p>

          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Where Peace <br />
            Meets the <em>Hilltops</em>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            Breathe in the greens. Wake up to panoramic views.
            <br />
            Your perfect escape awaits at Angels Avenue.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#booking" className="btn btn-primary">
              <HiOutlineCalendar size={18} /> Book Now
            </a>
            <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <HiOutlineChatAlt2 size={18} /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className={styles.scrollDot} />
        <span className={styles.scrollText}>Scroll to explore</span>
      </motion.div>
    </section>
  );
}