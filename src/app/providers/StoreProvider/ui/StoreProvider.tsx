import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { IState } from '../config/State';
import { createStore } from '../config/store';

interface IStoreProvider {
  initialState?: IState;
}

export const StoreProvider: FC<PropsWithChildren<IStoreProvider>> = ({ children, initialState }) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
