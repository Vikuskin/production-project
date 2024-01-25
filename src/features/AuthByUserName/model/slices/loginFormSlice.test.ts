import { loginFormActions, loginFormInitialState, loginFormReducer } from './loginFormSlice';

import { ErrorStatusCodes } from '../../../../shared/enums/errorStatusCode';
import { INTERNAL_SERVER_ERROR, loginByUsername } from '../services/loginByUsername';

describe('loginFormSlice', () => {
  it('should set passed username', () => {
    expect(loginFormReducer(loginFormInitialState, loginFormActions.setUsername('test_name'))).toEqual({
      username: 'test_name',
      password: loginFormInitialState.password,
      isLoading: loginFormInitialState.isLoading,
      error: loginFormInitialState.error,
    });
  });

  it('should set passed password', () => {
    expect(loginFormReducer(loginFormInitialState, loginFormActions.setPassword('test_password'))).toEqual({
      password: 'test_password',
      username: loginFormInitialState.username,
      isLoading: loginFormInitialState.isLoading,
      error: loginFormInitialState.error,
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
      ).toEqual({
        username: '',
        password: '',
        isLoading: true,
        error: null,
      });
    });

    it('should set loading false when loginByUsername is fulfilled', () => {
      expect(
        loginFormReducer(
          loginFormInitialState,
          loginByUsername.fulfilled({ id: '', username: '' }, '', { password: '', username: '' }),
        ),
      ).toEqual({
        username: '',
        password: '',
        isLoading: false,
        error: null,
      });
    });

    it('should set loading false and add payload error in state when loginByUsername is rejected with error', () => {
      const error = { message: 'error', status: ErrorStatusCodes.BadRequest };

      expect(
        loginFormReducer(
          loginFormInitialState,
          loginByUsername.rejected(null, '', { password: '', username: '' }, error),
        ),
      ).toEqual({
        username: '',
        password: '',
        isLoading: false,
        error: error,
      });
    });

    it('should set loading false and add default error in state when loginByUsername is rejected without payload', () => {
      expect(
        loginFormReducer(loginFormInitialState, loginByUsername.rejected(null, '', { password: '', username: '' })),
      ).toEqual({
        username: '',
        password: '',
        isLoading: false,
        error: INTERNAL_SERVER_ERROR,
      });
    });
  });
});
