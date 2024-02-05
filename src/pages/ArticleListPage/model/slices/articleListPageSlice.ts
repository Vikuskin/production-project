import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IArticleData } from 'entities/Article';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';

import { fetchAllArticles } from '../services/fetchAllArticles';
import { IArticleList } from '../types/articleList';

export const articleListInitialState: IArticleList = {
  articleList: [],
  error: null,
  isLoading: false,
};

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState: articleListInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IArticleList>) => {
    builder
      .addCase(fetchAllArticles.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<IArticleData[]>) => {
        state.isLoading = false;
        state.articleList = action.payload;
      })
      .addCase(fetchAllArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      });
  },
});

export const { actions: articleListActions, reducer: articleListReducer } = articleListSlice;
