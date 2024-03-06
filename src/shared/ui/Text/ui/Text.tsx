import React, { FC, memo } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';

import * as styles from './Text.module.scss';

import { TextAligns } from '../enums/textAligns';
import { TextSizes } from '../enums/textSizes';
import { TextVariants } from '../enums/textVariants';
import { HeaderTags } from '../types/headerTags';

interface TextProps {
  text?: string;
  variant?: TextVariants;
  className?: string;
  title?: string;
  align?: TextAligns;
  size?: TextSizes;
}

const mapSizeToHeaderTag: Record<TextSizes, HeaderTags> = {
  [TextSizes.SizeS]: 'h4',
  [TextSizes.SizeM]: 'h3',
  [TextSizes.SizeL]: 'h2',
  [TextSizes.SizeXl]: 'h1',
};

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    text,
    className,
    title,
    variant = TextVariants.Normal,
    align = TextAligns.Left,
    size = TextSizes.SizeM,
  } = props;
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div data-testid="text-wrapper" className={getClassNames('', [styles[variant], styles[align], className ?? ''])}>
      {title && <HeaderTag className={getClassNames(styles.title, [styles[size]])}>{title}</HeaderTag>}
      <span className={getClassNames(styles.text, [styles[size]])}>{text}</span>
    </div>
  );
});
