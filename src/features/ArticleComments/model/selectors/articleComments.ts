import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { ICustomError } from 'shared/types/customError';

const selectArticleComments = (state: IState) => state.articleComments;

export const selectArticleCommentsLoading = createSelector(
  selectArticleComments,
  (articleComments): boolean => !!articleComments?.isLoading,
);
export const selectArticleCommentsError = createSelector(
  selectArticleComments,
  (articleComments): ICustomError | null => articleComments?.error || null,
);
