export interface IUser {
  authData: IAuthData | null;
}

export interface IAuthData {
  id: string;
  username: string;
}
