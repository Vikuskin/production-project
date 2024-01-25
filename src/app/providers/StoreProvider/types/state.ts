import { EnhancedStore } from '@reduxjs/toolkit';

import { IUser } from 'entities/User';
import { ILoginForm } from 'features/AuthByUserName';

import { createReducerManager } from '../config/createReducerManager';

export interface IState {
  user: IUser;
  loginForm?: ILoginForm;
}

export type StateKey = keyof IState;
export type ReducerManager = ReturnType<typeof createReducerManager>;
export interface IStoreWithManager extends EnhancedStore<IState> {
  reducerManager: ReducerManager;
}
