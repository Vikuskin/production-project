import { Reducer } from '@reduxjs/toolkit';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';

import { IStoreWithManager, StateKey, useAppDispatch } from 'app/providers/StoreProvider';

export type ReducersList = {
  [key in StateKey]?: Reducer;
};
interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoaderProps>> = (props) => {
  const { reducers, children, removeAfterUnmount } = props;
  const store = useStore() as IStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      store.reducerManager.add(reducerKey as StateKey, reducer);
      dispatch({ type: `@INIT ${reducerKey} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as StateKey);
          dispatch({ type: `@DESTROY ${reducerKey} reducer` });
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
