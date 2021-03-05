const { getRanking } = require('./swagger-tags/ranking.swagger.tag');

const swaggerDoc = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "MS - Ranking",
    description: "MS para realizar los ranking's de un videojuego",
  },
  servers: [
    {
      url: "{env}:{port}/{basePath}",
      description: "Servidor Running",
      variables: {
        env: {
          default: process.env.URL || "http://localhost",
          description: "Develop Environment",
        },
        port: {
          default: process.env.PORT || 3000,
        },
        basePath: {
          default: "ms/v1",
        },
      },
    },
  ],
  tags: [
    {
      name: "Ranking",
    }
  ],
  paths: {
    "/ranking": {
      post: getRanking
    }
  },
};

module.exports = { swaggerDoc };
