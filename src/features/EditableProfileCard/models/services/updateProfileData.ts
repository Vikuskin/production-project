import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfileData } from 'entities/Profile';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { selectProfileForm } from '../selectors/selectProfile';

export const updateProfileData = createAsyncThunk<IProfileData, void, IThunkConfig>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const profileForm = selectProfileForm(getState());

    try {
      const response = await extra.api.put('/profile', profileForm);

      if (!response.data) {
        throw new Error('No data from server');
      }

      return response.data;
    } catch (e: unknown) {
      console.error('There was error while fetching profile data ', e);

      if (e instanceof AxiosError && e.response?.status) {
        switch (e.response.status) {
          case ErrorStatusCode.Forbidden:
            return rejectWithValue({
              status: e.response.status,
              message: 'Authentication error, you are not authorized',
            });
        }
      }

      return rejectWithValue(INTERNAL_SERVER_ERROR);
    }
  },
);
