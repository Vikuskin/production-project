import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';
import { selectArticleOrder, selectArticleSearch, selectArticleSort, selectArticleType } from 'features/ArticleFilters';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/interfaces/customError';
import { addQueryParams } from 'shared/lib/url/addQueryParams';

import { selectArticleListLimit, selectArticleListPage } from '../selectors/selectArticleList';

export const fetchAllArticles = createAsyncThunk<IArticleData[], { replace?: boolean }, IThunkConfig<ICustomError>>(
  'articleList/fetchAllArticles',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    try {
      const limit = selectArticleListLimit(getState());
      const order = selectArticleOrder(getState());
      const sort = selectArticleSort(getState());
      const search = selectArticleSearch(getState());
      const page = selectArticleListPage(getState());
      const type = selectArticleType(getState());

      addQueryParams({ sort, order, search, type });

      const response = await extra.api.get<IArticleData[]>(ROUTES.articles, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type_like: type,
        },
      });

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was error while fetching profile data ', e);

      if (e.response?.status) {
        switch (e.response.status) {
          case ErrorStatusCode.NotFound:
            return rejectWithValue({
              status: e.response.status,
              message: 'The server cannot find the requested resource',
            });
        }
      }

      return rejectWithValue(INTERNAL_SERVER_ERROR);
    }
  },
);
