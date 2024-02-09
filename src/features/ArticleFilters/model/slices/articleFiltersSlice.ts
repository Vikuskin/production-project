import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticleType } from 'entities/Article';

import { IArticleFilters } from '../types/articleFilters';
import { ArticleOrder } from '../types/articleOrder';
import { ArticleSort } from '../types/articleSort';

export const articleFiltersInitialState: IArticleFilters = {
  order: ArticleOrder.Decrease,
  search: '',
  sort: ArticleSort.Date,
  type: null,
};

export const articleFiltersSlice = createSlice({
  name: 'articleFilters',
  initialState: articleFiltersInitialState,
  reducers: {
    setOrder: (state, action: PayloadAction<ArticleOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSort>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType | null>) => {
      state.type = action.payload;
    },
  },
});

export const { actions: articleFiltersActions, reducer: articleFiltersReducer } = articleFiltersSlice;
