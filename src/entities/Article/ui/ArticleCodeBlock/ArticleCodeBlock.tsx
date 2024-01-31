import React, { FC } from 'react';

import * as styles from './ArticleCodeBlock.module.scss';

interface IArticleCodeBlockProps {
  className?: string;
}

export const ArticleCodeBlock: FC<IArticleCodeBlockProps> = () => {
  return <div className={styles.articleCodeBlock}></div>;
};
