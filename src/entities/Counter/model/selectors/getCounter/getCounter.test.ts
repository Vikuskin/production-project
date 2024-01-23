import { IState } from 'app/providers/StoreProvider';

import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should render counter value', () => {
    const state: Partial<IState> = { counter: { value: 0 } };

    expect(getCounter(state as IState)).toEqual({ value: 0 });
  });
});
