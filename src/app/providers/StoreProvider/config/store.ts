import { Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';

import { userReducer } from 'entities/User';
import { API } from 'shared/api/api';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';

import { createReducerManager } from './createReducerManager';

import { authMiddleware } from '../middleware/authMiddleware';
import { IState, IStoreWithManager, IThunkExtraArg } from '../types/state';

export const createStore = (
  navigate: (to: To, options?: NavigateOptions) => void,
  initialState?: IState,
  asyncReducers?: ReducersList,
): IStoreWithManager => {
  const staticReducers: ReducersMapObject<IState> = {
    ...asyncReducers,
    user: userReducer,
  };
  const reducerManager = createReducerManager(staticReducers);
  const extraArg: IThunkExtraArg = {
    api: API,
    navigate,
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
        }).concat(authMiddleware),
    }),
    reducerManager,
  };

  return store;
};
