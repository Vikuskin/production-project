import React, { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Portal } from 'shared/ui/Portal/ui/Portal';
import { HStack } from 'shared/ui/Stack';

import * as styles from './Modal.module.scss';

interface IModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
  lazy?: boolean;
}
export const ANIMATION_DELAY = 200;
export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { children, className, isOpen, onClose, lazy } = props;
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const mods: Record<string, boolean> = {
    [styles.isOpening]: isOpening,
    [styles.opened]: isMounted,
    [styles.isClosing]: isClosing,
  };
  const openingTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
      openingTimerRef.current = setTimeout(() => {
        setIsMounted(true);
        setIsOpening(false);
      }, ANIMATION_DELAY);
    }

    return () => {
      clearTimeout(openingTimerRef.current);
    };
  }, [isOpen]);

  const closingTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      closingTimerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
        setIsMounted(false);
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

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(closingTimerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted && !isOpening) {
    return null;
  }

  return (
    <Portal>
      <div data-testid="modal" className={getClassNames(styles.modal, [className ?? ''], mods)}>
        <HStack align="center" justify="center" className={styles.overlay} onClick={closeHandler}>
          <div data-testid="content" className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </HStack>
      </div>
    </Portal>
  );
};
