import React, { FC } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

export enum TextVariants {
  Normal = 'normal',
  Error = 'error',
}

interface TextProps {
  text: string;
  variant?: TextVariants;
  className?: string;
  title?: string;
}

export const Text: FC<TextProps> = (props) => {
  const { text, className, title, variant = TextVariants.Normal } = props;

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], className ?? ''])}>
      {title && <p className={styles.title}>{title}</p>}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
