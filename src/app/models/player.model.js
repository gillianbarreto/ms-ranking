import { sequelize, DataTypes } from './connection-db.model';

export const Player = sequelize.define(
  'Player',
  {
    nick: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    score: {
      type: DataTypes.BIGINT,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updateAt: DataTypes.DATE
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export const getPlayerByNick = async (nick) => {
  return await Player.findByPk(nick);
}

export const getHighestScore = async () => {
  return await Player.findAll(
    {
      limit: 10,
      order: [
        ['score', 'DESC']
      ],
      attributes: ['nick', 'score']
    }
  );
}

export const createPlayer = async (nick, score) => {
  return await Player.create({
    nick,
    score,
    createAt: new Date()
  });
}

export const updatePlayer = async (nick, score) => {
  try {
    nick = nick.toLowerCase();
    let player = await getPlayerByNick(nick);
    if (!player) return await createPlayer(nick, score);

    if (score > player.score) {
      player.score = score;
      player.updateAt = new Date();
      await player.save();
    }

    return player;
  } catch (error) {
    throw Error(`Player not updated. nick: ${nick}`);
  }
}
