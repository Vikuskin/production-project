import React, { FC } from 'react';

import { ArticleList, ArticleListView } from 'entities/ArticleList';
import { getClassNames } from 'shared/lib/classNames/getClassNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Text, TextSize } from 'shared/ui/Text';

import * as styles from './ArticleRecommends.module.scss';

import { selectRecommendsLoading } from '../models/selectors/selectArticleRecommends';
import { fetchArticleRecommends } from '../models/services/fetchArticleRecommends';
import { articleRecommendsReducer, selectArticleRecommends } from '../models/slices/articleRecommendsSlice';

interface ArticleRecommendsProps {
  className?: string;
}

const articleRecommendsReducers: ReducersList = {
  articleRecommends: articleRecommendsReducer,
};

export const ArticleRecommends: FC<ArticleRecommendsProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const articleRecommends = useAppSelector(selectArticleRecommends.selectAll);
  const articleRecommendsLoading = useAppSelector(selectRecommendsLoading);

  useInitialEffect(() => {
    dispatch(fetchArticleRecommends());
  });

  return (
    <DynamicReducerLoader reducers={articleRecommendsReducers} removeAfterUnmount>
      <div className={getClassNames(styles.recommends, [className ?? ''])}>
        <Text className={styles.title} size={TextSize.SizeL} title={'Recommends'} />
        <ArticleList
          target={'_blank'}
          className={styles.content}
          articleList={articleRecommends}
          isLoading={articleRecommendsLoading}
          view={ArticleListView.Tile}
        />
      </div>
    </DynamicReducerLoader>
  );
};
