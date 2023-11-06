const { expect } = require('chai');
const filterList = require('../snippets/array-filter');

describe('array filter', function () {
  it('should filter by name value', function () {
    const list = [
      { name: 'LegalDescription', value: 'Legal Description' },
      { name: 'VolumeFolio', value: 'Volume Folio' },
      { name: 'LegalDescriptionOther', value: 'Legal Description Other' },
      { name: 'LocalGovernmentArea', value: 'Local Government Area' },
    ];

    const nameFilter = 'LegalDescription';
    const filteredList = filterList(list, nameFilter);

    filteredList.forEach((item) => {
      expect(item.name).to.equal('legaldescription');
    });
  });
});
