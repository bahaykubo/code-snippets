import { nameNewPromise, promise1, promise2 } from '../snippets/working-with-promises';

describe('working with promises', () => {
  describe('that resolves and rejects', () => {
    it('should resolve given a valid name', async () => {
      await nameNewPromise('bing').then((response) => expect(response).toContain('hello'));
    });

    it('should reject given an error name', async () => {
      await nameNewPromise('error').catch((error) => expect(error).toEqual('error'));
    });

    it('should reject given name is undefined', async () => {
      await nameNewPromise('error').catch((error) => expect(error).toEqual('error'));
    });

    describe('using all settled', () => {
      const names = ['jim', 'bob', 'cam'];
      const errorNames = ['jim', 'bob', 'error'];

      it('should fulfill all promises', async () => {
        await Promise.allSettled(names.map((name) => nameNewPromise(name))).then((response) => {
          response.forEach((promise) => {
            expect(promise.status).toEqual('fulfilled');
          });
        });
      });

      it('should iterate over async functions', async () => {
        for (const name of names) {
          await nameNewPromise(name).then((response) => {
            expect(response).toContain('hello');
          });
        }
      });

      it('should have one promise rejected', async () => {
        await Promise.allSettled(errorNames.map((name) => nameNewPromise(name))).then((response) => {
          const rejectedResponse = response.filter((promise) => promise.status === 'rejected');
          expect(rejectedResponse.length).toEqual(1);
        });
      });
    });
  });

  describe('that just resolves', () => {
    it('should resolve given a valid name', async () => {
      await nameNewPromise('bing').then((response) => expect(response).toContain('hello'));
    });

    it('should reject given an error name', async () => {
      await nameNewPromise('error').catch((response) => expect(response).toEqual('error'));
    });

    it('should reject given name is undefined', async () => {
      await nameNewPromise('error').catch((response) => expect(response).toEqual('error'));
    });
  });

  it('should get promise confused', async () => {
    await Promise.allSettled([promise1(), promise2()]).then((results) => {
      results.forEach((result) => expect(result.status).toEqual('fulfilled'));
    });
  });
});
