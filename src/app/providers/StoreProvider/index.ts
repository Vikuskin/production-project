import { createStore } from './config/store';
import type { IState, IStoreWithManager, IThunkConfig, IThunkExtraArg, StateKey } from './types/state';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider, createStore, IState, IStoreWithManager, StateKey, IThunkExtraArg, IThunkConfig };
