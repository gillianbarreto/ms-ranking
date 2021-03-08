import { scoreModule } from '../../../app/modules/v1/score.module';
import { scoreBody, scoreResponse, playerData } from '../../mocks/data.mock';
import { message200, message500 } from '../../mocks/response.mock';
import { updatePlayer } from '../../../app/models/player.model';

jest.mock('../../../app/models/player.model');

describe('Score Module', () => {

  it('scoreModule - return 200', async () => {
    updatePlayer.mockResolvedValue(scoreResponse.payload);

    const response = await scoreModule(scoreBody);
    expect(response).toEqual(scoreResponse);
  });

  it('scoreModule - return 500', async () => {
    updatePlayer.mockRejectedValue(null);
    const response = await scoreModule(scoreBody);
    expect(response).toEqual(message500(null));
  });

});
