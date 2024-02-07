import { MutableRefObject, useEffect } from 'react';

interface IUseInfiniteScroll {
  triggerRef: MutableRefObject<HTMLDivElement | null>;
  wrapperRef: MutableRefObject<HTMLDivElement | null>;
  callback?: () => void;
}

export const useInfiniteScroll = ({ callback, triggerRef, wrapperRef }: IUseInfiniteScroll) => {
  useEffect(() => {
    const options = {
      root: wrapperRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback && callback();
      }
    }, options);

    triggerRef.current && observer.observe(triggerRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggerRef.current && observer.unobserve(triggerRef.current);
    };
  }, [callback, triggerRef, wrapperRef]);
};
