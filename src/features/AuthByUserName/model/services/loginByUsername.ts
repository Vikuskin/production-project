import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { IState } from 'app/providers/StoreProvider';
import { IAuthData, userActions } from 'entities/User';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { ILoginFormError } from '../types/loginForm';

export const INTERNAL_SERVER_ERROR: ILoginFormError = {
  status: ErrorStatusCode.InternalServerError,
  message: 'Internal server error',
};
interface ILoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IAuthData,
  ILoginByUsernameProps,
  { state: IState; rejectValue: ILoginFormError }
>('loginForm/loginByUsername', async ({ username, password }, { rejectWithValue, dispatch }) => {
  try {
    const response = await axios.post<IAuthData>('http://localhost:8000/login', { username, password });

    if (!response.data) {
      throw new Error('No data from server');
    }

    dispatch(userActions.login(response.data));

    return response.data;
  } catch (e: unknown) {
    console.error('There was authentication error ', e);

    if (e instanceof AxiosError && e.response?.status) {
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
});
