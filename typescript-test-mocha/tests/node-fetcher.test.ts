import { pause } from '@service/utils';
import fetch, { Response } from 'node-fetch';

const sendRequest = async (
  options: {
    retries?: number;
    retryIntervalInSeconds?: number;
  } = { retries: 3, retryIntervalInSeconds: 2 },
): Promise<Response> => {
  const request = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts');
  };

  const incrementRetryAndPause = async () => {
    retry++;
    if (retry <= options.retries) {
      console.log(`Response Not OK. Retry number ${retry}...`);
      await pause(options.retryIntervalInSeconds);
    }
  };

  let retry = 1;

  let response = await request();
  while (retry <= options.retries) {
    if (!response.ok) {
      await incrementRetryAndPause();
      response = await request();
    } else {
      break;
    }
  }
  return response;
};

describe('fetch', function () {
  it('test fetch', async function () {
    const response = await sendRequest();
    console.log(response.statusText);
  });
});
