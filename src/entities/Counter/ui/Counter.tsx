/* eslint-disable import/no-unresolved */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton, AppButtonVariants } from 'shared/ui/AppButton';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slices/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      <AppButton data-testid="increment-btn" variant={AppButtonVariants.Outline} onClick={increment}>
        +
      </AppButton>
      <AppButton data-testid="decrement-btn" variant={AppButtonVariants.Outline} onClick={decrement}>
        -
      </AppButton>
    </div>
  );
};
