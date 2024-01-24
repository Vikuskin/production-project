import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../config/store';
import { IState } from '../types/state';

interface IStoreProvider {
  initialState?: IState;
}

export const StoreProvider: FC<PropsWithChildren<IStoreProvider>> = ({ children, initialState }) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
