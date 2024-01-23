import { IState } from 'app/providers/StoreProvider';

export const getCounter = (state: IState) => state.counter;
