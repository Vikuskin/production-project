import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

import { ILoginFormError } from '../types/loginForm';

const selectLoginForm = (state: IState) => state.loginForm;

export const selectLoginName = createSelector(selectLoginForm, (loginForm): string => loginForm?.username || '');
export const selectLoginPassword = createSelector(selectLoginForm, (loginForm): string => loginForm?.password || '');
export const selectLoginIsLoading = createSelector(
  selectLoginForm,
  (loginForm): boolean => loginForm?.isLoading || false,
);
export const selectLoginError = createSelector(
  selectLoginForm,
  (loginForm): ILoginFormError | null => loginForm?.error || null,
);
