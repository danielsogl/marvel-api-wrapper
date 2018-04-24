import { getTimestamp } from '../src/util/utility';

describe('Utility', () => {
  it('should return timestamp', () => {
    expect(getTimestamp()).toBeDefined();
  });
});
