export interface IUser {
  authData: IAuthData | null;
  _mounted: boolean;
}

export interface IAuthData {
  id: string;
  username: string;
  avatar?: string;
}
