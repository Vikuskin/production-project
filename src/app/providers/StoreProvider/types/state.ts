import { Dispatch } from '@reduxjs/toolkit';

import { IUser } from 'entities/User';
import { ILoginForm } from 'features/AuthByUserName';

export interface IState {
  user: IUser;
  loginForm: ILoginForm;
}

export interface IStore {
  dispatch: Dispatch;
  getState: () => IState;
}
