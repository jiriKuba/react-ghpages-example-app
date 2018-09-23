import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the calculationPage state domain
 */
const selectCalculation = state => state.get('calculation', initialState);

/**
 * Select the calculation items
 */

const makeSelectItems = () =>
  createSelector(selectCalculation, calculationState => calculationState.get('calculationItems').toJS());

export { selectCalculation, makeSelectItems };