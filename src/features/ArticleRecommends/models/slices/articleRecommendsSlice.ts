import { ActionReducerMapBuilder, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';

import { fetchArticleRecommends } from '../services/fetchArticleRecommends';
import { IArticleRecommends } from '../types/articleRecommends';

const articleRecommendsAdapter = createEntityAdapter<IArticleData>();
const articleRecommendsSlice = createSlice({
  name: 'articleCommentList',
  initialState: articleRecommendsAdapter.getInitialState<IArticleRecommends>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IArticleRecommends>) => {
    builder
      .addCase(fetchArticleRecommends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommends.fulfilled, (state, action: PayloadAction<IArticleData[]>) => {
        state.isLoading = false;
        articleRecommendsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommends.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleRecommendsActions, reducer: articleRecommendsReducer } = articleRecommendsSlice;
export const selectArticleRecommends = articleRecommendsAdapter.getSelectors<IState>(
  (state) => state?.articleRecommends || articleRecommendsAdapter.getInitialState(),
);
