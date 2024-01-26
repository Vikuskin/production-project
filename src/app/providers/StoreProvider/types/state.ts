import { Store, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';

import { IUser } from 'entities/User';
import { ILoginForm } from 'features/AuthByUserName';

import { createReducerManager } from '../config/createReducerManager';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<IState, any, UnknownAction>;
export type AppStore = Omit<Store<IState, UnknownAction>, 'dispatch'> & {
  dispatch: AppThunkDispatch;
};
export interface IState {
  user: IUser;
  loginForm?: ILoginForm;
}
export type StateKey = keyof IState;
export type ReducerManager = ReturnType<typeof createReducerManager>;
export interface IStoreWithManager extends AppStore {
  reducerManager: ReducerManager;
}
