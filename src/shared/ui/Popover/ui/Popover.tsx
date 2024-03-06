import { Popover as HPopover } from '@headlessui/react';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './Popover.module.scss';

type PopoverDirection = 'topRight' | 'topLeft';
interface IPopoverProps {
  trigger: ReactNode;
  direction: PopoverDirection;
  className?: string;
}

export const Popover: FC<PropsWithChildren<IPopoverProps>> = (props: PropsWithChildren<IPopoverProps>) => {
  const { className, direction, trigger, children } = props;

  return (
    <HPopover className={getClassNames(styles.popover, [className ?? ''])}>
      <HPopover.Button className={styles.btn}>{trigger}</HPopover.Button>

      <HPopover.Panel className={getClassNames(styles.panel, [styles[direction]])}>{children}</HPopover.Panel>
    </HPopover>
  );
};
