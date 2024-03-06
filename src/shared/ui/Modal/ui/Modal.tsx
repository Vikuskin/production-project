import React, { FC, PropsWithChildren } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useModal } from '@/shared/lib/hooks/useModal';
import { Overlay } from '@/shared/ui/Overlay';
import { Portal } from '@/shared/ui/Portal/ui/Portal';
import { HStack } from '@/shared/ui/Stack';

import * as styles from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  lazy?: boolean;
}
export const ANIMATION_DELAY = 200;
export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { children, className, isOpen, onClose, lazy } = props;
  const { isClosing, isMounted, isOpening, closeHandler } = useModal({
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });
  const mods: Record<string, boolean> = {
    [styles.isOpening]: isOpening,
    [styles.opened]: isMounted,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted && !isOpening) {
    return null;
  }

  return (
    <Portal>
      <HStack
        justify="center"
        align="center"
        data-testid="Modal.wrapper"
        className={getClassNames(styles.modal, [className ?? ''], mods)}
      >
        <Overlay onClick={closeHandler} />
        <div data-testid="Modal.content" className={styles.content}>
          {children}
        </div>
      </HStack>
    </Portal>
  );
};
