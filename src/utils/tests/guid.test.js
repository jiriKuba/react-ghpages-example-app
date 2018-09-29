import { generateGuid } from '../guid';

describe('Guid generator test', () => {
  it('should return guid with length 36', () => {    
    const guid = generateGuid();
    expect(guid.length).toEqual(36);
  });

  it('should return unique guid', () => {    
    const guid = generateGuid();
    const guid2 = generateGuid();
    expect(guid !== guid2).toEqual(true);
  }); 
});