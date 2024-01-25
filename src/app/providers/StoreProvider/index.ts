import { createStore } from './config/store';
import { useAppDispatch, useAppSelector } from './hooks/storeHooks';
import type { IState } from './types/state';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider, createStore, IState, useAppDispatch, useAppSelector };
