import { expect } from 'chai';

describe('Messages', function () {
  const baseURL = 'http://localhost:5250';

  it('should get a list of messages', async function () {
    const messages = await fetch(`${baseURL}/messages`).then(async (response) => {
      expect(response.status).to.equal(200);
      return await (
        await response.json()
      ).data;
    });
    messages.forEach((message: any) => {
      expect(message).to.have.keys(['_id', 'username', 'userId', 'subject', 'message']);
    });
  });

  describe('User Messages', function () {
    it('should get a list of user messages', async function () {
      const username = 'jim';
      const messages = await fetch(`${baseURL}/messages/${username}`).then(async (response) => {
        expect(response.status).to.equal(200);
        return await (
          await response.json()
        ).data;
      });
      messages.forEach((message: any) => {
        expect(message.username).to.equal(username);
      });
    });

    it('should get no messages error when user does not exist', async function () {
      const username = 'doesnotexist';
      const errorMessages = await fetch(`${baseURL}/messages/${username}`).then(async (response) => {
        expect(response.status).to.equal(404);
        return await (
          await response.json()
        ).Errors;
      });
      expect(errorMessages).to.include(`No blog posts by ${username}`);
    });
  });

  describe('Post message', function () {
    it('should post message successfully', async function () {
      const body: any = {
        username: 'jim',
        subject: 'message subject',
        message: 'message',
      };

      await fetch(`${baseURL}/messages`, {
        method: 'POST',
        body: JSON.stringify(body),
        // eslint-disable-next-line @typescript-eslint/naming-convention
        headers: { 'Content-type': 'application/json' },
      }).then((response) => {
        expect(response.status).to.equal(201);
      });
    });
  });
});
