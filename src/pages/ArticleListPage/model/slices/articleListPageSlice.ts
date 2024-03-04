import { ActionReducerMapBuilder, PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';
import { ArticleListView } from 'entities/ArticleList';
import { LOCAL_STORAGE_KEYS } from 'shared/constants/localStorageKeys';

import { IArticleList } from '../interfaces/articleList';
import { fetchAllArticles } from '../services/fetchAllArticles';

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
    view: getInitialView(),
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
      state.limit = action.payload === ArticleListView.Tile ? 10 : 4;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<IArticleList>) => {
    builder
      .addCase(fetchAllArticles.pending, (state, action) => {
        state.isLoading = true;

        action.meta.arg.replace && articleListAdapter.removeAll(state);
      })
      .addCase(fetchAllArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;
        state._mounted = true;

        action.meta.arg.replace
          ? articleListAdapter.setAll(state, action.payload)
          : articleListAdapter.addMany(state, action.payload);
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
