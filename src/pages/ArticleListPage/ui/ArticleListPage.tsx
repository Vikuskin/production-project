import React, { FC, memo, useCallback } from 'react';

import { ArticleList, ArticleListView } from 'entities/ArticleList';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { PageWrapper } from 'shared/ui/PageWrapper';

import {
  selectArticleListLoading,
  selectArticleListPage,
  selectArticleListView,
} from '../model/selectors/selectArticleList';
import { fetchAllArticles } from '../model/services/fetchAllArticles';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage';
import { articleListActions, articleListReducer, selectArticleList } from '../model/slices/articleListPageSlice';

const articleListReducers: ReducersList = {
  articleList: articleListReducer,
};
const ArticleListPage: FC = () => {
  const dispatch = useAppDispatch();
  const articleList = useAppSelector(selectArticleList.selectAll);
  const articleListLoading = useAppSelector(selectArticleListLoading);
  const articleListView = useAppSelector(selectArticleListView);
  const articleListPage = useAppSelector(selectArticleListPage);
  const onLoadNextPart = useCallback(() => {
    PROJECT === 'frontend' && dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => dispatch(fetchAllArticles({ page: articleListPage })));

  const onChangeView = useCallback(
    (newView: ArticleListView) => dispatch(articleListActions.setView(newView)),
    [dispatch],
  );

  return (
    <PageWrapper onScrollEnd={onLoadNextPart}>
      <DynamicReducerLoader reducers={articleListReducers} removeAfterUnmount>
        <ArticleViewSwitcher view={articleListView} onViewClick={onChangeView} />
        {<ArticleList articleList={articleList} isLoading={articleListLoading} view={articleListView} />}
      </DynamicReducerLoader>
    </PageWrapper>
  );
};

export default memo(ArticleListPage);
