import { Middleware, ReducersMapObject, UnknownAction, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginFormReducer } from 'features/AuthByUserName';

import { authMiddleware } from '../middleware/authMiddleware';
import { IState } from '../types/state';

export const createStore = (initialState?: IState) => {
  const rootReducers: ReducersMapObject<IState> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginFormReducer,
  };

  return configureStore({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authMiddleware as Middleware<(action: UnknownAction) => void>),
  });
};
export const useAppDispatch = () => useDispatch<ReturnType<typeof createStore>['dispatch']>();
