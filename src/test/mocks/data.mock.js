export const playerData = {
  nick: 'billy',
  score: 105,
  createdAt: '2020-11-13 19:23:32.000000',
  updateAt: '2021-03-04 19:23:32.000000'
}

export const rankingBody = {
  nick: 'billy',
  tableRanked: [100, 90, 90, 80],
  playerScore: [70, 80, 105]
}

export const rankingResponse = {
  nick: 'billy',
  tableRanked: [100, 90, 90, 80],
  rankPlayers: [1, 2, 2, 3],
  playerScore: [70, 80, 105],
  ranking: [4, 3, 1]
}

export const playerFindByPk = {
  nick: 'billy',
  score: 105,
  createdAt: '2020-11-13 19:23:32.000000',
  updateAt: '2021-03-04 19:23:32.000000',
  save: () => { return true }
}

export const scoreBody = {
  nick: 'james',
  score: 180
};

export const scoreResponse = {
  code: 200,
  message: 'Success',
  payload: {
    nick: 'james',
    score: 180,
    createdAt: '2021-03-04T22:19:54.447Z',
    updateAt: '2021-03-07T20:51:14.850Z'
  }
}

export const rankingData = [
  { nick: 'James', score: 100 },
  { nick: 'Billy', score: 90 },
  { nick: 'Peter', score: 90 },
  { nick: 'Alice', score: 80 },
];

export const rankingBoardData = [
  { nick: 'James', score: 100, rank: 1 },
  { nick: 'Billy', score: 90, rank: 2 },
  { nick: 'Peter', score: 90, rank: 2 },
  { nick: 'Alice', score: 80, rank: 3 },
];

export const rankingBoardResponse = {
  code: 200,
  message: 'Success',
  payload: rankingBoardData
}
