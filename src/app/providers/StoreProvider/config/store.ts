import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { IState } from './State';

export const createStore = (initialState?: IState) => {
  const rootReducers: ReducersMapObject<IState> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<IState>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
  });
};
