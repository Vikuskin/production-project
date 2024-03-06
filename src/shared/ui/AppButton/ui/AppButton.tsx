import React, { FC, PropsWithChildren, memo } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './AppButton.module.scss';

import { AppButtonSizes } from '../enums/appButtonSizes';
import { AppButtonVariants } from '../enums/appButtonVariants';

interface IAppButtonProps {
  variant?: AppButtonVariants;
  square?: boolean;
  size?: AppButtonSizes;
  className?: string;
  disabled?: boolean;
  component?: keyof HTMLElementTagNameMap;
  onClick?: (e: React.MouseEvent) => void;
  'data-testid'?: string;
}

export const AppButton: FC<PropsWithChildren<IAppButtonProps>> = memo((props: PropsWithChildren<IAppButtonProps>) => {
  const {
    className,
    children,
    variant = AppButtonVariants.Clear,
    square,
    size,
    disabled,
    component = 'button',
    onClick,
    'data-testid': dataTestid,
  } = props;
  const ComponentWrapper = component;
  const additionalClasses = [className ?? '', styles[variant]];
  let mods: Record<string, boolean> = {
    [styles.square]: !!square,
    [styles.disabled]: !!disabled,
  };

  mods = size ? { ...mods, [styles[size]]: !!size } : mods;

  return (
    <ComponentWrapper
      className={getClassNames(styles.button, additionalClasses, mods)}
      onClick={onClick}
      data-testid={dataTestid || 'button'}
    >
      {children}
    </ComponentWrapper>
  );
});
