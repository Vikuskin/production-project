import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { createStore } from '../config/store';
import { IState } from '../types/state';

export const useAppDispatch = () => useDispatch<ReturnType<typeof createStore>['dispatch']>();
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
