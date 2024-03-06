import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseModalProps {
  onClose: () => void;
  isOpen: boolean;
  animationDelay: number;
}

export const useModal = (props: IUseModalProps) => {
  const { animationDelay, isOpen, onClose } = props;
  const [isOpening, setIsOpening] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const openingTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsOpening(true);
      openingTimerRef.current = setTimeout(() => {
        setIsMounted(true);
        setIsOpening(false);
      }, animationDelay);
    }

    return () => {
      clearTimeout(openingTimerRef.current);
    };
  }, [animationDelay, isOpen]);

  const closingTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      closingTimerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
        setIsMounted(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);
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

  return {
    isOpening,
    isClosing,
    isMounted,
    closeHandler,
  };
};
