import { IState } from 'app/providers/StoreProvider';

import { selectLoginError, selectLoginIsLoading, selectLoginName, selectLoginPassword } from './selectLoginForm';

import { INTERNAL_SERVER_ERROR } from '../services/loginByUsername';

describe('selectLoginForm', () => {
  const state: Partial<IState> = {
    loginForm: {
      username: 'test_name',
      password: 'test_password',
      error: INTERNAL_SERVER_ERROR,
      isLoading: true,
    },
  };

  it('should select username', () => {
    expect(selectLoginName(state as IState)).toBe('test_name');
  });

  it('should select user password', () => {
    expect(selectLoginPassword(state as IState)).toBe('test_password');
  });

  it('should select error code', () => {
    expect(selectLoginError(state as IState)).toEqual(INTERNAL_SERVER_ERROR);
  });

  it('should select loading status', () => {
    expect(selectLoginIsLoading(state as IState)).toBeTruthy();
  });
});
