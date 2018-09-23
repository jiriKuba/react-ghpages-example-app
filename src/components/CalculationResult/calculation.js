/**
 * Calculate saving price and month interval by items
 */
export function calculate(items) {
  const result = {
    price: 0,
    months: 0,
  };

  let priceSum = 0;
  for (let index = 0; index < items.length; index++) {
    // take longest period
    const currentItem = items[index];
    if (result.months < currentItem.months) {
      result.months = currentItem.months;
    }

    // sum prices
    priceSum += currentItem.price;
  }

  // final price = sum of prices / longest period
  result.price = priceSum / result.months;

  return result;
}
  