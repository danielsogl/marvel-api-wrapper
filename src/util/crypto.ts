import { createHash } from 'crypto';

import { PRIVATE_KEY, PUBLIC_KEY } from './secrets';

export function generateHash(timestamp: number): string {
  const preHash = timestamp + PRIVATE_KEY + PUBLIC_KEY;

  const hash = createHash('md5')
    .update(preHash)
    .digest('hex');

  return hash;
}
