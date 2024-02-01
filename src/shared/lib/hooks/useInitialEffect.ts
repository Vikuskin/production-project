import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    PROJECT === 'frontend' && callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
