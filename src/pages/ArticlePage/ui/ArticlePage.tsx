import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Article } from 'entities/Article';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { ErrorPage } from '../../ErrorPage';

const ArticlePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  if (!id) {
    return <ErrorPage errorCode={ErrorStatusCode.BadRequest} text={t('Article was not found')} />;
  }

  return <Article id={id} />;
};

export default memo(ArticlePage);
