import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'entities/User';
import { infiniteScrollReducer } from 'features/ScrollPosition';
import { API } from 'shared/api/api';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { createReducerManager } from './createReducerManager';

import { articlesViewMiddleware } from '../middleware/articlesViewMiddleware';
import { authMiddleware } from '../middleware/authMiddleware';
import { IState, IStoreWithManager, IThunkExtraArg } from '../types/state';

export const createStore = (initialState?: IState, asyncReducers?: ReducersList): IStoreWithManager => {
  const staticReducers: ReducersMapObject<IState> = {
    ...asyncReducers,
    user: userReducer,
    infiniteScroll: infiniteScrollReducer,
  };
  const reducerManager = createReducerManager(staticReducers);
  const extraArg: IThunkExtraArg = {
    api: API,
  };
  const store = {
    ...configureStore({
      reducer: reducerManager.reduce as Reducer<IState>,
      devTools: IS_DEV,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          thunk: {
            extraArgument: extraArg,
          },
        }).concat(authMiddleware, articlesViewMiddleware),
    }),
    reducerManager,
  };

  return store;
};
