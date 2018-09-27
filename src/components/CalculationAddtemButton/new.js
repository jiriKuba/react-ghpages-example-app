import { generateGuid } from '../../utils/guid';

/**
 * Create new item for calculation
 */
export function newItem(intl, message) {
  return {
    id: generateGuid(),
    name: intl.formatMessage(message),
    price: 0,
    months: 0,
    editing: true
  };
}
    