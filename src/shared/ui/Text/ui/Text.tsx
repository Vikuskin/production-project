import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

import { TextAlign } from '../types/TextAlign';
import { TextSize } from '../types/TextSize';
import { TextVariant } from '../types/TextVariant';

interface TextProps {
  text?: string;
  variant?: TextVariant;
  className?: string;
  title?: string;
  align?: TextAlign;
  size?: TextSize;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const { text, className, title, variant = TextVariant.Normal, align = TextAlign.Left, size = TextSize.SizeM } = props;

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], styles[align], className ?? ''])}>
      {title && (
        <>
          <span className={getClassNames(styles.title, [styles[size]])}>{title}</span>
          <br />
        </>
      )}
      <span className={getClassNames(styles.text, [styles[size]])}>{text}</span>
    </div>
  );
});
