import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IAuthData, userActions } from 'entities/User';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/interfaces/customError';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IAuthData, ILoginByUsernameProps, IThunkConfig<ICustomError>>(
  'loginForm/loginByUsername',
  async ({ username, password }, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;

    try {
      const response = await extra.api.post<IAuthData>(ROUTES.login, { username, password });

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      dispatch(userActions.login(response.data));

      return response.data;
      // TODO: remove any type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was authentication error ', e);

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
