const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');

describe('lab-08 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });
  it('testing post route to users', () => {
    const expectation = {
      id: 1,
      username: 'franklyhollywood',
      favorite_moviecamera: 'Beaulieu',
    };
    return request(app)
      .post('/users')
      .send({
        username: 'franklyhollywood',
        favorite_moviecamera: 'Beaulieu',
      })
      .then((res) => {
        expect(res.body).toEqual(expectation);
      });
  });
});
