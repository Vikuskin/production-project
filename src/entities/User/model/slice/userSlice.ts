import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { IAuthData, IUser } from '../types/user';

export const userInitialState: IUser = {
  authData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    init: (state) => {
      const authData = localStorage.getItem(LOCAL_STORAGE_KEYS.Auth);

      if (authData) {
        state.authData = JSON.parse(authData);
      }
    },
    login: (state, action: PayloadAction<IAuthData>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
