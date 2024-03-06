import React, { FC, memo } from 'react';
import { useParams } from 'react-router-dom';

import { Article } from '@/entities/Article';
import { ArticleComments } from '@/features/ArticleComments';
import { ArticleRecommends } from '@/features/ArticleRecommends';
import { PageWrapper } from '@/widgets/PageWrapper';

import * as styles from './ArticlePage.module.scss';
import { ArticlePageHeader } from './ArticlePageHeader/ArticlePageHeader';

const ArticlePage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <ArticlePageHeader />
      <Article id={id || null} />
      <hr className={styles.line} />
      <ArticleRecommends />
      <hr className={styles.line} />
      <ArticleComments articleId={id || null} />
    </PageWrapper>
  );
};

export default memo(ArticlePage);
