import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { AppRoute, routePaths } from 'app/providers/router';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IAuthData, userActions } from 'entities/User';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IAuthData, ILoginByUsernameProps, IThunkConfig>(
  'loginForm/loginByUsername',
  async ({ username, password }, thunkApi) => {
    const { rejectWithValue, dispatch, extra } = thunkApi;

    try {
      const response = await extra.api.post<IAuthData>('/login', { username, password });

      if (!response.data) {
        throw new Error('No data from server');
      }

      dispatch(userActions.login(response.data));
      extra.navigate(routePaths[AppRoute.Profile]);

      return response.data;
      // TODO: remove any type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was authentication error ', e);
      console.log('e instanceof AxiosError: ', e instanceof AxiosError);

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
