import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { routePaths } from 'app/providers/router';
import { selectArticleData, selectIsEditableArticle } from 'entities/Article';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton';
import { HStack } from 'shared/ui/Stack';

import * as styles from './ArticlePageHeader.module.scss';

interface IArticlePageHeaderProps {
  className?: string;
}

export const ArticlePageHeader: FC<IArticlePageHeaderProps> = ({ className }) => {
  const { t } = useTranslation();
  const articleData = useAppSelector(selectArticleData);
  const navigate = useNavigate();
  const onBack = useCallback(() => navigate(routePaths.article_list), [navigate]);
  const onEdit = useCallback(
    () => navigate(`${routePaths.article}${articleData?.id}/edit`),
    [articleData?.id, navigate],
  );
  const isEditableArticle = useAppSelector(selectIsEditableArticle);

  return (
    <HStack className={className}>
      {articleData && (
        <AppButton variant={AppButtonVariant.Outline} onClick={onBack}>
          {t('Back to list')}
        </AppButton>
      )}
      {isEditableArticle && articleData && (
        <AppButton className={styles.editBtn} variant={AppButtonVariant.Outline} onClick={onEdit}>
          {t('Edit')}
        </AppButton>
      )}
    </HStack>
  );
};
