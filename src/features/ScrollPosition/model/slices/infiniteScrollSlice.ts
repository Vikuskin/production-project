import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IInfiniteScroll } from '../types/infiniteScroll';

const infiniteScrollInitialState: IInfiniteScroll = {
  scroll: {},
};

export const infiniteScrollSlice = createSlice({
  name: 'infiniteScroll',
  initialState: infiniteScrollInitialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll = {
        [payload.path]: payload.position,
      };
    },
  },
});

export const { actions: infiniteScrollActions, reducer: infiniteScrollReducer } = infiniteScrollSlice;
