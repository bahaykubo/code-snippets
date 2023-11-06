const { expect } = require('chai');
const { sortListByDate, sortListByNumber } = require('../snippets/working-with-arrays');

describe('working with arrays', function () {
  describe('sort', function () {
    const valuations = [
      {
        amount: 592000,
        date: '2019-07-01T00:00:00.000Z',
      },
      {
        amount: 666000,
        date: '2018-07-01T00:00:00.000Z',
      },
      {
        amount: 676000,
        date: '2017-07-01T00:00:00.000Z',
      },
      {
        amount: 639000,
        date: '2016-07-01T00:00:00.000Z',
      },
      {
        amount: 639000,
        date: '2015-07-01T00:00:00.000Z',
      },
      {
        amount: 496000,
        date: '2014-07-01T00:00:00.000Z',
      },
      {
        amount: 385000,
        date: '2013-07-01T00:00:00.000Z',
      },
      {
        amount: 367000,
        date: '2012-07-01T00:00:00.000Z',
      },
    ];

    context('by date', function () {
      let sortedByDate;

      before(function () {
        sortedByDate = sortListByDate(valuations);
      });

      it('should have the latest date first', function () {
        expect(sortedByDate[0]).to.contain('2019');
      });

      it('should have the earliest date last', function () {
        expect(sortedByDate[sortedByDate.length - 1]).to.contain('2012');
      });
    });

    context('by number', function () {
      let sortedByNumber;

      before(function () {
        sortedByNumber = sortListByNumber(valuations);
      });

      it('should have the smallest number first', function () {
        expect(sortedByNumber[0]).to.equal(367000);
      });

      it('should have the largest number last', function () {
        expect(sortedByNumber[sortedByNumber.length - 1]).to.equal(676000);
      });
    });
  });
});
