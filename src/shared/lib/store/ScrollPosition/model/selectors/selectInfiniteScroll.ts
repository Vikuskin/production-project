import { createSelector } from '@reduxjs/toolkit';

import { IState } from '@/app/providers/StoreProvider';
import { AppRoutes } from '@/shared/enums/appRoutes';

const selectInfiniteScroll = (state: IState) => state.infiniteScroll.scroll;

export const selectInfiniteScrollByPath = createSelector(
  selectInfiniteScroll,
  (_, path: AppRoutes) => path,
  (scroll, path): number => scroll[path] || 0,
);
