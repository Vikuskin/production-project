import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { ArticleTypes } from 'entities/Article';

import { ArticleOrder } from '../enums/articleOrder';
import { ArticleSort } from '../enums/articleSort';

const selectArticleFilters = (state: IState) => state.articleFilters;

export const selectArticleOrder = createSelector(
  selectArticleFilters,
  (articleFilters): ArticleOrder => articleFilters?.order || ArticleOrder.Decrease,
);
export const selectArticleSearch = createSelector(
  selectArticleFilters,
  (articleFilters): string => articleFilters?.search ?? '',
);
export const selectArticleSort = createSelector(
  selectArticleFilters,
  (articleFilters): ArticleSort => articleFilters?.sort || ArticleSort.Date,
);
export const selectArticleType = createSelector(
  selectArticleFilters,
  (articleFilters): ArticleTypes | null => articleFilters?.type || null,
);
