import { success, internalError } from '../../utils/output-message';
import { updatePlayer } from '../../models/player.model';
import { getPlayerRanking, getHigthScore } from '../../services/v1/ranking.service';

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
