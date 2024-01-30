import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

const selectProfile = (state: IState) => state.profile;

export const selectProfileLoading = createSelector(selectProfile, (profile) => profile?.isLoading);
export const selectProfileData = createSelector(selectProfile, (profile) => profile?.data || null);
export const selectProfileError = createSelector(selectProfile, (profile) => profile?.error || null);
export const selectProfileReadonly = createSelector(selectProfile, (profile) => profile?.readonly || false);
export const selectProfileForm = createSelector(selectProfile, (profile) => profile?.form || null);
