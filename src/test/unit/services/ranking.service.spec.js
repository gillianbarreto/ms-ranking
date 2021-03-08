import { getPlayerRanking, getHigthScore, getRankingBoard } from '../../../app/services/v1/ranking.service';
import { rankingBody, rankingData, rankingBoardData } from '../../mocks/data.mock';

describe('Ranking Service', () => {

  it('getPlayerRanking', async () => {
    const response = await getPlayerRanking(rankingBody);
    expect(response.ranking).toEqual([4, 3, 1]);
  });

  it('getHigthScore', async () => {
    const higthScore = await getHigthScore(rankingBody.playerScore);
    expect(higthScore).toEqual(105);
  });

  it('getRankingBoard', async () => {
    const rankingPlayers = await getRankingBoard([...rankingData]);
    expect(rankingPlayers).toEqual([...rankingBoardData]);
  });

});
