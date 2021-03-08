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

const responseGetRankingBoard = {
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
              score: {
                type: 'number',
                description: 'Score del jugador'
              },
              rank: {
                type: 'number',
                description: 'posición en la tabla'
              }
            }
          }
        }
      }
    },
    example: {
      code: 200,
      message: 'Success',
      payload: [
        { nick: 'James', score: 100, rank: 1 },
        { nick: 'Billy', score: 90, rank: 2 },
        { nick: 'Peter', score: 90, rank: 2 },
        { nick: 'Alice', score: 80, rank: 3 },
      ]
    }
  }
}

const responseUpdateScore = {
  'application/json': {
    schema: {
      type: 'object',
      properties: {
        code,
        message,
        payload: {
          type: 'object',
          properties: {
            nick: {
              type: 'string',
              description: 'Nick del jugador'
            },
            score: {
              type: 'number',
              description: 'Score más alto'
            },
            createdAt: {
              type: 'string',
              description: 'Fecha de creación del jugador'
            },
            updateAt: {
              type: 'string',
              description: 'Fecha de última actualización de score'
            }
          }
        }
      }
    },
    example: {
      code: 200,
      message: 'Success',
      payload: {
        nick: 'james',
        score: 180,
        createdAt: '2021-03-04T22:19:54.447Z',
        updateAt: '2021-03-07T20:51:14.850Z'
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
  responseGetRankingBoard,
  responseUpdateScore,
  responseError404,
  responseError500,
  responseBadRequest
}