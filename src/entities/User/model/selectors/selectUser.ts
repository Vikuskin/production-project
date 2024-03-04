import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

import { IAuthData } from '../interfaces/authData';
import { IUser } from '../interfaces/user';

const selectUser = (state: IState) => state.user;

export const selectUserAuthData = createSelector(selectUser, (user: IUser): IAuthData | null => user.authData);
export const selectUserMounted = createSelector(selectUser, (user: IUser): boolean => user._mounted);
