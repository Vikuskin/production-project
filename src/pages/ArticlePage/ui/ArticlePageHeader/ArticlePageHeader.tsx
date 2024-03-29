import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { selectArticleData, selectIsEditableArticle } from 'entities/Article';
import { routePaths } from 'shared/constants/routePaths';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';
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
        <AppButton variant={AppButtonVariants.Outline} onClick={onBack}>
          {t('Back to list')}
        </AppButton>
      )}
      {isEditableArticle && articleData && (
        <AppButton className={styles.editBtn} variant={AppButtonVariants.Outline} onClick={onEdit}>
          {t('Edit')}
        </AppButton>
      )}
    </HStack>
  );
};
