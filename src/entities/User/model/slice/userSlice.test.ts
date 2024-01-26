import { userActions, userInitialState, userReducer } from './userSlice';

describe('userSlice', () => {
  it('should set passed username', () => {
    expect(
      userReducer(
        userInitialState,
        userActions.login({
          id: '1',
          username: 'test_name',
        }),
      ),
    ).toEqual({
      authData: {
        id: '1',
        username: 'test_name',
      },
    });
  });

  it('should set passed password', () => {
    expect(userReducer(userInitialState, userActions.logout())).toEqual({
      authData: null,
    });
  });

  it('should work with empty state', () => {
    expect(
      userReducer(
        undefined,
        userActions.login({
          id: '1',
          username: 'test_name',
        }),
      ),
    ).toEqual({
      authData: {
        id: '1',
        username: 'test_name',
      },
    });
  });
});
