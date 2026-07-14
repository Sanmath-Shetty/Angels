import PageTransition from '../components/PageTransition.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Gallery from '../components/Gallery/Gallery.jsx';
import Attractions from '../components/Attractions/Attractions.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import Booking from '../components/Booking/Booking.jsx';
import Contact from '../components/Contact/Contact.jsx';
import MapSection from '../components/Map/Map.jsx';
import Footer from '../components/Footer/Footer.jsx';
import useDocumentHead from '../hooks/useDocumentHead.js';

export default function Home() {
  useDocumentHead({
    title: 'Angels Avenue | Hilltop Homestay, Karkala',
    description: 'Angels Avenue – A peaceful hilltop homestay in Karkala, Karnataka. Surrounded by lush greenery with panoramic views.',
    path: '/',
  });

  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Gallery />
        <Attractions />
        <Reviews />
        <Booking />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
