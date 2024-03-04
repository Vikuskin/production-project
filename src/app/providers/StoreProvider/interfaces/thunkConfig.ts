import { AxiosInstance } from 'axios';

import { IState } from './state';

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IState;
}

export interface IThunkExtraArg {
  api: AxiosInstance;
}
