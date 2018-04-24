import { generateHash } from '../src/util/crypto';
import { getTimestamp } from '../src/util/utility';

describe('Crypto', () => {
  it('should return hash', () => {
    expect(generateHash(getTimestamp())).toBeDefined();
  });
});
