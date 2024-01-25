import { ReducersMapObject } from '@reduxjs/toolkit';
import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';
import { IState } from '../types/state';

interface IStoreProvider {
  initialState?: IState;
  asyncReducers?: ReducersMapObject<IState>;
}

export const StoreProvider: FC<PropsWithChildren<IStoreProvider>> = (props) => {
  const { asyncReducers, children, initialState } = props;
  const store = createStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
