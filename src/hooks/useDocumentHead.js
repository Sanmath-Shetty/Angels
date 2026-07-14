import { useEffect } from 'react';

const SITE_URL = 'https://angelsavenue.in';

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Updates document.title, the meta description, canonical link, and the
 * Open Graph / Twitter title+description+url for the current route.
 * index.html carries the default (homepage) values for the very first
 * paint and for crawlers that don't execute JS; this keeps them in sync
 * for client-side navigation and for crawlers that do.
 */
export default function useDocumentHead({ title, description, path = '/' }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path]);
}
