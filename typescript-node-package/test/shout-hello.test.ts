import { expect } from 'chai';
import { hello } from '../src';

describe('Shout Hello', function () {
  it('should shout hello', function () {
    const shout = hello();

    expect(shout).to.have.property('shout');
    expect(shout.shout).to.contain('hello!');
  });
});
