import { addItemToDictionaryWithListValue, getLongestPeriod, 
  calculate, createCalculationIntervals } from '../calculation';

describe('CalculationResult calculation', () => {
  /* addItemToDictionaryWithListValue tests */
  it('should add item to dictionary list when list not exists', () => {
    const dictionary = {};
    addItemToDictionaryWithListValue(dictionary, '0', { name: 'test' });
    const newList = dictionary['0'];
    expect(newList[0].name).toEqual('test');
  });

  it('should add item to dictionary list when list exists', () => {
    const dictionary = {'0': [{ name: 'test' }]};
    addItemToDictionaryWithListValue(dictionary, '0', { name: 'test2' });
    const newList = dictionary['0'];
    expect(newList[1].name).toEqual('test2');
  });

  /* getLongestPeriod tests */
  it('should return longest period by items', () => {
    const items = [
      { name: 'test', months: 10 }, 
      { name: 'test2', months: 12 }, 
      { name: 'test3', months: 9 }
    ];
    const result = getLongestPeriod(items);
    expect(result).toEqual(12);
  });

  /* createCalculationIntervals tests */
  it('should return interval with two items when most expensive item is not with longest month interval', () => {
    const items = [{
      id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
      name: 'Notebook',
      price: 60000,
      months: 12,
      editing: false,
    },
    {
      id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
      name: 'Mobil',
      price: 9000,
      months: 24,
      editing: false,
    }];
    const result = createCalculationIntervals(items);
    expect(Object.keys(result).length).toEqual(2);
  });

  it('should return interval with one item when most expensive item is with longest month interval', () => {
    const items = [{
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
    }];
    const result = createCalculationIntervals(items);
    expect(Object.keys(result).length).toEqual(1);
  });

  /* calculate tests */
  it('should return calculation with two items with correct values when most expensive item is not with longest month interval', () => {
    const items = [{
      id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
      name: 'Notebook',
      price: 60000,
      months: 12,
      editing: false,
    },
    {
      id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
      name: 'Mobil',
      price: 9000,
      months: 24,
      editing: false,
    }];
    const result = calculate(items);
    expect(result.length).toEqual(2);

    expect(result[0].interval).toEqual('1. - 12.');
    expect(result[0].months).toEqual(12);
    expect(result[0].price).toEqual(5000);

    expect(result[1].interval).toEqual('13. - 24.');
    expect(result[1].months).toEqual(24);
    expect(result[1].price).toEqual(750);
  });

  it('should return calculation with one item with correct values when most expensive item is with longest month interval', () => {
    const items = [{
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
    }];

    const result = calculate(items);
    expect(result.length).toEqual(1);

    expect(result[0].interval).toEqual('1. - 60.');
    expect(result[0].months).toEqual(60);
    expect(result[0].price).toEqual(7300);
  });
});


  // case 1
  // calculationItems: [{
  //   id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
  //   name: 'Notebook',
  //   price: 60000,
  //   months: 12,
  //   editing: false,
  // },
  // {
  //   id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
  //   name: 'Mobil',
  //   price: 9000,
  //   months: 24,
  //   editing: false,
  // }],
  // case 2
  // calculationItems: [{
  //   id: 'a1cb6ab3-1851-4a81-aa9f-08f88bb654f6',
  //   name: 'Auto',
  //   price: 400000,
  //   months: 60,
  //   editing: false,
  // },
  // {
  //   id: 'e2211635-d5f3-4def-8391-6e34d2c9ca87',
  //   name: 'Mobil',
  //   price: 8000,
  //   months: 12,
  //   editing: false,
  // },
  // {
  //   id: '0e01ccd2-e2d9-41c5-a6d7-17bc81c62af8',
  //   name: 'Dovolená',
  //   price: 30000,
  //   months: 10,
  //   editing: false,
  // }],