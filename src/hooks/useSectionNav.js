import { useLocation, useNavigate } from 'react-router-dom';

// How long to keep polling for the target section before giving up. Well
// above the page-transition duration so slower devices still get there.
const MAX_WAIT_MS = 2000;
const POLL_INTERVAL_MS = 50;

/**
 * Waits for `href` to exist in the DOM (polling, since the homepage mounts
 * asynchronously after the page-exit transition) and scrolls to it once found.
 */
function scrollWhenReady(href) {
  const start = Date.now();

  const tryScroll = () => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (Date.now() - start < MAX_WAIT_MS) {
      setTimeout(tryScroll, POLL_INTERVAL_MS);
    }
  };

  tryScroll();
}

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
      scrollWhenReady(href);
    } else {
      scrollWhenReady(href);
    }
  };
}