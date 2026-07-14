import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { siteInfo, navLinks, bookingPlatforms } from '../../data/content';
import { Link } from 'react-router-dom';
import useSectionNav from '../../hooks/useSectionNav';
import styles from './Footer.module.scss';

export default function Footer() {
  const goTo = useSectionNav();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <button onClick={() => goTo('#home')} className={styles.logo}>
              <img src="/images/logo-mark.png" alt="Angels Avenue" />
              Angels Avenue
            </button>
            <p>
              A peaceful hilltop retreat opposite Bethanya Church, Karkala. Experience nature,
              comfort, and warm hospitality.
            </p>
            <div className={styles.socials}>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href={siteInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href={siteInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Quick Links</h4>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => goTo(l.href)}>{l.label}</button>
            ))}
            <button onClick={() => goTo('#booking')}>Book Now</button>
          </div>

          <div className={styles.col}>
            <h4>Book With Us</h4>
            {bookingPlatforms.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noreferrer">{p.name}</a>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Contact</h4>
            <p>{siteInfo.address[1]}<br />{siteInfo.address[2]} {siteInfo.address[3].split(',')[0]}</p>
            <a href={siteInfo.phoneHref}>{siteInfo.phone}</a>
            <a href={siteInfo.phone2Href}>{siteInfo.phone2}</a>
          </div>
        </div>

        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className={styles.bottom}>
          <p>© 2026 Angels Avenue. All rights reserved. Designed with ❤️ by meowLabs, Karnataka.</p>
          <div className={styles.legal}>
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}