import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleList, ArticleListView } from '@/entities/ArticleList';
import { getClassNames } from '@/shared/lib/classNames/getClassNames';
import { Text, TextSizes } from '@/shared/ui/Text';

import * as styles from './ArticleRecommends.module.scss';

import { useArticleRecommends } from '../models/api/articleRecommendsApi';

interface ArticleRecommendsProps {
  className?: string;
}

export const ArticleRecommends: FC<ArticleRecommendsProps> = ({ className }) => {
  const { t } = useTranslation();
  const { isLoading, data: articleRecommends, error } = useArticleRecommends(4);

  if (error || !articleRecommends) {
    return null;
  }

  return (
    <div className={getClassNames(styles.recommends, [className ?? ''])}>
      <Text size={TextSizes.SizeL} title={t('Recommends', { ns: 'article' })} />
      <ArticleList
        target={'_blank'}
        className={styles.content}
        articleList={articleRecommends}
        isLoading={isLoading}
        view={ArticleListView.Tile}
      />
    </div>
  );
};
