import crypto from 'crypto';

/**
 * Convert an object to a pretty printed JSON string.
 *
 * @param {object} object
 */
export const stringifyJSON = (object: any): string => {
  return JSON.stringify(object, null, 2);
};

export const generateUUID = (): string => {
  return crypto.randomUUID();
};
