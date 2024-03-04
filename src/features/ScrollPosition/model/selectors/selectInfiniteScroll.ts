import { createSelector } from '@reduxjs/toolkit';

import { AppRoutes } from 'app/providers/router';
import { IState } from 'app/providers/StoreProvider';

const selectInfiniteScroll = (state: IState) => state.infiniteScroll.scroll;

export const selectInfiniteScrollByPath = createSelector(
  selectInfiniteScroll,
  (_, path: AppRoutes) => path,
  (scroll, path): number => scroll[path] || 0,
);
