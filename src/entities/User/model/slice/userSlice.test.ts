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
      _mounted: false,
    });
  });

  it('should set passed password', () => {
    expect(userReducer(userInitialState, userActions.logout())).toEqual({
      authData: null,
      _mounted: false,
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
      _mounted: false,
    });
  });

  it('should set _mounted true and auth data from storage after init', () => {
    const userDataMock = { id: '1', username: 'test' };

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(userDataMock));

    expect(userReducer(userInitialState, userActions.init())).toEqual({
      authData: userDataMock,
      _mounted: true,
    });
  });

  it('should set _mounted true and does not set auth data from storage after init', () => {
    Storage.prototype.getItem = jest.fn(() => null);

    expect(userReducer(userInitialState, userActions.init())).toEqual({
      authData: null,
      _mounted: true,
    });
  });
});
