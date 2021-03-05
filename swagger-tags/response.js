const code = {
  type: 'integer',
  description: 'Código del response'
};

const message = {
  type: 'string',
  description: 'Descripción del response'
};

const propertiesError = {
  code,
  message,
  payload: {
    type: 'object',
    properties: {}
  }
};

const responseGetRanking = {
  'application/json': {
    schema: {
      type: 'object',
      properties: {
        code,
        message,
        payload: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              nick: {
                type: 'string',
                description: 'Nick del jugador'
              },
              tableRanked: {
                type: 'array',
                description: 'Ranking de jugadas'
              },
              rankingPlayers: {
                type: 'array',
                description: 'Clasificacion de tableRanked'
              },
              playerScore: {
                type: 'array',
                description: 'Score de jugador'
              },
              ranking: {
                type: 'array',
                description: 'Ranking de juegos'
              },
            }
          }
        }
      }
    },
    example: {
      code: 200,
      message: 'Success',
      payload: {
        nick: 'billy',
        tableRanked: [100, 90, 90, 80],
        rankingPlayers: [1, 2, 2, 3],
        playerScore: [60, 80, 90],
        ranking: [4, 3, 2]
      }
    }
  }
}

const responseError404 = {
  description: 'Jugador no encontrado',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        'code': 404,
        'message': 'Not Found',
        'payload': null
      }
    }
  }
}

const responseError500 = {
  description: 'Error en la consulta',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        'code': 500,
        'message': 'Error Internal',
        'payload': null
      }
    }
  }
}

const responseBadRequest = {
  description: 'Datos de entrada inválidos',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: propertiesError
      },
      example: {
        'code': 400,
        'message': 'Request inválido',
        'payload': [
          {
            'nick': 'Jugador Inválido'
          }
        ]
      }
    },
  }
}

module.exports = {
  responseGetRanking,
  responseError404,
  responseError500,
  responseBadRequest
}