import { createRequest, createResponse } from 'node-mocks-http'
import * as controller from '../../../app/controllers/v1/score.controller';
import * as module from '../../../app/modules/v1/score.module';
import { message200 } from '../../mocks/response.mock';

jest.mock('../../../app/modules/v1/score.module');

let req = createRequest();
let res = createResponse();

describe('scoreController', () => {

  it('scoreController, obtiene 200', async () => {
    module.scoreModule.mockResolvedValue(message200());
    await controller.scoreController(req, res);
    expect(res.statusCode).toEqual(200);
  });

});