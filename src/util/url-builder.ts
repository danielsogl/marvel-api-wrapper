import { add } from 'url-params';

import { generateHash } from './crypto';
import { PUBLIC_KEY } from './secrets';
import { API_ENDPOINT } from './settings';
import { getTimestamp } from './utility';

/**
 * Builds the request URL
 * @param {string} requestUrl Request URL
 * @returns {string} URL
 */
export function buildUrl(requestUrl: string): string {
  let url = `${API_ENDPOINT}${requestUrl}`;
  const timestamp = getTimestamp();
  // Add timestamp
  url = add(url, 'ts', timestamp);
  // Add api key
  url = add(url, 'apikey', PUBLIC_KEY);
  // Add hash
  url = add(url, 'hash', generateHash(timestamp));
  // Return url
  return url;
}
