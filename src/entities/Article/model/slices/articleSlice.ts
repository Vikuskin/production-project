import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';

import { IArticle } from '../interfaces/article';
import { fetchArticleById } from '../services/fetchArticleById';
import { IArticleData } from '../types/articleData';

export const articleInitialState: IArticle = {
  articleData: null,
  error: null,
  isLoading: false,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState: articleInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IArticle>) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<IArticleData>) => {
        state.isLoading = false;
        state.articleData = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      });
  },
});

export const { actions: articleActions, reducer: articleReducer } = articleSlice;
