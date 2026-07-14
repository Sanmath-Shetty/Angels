import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineArrowLeft } from 'react-icons/hi';
import PageTransition from '../components/PageTransition.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import styles from './Legal.module.scss';

const sections = [
  {
    num: '01',
    title: 'Website Information',
    body: 'The information provided on this website is for general informational purposes only. While we strive for accuracy, we do not guarantee that all content is always current or complete. Content on this site is subject to change without notice. We encourage you to contact us directly for the most up-to-date information on availability and services.',
  },
  {
    num: '02',
    title: 'Bookings',
    body: 'Booking requests made through WhatsApp, phone calls, or third-party booking platforms are subject to availability and confirmation by our team. All reservations are considered tentative until you receive a formal confirmation from Angels Avenue. Pricing and availability may vary by season and platform.',
  },
  {
    num: '03',
    title: 'Third-Party Links',
    body: 'This website may contain links to external platforms and services. We are not responsible for the content, policies, or services provided by any third-party websites.',
    tags: ['Airbnb', 'MakeMyTrip', 'Goibibo', 'TripAdvisor', 'Instagram', 'Google Maps'],
  },
  {
    num: '04',
    title: 'Intellectual Property',
    body: 'All images, logos, text, and content displayed on this website belong exclusively to Angels Avenue unless otherwise stated. Unauthorized copying, reproduction, or distribution of any content without prior written permission is strictly prohibited.',
  },
  {
    num: '05',
    title: 'Limitation of Liability',
    body: 'Angels Avenue shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of — or inability to use — this website or its content. Your use of this website is entirely at your own risk. We make no warranties, expressed or implied, regarding the accuracy or reliability of any information herein.',
  },
  {
    num: '06',
    title: 'Changes to Terms',
    body: 'We reserve the right to modify, update, or replace these Terms of Use at any time without prior notice. Continued use of the website following any changes constitutes your acceptance of the revised terms.',
  },
];

export default function Terms() {
  useDocumentHead({
    title: 'Terms of Use | Angels Avenue',
    description: 'Terms of Use for Angels Avenue, a hilltop homestay in Karkala, Karnataka — booking terms, third-party links, and liability information.',
    path: '/terms',
  });

  return (
    <PageTransition>
      <main className={styles.page} id="main-content">
        <div className="container">
          <Link to="/" className={styles.back}><HiOutlineArrowLeft /> Angels Avenue</Link>

          <motion.div
            className={styles.hero}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>Terms of Use</h1>
            <p className={styles.tagline}>Please Read Carefully Before Proceeding</p>
            <p className={styles.updated}>Last Updated — June 2026</p>
          </motion.div>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            By accessing and using the Angels Avenue website, you agree to comply with and be
            bound by these Terms of Use. If you do not agree with any part of these terms, please
            refrain from using our website.
          </motion.p>

          <div className={styles.sections}>
            {sections.map((s, i) => (
              <motion.div
                className={styles.glassCard}
                key={s.num}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.num}>{s.num} —</span>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
                {s.tags && (
                  <div className={styles.tags}>
                    {s.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div
              className={`${styles.glassCard} ${styles.contactCard}`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className={styles.num}>07 —</span>
              <h2>Contact</h2>
              <p>For any questions or clarifications regarding these terms, we&apos;re always happy to help.</p>
              <div className={styles.contactBox}>
                <HiOutlineMail size={22} />
                <div>
                  <h3>Reach Out to Us</h3>
                  <p>Please contact Angels Avenue directly and our team will address your concerns promptly and courteously.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.footerNote}>
            <p>© 2026 Angels Avenue. All Rights Reserved.</p>
            <p>Designed with ♥ by meowLabs, Karnataka.</p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
