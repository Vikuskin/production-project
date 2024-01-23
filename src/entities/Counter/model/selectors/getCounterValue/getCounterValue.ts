import { createSelector } from '@reduxjs/toolkit';

import { ICounter } from '../../types/counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(getCounter, (counter: ICounter): number => counter.value);
