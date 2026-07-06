import { searchStateByIndexOf, searchStateByStringSearch } from '../snippets/string-search';

describe('search', () => {
  const addresses = [
    { address: '1 VICTORIA PARADE, FRANKSTON, VIC, 3199', match: 'Match' },
    { address: '1 TORIA PARADE, FRANKSTON, WA, 3199', match: 'Match' },
    { address: '50A IRVINE STREET, BANKSTOWN, NSW, 2200', match: 'No Match' },
  ];

  describe('using string search', () => {
    it('should match with expected result', () => {
      addresses.forEach((address) => {
        expect(address.match).toEqual(searchStateByStringSearch(address.address));
      });
    });
  });

  describe('using index of', () => {
    it('should match with expected result', () => {
      addresses.forEach((address) => {
        expect(address.match).toEqual(searchStateByIndexOf(address.address));
      });
    });
  });
});
