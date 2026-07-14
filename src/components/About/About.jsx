import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { LuLeaf, LuBedDouble, LuMapPin, LuHandHeart, LuTrees, LuSparkle } from 'react-icons/lu';
import { aboutNatureImage, aboutFeatures } from '../../data/content';
import styles from './About.module.scss';

const icons = { leaf: LuLeaf, bed: LuBedDouble, pin: LuMapPin, hands: LuHandHeart };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="about" className={`section-pad ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageStack} ref={stackRef}>
            <motion.div
              className={styles.glowRing}
              animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className={styles.floatIcon}
              animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LuSparkle size={22} />
            </motion.div>
            <motion.div
              className={styles.natureCard}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.015 }}
            >
              <motion.img
                src={aboutNatureImage}
                alt="Golden sunset over calm backwaters near Angels Avenue, Karkala"
                loading="lazy"
                style={{ y: imageY }}
              />
              <div className={styles.natureOverlay} />
              <motion.span
                className={styles.natureLabel}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <LuTrees size={18} /> Surrounded by Nature
              </motion.span>
            </motion.div>
          </div>

          <div className={styles.textCol}>
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              About Angels Avenue
            </motion.h2>
            <motion.p
              className={styles.desc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Angels Avenue is a peaceful hilltop homestay located opposite Bethanya Church in
              Karkala. Surrounded by lush greenery and panoramic views, it offers guests a
              relaxing escape with comfortable rooms, modern amenities, a welcoming atmosphere,
              and easy access to nearby attractions.
            </motion.p>

            <motion.div
              className={styles.features}
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {aboutFeatures.map((f) => {
                const Icon = icons[f.icon];
                return (
                  <motion.div className={styles.featureCard} key={f.title} variants={fadeUp}>
                    <div className={styles.featureIcon}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.a
              href="#booking"
              className="btn btn-outline"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Book Your Stay
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
