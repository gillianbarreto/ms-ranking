import app from '../../server/index';
import { rankingBody } from '../mocks/data.mock';

const request = require('supertest');

describe('Ranking', () => {

  const route = '/ms/v1/ranking';

  it('Get Player Ranking  - return 200', async (done) => {
    request(app)
      .post(route)
      .send(rankingBody)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
    done();
  });

  it('Get Player Ranking - return 400', async (done) => {
    request(app)
      .post(route)
      .send('sinbody')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400, done);
    done();
  });

});