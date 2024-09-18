import { useEffect, useState } from 'react';

/**
 * Return current position and its status(up or down) of window scroll
 */
export function useScrollPosition() {
  const [position, setPosition] = useState(typeof window != 'undefined' ? window.scrollY : 0);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    if (typeof window != 'undefined') {
      const threshold = 0;
      let lastScrollY = window.scrollY;
      let ticking = false;

      const updateScrollDir = () => {
        const scrollY = window.scrollY;
        setPosition(scrollY);
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }
        setDirection(scrollY > lastScrollY ? 'down' : 'up');
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, [direction]);

  return { position, direction };
}
