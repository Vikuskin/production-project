import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

import { TextAlign } from '../types/TextAlign';
import { TextVariant } from '../types/TextVariant';

interface TextProps {
  text: string;
  variant?: TextVariant;
  className?: string;
  title?: string;
  align?: TextAlign;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const { text, className, title, variant = TextVariant.Normal, align = TextAlign.Left } = props;

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], styles[align], className ?? ''])}>
      {title && <p className={styles.title}>{title}</p>}
      <span className={styles.text}>{text}</span>
    </div>
  );
});
