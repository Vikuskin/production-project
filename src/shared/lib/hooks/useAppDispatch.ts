import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IState, createStore } from 'app/providers/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
export const useAppDispatch = () => useDispatch<ReturnType<typeof createStore>['dispatch']>();
