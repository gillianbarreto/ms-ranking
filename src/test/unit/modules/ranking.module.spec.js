import { rankingModule, rankingBoardModule } from '../../../app/modules/v1/ranking.module';
import { getPlayerRanking, getHigthScore, getRankingBoard } from '../../../app/services/v1/ranking.service';
import { rankingBody, rankingResponse, rankingData, rankingBoardData, rankingBoardResponse } from '../../mocks/data.mock';
import { message200, message500 } from '../../mocks/response.mock';
import { updatePlayer, getHighestScore } from '../../../app/models/player.model';

jest.mock('../../../app/models/player.model');
jest.mock('../../../app/services/v1/ranking.service');

describe('Ranking Module', () => {

  it('rankingModule - return 200', async () => {
    getPlayerRanking.mockResolvedValue(rankingResponse);
    getHigthScore.mockResolvedValue(105);
    updatePlayer.mockResolvedValue(true);

    const response = await rankingModule(rankingBody);
    expect(response).toEqual(message200(rankingResponse));
  });

  it('rankingModule - return 500', async () => {
    getPlayerRanking.mockRejectedValue(null);
    const response = await rankingModule(rankingBody);
    expect(response).toEqual(message500(null));
  });

  it('rankingBoardModule - return 200', async () => {
    getHighestScore.mockResolvedValue([...rankingData]);
    getRankingBoard.mockResolvedValue([...rankingBoardData]);

    const response = await rankingBoardModule();
    expect(response).toEqual(rankingBoardResponse);
  });

  it('rankingBoardModule - return 500', async () => {
    getHighestScore.mockRejectedValue(null);
    const response = await rankingBoardModule();
    expect(response).toEqual(message500(null));
  });
});
