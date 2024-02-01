import React, { FC, memo } from 'react';

import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Text, TextAlign } from 'shared/ui/Text';

import * as styles from './ArticleImageBlock.module.scss';

import { IArticleImgBlock } from '../../model/types/articleBlock';

interface IArticleImageBlockProps {
  block: IArticleImgBlock;
  className?: string;
}

export const ArticleImageBlock: FC<IArticleImageBlockProps> = memo(({ block, className }: IArticleImageBlockProps) => {
  return (
    <div className={getClassNames(styles.wrapper, [className ?? ''])}>
      <img alt={block.title} className={styles.image} src={block.src} />
      {block.title && <Text title={block.title} align={TextAlign.Center} />}
    </div>
  );
});
