import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

import { IArticleData } from '../types/articleData';

export const fetchArticleById = createAsyncThunk<IArticleData, string, IThunkConfig<ICustomError>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<IArticleData>(`/articles/${articleId}`);

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was error while fetching profile data ', e);

      if (e.response?.status) {
        switch (e.response.status) {
          case ErrorStatusCode.BadRequest:
            return rejectWithValue({ status: e.response.status, message: 'Incorrect authentication data' });
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
