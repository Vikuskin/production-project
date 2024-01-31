import { EnhancedStore, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

import { IArticle } from 'entities/Article';
import { IUser } from 'entities/User';
import { ILoginForm } from 'features/AuthByUserName';
import { IProfile } from 'features/EditableProfileCard';

import { createReducerManager } from '../config/createReducerManager';

export type AppDispatch = ThunkDispatch<IState, IThunkExtraArg, UnknownAction>;
export interface IState {
  user: IUser;
  loginForm?: ILoginForm;
  profile?: IProfile;
  article?: IArticle;
}
export type StateKey = keyof IState;
export type ReducerManager = ReturnType<typeof createReducerManager>;
export interface IStoreWithManager extends EnhancedStore<IState> {
  reducerManager: ReducerManager;
  dispatch: AppDispatch;
}
export interface IThunkExtraArg {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}
export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IState;
}
