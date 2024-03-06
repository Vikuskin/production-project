import { ActionReducerMapBuilder, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { IState } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';

import { IArticleComments } from '../interfaces/articleComments';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const articleCommentsAdapter = createEntityAdapter<IComment>();
const articleCommentsSlice = createSlice({
  name: 'articleCommentList',
  initialState: articleCommentsAdapter.getInitialState<IArticleComments>({
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IArticleComments>) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleCommentsActions, reducer: articleCommentsReducer } = articleCommentsSlice;
export const selectArticleComments = articleCommentsAdapter.getSelectors<IState>(
  (state) => state?.articleComments || articleCommentsAdapter.getInitialState(),
);
