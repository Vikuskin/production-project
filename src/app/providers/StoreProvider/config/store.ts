import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { loginFormReducer } from 'features/AuthByUserName';

import { authMiddleware } from '../middleware/authMiddleware';
import { IState } from '../types/state';

export const createStore = (initialState?: IState) => {
  const rootReducers: ReducersMapObject<IState> = {
    user: userReducer,
    loginForm: loginFormReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
  });
};
