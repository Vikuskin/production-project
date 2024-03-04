import { UserRoles } from './userRoles';

export interface IAuthData {
  id: string;
  username: string;
  roles: UserRoles[];
  avatar?: string;
}
