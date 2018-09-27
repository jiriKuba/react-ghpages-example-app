/*
 *
 * CalculationProvider reducer
 *
 */

import { fromJS } from 'immutable';

import { ADD_CALCULATION_ITEM, DELETE_CALCULATION_ITEM, 
  EDIT_CALCULATION_ITEM, SAVE_CALCULATION_ITEM } from './constants';

export const initialState = fromJS({
  calculationItems: [{
    id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
    name: 'Auto',
    price: 400000,
    months: 60,
    editing: false,
  },
  {
    id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
    name: 'Mobil',
    price: 8000,
    months: 12,
    editing: false,
  },
  {
    id: '0e01ccd2-e2d9-41c5-a6d7-17bc81c62af8',
    name: 'Dovolená',
    price: 30000,
    months: 10,
    editing: false,
  }],
});

function calculationProviderReducer(state = initialState, action) {
  let itemIndex = 0;
  switch (action.type) {
    case ADD_CALCULATION_ITEM:
      return state.set('calculationItems', state.get('calculationItems').push(fromJS(action.calculationItem)));
    case DELETE_CALCULATION_ITEM:
      return state.set('calculationItems', state.get('calculationItems').filter(item => { 
        return item.get('id') !== action.calculationItem.id; 
      }));
    case EDIT_CALCULATION_ITEM:
      itemIndex = state.get('calculationItems').findIndex(item => item.get('id') === action.calculationItem.id);
      return state.setIn(['calculationItems', itemIndex, 'editing'], action.calculationItem.editing);
    case SAVE_CALCULATION_ITEM:
      itemIndex = state.get('calculationItems').findIndex(item => item.get('id') === action.calculationItem.id);
      return state.setIn(['calculationItems', itemIndex, 'editing'], false)
        .setIn(['calculationItems', itemIndex, 'name'], action.calculationItem.name)
        .setIn(['calculationItems', itemIndex, 'price'], action.calculationItem.price)
        .setIn(['calculationItems', itemIndex, 'months'], action.calculationItem.months);
    default:
      return state;
  }
}

export default calculationProviderReducer;