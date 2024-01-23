import { counterActions, counterReducer, initialState } from './counterSlice';

import { ICounter } from '../types/counter';

describe('counterSlice', () => {
  it('should increment counter value', () => {
    const state: ICounter = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  it('decrement increment counter value', () => {
    const state: ICounter = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: initialState.value + 1 });
  });
});
