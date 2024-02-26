import React, { FC, memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ArticleList } from 'entities/ArticleList';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { PageWrapper } from 'widgets/PageWrapper';

import * as styles from './ArticleList.module.scss';
import { ArticleListHeader } from './ArticleListHeader/ArticleListHeader';

import { selectArticleListLoading, selectArticleListView } from '../model/selectors/selectArticleList';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage';
import { articleListReducer, selectArticleList } from '../model/slices/articleListPageSlice';

const articleListReducers: ReducersList = {
  articleList: articleListReducer,
};
const ArticleListPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const articleList = useAppSelector(selectArticleList.selectAll);
  const articleListLoading = useAppSelector(selectArticleListLoading);
  const articleListView = useAppSelector(selectArticleListView);
  const onLoadNextPart = useCallback(() => {
    PROJECT === 'frontend' && dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => dispatch(initArticlePage(searchParams)));

  return (
    <PageWrapper onScrollEnd={onLoadNextPart} isSaveScroll>
      <DynamicReducerLoader reducers={articleListReducers}>
        <ArticleListHeader
          className={styles.header}
          articleListView={articleListView}
          resultCount={articleList.length}
        />
        {<ArticleList articleList={articleList} isLoading={articleListLoading} view={articleListView} />}
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticleListPage);
