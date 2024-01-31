import React, { FC } from 'react';

import * as styles from './ArticleTextBlock.module.scss';

interface IArticleTextBlockProps {
  className?: string;
}

export const ArticleTextBlock: FC<IArticleTextBlockProps> = () => {
  return <div className={styles.articleTextBlock}></div>;
};
