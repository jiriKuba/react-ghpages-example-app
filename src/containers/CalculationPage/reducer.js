/*
 *
 * CalculationProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { ADD_CALCULATION_ITEM, DELETE_CALCULATION_ITEM } from './constants';

export const initialState = fromJS({
  calculationItems: [{
    id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
    name: 'Auto',
    price: 400000,
    months: 60
  }, 
  {
    id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
    name: 'Mobil',
    price: 8000,
    months: 12
  }, 
  {
    id: '0e01ccd2-e2d9-41c5-a6d7-17bc81c62af8',
    name: 'Dovolená',
    price: 30000,
    months: 10
  }],
});

function calculationProviderReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CALCULATION_ITEM:
      return state.set('calculationItems', [...state.calculationItems, action.calculationItem]);
    case DELETE_CALCULATION_ITEM:
      return state.set('calculationItems', state.get('calculationItems').filter(item => { 
        return item.get('id') !== action.calculationItem.id; 
      }));
    default:
      return state;
  }
}

export default calculationProviderReducer;