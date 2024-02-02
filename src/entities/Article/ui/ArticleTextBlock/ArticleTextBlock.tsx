import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Text } from 'shared/ui/Text';

import * as styles from './ArticleTextBlock.module.scss';

import { IArticleTextBlock } from '../../model/types/articleBlock';

interface IArticleTextBlockProps {
  block: IArticleTextBlock;
  className?: string;
}

export const ArticleTextBlock: FC<IArticleTextBlockProps> = memo(({ block, className }: IArticleTextBlockProps) => {
  return (
    <div className={getClassNames(styles.articleTextBlock, [className ?? ''])}>
      {block.title && <Text className={styles.title} title={block.title} />}
      {block.paragraphs.map((paragraph, i) => (
        <Text key={i} text={paragraph} />
      ))}
    </div>
  );
});
