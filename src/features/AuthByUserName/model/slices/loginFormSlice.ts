import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INTERNAL_SERVER_ERROR, loginByUsername } from '../services/loginByUsername';
import { ILoginForm } from '../types/loginForm';

export const loginFormInitialState: ILoginForm = {
  isLoading: false,
  password: '',
  username: '',
  error: null,
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: loginFormInitialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ILoginForm>) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      });
  },
});

export const { actions: loginFormActions, reducer: loginFormReducer } = loginFormSlice;
