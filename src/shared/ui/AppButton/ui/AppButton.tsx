import React, { ButtonHTMLAttributes, FC, PropsWithChildren, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppButton.module.scss';

import { AppButtonSizes } from '../enums/appButtonSizes';
import { AppButtonVariants } from '../enums/appButtonVariants';

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AppButtonVariants;
  square?: boolean;
  size?: AppButtonSizes;
  className?: string;
}

export const AppButton: FC<PropsWithChildren<IAppButtonProps>> = memo((props: PropsWithChildren<IAppButtonProps>) => {
  const { className, children, variant = AppButtonVariants.Clear, square, size, disabled, ...otherProps } = props;
  const additionalClasses = [className ?? '', styles[variant]];
  let mods: Record<string, boolean> = {
    [styles.square]: !!square,
    [styles.disabled]: !!disabled,
  };

  mods = size ? { ...mods, [styles[size]]: !!size } : mods;

  return (
    <button data-testid="button" className={getClassNames(styles.button, additionalClasses, mods)} {...otherProps}>
      {children}
    </button>
  );
});
