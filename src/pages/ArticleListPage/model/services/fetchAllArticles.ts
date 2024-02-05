import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticleData } from 'entities/Article';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

import { selectArticleListLimit } from '../selectors/selectArticleList';

export const fetchAllArticles = createAsyncThunk<IArticleData[], { page?: number }, IThunkConfig<ICustomError>>(
  'articleList/fetchAllArticles',
  async ({ page = 1 }, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const limit = selectArticleListLimit(getState());

    try {
      const response = await extra.api.get<IArticleData[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
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
