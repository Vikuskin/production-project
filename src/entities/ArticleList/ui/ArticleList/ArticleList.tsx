import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { IArticleData } from 'entities/Article';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';

import * as styles from './ArticleList.module.scss';

import { ArticleListView } from '../../model/enums/articleListView';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface IArticleListProps {
  articleList: IArticleData[];
  isLoading: boolean;
  view: ArticleListView;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
}
const getSkeletons = (view: ArticleListView) => {
  if (view === ArticleListView.List) {
    return new Array(3)
      .fill(0)
      .map((_, index) => <Skeleton className={styles.skeletonCard} key={index} width="100%" height={300} />);
  }

  return new Array(12)
    .fill(0)
    .map((_, index) => <Skeleton className={styles.skeletonCard} key={index} height={330} width={220} />);
};

export const ArticleList: FC<IArticleListProps> = memo((props: IArticleListProps) => {
  const { t } = useTranslation('article');
  const { articleList, isLoading, className, view, target } = props;
  const renderArticles = useMemo(() => {
    return articleList.map((article: IArticleData) => (
      <ArticleListItem key={article.id} article={article} view={view} target={target} />
    ));
  }, [articleList, view, target]);

  if (isLoading) {
    return (
      <HStack className={getClassNames('', [className ?? '', styles[view]])} gap={15}>
        {getSkeletons(view)}
      </HStack>
    );
  }

  return (
    <HStack className={getClassNames('', [className ?? '', styles[view]])} gap={15}>
      {articleList.length ? renderArticles : <Text text={t('No articles')} />}
    </HStack>
  );
});
