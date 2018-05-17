import { ENVIRONMENT, PRIVATE_KEY, PUBLIC_KEY } from '../src/util/secrets';

describe('Secrets', () => {
  it('should return environment', () => {
    expect(ENVIRONMENT).toBeDefined();
  });

  it('should return public key', () => {
    expect(PUBLIC_KEY).toBeDefined();
  });

  it('should return private key', () => {
    expect(PRIVATE_KEY).toBeDefined();
  });
});
