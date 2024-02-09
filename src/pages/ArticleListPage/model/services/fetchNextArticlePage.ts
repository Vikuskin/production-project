import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { selectArticleLoading } from 'entities/Article/model/selectors/selectArticle';
import { ICustomError } from 'shared/types/customError';

import { fetchAllArticles } from './fetchAllArticles';

import { selectArticleListHasMore, selectArticleListPage } from '../selectors/selectArticleList';
import { articleListActions } from '../slices/articleListPageSlice';

export const fetchNextArticlePage = createAsyncThunk<void, void, IThunkConfig<ICustomError>>(
  'articleList/fetchNextArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = selectArticleListHasMore(getState());
    const page = selectArticleListPage(getState());
    const loading = selectArticleLoading(getState());

    if (hasMore && !loading) {
      const nextPage = page + 1;

      dispatch(fetchAllArticles({}));
      dispatch(articleListActions.setPage(nextPage));
    }
  },
);
