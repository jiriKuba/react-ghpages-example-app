/*
 *
 * LanguageProvider actions
 *
 */

import { ADD_CALCULATION_ITEM, DELETE_CALCULATION_ITEM } from './constants';

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