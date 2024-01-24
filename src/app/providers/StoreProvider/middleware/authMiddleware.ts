/* eslint-disable indent */
import { UnknownAction, isFulfilled } from '@reduxjs/toolkit';

import { userActions } from 'entities/User';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { IStore } from '../types/state';

export const authMiddleware =
  (store: IStore) =>
  (next: (action: UnknownAction) => void) =>
  (action: UnknownAction): void => {
    if (action.type?.startsWith('loginForm/') && isFulfilled(loginByUsername)) {
      const authData = store.getState().user.authData;

      authData && localStorage.setItem(LOCAL_STORAGE_KEYS.Auth, JSON.stringify(authData));
    }

    if (userActions.logout.match(action)) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.Auth);
    }

    next(action);
  };
