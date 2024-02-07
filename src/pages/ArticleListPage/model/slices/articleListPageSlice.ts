import { ActionReducerMapBuilder, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';
import { ArticleListView } from 'entities/ArticleList';
import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { fetchAllArticles } from '../services/fetchAllArticles';
import { IArticleList } from '../types/articleList';

const getInitialView = (): ArticleListView | null => {
  const localStorageView = localStorage.getItem(LOCAL_STORAGE_KEYS.ArticleView);

  if (localStorageView && Object.values(ArticleListView).includes(localStorageView as ArticleListView)) {
    return localStorageView as ArticleListView;
  }

  return ArticleListView.Tile;
};
const articleListAdapter = createEntityAdapter<IArticleData>();
const articleListSlice = createSlice({
  name: 'articleList',
  initialState: articleListAdapter.getInitialState<IArticleList>({
    isLoading: false,
    view: ArticleListView.Tile,
    hasMore: true,
    limit: getInitialView() === ArticleListView.Tile ? 9 : 4,
    page: 1,
    ids: [],
    entities: {},
    _mounted: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IArticleList>) => {
    builder
      .addCase(fetchAllArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllArticles.fulfilled, (state, action: PayloadAction<IArticleData[]>) => {
        state.isLoading = false;
        articleListAdapter.addMany(state, action.payload);
        state.hasMore = !!action.payload.length;
        state._mounted = true;
      })
      .addCase(fetchAllArticles.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: articleListActions, reducer: articleListReducer } = articleListSlice;
export const selectArticleList = articleListAdapter.getSelectors<IState>(
  (state) => state.articleList || articleListAdapter.getInitialState(),
);
