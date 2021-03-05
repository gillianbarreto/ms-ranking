import { createRequest, createResponse } from 'node-mocks-http'
import * as controller from '../../../app/controllers/v1/ranking.controller';
import * as module from '../../../app/modules/v1/ranking.module';
import { message200 } from '../../mocks/response.mock';

jest.mock('../../../app/modules/v1/ranking.module');

let req = createRequest();
let res = createResponse();

describe('rankingController', () => {

  it('rankingController, obtiene 200', async () => {
    module.rankingModule.mockResolvedValue(message200());
    await controller.rankingController(req, res);
    expect(res.statusCode).toEqual(200);
  });

});