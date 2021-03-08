import { success, internalError } from '../../utils/output-message';
import { updatePlayer } from '../../models/player.model';

export const scoreModule = async (data) => {
  try {
    const player = await updatePlayer(data.nick, data.score);
    return success(player);
  } catch (error) {
    return internalError(error);
  }
}
