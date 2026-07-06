import { sortListByDate, sortListByNumber } from '../snippets/working-with-arrays';

describe('working with arrays', () => {
  describe('sort', () => {
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

    describe('by date', () => {
      let sortedByDate: string[];

      beforeAll(() => {
        sortedByDate = sortListByDate(valuations);
      });

      it('should have the latest date first', () => {
        expect(sortedByDate[0]).toContain('2019');
      });

      it('should have the earliest date last', () => {
        expect(sortedByDate[sortedByDate.length - 1]).toContain('2012');
      });
    });

    describe('by number', () => {
      let sortedByNumber: number[];

      beforeAll(() => {
        sortedByNumber = sortListByNumber(valuations);
      });

      it('should have the smallest number first', () => {
        expect(sortedByNumber[0]).toEqual(367000);
      });

      it('should have the largest number last', () => {
        expect(sortedByNumber[sortedByNumber.length - 1]).toEqual(676000);
      });
    });
  });
});
