import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ArticleTypes } from '@/entities/Article';

import { ArticleOrder } from '../enums/articleOrder';
import { ArticleSort } from '../enums/articleSort';
import { IArticleFilters } from '../interfaces/articleFilters';

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
    setType: (state, action: PayloadAction<ArticleTypes | null>) => {
      state.type = action.payload;
    },
  },
});

export const { actions: articleFiltersActions, reducer: articleFiltersReducer } = articleFiltersSlice;
