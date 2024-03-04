import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { IAuthData } from '../types/authData';
import { IUser } from '../types/user';

export const userInitialState: IUser = {
  authData: null,
  _mounted: false,
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
      state._mounted = true;
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
