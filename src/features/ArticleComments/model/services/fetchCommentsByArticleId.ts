import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | null, IThunkConfig<ICustomError>>(
  'articleComments/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      if (!articleId) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No passed article id' });
      }

      const response = await extra.api.get<IComment[]>(ROUTES.comments, { params: { articleId, _expand: 'user' } });

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
