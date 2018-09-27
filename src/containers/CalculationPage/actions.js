/*
 *
 * CalculationPage actions
 *
 */

import { ADD_CALCULATION_ITEM, DELETE_CALCULATION_ITEM, 
  EDIT_CALCULATION_ITEM, SAVE_CALCULATION_ITEM } from './constants';

export function addCalculationItem(calculationItem) {
  return {
    type: ADD_CALCULATION_ITEM,
    calculationItem: calculationItem,
  };
}

export function deleteCalculationItem(calculationItem) {
  return {
    type: DELETE_CALCULATION_ITEM,
    calculationItem: calculationItem,
  };
}

export function editCalculationItem(calculationItem) {
  return {
    type: EDIT_CALCULATION_ITEM,
    calculationItem: calculationItem,
  };
}

export function saveCalculationItem(calculationItem) {
  return {
    type: SAVE_CALCULATION_ITEM,
    calculationItem: calculationItem,
  };
}