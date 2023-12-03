import { expect } from 'chai';
import { where } from '../src';

describe('Ask Where', function () {
  it('should return a location', function () {
    const locationName = 'bingo';
    const location = where(locationName);

    expect(location).to.have.property('location');
    expect(location.location).to.contain(locationName);
  });
});
