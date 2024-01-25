import { createStore } from './config/store';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import { IState, IStoreWithManager, StateKey } from './types/state';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider, createStore, useAppDispatch, useAppSelector, IState, IStoreWithManager, StateKey };
