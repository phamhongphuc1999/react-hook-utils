import { useEffect, useState } from 'react';

type LocationType = Partial<{ x: number; y: number }>;

/**
 * Return current location of pointer in screen
 * @param {LocationType | undefined} initialLocation Initial location
 */
export function useMousePosition(initialLocation?: LocationType) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: initialLocation?.x ?? 0,
    y: initialLocation?.y ?? 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: globalThis.MouseEvent) => {
      setPosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return { position };
}
