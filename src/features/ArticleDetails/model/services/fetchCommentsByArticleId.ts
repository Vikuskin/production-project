import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string, IThunkConfig<ICustomError>>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<IComment[]>('/comments', { params: { articleId, _expand: 'user' } });

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      return response.data;
      // TODO: remove any type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was authentication error ', e);

      return rejectWithValue(INTERNAL_SERVER_ERROR);
    }
  },
);
