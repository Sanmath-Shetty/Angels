import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineChatAlt2 } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';
import { siteInfo } from '../../data/content';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={`section-pad ${styles.contact}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className={styles.subtext}>We&apos;d love to hear from you and help plan your stay</p>
        </div>

        <div className={styles.split}>
          <motion.div
            className={styles.infoCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.infoItem}>
              <div className={styles.iconBox}><HiOutlineLocationMarker size={22} /></div>
              <div>
                <h4>Address</h4>
                {siteInfo.address.map((line) => <p key={line}>{line}</p>)}
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><HiOutlinePhone size={22} /></div>
              <div>
                <h4>Phone Number 1</h4>
                <p><a href={siteInfo.phoneHref}>{siteInfo.phone}</a></p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><HiOutlinePhone size={22} /></div>
              <div>
                <h4>Phone Number 2</h4>
                <p><a href={siteInfo.phone2Href}>{siteInfo.phone2}</a></p>
              </div>
            </div>

            <div className={styles.actions}>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
                <HiOutlineChatAlt2 size={18} /> WhatsApp Us
              </a>
              <a href={siteInfo.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">
                <FaInstagram size={17} /> Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.illustrationCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 400 400" className={styles.illustration}>
              <circle cx="200" cy="200" r="170" fill="var(--forest)" opacity="0.08" />
              <circle cx="200" cy="200" r="120" fill="var(--gold)" opacity="0.12" />
              <path d="M120 190 L200 130 L280 190 V270 H120 Z" fill="var(--forest)" opacity="0.85" />
              <rect x="150" y="220" width="40" height="50" fill="var(--cream)" />
              <rect x="220" y="215" width="30" height="30" fill="var(--gold-bright)" />
              <circle cx="200" cy="130" r="8" fill="var(--terracotta)" />
              <path d="M100 270 Q200 250 300 270" stroke="var(--forest-light)" strokeWidth="3" fill="none" opacity="0.5" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
