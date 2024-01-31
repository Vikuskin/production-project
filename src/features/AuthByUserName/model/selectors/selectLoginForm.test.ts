import { IState } from 'app/providers/StoreProvider';
import { INTERNAL_SERVER_ERROR } from 'shared/constants/constants';

import { selectLoginError, selectLoginIsLoading, selectLoginName, selectLoginPassword } from './selectLoginForm';

describe('selectLoginForm', () => {
  const state: DeepPartial<IState> = {
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
