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
