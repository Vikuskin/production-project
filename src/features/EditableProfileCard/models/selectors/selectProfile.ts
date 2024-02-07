import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';
import { IProfileData } from 'entities/Profile';
import { ICustomError } from 'shared/types/customError';

const selectProfile = (state: IState) => state.profile;

export const selectProfileLoading = createSelector(selectProfile, (profile): boolean => !!profile?.isLoading);
export const selectProfileData = createSelector(selectProfile, (profile): IProfileData | null => profile?.data || null);
export const selectProfileError = createSelector(
  selectProfile,
  (profile): ICustomError | null => profile?.error || null,
);
export const selectProfileReadonly = createSelector(selectProfile, (profile): boolean => !!profile?.readonly);
export const selectProfileForm = createSelector(
  selectProfile,
  (profile): Partial<IProfileData> | null => profile?.form || null,
);
export const selectProfileValidationErrors = createSelector(
  selectProfile,
  (profile): string[] | null => profile?.validationErrors || null,
);
