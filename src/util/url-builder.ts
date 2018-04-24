import { add } from 'url-params';

import { generateHash } from './crypto';
import { API_ENDPOINT, PUBLIC_KEY } from './secrets';
import { getTimestamp } from './utility';

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
