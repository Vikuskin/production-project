import { IState } from '@/app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR } from '@/shared/constants/internalServerError';
import { profileForm } from '@/shared/mocks/profileForm';

import {
  selectProfileData,
  selectProfileError,
  selectProfileForm,
  selectProfileLoading,
  selectProfileReadonly,
  selectProfileValidationErrors,
} from './selectProfile';

import { ValidateProfileError } from '../enums/validateProfileError';

describe('selectProfile', () => {
  const state: DeepPartial<IState> = {
    profile: {
      form: profileForm,
      isLoading: true,
      data: profileForm,
      error: INTERNAL_SERVER_ERROR,
      readonly: true,
      validationErrors: [ValidateProfileError.IncorrectAge],
    },
  };

  it('should select loading', () => {
    expect(selectProfileLoading(state as IState)).toBeTruthy();
  });

  it('should select profile data', () => {
    expect(selectProfileData(state as IState)).toEqual(profileForm);
  });

  it('should select error', () => {
    expect(selectProfileError(state as IState)).toEqual(INTERNAL_SERVER_ERROR);
  });

  it('should select readonly flag', () => {
    expect(selectProfileReadonly(state as IState)).toBeTruthy();
  });

  it('should select profile form', () => {
    expect(selectProfileForm(state as IState)).toEqual(profileForm);
  });

  it('should select validation errors', () => {
    expect(selectProfileValidationErrors(state as IState)).toEqual([ValidateProfileError.IncorrectAge]);
  });
});
