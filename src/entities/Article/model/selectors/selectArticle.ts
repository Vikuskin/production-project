import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { ICustomError } from 'shared/types/customError';

import { IArticleData } from '../types/articleData';

const selectArticle = (state: IState) => state.article;

export const selectArticleData = createSelector(
  selectArticle,
  (article): IArticleData | null => article?.articleData || null,
);
export const selectArticleLoading = createSelector(selectArticle, (article): boolean => !!article?.isLoading);
export const selectArticleError = createSelector(
  selectArticle,
  (article): ICustomError | null => article?.error || null,
);