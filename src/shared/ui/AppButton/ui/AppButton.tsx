import React, { ButtonHTMLAttributes, FC, PropsWithChildren, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppButton.module.scss';

export enum AppButtonVariant {
  Clear = 'clear',
  Outline = 'outline',
  OutlineDanger = 'outlineDanger',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum AppButtonSize {
  SizeM = 'sizeM',
  SizeL = 'sizeL',
  SizeXl = 'sizeXl',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: AppButtonVariant;
  square?: boolean;
  size?: AppButtonSize;
  className?: string;
}

export const AppButton: FC<PropsWithChildren<IAppButtonProps>> = memo((props: PropsWithChildren<IAppButtonProps>) => {
  const { className, children, variant = AppButtonVariant.Clear, square, size, disabled, ...otherProps } = props;
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
