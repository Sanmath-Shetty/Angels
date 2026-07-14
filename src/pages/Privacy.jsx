import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineArrowLeft } from 'react-icons/hi';
import PageTransition from '../components/PageTransition.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';
import styles from './Legal.module.scss';

const sections = [
  {
    num: '01',
    title: 'Information We Collect',
    body: 'We may collect the following information when you interact with our website or contact us directly:',
    list: ['Name', 'Phone Number', 'Email Address', 'Booking Details', 'WhatsApp Messages', 'Contact Form Submissions'],
  },
  {
    num: '02',
    title: 'How We Use Your Information',
    body: 'Information collected is used solely to serve and improve your experience with us:',
    list: ['Respond to inquiries promptly', 'Process and confirm booking requests', 'Provide dedicated customer support', 'Continuously improve our services'],
  },
  {
    num: '03',
    title: 'Third-Party Services',
    body: 'Our website may contain links to external booking and travel platforms. Please note that we are not responsible for the privacy practices of those websites.',
    tags: ['Airbnb', 'MakeMyTrip', 'Goibibo', 'TripAdvisor'],
  },
  {
    num: '04',
    title: 'Data Security',
    body: 'We take reasonable and appropriate measures to safeguard your personal information. However, please be aware that no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.',
  },
];

export default function Privacy() {
  useDocumentHead({
    title: 'Privacy Policy | Angels Avenue',
    description: 'Read the Privacy Policy for Angels Avenue, a hilltop homestay in Karkala, Karnataka — how we collect, use, and protect your information.',
    path: '/privacy',
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
            <h1>Privacy Policy</h1>
            <p className={styles.tagline}>Your Privacy Matters To Us</p>
            <p className={styles.updated}>Last Updated — June 2026</p>
          </motion.div>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            At Angels Avenue, we respect your privacy and are committed to protecting any
            personal information you may provide when contacting us or making a booking inquiry.
          </motion.p>

          <div className={styles.sections}>
            {sections.map((s, i) => (
              <motion.div
                className={styles.glassCard}
                key={s.num}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.num}>{s.num} —</span>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
                {s.list && (
                  <ul>
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
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
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <span className={styles.num}>05 —</span>
              <h2>Contact Us</h2>
              <p>Have questions or concerns about this Privacy Policy? We&apos;re here to help.</p>
              <div className={styles.contactBox}>
                <HiOutlineMail size={22} />
                <div>
                  <h3>Get In Touch</h3>
                  <p>Please reach out to Angels Avenue directly and our team will be happy to address any privacy-related concerns.</p>
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
