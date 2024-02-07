import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { ICustomError } from 'shared/types/customError';

import { fetchAllArticles } from './fetchAllArticles';

import { selectArticleListMounted, selectArticleListPage } from '../selectors/selectArticleList';

export const initArticlePage = createAsyncThunk<void, void, IThunkConfig<ICustomError>>(
  'articleList/initArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const articleListMounted = selectArticleListMounted(getState());
    const articleListPage = selectArticleListPage(getState());

    !articleListMounted && dispatch(fetchAllArticles({ page: articleListPage }));
  },
);
