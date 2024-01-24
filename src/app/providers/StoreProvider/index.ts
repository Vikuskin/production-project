import { createStore, useAppDispatch } from './config/store';
import type { IState } from './types/state';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider, createStore, IState, useAppDispatch };
