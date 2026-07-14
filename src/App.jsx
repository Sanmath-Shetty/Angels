import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Home from './pages/Home.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

function App() {
  const location = useLocation();

  // Reset scroll to the top on every route change -- without this,
  // navigating to /privacy or /terms from a scrolled position on the
  // homepage lands the visitor mid-page instead of at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
}

export default App;