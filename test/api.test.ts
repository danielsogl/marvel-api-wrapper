import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should get base route', () => {
    return request(app)
      .get('/')
      .expect(200);
  });
});

describe('GET /characters', () => {
  it('should get characters route', () => {
    return request(app)
      .get('/characters')
      .expect(200);
  });
});

describe('GET /comics', () => {
  it('should get comics route', () => {
    return request(app)
      .get('/comics')
      .expect(200);
  });
});

describe('GET /creators', () => {
  it('should get creators route', () => {
    return request(app)
      .get('/creators')
      .expect(200);
  });
});

describe('GET /events', () => {
  it('should get events route', () => {
    return request(app)
      .get('/events')
      .expect(200);
  });
});

describe('GET /series', () => {
  it('should get series route', () => {
    return request(app)
      .get('/series')
      .expect(200);
  });
});

describe('GET /stories', () => {
  it('should get stories route', () => {
    return request(app)
      .get('/stories')
      .expect(200);
  });
});
