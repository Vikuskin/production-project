import { useSelector } from 'react-redux';

import { IState } from '@/app/providers/StoreProvider';

type ISelector<T> = (state: IState) => T;
type Result<T> = [() => T, ISelector<T>];

export const buildSelector = <T>(selector: ISelector<T>): Result<T> => {
  const useSelectorHook = () => {
    return useSelector(selector);
  };

  return [useSelectorHook, selector];
};
