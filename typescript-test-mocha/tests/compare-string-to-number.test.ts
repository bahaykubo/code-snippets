import { expect } from 'chai';

const comparisons = [
  { number: 0.5, string: '0.5', expectStringParsedToIntToNotEqual: true },
  { number: 1.0, string: '1.0' },
  { number: 1.0, string: '1' },
  { number: 1.1, string: '1.1', expectStringParsedToIntToNotEqual: true },
  { number: 10.0, string: '10.0' },
  { number: 10.0, string: '10' },
];

comparisons.forEach((compare) => {
  // eslint-disable-next-line mocha/no-setup-in-describe
  context(`Comparing number ${compare.number} with string "${compare.string}"`, function () {
    it('should match number with string converted with Number', function () {
      const toNumber = Number(compare.string);
      expect(toNumber).to.equal(compare.number);
    });

    it('should match number with string converted with parseInt', function () {
      const toInt = parseInt(compare.string);
      if (compare.expectStringParsedToIntToNotEqual) {
        expect(toInt).to.not.equal(compare.number);
      } else {
        expect(toInt).to.equal(compare.number);
      }
    });

    it('should match number with string converted with parseFloat', function () {
      const toFloat = parseFloat(compare.string);
      expect(toFloat).to.equal(compare.number);
    });
  });
});
