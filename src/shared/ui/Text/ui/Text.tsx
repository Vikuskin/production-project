import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

export enum TextVariant {
  Normal = 'normal',
  Error = 'error',
}

interface TextProps {
  text: string;
  variant?: TextVariant;
  className?: string;
  title?: string;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const { text, className, title, variant = TextVariant.Normal } = props;

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], className ?? ''])}>
      {title && <p className={styles.title}>{title}</p>}
      <span className={styles.text}>{text}</span>
    </div>
  );
});
