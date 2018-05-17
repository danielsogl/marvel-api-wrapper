import { API_ENDPOINT } from '../src/util/settings';

describe('Settings', () => {
  it('should return endpoint url', () => {
    expect(API_ENDPOINT).toBeDefined();
  });
});
