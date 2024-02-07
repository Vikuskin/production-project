import { useCallback, useEffect, useRef } from 'react';

type AnyFunction = (...args: never[]) => never;

export const useThrottle = <Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) => {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const throttledCallback = useCallback(
    (...args: Parameters<Fn>) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return throttledCallback;
};
