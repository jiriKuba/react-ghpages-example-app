/**
 * Calculate saving price and month interval by items
 */
export function calculate(items) {
  const result = [];

  // empty result when no data
  if (!items || !items.length) {
    return result;
  }

  const intervals = createCalculationIntervals(items);
  
  let lastMonth = 1;
  Object.keys(intervals).forEach((key) => {
    const intervalItems = intervals[key];

    result[key] = {
      index: key,
      price: 0,
      months: 0,
      interval: ''
    };
    let priceSum = 0;
    for (let itemIndex = 0; itemIndex < intervalItems.length; itemIndex++) {
      // take longest period
      const currentItem = intervalItems[itemIndex];
      if (result[key].months < currentItem.months) {
        result[key].months = currentItem.months;
      }
      // sum prices
      priceSum += currentItem.price;
    }

    // final price = sum of prices / longest period - last saving period
    result[key].price = priceSum / (result[key].months - (lastMonth - 1));

    // create interval string
    result[key].interval = `${lastMonth}. - ${result[key].months || 1}.`;
    lastMonth = result[key].months + 1;
  });
  return result;
}
  
export function createCalculationIntervals(items) {
  const intervals = {};
  const sortedItems = items.sort((a, b) => { return b.price - a.price; });
  const longestPeriod = getLongestPeriod(items);
  const isOneIntervalType = sortedItems[0].months === longestPeriod;

  let lastIntervalIndex = 0;
  for (let index = 0; index < sortedItems.length; index++) {
    if (!isOneIntervalType && index > 0 && sortedItems[index - 1].months < sortedItems[index].months) {
      lastIntervalIndex += 1;
    }
    addItemToDictionaryWithListValue(intervals, lastIntervalIndex, sortedItems[index])
  }
  return intervals;
}

export function addItemToDictionaryWithListValue(dictionary, key, item) {
  if (!dictionary[key]) {
    dictionary[key] = [];
  }

  dictionary[key].push(item);
}

export function getLongestPeriod(items) {
  let longestPeriod = items[0].months;
  for (let index = 0; index < items.length; index++) {
    if (items[index].months > longestPeriod) {
      longestPeriod = items[index].months;
    }
  }
  return longestPeriod;
}