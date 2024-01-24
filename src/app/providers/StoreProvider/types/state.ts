import { Dispatch } from '@reduxjs/toolkit';

import { ICounter } from 'entities/Counter';
import { IUser } from 'entities/User';
import { ILoginForm } from 'features/AuthByUserName';

export interface IState {
  counter: ICounter;
  user: IUser;
  loginForm: ILoginForm;
}

export interface IStore {
  dispatch: Dispatch;
  getState: () => IState;
}
