import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAuthData, IUser } from '../types/user';

export const userInitialState: IUser = {
  authData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    login: (state, action: PayloadAction<IAuthData>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = null;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
