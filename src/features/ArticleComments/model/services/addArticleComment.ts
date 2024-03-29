import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { selectArticleData } from 'entities/Article';
import { IComment } from 'entities/Comment';
import { selectUserAuthData } from 'entities/User';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/interfaces/customError';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

export const addArticleComment = createAsyncThunk<IComment, string, IThunkConfig<ICustomError>>(
  'articleComments/addArticleComment',
  async (commentText, thunkApi) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkApi;

    try {
      const userAuth = selectUserAuthData(getState());
      const article = selectArticleData(getState());

      if (!userAuth?.id || !article?.id || !commentText) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data' });
      }

      const response = await extra.api.post<IComment>(ROUTES.comments, {
        articleId: article.id,
        userId: userAuth.id,
        text: commentText,
      });

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
      // TODO: remove any type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was authentication error ', e);

      return rejectWithValue(INTERNAL_SERVER_ERROR);
    }
  },
);
