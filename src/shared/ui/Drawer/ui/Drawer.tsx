import React, { FC, PropsWithChildren } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';
import { HStack } from 'shared/ui/Stack';

import * as styles from './Drawer.module.scss';

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  lazy?: boolean;
}

export const Drawer: FC<PropsWithChildren<IDrawerProps>> = (props: PropsWithChildren<IDrawerProps>) => {
  const { children, className, isOpen, onClose, lazy } = props;
  const { closeHandler, isClosing, isMounted, isOpening } = useModal({ animationDelay: 300, isOpen, onClose });
  const mods: Record<string, boolean> = {
    [styles.opened]: isMounted,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted && !isOpening) {
    return null;
  }

  return (
    <Portal>
      <HStack align="end" className={getClassNames(styles.drawer, [className ?? ''], mods)}>
        <Overlay onClick={closeHandler} />
        <div className={styles.content}>{children}</div>
      </HStack>
    </Portal>
  );
};
