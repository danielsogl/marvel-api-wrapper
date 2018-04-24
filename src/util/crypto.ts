import { createHash } from 'crypto';

import { PRIVATE_KEY, PUBLIC_KEY } from './secrets';

/**
 * Generates a unique hash
 * @param {number} timestamp UNIX timestamp
 * @returns {string} Hash
 */
export function generateHash(timestamp: number): string {
  const preHash = timestamp + PRIVATE_KEY + PUBLIC_KEY;

  const hash = createHash('md5')
    .update(preHash)
    .digest('hex');

  return hash;
}
