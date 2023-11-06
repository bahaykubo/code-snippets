const { expect } = require('chai');
const { nameNewPromise, namePromise, promise1, promise2 } = require('../snippets/working-with-promises');

describe('working with promises', function () {
  context('that resolves and rejects', function () {
    it('should resolve given a valid name', async function () {
      await nameNewPromise('bing').then((response) => expect(response).to.contain('hello'));
    });

    it('should reject given an error name', async function () {
      await nameNewPromise('error').catch((error) => expect(error).to.equal('error'));
    });

    it('should reject given name is undefined', async function () {
      await nameNewPromise('error').catch((error) => expect(error).to.equal('error'));
    });

    context('using all settled', function () {
      const names = ['jim', 'bob', 'cam'];
      const errorNames = ['jim', 'bob', 'error'];

      it('should fulfill all promises', async function () {
        await Promise.allSettled(names.map((name) => nameNewPromise(name))).then((response) => {
          response.forEach((promise) => {
            expect(promise.status).to.equal('fulfilled');
          });
        });
      });

      it('should iterate over async functions', async function () {
        for (const name of names) {
          await nameNewPromise(name).then((response) => {
            expect(response).to.contain('hello');
          });
        }
      });

      it('should have one promise rejected', async function () {
        await Promise.allSettled(errorNames.map((name) => nameNewPromise(name))).then((response) => {
          const rejectedResponse = response.filter((promise) => promise.status === 'rejected');
          expect(rejectedResponse.length).to.equal(1);
        });
      });
    });
  });

  context('that just resolves', function () {
    it('should resolve given a valid name', async function () {
      await namePromise('bing').then((response) => expect(response).to.contain('hello'));
    });

    it('should reject given an error name', async function () {
      await namePromise('error').then((response) => expect(response).to.equal('error'));
    });

    it('should reject given name is undefined', async function () {
      await namePromise('error').then((response) => expect(response).to.equal('error'));
    });
  });

  it('should get promise confused', async function () {
    await Promise.allSettled([promise1(), promise2()]).then((results) => {
      results.forEach((result) => expect(result.status).to.equal('fulfilled'));
    });
  });
});
