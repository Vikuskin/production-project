import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/Article';
import { ArticleComments } from 'features/ArticleComments';
import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import * as styles from './ArticlePage.module.scss';

const ArticlePage: FC = () => {
  // TODO: remove default value (storybook)
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return <ErrorPage errorCode={ErrorStatusCode.BadRequest} text={t('Article was not found')} />;
  }

  return (
    <>
      <Article id={id} />
      <hr className={styles.line} />
      <ArticleComments id={id} />
    </>
  );
};

export default memo(ArticlePage);
