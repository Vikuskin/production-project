import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

const selectRecommends = (state: IState) => state.articleDetails?.articleRecommends;

export const selectRecommendsLoading = createSelector(
  selectRecommends,
  (recommends): boolean => !!recommends?.isLoading,
);
