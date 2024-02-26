import { IState } from 'app/providers/StoreProvider';

import { selectUserAuthData, selectUserMounted } from './selectUser';

describe('selectUser', () => {
  it('should select user auth data', () => {
    const state: DeepPartial<IState> = { user: { authData: null } };

    expect(selectUserAuthData(state as IState)).toBeNull();
  });

  it('should select mounted', () => {
    const state: DeepPartial<IState> = { user: { _mounted: true } };

    expect(selectUserMounted(state as IState)).toBeTruthy();
  });
});
