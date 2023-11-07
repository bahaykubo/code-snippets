import { expect } from 'chai';

describe('Compare Test', function () {
  it('compare two objects', function () {
    const list = {
      name: 'me',
      id: 1,
      grade: 50,
    };
    const list2 = {
      name: 'me',
      id: 1,
      average: 10,
    };
    for (const [property, value] of Object.entries(list)) {
      if (property in list2) {
        expect(list2[property]).to.equal(value, `Plan "${property}" did not match`);
      }
    }
  });

  it('find item from array', function () {
    const arays = ['jim', 'nok', 'bok'];
    expect(
      arays.some((aray) => aray.includes('ok')),
      `Did not find jo in ${arays}`,
    ).to.be.true;
  });

  it('should match object with nested array', function () {
    const subject = {
      chargeName: 'Taffy daily charge 163202485888300a63',
      chargeReference: 'Taffy daily charge 163202485888300a63 ref',
      chargeType: 'DAILY',
      chargeBasis: 'c/day',
      billingDescriptor: 'Taffy daily charge 163202485888300a63 desc',
      schedules: [
        {
          validFrom: '2020-11-01T00:00:00.000Z',
          validTo: '2020-11-05T00:00:00.000Z',
          rates: [
            {
              rate: 10,
            },
          ],
        },
      ],
    };

    const result = {
      id: 'bea6731a-4ff8-4fb5-9239-48b1ac88ccd7',
      chargeType: 'DAILY',
      chargeBasis: 'c/day',
      chargeReference: 'Taffy daily charge 163202485888300a63 ref',
      chargeTags: ['ENERGY'],
      chargeCalculation: 'REQUIRED',
      schedules: [
        {
          validFrom: '2020-11-01T00:00:00.000Z',
          validTo: '2020-11-05T00:00:00.000Z',
          rates: [
            {
              rateQualifiers: [],
              applicableTimePeriods: [],
              timeRanges: [],
              rate: 10,
              spotPercentage: null,
              summarisationGroup: null,
            },
          ],
        },
      ],
      chargeName: 'Taffy daily charge 163202485888300a63',
      billingDescriptor: 'Taffy daily charge 163202485888300a63 desc',
      flowDirection: null,
      powerFactor: null,
      topPeriods: null,
      sumFunction: null,
      losses: null,
    };

    expect(result.schedules[0].rates[0]).to.deep.include(subject.schedules[0].rates[0]);
    expect(result.schedules[0].rates[0]).to.include(subject.schedules[0].rates[0]);
  });
});
