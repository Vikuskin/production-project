import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR, LOCAL_STORAGE_KEYS } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';

import { IProfile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig>(
  'profile/fetchProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      console.log('auth', localStorage.getItem(LOCAL_STORAGE_KEYS.Auth));
      const response = await extra.api.get<IProfile>('/profile');

      if (!response.data) {
        throw new Error('No data from server');
      }

      return response.data;
    } catch (e: unknown) {
      console.error('There was error while fetching profile data ', e);

      if (e instanceof AxiosError && e.response?.status) {
        switch (e.response.status) {
          case ErrorStatusCode.Forbiden:
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
