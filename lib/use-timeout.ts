import { useCallback, useEffect, useRef } from 'react';

/**
 * Simplify the interaction with timeout in React
 * @param {() => void} effectCallback Imperative function
 * @param {number} delay timeout delay
 */
export function useTimeout(effectCallback: () => void, delay: number) {
  const callbackRef = useRef(effectCallback);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    callbackRef.current = effectCallback;
  }, [effectCallback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
