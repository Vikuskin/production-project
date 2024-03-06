import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { IState, IThunkExtraArg, createStore } from '@/app/providers/StoreProvider';

export type AppDispatch = ThunkDispatch<IState, IThunkExtraArg, UnknownAction>;
export const useAppDispatch = () => useDispatch<ReturnType<typeof createStore>['dispatch']>();
