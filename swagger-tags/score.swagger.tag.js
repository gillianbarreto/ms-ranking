const { responseUpdateScore, responseError500, responseBadRequest } = require('./response');

const updateScore = {
  tags: ['Score'],
  description: 'Actualizar score de un jugador',
  operationId: 'updateScore',
  requestBody: {
    description: 'Score del jugador',
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            nick: {
              type: 'string',
              description: 'Nick del jugador'
            },
            score: {
              type: 'number',
              description: 'Score del jugador'
            }
          },
          example: {
            nick: 'billy',
            score: 150
          }
        }
      }
    }
  },
  responses: {
    200: {
      description: 'Consulta exitosa',
      content: responseUpdateScore
    },
    400: responseBadRequest,
    500: responseError500
  }
};

module.exports = { updateScore }
