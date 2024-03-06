import React, { FC, memo } from 'react';

import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { Code } from '@/shared/ui/Code';

import * as styles from './ArticleCodeBlock.module.scss';

import { IArticleCodeBlock } from '../../model/interfaces/articleCodeBlock';

interface IArticleCodeBlockProps {
  block: IArticleCodeBlock;
  className?: string;
}

export const ArticleCodeBlock: FC<IArticleCodeBlockProps> = memo(({ className, block }: IArticleCodeBlockProps) => {
  return (
    <div className={getClassNames(styles.articleCodeBlock, [className ?? ''])}>
      <Code text={block.code} />
    </div>
  );
});
