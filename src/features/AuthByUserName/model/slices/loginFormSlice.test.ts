import { loginFormActions, loginFormInitialState, loginFormReducer } from './loginFormSlice';

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
});
