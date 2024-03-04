import { UserRoles } from '../enums/userRoles';

export interface IAuthData {
  id: string;
  username: string;
  roles: UserRoles[];
  avatar?: string;
}
