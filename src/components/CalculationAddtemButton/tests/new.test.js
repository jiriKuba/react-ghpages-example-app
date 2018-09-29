import { newItem } from '../new';

describe('CalculationAddtemButton new', () => {
  it('should return correct new item', () => {
    const mockIntl = {
      formatMessage: function() {
        return 'Name';
      }
    };
    
    const generatedItem = newItem(mockIntl, null);
    expect(generatedItem.name).toEqual('Name');
    expect(!!generatedItem.id).toEqual(true);
    expect(generatedItem.price).toEqual(0);
    expect(generatedItem.months).toEqual(0);
    expect(generatedItem.editing).toEqual(true);
  });  
});