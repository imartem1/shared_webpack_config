import { createSelector } from '@reduxjs/toolkit';
import getCounter from '../getCounter/getCounter.test';
import CounterSchema from '../../types/counterSchema';

const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);

export default getCounterValue;
