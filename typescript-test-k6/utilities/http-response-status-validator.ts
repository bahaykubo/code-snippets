// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js';
import { RefinedResponse, ResponseType } from 'k6/http';
import { StatusCode } from '../constants/http-response-codes';

/**
 * Checks http response status code equals 200/Ok.
 */
export const expectResponseStatusOk = (httpResponse: RefinedResponse<ResponseType>, message?: string) => {
  expectResponseStatus(httpResponse, StatusCode.Ok, message);
};

/**
 * Checks http response status code equals 401/Unauthorized.
 */
export const expectResponseStatusUnauthorized = (httpResponse: RefinedResponse<ResponseType>, message?: string) => {
  expectResponseStatus(httpResponse, StatusCode.Unauthorized, message);
};

/**
 * Checks http response status code equals 403/Forbidden.
 */
export const expectResponseStatusForbidden = (httpResponse: RefinedResponse<ResponseType>, message?: string) => {
  expectResponseStatus(httpResponse, StatusCode.Forbidden, message);
};

/**
 * Checks http response status matches expected status code.
 */
export const expectResponseStatus = (
  httpResponse: RefinedResponse<ResponseType>,
  expectedStatusCode: number,
  optionalMessage?: string,
) => {
  const message = optionalMessage ?? 'Response status code';
  expect(httpResponse.status, message).to.equal(expectedStatusCode);
};
