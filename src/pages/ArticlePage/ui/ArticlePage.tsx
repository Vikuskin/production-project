import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/Article';
import { ArticleDetails } from 'features/ArticleDetails';
import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { PageWrapper } from 'widgets/PageWrapper';

import { ArticlePageHeader } from './ArticlePageHeader/ArticlePageHeader';

const ArticlePage: FC = () => {
  // TODO: remove default value (storybook)
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return <ErrorPage errorCode={ErrorStatusCode.BadRequest} text={t('Article was not found')} />;
  }

  return (
    <PageWrapper>
      <ArticlePageHeader />
      <Article id={id} />
      <ArticleDetails articleId={id} />
    </PageWrapper>
  );
};

export default memo(ArticlePage);
