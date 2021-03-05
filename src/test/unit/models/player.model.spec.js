import { Player, getPlayerByNick, createPlayer, updatePlayer } from '../../../app/models/player.model';
import { playerData, playerFindByPk } from '../../mocks/data.mock';

describe('Player Model', () => {

  it('getPlayerByNick', async () => {
    Player.findByPk = jest.fn(() => Promise.resolve(playerData));
    const response = await getPlayerByNick(playerData.nick);
    expect(response).toEqual(playerData);
  });

  it('createPlayer', async () => {
    Player.create = jest.fn(() => Promise.resolve({ ...playerData }));
    const player = await createPlayer(playerData.nick, 105);
    expect(player.score).toEqual(105);
  });

  it('updatePlayer, jugador existe, reemplaza score', async () => {
    Player.findByPk = jest.fn(() => Promise.resolve({ ...playerFindByPk }));
    const player = await updatePlayer(playerData.nick, 107);
    expect(player.score).toEqual(107);
  });

  it('updatePlayer, jugador existe, mantiene score', async () => {
    Player.findByPk = jest.fn(() => Promise.resolve({ ...playerFindByPk }));
    const player = await updatePlayer(playerData.nick, 100);
    expect(player.score).toEqual(105);
  });

  it('updatePlayer, jugador no existe', async () => {
    Player.findByPk = jest.fn(() => Promise.resolve(null));
    Player.create = jest.fn(() => Promise.resolve({ ...playerData }));
    const player = await updatePlayer(playerData.nick, 105);
    expect(player.score).toEqual(105);
  });

  it('updatePlayer - error', async () => {
    try {
      Player.findByPk = () => Promise.reject(null);
      await updatePlayer(playerData.nick, 105);
    } catch (error) {
      expect(error.message).toBe(`Player not updated. nick: ${playerData.nick}`);
    }
  });

});