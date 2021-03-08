const EventEmitter = require('events');

import { rankingModule, rankingBoardModule } from '../../modules/v1/ranking.module';

export const rankingController = async (req, res) => {
  const data = req.body;
  const response = await rankingModule(data);
  return res.status(response.code).send(response);
};

export const rankingBoardController = async (req, res) => {
  const response = await rankingBoardModule();
  return res.status(response.code).send(response);
};

export const rankingBoardEventController = async (req, res) => {
  const stream = new EventEmitter();

  res.set('Content-Type', 'text/event-stream;charset=utf-8');
  res.set('Cache-Control', 'no-cache');
  stream.on('push', (event, data) => {
    res.write(`event: ${String(event)}\n data: ${JSON.stringify(data)}\n\n`)
  });

  setInterval(async () => {
    const response = await rankingBoardModule();
    stream.emit('push', 'message', response)
  }, 10000);
};
