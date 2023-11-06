const charges = [
  {
    chargeId: 'd82ff3e3-98de-4811-a222-7a2ff6e93022',
    chargeTags: ['ENERGY'],
    start: '2020-01-01T00:00Z',
    end: '2020-01-03T11:00Z',
    rate: 10,
    cost: 0,
    chargeCalculation: 'REQUIRED',
    spotPercentage: 0,
    summarisationGroup: 'test',
    applicableTimePeriods: [
      {
        start: '2020-01-01T17:00Z',
        end: '2020-01-01T23:00Z',
      },
      {
        start: '2020-01-02T17:00Z',
        end: '2020-01-02T23:00Z',
      },
    ],
  },
  {
    chargeId: 'd82ff3e3-98de-4811-a222-7a2ff6e93022',
    chargeTags: ['ENERGY'],
    start: '2020-01-03T11:00Z',
    end: '2020-01-05T11:00Z',
    rate: 5,
    cost: 0,
    chargeCalculation: 'REQUIRED',
    spotPercentage: 0,
    summarisationGroup: 'test',
    applicableTimePeriods: [
      {
        start: '2020-01-03T23:00Z',
        end: '2020-01-04T04:00Z',
      },
      {
        start: '2020-01-04T23:00Z',
        end: '2020-01-05T04:00Z',
      },
    ],
  },
  {
    chargeId: 'd82ff3e3-98de-4811-a222-7a2ff6e93022',
    chargeTags: ['ENERGY'],
    start: '2020-01-05T11:00Z',
    end: '2020-01-08T00:00Z',
    rate: 10,
    cost: 0,
    chargeCalculation: 'REQUIRED',
    spotPercentage: 0,
    summarisationGroup: 'test',
    applicableTimePeriods: [
      {
        start: '2020-01-05T17:00Z',
        end: '2020-01-05T23:00Z',
      },
      {
        start: '2020-01-06T17:00Z',
        end: '2020-01-06T23:00Z',
      },
      {
        start: '2020-01-07T17:00Z',
        end: '2020-01-07T23:00Z',
      },
    ],
  },
];

console.log([...new Set(charges.map((charge) => charge.start))]);
