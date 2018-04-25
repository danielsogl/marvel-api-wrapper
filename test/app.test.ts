import request from 'supertest';
import app from '../src/app';

describe('GET /random-url', () => {
  it('should return 501', done => {
    request(app)
      .get('/random-url')
      .expect(501, done);
  });
});
