import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { createStore } from '../config/store';
import { IState } from '../interfaces/state';

interface IStoreProvider {
  initialState?: IState;
  asyncReducers?: ReducersList;
}

export const StoreProvider: FC<PropsWithChildren<IStoreProvider>> = (props) => {
  const { asyncReducers, children, initialState } = props;
  const store = createStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
