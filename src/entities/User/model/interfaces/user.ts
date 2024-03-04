import { IAuthData } from './authData';

export interface IUser {
  authData: IAuthData | null;
  _mounted: boolean;
}
