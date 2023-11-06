const { expect } = require('chai');
const { searchStateByIndexOf, searchStateByStringSearch } = require('../snippets/string-search');

describe('search', function () {
  const addresses = [
    { address: '1 VICTORIA PARADE, FRANKSTON, VIC, 3199', match: 'Match' },
    { address: '1 TORIA PARADE, FRANKSTON, WA, 3199', match: 'Match' },
    { address: '50A IRVINE STREET, BANKSTOWN, NSW, 2200', match: 'No Match' },
  ];

  context('using string search', function () {
    it('should match with expected result', function () {
      addresses.forEach((address) => {
        expect(address.match).to.equal(searchStateByStringSearch(address.address));
      });
    });
  });

  context('using index of', function () {
    it('should match with expected result', function () {
      addresses.forEach((address) => {
        expect(address.match).to.equal(searchStateByIndexOf(address.address));
      });
    });
  });
});
