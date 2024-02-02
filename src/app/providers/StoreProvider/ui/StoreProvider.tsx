import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ReducersList } from 'shared/lib/components/DynamicReducerLoader';

import { createStore } from '../config/store';
import { IState } from '../types/state';

interface IStoreProvider {
  initialState?: IState;
  asyncReducers?: ReducersList;
}

export const StoreProvider: FC<PropsWithChildren<IStoreProvider>> = (props) => {
  const { asyncReducers, children, initialState } = props;
  const navigate = useNavigate();
  const store = createStore(navigate, initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
