import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Returns a `goTo(href)` function that scrolls to an in-page section
 * (e.g. "#booking"). If called from a route other than "/" (like /privacy
 * or /terms), it navigates home first, then scrolls once the homepage has
 * mounted.
 */
export default function useSectionNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (href) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
}