import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

const selectArticleComments = (state: IState) => state?.articleComments;

export const selectArticleCommentsLoading = createSelector(
  selectArticleComments,
  (articleComments): boolean => !!articleComments?.isLoading,
);
