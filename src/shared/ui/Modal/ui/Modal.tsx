import React, { FC, PropsWithChildren, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Portal } from 'shared/ui/Portal/ui/Portal';

import * as styles from './Modal.module.scss';

export const ANIMATION_DELAY = 200;

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const mods: Record<string, boolean> = {
    [styles.opened]: !!isOpen,
    [styles.isClosing]: isClosing,
  };
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);
  const onContentClick = (e: React.MouseEvent) => e.stopPropagation();
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div data-testid="modal" className={getClassNames(styles.modal, [className ?? ''], mods)}>
        <div data-testid="overlay" className={styles.overlay} onClick={closeHandler}>
          <div data-testid="content" className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
