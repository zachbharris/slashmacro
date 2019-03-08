import request from 'supertest';
import app from '../build/app';

describe('Test the root path', () => {
  test('It should response the GET method', () => request(app)
    .get('/')
    .then((res) => {
      expect(res.statusCode).toBe(200);
    }));
});