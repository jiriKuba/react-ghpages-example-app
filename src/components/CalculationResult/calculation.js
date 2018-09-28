/**
 * Calculate saving price and month interval by items
 */
export function calculate(items) {
  const result = [{
    price: 0,
    months: 0,
    interval: ''
  }];

  let priceSum = 0;
  for (let index = 0; index < items.length; index++) {
    // take longest period
    const currentItem = items[index];
    if (result[0].months < currentItem.months) {
      result[0].months = currentItem.months;
    }

    // sum prices
    priceSum += currentItem.price;
  }

  // final price = sum of prices / longest period
  result[0].price = priceSum / result[0].months;
  result[0].interval = `1. - ${result[0].months}`;
  return result;
}
  