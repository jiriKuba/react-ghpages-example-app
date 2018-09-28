/**
 * Validator: returns true when calculation item is invalid
 */
export function isInvalid(item) {
    return !item.name || !item.price || !item.months;
}
    