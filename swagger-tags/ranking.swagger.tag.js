const { responseGetRanking, responseError500, responseBadRequest, responseGetRankingBoard } = require('./response');

const getRanking = {
  tags: ['Ranking'],
  description: 'Obtener ranking de score para un jugador',
  operationId: 'getRanking',
  requestBody: {
    description: 'Scores del jugador y tabla de clasificacion',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            nick: {
              type: 'string',
              description: 'Nick del jugador'
            },
            tableRanked: {
              type: 'array',
              description: 'Ranking de jugadores clasificados'
            },
            playerScore: {
              type: 'array',
              description: 'Score del jugador obtenido en cada juego'
            }
          },
          example: {
            nick: 'billy',
            tableRanked: [100, 90, 90, 80],
            playerScore: [60, 80, 90]
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseGetRanking
    },
    400: responseBadRequest,
    500: responseError500
  }
};

const getRankingBoard = {
  tags: ['Ranking'],
  description: 'Obtener tabla de clasificacion',
  operationId: 'getRankingBoard',
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseGetRankingBoard
    },
    400: responseBadRequest,
    500: responseError500
  }
};

module.exports = { getRanking, getRankingBoard }
