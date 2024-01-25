import { Middleware, UnknownAction, isFulfilled } from '@reduxjs/toolkit';

import { userActions } from 'entities/User';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { LOCAL_STORAGE_KEYS } from 'shared/constants/constants';

import { IState } from '../types/state';

export const authMiddleware: Middleware<(action: UnknownAction) => void, IState> = (storeApi) => (next) => (action) => {
  if (userActions.login.match(action) && isFulfilled(loginByUsername)) {
    const authData = storeApi.getState().user.authData;

    authData && localStorage.setItem(LOCAL_STORAGE_KEYS.Auth, JSON.stringify(authData));
  }

  if (userActions.logout.match(action)) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.Auth);
  }

  next(action);
};
