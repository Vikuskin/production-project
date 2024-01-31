import { IState } from 'app/providers/StoreProvider';

import { selectUserAuthData } from './selectUser';

describe('selectUser', () => {
  it('should select user auth data', () => {
    const state: DeepPartial<IState> = { user: { authData: null } };

    expect(selectUserAuthData(state as IState)).toBeNull();
  });
});
