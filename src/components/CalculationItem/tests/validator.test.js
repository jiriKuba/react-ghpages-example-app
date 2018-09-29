import { isInvalid } from '../validator';

describe('CalculationItem validator', () => {
  it('should return invalid status when calculation item dont have name', () => {
    const testData = {
      name: '',
      price: 10000,
      months: 12
    };
    expect(isInvalid(testData)).toEqual(true);
  });
  it('should return invalid status when calculation item dont have price', () => {
    const testData = {
      name: 'test',
      price: 0,
      months: 12
    };
    expect(isInvalid(testData)).toEqual(true);
  });
  it('should return invalid status when calculation item dont have months', () => {
    const testData = {
      name: 'test',
      price: 10000,
      months: 0
    };
    expect(isInvalid(testData)).toEqual(true);
  });
  it('should return valid status when calculation item have name, price and months', () => {
    const testData = {
      name: 'test',
      price: 10000,
      months: 12
    };
    expect(isInvalid(testData)).toEqual(false);
  });
});