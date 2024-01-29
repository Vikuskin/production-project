import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';

import { fetchProfileData } from '../services/fetchProfileData';
import { IProfile, IProfileData } from '../types/profile';

export const profileInitialState: IProfile = {
  isLoading: false,
  readonly: true,
  error: null,
  data: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    init: (state) => state,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IProfile>) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfileData>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      });
  },
});

export const { reducer: profileReducer } = profileSlice;
