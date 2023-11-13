// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';
import { JSONArray, sleep } from 'k6';
import { SampleService } from '../services/sample-service';
import { expectResponseStatusOk } from '../utilities/http-response-status-validator';

export const options = {
  stages: [{ target: 5, duration: '2s' }],
};

export default function () {
  const sampleService = new SampleService();

  describe('sample test', function () {
    const response = sampleService.getBlogPosts();
    expectResponseStatusOk(response);

    const messages = response.json() as JSONArray;
    messages.forEach((message) => {
      expect(message, 'Message object').to.contain.keys(['title', 'body']);
    });

    sleep(1);
  });
}
