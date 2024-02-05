import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { ArticleListView } from 'entities/ArticleList';

const selectArticleListState = (state: IState) => state.articleList;

export const selectArticleListLoading = createSelector(
  selectArticleListState,
  (articleList): boolean => !!articleList?.isLoading,
);
export const selectArticleListView = createSelector(
  selectArticleListState,
  (articleList): ArticleListView => articleList?.view || ArticleListView.Tile,
);
export const selectArticleListPage = createSelector(
  selectArticleListState,
  (articleList): number => articleList?.page || 1,
);
export const selectArticleListLimit = createSelector(
  selectArticleListState,
  (articleList): number => articleList?.limit || 3,
);
export const selectArticleListHasMore = createSelector(
  selectArticleListState,
  (articleList): boolean => !!articleList?.hasMore,
);
