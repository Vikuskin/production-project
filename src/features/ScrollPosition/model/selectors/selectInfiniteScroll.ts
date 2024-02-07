import { createSelector } from '@reduxjs/toolkit';

import { AppRoute } from 'app/providers/router';
import { IState } from 'app/providers/StoreProvider';

const selectInfiniteScroll = (state: IState) => state.infiniteScroll.scroll;

export const selectInfiniteScrollByPath = createSelector(
  selectInfiniteScroll,
  (_, path: AppRoute) => path,
  (scroll, path): number => scroll[path] || 0,
);
