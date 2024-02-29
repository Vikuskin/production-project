import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

import { HeaderTagType } from '../types/HeaderTag';
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

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.SizeS]: 'h4',
  [TextSize.SizeM]: 'h3',
  [TextSize.SizeL]: 'h2',
  [TextSize.SizeXl]: 'h1',
};

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const { text, className, title, variant = TextVariant.Normal, align = TextAlign.Left, size = TextSize.SizeM } = props;
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], styles[align], className ?? ''])}>
      {title && <HeaderTag className={getClassNames(styles.title, [styles[size]])}>{title}</HeaderTag>}
      <span className={getClassNames(styles.text, [styles[size]])}>{text}</span>
    </div>
  );
});
