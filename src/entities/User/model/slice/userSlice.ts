import { createSlice } from '@reduxjs/toolkit';

import { IUser } from '../types/user';

export const userInitialState: IUser = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
