import { success, internalError } from '../../utils/output-message';
import { updatePlayer, getHighestScore } from '../../models/player.model';
import { getPlayerRanking, getHigthScore, getRankingBoard } from '../../services/v1/ranking.service';

export const rankingModule = async (data) => {
  try {
    const response = await getPlayerRanking(data);
    const higthScore = await getHigthScore(data.playerScore);
    await updatePlayer(data.nick, higthScore);

    return success(response);
  } catch (error) {
    return internalError(error);
  }
}

export const rankingBoardModule = async () => {
  try {
    const highestScore = await getHighestScore();
    const response = await getRankingBoard(highestScore);

    return success(response);
  } catch (error) {
    return internalError(error);
  }
}
