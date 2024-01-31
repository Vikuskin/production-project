import React, { FC } from 'react';

import * as styles from './ArticleImageBlock.module.scss';

interface IArticleImageBlockProps {
  className?: string;
}

export const ArticleImageBlock: FC<IArticleImageBlockProps> = () => {
  return <div className={styles.articleImageBlock}></div>;
};
