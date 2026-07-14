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

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Attractions />
      <Reviews />
      <Booking />
      <Contact />
      <MapSection />
      <Footer />
    </PageTransition>
  );
}
