import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from '@reduxjs/toolkit';

import { IState, StateKey } from '../types/state';

export function createReducerManager(initialReducers: ReducersMapObject<IState>) {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers<ReducersMapObject<IState>>(reducers);
  let keysToRemove: StateKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: IState, action: UnknownAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };

        for (const key of keysToRemove) {
          delete state[key];
        }
        keysToRemove = [];
      }

      //@ts-expect-error problem with types in StoreProvider
      return combinedReducer(state, action);
    },
    add: (key: StateKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);

      return true;
    },
    remove: (key: StateKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);

      return true;
    },
  };
}
