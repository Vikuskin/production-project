import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfileData } from 'entities/Profile';
import { ROUTES } from 'shared/api/routes';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/internalServerError';
import { ErrorStatusCode } from 'shared/enums/errorStatusCode';
import { ICustomError } from 'shared/interfaces/customError';

export const fetchProfileData = createAsyncThunk<IProfileData, string, IThunkConfig<ICustomError>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
      const response = await extra.api.get<IProfileData>(`${ROUTES.profile}/${profileId}`);

      if (!response.data) {
        return rejectWithValue({ status: ErrorStatusCode.BadRequest, message: 'No data from server' });
      }

      return response.data;
      // TODO: remove any type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.error('There was error while fetching profile data ', e);

      if (e.response?.status) {
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
