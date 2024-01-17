import React, { ButtonHTMLAttributes, FC } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './AppButton.module.scss';

export enum ButtonVariants {
  Clear = 'clear',
  Outline = 'outline',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  className?: string;
  children?: React.ReactNode;
}

export const AppButton: FC<AppButtonProps> = (props: AppButtonProps) => {
  const { className, children, variant, ...otherProps } = props;

  return (
    <button
      data-testid="button"
      className={getClassNames(styles.button, [className ?? '', styles[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
