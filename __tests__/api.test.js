import app from '../server/src/app';
import request from 'supertest';

describe('API', () => {
  test('/api GET returns status 200', (done) => {
    request(app).get('/api').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('/api GET return correct title in response', (done) => {
    request(app).get('/api').then((response) => {
      expect(response.body.title).toBe("Express API is running!");
      done();
    });
  });
});
