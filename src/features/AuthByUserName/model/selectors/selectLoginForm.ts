import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

import { ILoginForm, ILoginFormError } from '../types/loginForm';

const selectLoginForm = (state: IState) => state.loginForm;

export const selectLoginName = createSelector(selectLoginForm, (loginForm: ILoginForm): string => loginForm.username);
export const selectLoginPassword = createSelector(
  selectLoginForm,
  (loginForm: ILoginForm): string => loginForm.password,
);
export const selectLoginIsLoading = createSelector(
  selectLoginForm,
  (loginForm: ILoginForm): boolean => loginForm.isLoading,
);
export const selectLoginError = createSelector(
  selectLoginForm,
  (loginForm: ILoginForm): ILoginFormError | null => loginForm.error,
);
