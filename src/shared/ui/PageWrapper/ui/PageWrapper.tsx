import React, { FC, PropsWithChildren, useRef } from 'react';

import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

import * as styles from './PageWrapper.module.scss';

interface IPageWrapper {
  onScrollEnd?: () => void;
}
export const PageWrapper: FC<PropsWithChildren<IPageWrapper>> = ({ children, onScrollEnd }) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  return (
    <div ref={wrapperRef} className={styles.pageWrapper}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
