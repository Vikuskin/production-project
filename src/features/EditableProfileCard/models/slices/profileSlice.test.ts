import { INTERNAL_SERVER_ERROR } from '@/shared/constants/internalServerError';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';
import { profileForm } from '@/shared/mocks/profileForm';

import { profileActions, profileInitialState, profileReducer } from './profileSlice';

import { ValidateProfileError } from '../enums/validateProfileError';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';

describe('profileSlice', () => {
  it('should set readonly flag', () => {
    expect(profileReducer({ ...profileInitialState, readonly: true }, profileActions.setReadonly(false))).toMatchObject(
      {
        readonly: false,
      },
    );
  });

  it('should update profile', () => {
    expect(
      profileReducer(
        { ...profileInitialState, data: { ...profileForm, firstName: '' } },
        profileActions.updateProfile({ firstName: 'test' }),
      ),
    ).toMatchObject({
      form: { firstName: 'test' },
    });
  });

  it('should cancel edit', () => {
    expect(
      profileReducer(
        {
          ...profileInitialState,
          data: profileForm,
          form: { firstName: '' },
          readonly: false,
          validationErrors: [ValidateProfileError.IncorrectAge],
        },
        profileActions.cancelEdit(),
      ),
    ).toMatchObject({
      readonly: true,
      validationErrors: null,
      form: profileForm,
    });
  });

  describe('extraReducers', () => {
    const error = { message: 'error', status: ErrorStatusCode.BadRequest };

    describe('fetchProfileData', () => {
      it('should set loading true and error null when fetchProfileData is pending', () => {
        expect(
          profileReducer({ ...profileInitialState, isLoading: false, error }, fetchProfileData.pending('', '')),
        ).toMatchObject({
          isLoading: true,
          error: null,
        });
      });

      it('should set loading false, set payload to data and form when fetchProfileData is fulfilled', () => {
        expect(
          profileReducer({ ...profileInitialState, isLoading: true }, fetchProfileData.fulfilled(profileForm, '', '')),
        ).toMatchObject({
          isLoading: false,
          data: profileForm,
          form: profileForm,
        });
      });

      it('should set loading false and set payload error in state when fetchProfileData is rejected with error', () => {
        expect(profileReducer(profileInitialState, fetchProfileData.rejected(null, '', '', error))).toMatchObject({
          isLoading: false,
          error: error,
        });
      });

      it('should set loading false and set default error in state when fetchProfileData is rejected without payload', () => {
        expect(profileReducer(profileInitialState, fetchProfileData.rejected(null, '', ''))).toMatchObject({
          isLoading: false,
          error: INTERNAL_SERVER_ERROR,
        });
      });
    });

    describe('updateProfileData', () => {
      const validationErrors = [ValidateProfileError.IncorrectAge];

      it('should set loading true and errors null when updateProfileData is pending', () => {
        expect(
          profileReducer(
            { ...profileInitialState, isLoading: false, error, validationErrors },
            updateProfileData.pending(''),
          ),
        ).toMatchObject({
          isLoading: true,
          error: null,
          validationErrors: null,
        });
      });

      it('should set loading false, set payload to data and form and set readonly true when updateProfileData is fulfilled', () => {
        expect(
          profileReducer(
            { ...profileInitialState, readonly: false, isLoading: true },
            updateProfileData.fulfilled(profileForm, ''),
          ),
        ).toMatchObject({
          isLoading: false,
          data: profileForm,
          form: profileForm,
          readonly: true,
        });
      });

      it('should set loading false and set payload error in state when updateProfileData is rejected with custom error', () => {
        expect(
          profileReducer(profileInitialState, updateProfileData.rejected(null, '', {} as unknown as void, error)),
        ).toMatchObject({
          isLoading: false,
          error: error,
        });
      });

      it('should set loading false and set default error in state when updateProfileData is rejected without payload', () => {
        expect(profileReducer(profileInitialState, updateProfileData.rejected(null, ''))).toMatchObject({
          isLoading: false,
          error: INTERNAL_SERVER_ERROR,
        });
      });

      it('should set validation errors when updateProfileDara is rejected with array of errors', () => {
        expect(
          profileReducer(
            profileInitialState,
            updateProfileData.rejected(null, '', {} as unknown as void, validationErrors),
          ),
        ).toMatchObject({
          validationErrors,
          error: null,
        });
      });
    });
  });
});
