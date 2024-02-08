import { useCallback, useRef } from 'react';

type AnyFunction = (...args: never[]) => never;

export const useDebounce = <Fn extends AnyFunction>(callback: ReturnType<Fn>, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: Parameters<Fn>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
