export const getPlayerRanking = async (data) => {

  let rank = 1;
  let rankingPlayers = [];
  let ranking = [];
  const n = data.tableRanked.length;
  let j = n - 1;

  for (let i = 0; i < n; i++) {
    if (data.tableRanked[i] < data.tableRanked[i - 1]) rank += 1;
    rankingPlayers.push(rank);
  }

  for (let score of data.playerScore) {
    while (j >= 0 && score >= data.tableRanked[j]) {
      j -= 1
      if (j < 0 || (data.tableRanked[j] > data.tableRanked[j + 1])) rank -= 1;
    }
    ranking.push(rank + 1);
  }

  return {
    nick: data.nick,
    tableRanked: data.tableRanked,
    rankingPlayers,
    playerScore: data.playerScore,
    ranking
  };
}

export const getHigthScore = async (scores) => {
  return Math.max(...scores);
}
