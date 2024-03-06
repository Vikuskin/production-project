import { INTERNAL_SERVER_ERROR } from '@/shared/constants/internalServerError';
import { ErrorStatusCode } from '@/shared/enums/errorStatusCode';

import { loginFormActions, loginFormInitialState, loginFormReducer } from './loginFormSlice';

import { loginByUsername } from '../services/loginByUsername';

describe('loginFormSlice', () => {
  it('should set passed username', () => {
    expect(loginFormReducer(loginFormInitialState, loginFormActions.setUsername('test_name'))).toMatchObject({
      username: 'test_name',
    });
  });

  it('should set passed password', () => {
    expect(loginFormReducer(loginFormInitialState, loginFormActions.setPassword('test_password'))).toMatchObject({
      password: 'test_password',
    });
  });

  it('should work with empty state', () => {
    expect(loginFormReducer(undefined, loginFormActions.setUsername(''))).toEqual({
      username: loginFormInitialState.username,
      password: loginFormInitialState.password,
      isLoading: loginFormInitialState.isLoading,
      error: loginFormInitialState.error,
    });
  });

  describe('extraReducers', () => {
    it('should set loading true when loginByUsername is pending', () => {
      expect(
        loginFormReducer(loginFormInitialState, loginByUsername.pending('', { password: '', username: '' })),
      ).toMatchObject({
        isLoading: true,
      });
    });

    it('should set loading false when loginByUsername is fulfilled', () => {
      expect(
        loginFormReducer(
          loginFormInitialState,
          loginByUsername.fulfilled({ id: '', username: '', roles: [] }, '', { password: '', username: '' }),
        ),
      ).toMatchObject({
        isLoading: false,
      });
    });

    it('should set loading false and add payload error in state when loginByUsername is rejected with error', () => {
      const error = { message: 'error', status: ErrorStatusCode.BadRequest };

      expect(
        loginFormReducer(
          loginFormInitialState,
          loginByUsername.rejected(null, '', { password: '', username: '' }, error),
        ),
      ).toMatchObject({
        isLoading: false,
        error: error,
      });
    });

    it('should set loading false and add default error in state when loginByUsername is rejected without payload', () => {
      expect(
        loginFormReducer(loginFormInitialState, loginByUsername.rejected(null, '', { password: '', username: '' })),
      ).toMatchObject({
        isLoading: false,
        error: INTERNAL_SERVER_ERROR,
      });
    });
  });
});
