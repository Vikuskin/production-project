import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppButton.module.scss';

export enum AppButtonVariants {
  Clear = 'clear',
  Outline = 'outline',
  Background = 'background',
  BackgroundInverted = 'backgroundInverted',
}

export enum AppButtonSizes {
  SizeM = 'sizeM',
  SizeL = 'sizeL',
  SizeXl = 'sizeXl',
}

interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: AppButtonVariants;
  square?: boolean;
  size?: AppButtonSizes;
  className?: string;
}

export const AppButton: FC<PropsWithChildren<IAppButtonProps>> = (props) => {
  const { className, children, variant, square, size, ...otherProps } = props;
  const additionalClasses = [className ?? '', styles[variant]];
  let mods: Record<string, boolean> = {
    [styles.square]: !!square,
  };

  mods = size ? { ...mods, [styles[size]]: !!size } : mods;

  return (
    <button data-testid="button" className={getClassNames(styles.button, additionalClasses, mods)} {...otherProps}>
      {children}
    </button>
  );
};
