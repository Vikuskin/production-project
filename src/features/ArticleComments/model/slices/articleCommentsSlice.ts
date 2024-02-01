import { ActionReducerMapBuilder, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';

import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { IArticleComments } from '../types/articleComments';

const articleCommentsAdapter = createEntityAdapter<IComment>();
const articleCommentsSlice = createSlice({
  name: 'articleCommentList',
  initialState: articleCommentsAdapter.getInitialState<IArticleComments>({
    error: null,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IArticleComments>) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      });
  },
});

export const { actions: articleCommentsActions, reducer: articleCommentsReducer } = articleCommentsSlice;
export const selectArticleComments = articleCommentsAdapter.getSelectors<IState>(
  (state) => state.articleComments || articleCommentsAdapter.getInitialState(),
);
