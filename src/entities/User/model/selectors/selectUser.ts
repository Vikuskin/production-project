import { createSelector } from '@reduxjs/toolkit';

import { IState } from 'app/providers/StoreProvider';

import { IAuthData, IUser } from '../types/user';

const selectUser = (state: IState) => state.user;

export const selectUserAuthData = createSelector(selectUser, (user: IUser): IAuthData | null => user.authData);
