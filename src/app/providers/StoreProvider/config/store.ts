import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';
import { infiniteScrollReducer } from '@/features/ScrollPosition';
import { API } from '@/shared/api/api';
import { RTKapi } from '@/shared/api/RTKapi';
import { ReducersList } from '@/shared/lib/components/DynamicReducerLoader';

import { createReducerManager } from './createReducerManager';

import { IState } from '../interfaces/state';
import { IStoreWithManager } from '../interfaces/storeWithManager';
import { IThunkExtraArg } from '../interfaces/thunkConfig';
import { articlesViewMiddleware } from '../middleware/articlesViewMiddleware';
import { authMiddleware } from '../middleware/authMiddleware';

export const createStore = (initialState?: IState, asyncReducers?: ReducersList): IStoreWithManager => {
  const staticReducers: ReducersMapObject<IState> = {
    ...asyncReducers,
    user: userReducer,
    infiniteScroll: infiniteScrollReducer,
    [RTKapi.reducerPath]: RTKapi.reducer,
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
        }).concat(RTKapi.middleware, authMiddleware, articlesViewMiddleware),
    }),
    reducerManager,
  };

  return store;
};
