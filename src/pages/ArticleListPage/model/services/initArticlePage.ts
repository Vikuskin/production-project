import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { ArticleOrder, ArticleSort, articleFiltersActions } from 'features/ArticleFilters';
import { ICustomError } from 'shared/types/customError';

import { fetchAllArticles } from './fetchAllArticles';

import { selectArticleListMounted } from '../selectors/selectArticleList';

export const initArticlePage = createAsyncThunk<void, URLSearchParams, IThunkConfig<ICustomError>>(
  'articleList/initArticlePage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const articleListMounted = selectArticleListMounted(getState());

    if (articleListMounted) return;

    for (const [key, value] of searchParams.entries()) {
      switch (key) {
        case 'order':
          dispatch(articleFiltersActions.setOrder(value as ArticleOrder));
          break;
        case 'sort':
          dispatch(articleFiltersActions.setSort(value as ArticleSort));
          break;
        case 'search':
          dispatch(articleFiltersActions.setSearch(value));
          break;
        case 'type':
          dispatch(articleFiltersActions.setType(value as ArticleType));
          break;
        default:
          break;
      }
    }

    dispatch(fetchAllArticles({}));
  },
);
