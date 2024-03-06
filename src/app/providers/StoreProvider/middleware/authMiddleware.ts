import { Middleware, UnknownAction, isFulfilled } from '@reduxjs/toolkit';

import { userActions } from '@/entities/User';
import { loginByUsername } from '@/features/AuthByUserName/model/services/loginByUsername';
import { LOCAL_STORAGE_KEYS } from '@/shared/constants/localStorageKeys';

export const authMiddleware: Middleware<(action: UnknownAction) => void> = () => (next) => (action) => {
  if (userActions.login.match(action) && isFulfilled(loginByUsername)) {
    const authData = action.payload;

    authData && localStorage.setItem(LOCAL_STORAGE_KEYS.Auth, JSON.stringify(authData));
  }

  if (userActions.logout.match(action)) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.Auth);
  }

  next(action);
};
