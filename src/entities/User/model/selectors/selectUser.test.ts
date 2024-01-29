import { IState } from 'app/providers/StoreProvider';

import { selectUserAuthData } from './selectUser';

describe('getCounter', () => {
  it('should render counter value', () => {
    const state: DeepPartial<IState> = { user: { authData: null } };

    expect(selectUserAuthData(state as IState)).toBeNull();
  });
});
