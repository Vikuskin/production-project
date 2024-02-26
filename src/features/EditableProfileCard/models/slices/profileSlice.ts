import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IProfileData } from 'entities/Profile';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';

import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { IProfile } from '../types/profile';

export const profileInitialState: IProfile = {
  isLoading: false,
  readonly: true,
  error: null,
  data: null,
  form: null,
  validationErrors: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Partial<IProfileData>>) => {
      state.form = { ...state.form, ...action.payload };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.validationErrors = null;
      state.form = state.data;
    },
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
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || INTERNAL_SERVER_ERROR;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.error = null;
        state.validationErrors = null;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfileData>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validationErrors = null;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(action.payload)) {
          state.validationErrors = action.payload;
        } else {
          state.error = action.payload || INTERNAL_SERVER_ERROR;
        }
      });
  },
});

export const { reducer: profileReducer, actions: profileActions } = profileSlice;
