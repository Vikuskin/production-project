import React, { FC, PropsWithChildren, useCallback, useEffect } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '@/shared/ui/Overlay';
import { Portal } from '@/shared/ui/Portal';
import { HStack } from '@/shared/ui/Stack';

import * as styles from './Drawer.module.scss';

interface IDrawerProps {
  isOpen: boolean;
  height?: number;
  onClose: () => void;
  className?: string;
}

const DrawerContent: FC<PropsWithChildren<IDrawerProps>> = (props: PropsWithChildren<IDrawerProps>) => {
  const { Spring, Gesture } = useAnimationLibs();
  const { children, className, isOpen, onClose, height = window.innerHeight - 200 } = props;
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };
  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <HStack align="end" className={getClassNames(styles.drawer, [className ?? ''])}>
        <Overlay onClick={() => close()} />
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </HStack>
    </Portal>
  );
};
const DrawerAsync: FC<PropsWithChildren<IDrawerProps>> = (props: PropsWithChildren<IDrawerProps>) => {
  const { isLoaded } = useAnimationLibs();

  return isLoaded ? <DrawerContent {...props} /> : null;
};

export const Drawer: FC<PropsWithChildren<IDrawerProps>> = (props: IDrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);
