import { buildUrl } from '../src/util/url-builder';

describe('Url Builder', () => {
  it('should return url', () => {
    expect(buildUrl('/hello/world')).toBeDefined();
  });
});
