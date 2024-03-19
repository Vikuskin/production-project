import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Rating } from '@/entities/Rating';
import { selectUserAuthData } from '@/entities/User';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { Spinner } from '@/shared/ui/Spinner';

import * as styles from './ArticleRating.module.scss';

import { useGetArticleRating, useRateArticle } from '../models/api/articleRatingApi';
import { IArticleRatingProps } from '../models/interfaces/articleRatingProps';

const ArticleRating: FC<IArticleRatingProps> = ({ className, id }) => {
  const { t } = useTranslation();
  const authData = useAppSelector(selectUserAuthData);
  const { data, isLoading } = useGetArticleRating({ userId: authData?.id || '', articleId: id });
  const articleRating = data?.[0];
  const [rateArticleMutation] = useRateArticle();
  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: authData?.id ?? '',
          articleId: id,
          feedback,
          rate: starsCount,
        });
      } catch (e) {
        console.error('Error during rate article: ', e);
      }
    },
    [authData?.id, id, rateArticleMutation],
  );
  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => handleRateArticle(starsCount, feedback),
    [handleRateArticle],
  );
  const onCancel = useCallback((starsCount: number) => handleRateArticle(starsCount), [handleRateArticle]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Rating
      rate={articleRating ? articleRating.rate : 0}
      className={getClassNames(styles.articleRating, [className ?? ''])}
      onAccept={onAccept}
      onCancel={onCancel}
      title={t('Rate this article')}
      feedbackTitle={t('Add feedback')}
    />
  );
};

export default ArticleRating;
