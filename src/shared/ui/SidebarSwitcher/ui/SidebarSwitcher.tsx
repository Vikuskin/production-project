import React, { FC, PropsWithChildren } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import * as styles from './SidebarSwitcher.module.scss';

interface ISidebarSwitcherProps {
  onClick: () => void;
  className?: string;
}

export const SidebarSwitcher: FC<PropsWithChildren<ISidebarSwitcherProps>> = (props) => {
  const { onClick, children, className } = props;

  return (
    <AppButton
      className={getClassNames(styles.switcher, [className ?? ''])}
      variant={AppButtonVariants.Clear}
      onClick={onClick}
    >
      {children}
    </AppButton>
  );
};
