import { createSelector } from '@reduxjs/toolkit';

import { selectUserAuthData } from './selectUser';

import { IAuthData } from '../types/authData';
import { UserRoles } from '../types/userRoles';

export const selectUserRoles = createSelector(
  selectUserAuthData,
  (authData: IAuthData | null): UserRoles[] => authData?.roles || [],
);
export const selectUserIsAdmin = createSelector(
  selectUserRoles,
  (roles: UserRoles[]): boolean => !!roles.includes(UserRoles.Admin),
);
export const selectUserIsManager = createSelector(
  selectUserRoles,
  (roles: UserRoles[]): boolean => !!roles.includes(UserRoles.Manager),
);
