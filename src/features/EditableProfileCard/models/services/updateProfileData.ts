import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfileData } from 'entities/Profile';
import { selectUserAuthData } from 'entities/User';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/types/customError';

import { validateProfile } from './validateProfile';

import { selectProfileForm } from '../selectors/selectProfile';

export const updateProfileData = createAsyncThunk<IProfileData, void, IThunkConfig<ICustomError | string[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;

    try {
      const profileForm = selectProfileForm(getState());
      const userData = selectUserAuthData(getState());
      const errors = validateProfile(profileForm);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      const response = await extra.api.put(`${ROUTES.profile}/${userData?.id}`, profileForm);

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      return response.data;
    } catch (e: unknown) {
      console.error('There was error while fetching profile data ', e);

      return rejectWithValue(INTERNAL_SERVER_ERROR);
    }
  },
);
