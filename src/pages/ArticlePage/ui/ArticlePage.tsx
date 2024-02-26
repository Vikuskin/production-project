import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import { routePaths } from 'app/providers/router';
import { Article, selectArticleData, selectIsEditableArticle } from 'entities/Article';
import { ArticleDetails } from 'features/ArticleDetails';
import { ErrorPage } from 'pages/ErrorPage';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { PageWrapper } from 'widgets/PageWrapper';

import * as styles from './ArticlePage.module.scss';

const ArticlePage: FC = () => {
  // TODO: remove default value (storybook)
  const { id = '1' } = useParams<{ id: string }>();
  const { t } = useTranslation('article');
  const articleData = useAppSelector(selectArticleData);
  const navigate = useNavigate();
  const onBack = useCallback(() => navigate(routePaths.article_list), [navigate]);
  const onEdit = useCallback(
    () => navigate(`${routePaths.article}${articleData?.id}/edit`),
    [articleData?.id, navigate],
  );
  const isEditableArticle = useAppSelector(selectIsEditableArticle);

  if (!id) {
    return <ErrorPage errorCode={ErrorStatusCode.BadRequest} text={t('Article was not found')} />;
  }

  return (
    <PageWrapper>
      <div className={styles.articleHeader}>
        <AppButton variant={AppButtonVariant.Outline} onClick={onBack}>
          {t('Back to list')}
        </AppButton>
        {isEditableArticle && (
          <AppButton className={styles.editBtn} variant={AppButtonVariant.Outline} onClick={onEdit}>
            {t('Edit')}
          </AppButton>
        )}
      </div>
      <Article id={id} />
      <ArticleDetails articleId={id} />
    </PageWrapper>
  );
};

export default memo(ArticlePage);
