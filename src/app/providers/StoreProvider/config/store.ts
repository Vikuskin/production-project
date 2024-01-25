import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';

import { createReducerManager } from './createReducerManager';

import { authMiddleware } from '../middleware/authMiddleware';
import { IState, IStoreWithManager } from '../types/state';

export const createStore = (initialState?: IState, asyncReducers?: ReducersMapObject<IState>): IStoreWithManager => {
  const staticReducers: ReducersMapObject<IState> = {
    ...asyncReducers,
    user: userReducer,
  };
  const reducerManager = createReducerManager(staticReducers);
  const store = {
    ...configureStore<IState>({
      // @ts-expect-error problem with types in StoreProvider
      reducer: reducerManager.reduce,
      devTools: IS_DEV,
      preloadedState: initialState,
      //@ts-expect-error problem with types in StoreProvider
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
    }),
    reducerManager,
  };

  return store;
};
