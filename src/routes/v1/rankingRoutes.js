import { Router } from 'express';
import { validateRankingRequest, validateScoreRequest, validate } from '../../app/middlewares/request.validator';
import { rankingController, rankingBoardController } from '../../app/controllers/v1/ranking.controller';
import { scoreController } from '../../app/controllers/v1/score.controller'

const RankingRoutes = Router();

RankingRoutes.get('/ranking-board', rankingBoardController);
RankingRoutes.post('/ranking', validateRankingRequest(), validate, rankingController);
RankingRoutes.post('/score', validateScoreRequest(), validate, scoreController);

export default RankingRoutes;