import { IState } from 'app/providers/StoreProvider';

import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return counter value', () => {
    const state: Partial<IState> = { counter: { value: 10 } };

    expect(getCounterValue(state as IState)).toBe(10);
  });
});
