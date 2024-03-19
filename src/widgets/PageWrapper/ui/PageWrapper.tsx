import React, { FC, PropsWithChildren, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { infiniteScrollActions, selectInfiniteScrollByPath } from '@/features/ScrollPosition';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

import * as styles from './PageWrapper.module.scss';

interface IPageWrapper {
  isSaveScroll?: boolean;
  onScrollEnd?: () => void;
}
export const PageWrapper: FC<PropsWithChildren<IPageWrapper>> = (props) => {
  const { children, onScrollEnd, isSaveScroll } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const onScroll = useThrottle((e: React.UIEvent<HTMLElement>) => {
    isSaveScroll &&
      dispatch(infiniteScrollActions.setScrollPosition({ path: pathname, position: e.currentTarget.scrollTop }));
  }, 500);
  const scrollPosition = useAppSelector((state) => selectInfiniteScrollByPath(state, pathname));

  useInitialEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = scrollPosition;
    }
  });

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <main ref={wrapperRef} className={styles.pageWrapper} onScroll={onScroll}>
      {children}
      {onScrollEnd && <div className={styles.trigger} ref={triggerRef} />}
    </main>
  );
};
