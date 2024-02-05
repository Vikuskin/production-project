import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';

const selectArticleListState = (state: IState) => state.articleList;

export const selectArticleList = createSelector(
  selectArticleListState,
  (articleList): IArticleData[] => articleList?.articleList || [],
);
export const selectArticleListLoading = createSelector(
  selectArticleListState,
  (articleList): boolean => !!articleList?.isLoading,
);
