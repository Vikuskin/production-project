import { EnhancedStore } from '@reduxjs/toolkit';

import { AppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { IState } from './state';

import { ReducerManager } from '../types/reducerManager';

export interface IStoreWithManager extends EnhancedStore<IState> {
  reducerManager: ReducerManager;
  dispatch: AppDispatch;
}
