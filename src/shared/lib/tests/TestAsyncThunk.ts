import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

type ActionCreator<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;
  getState: () => IState;
  actionCreator: ActionCreator<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);

    return action(this.dispatch, this.getState, undefined);
  }
}
