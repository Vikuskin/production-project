import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IState } from 'app/providers/StoreProvider';

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
