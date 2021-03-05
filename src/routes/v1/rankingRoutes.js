import { Router } from 'express';
import { validateRankingRequest, validate } from '../../app/middlewares/request.validator';
import { rankingController } from '../../app/controllers/v1/ranking.controller';

const RankingRoutes = Router();

RankingRoutes.post('/ranking', validateRankingRequest(), validate, rankingController);

export default RankingRoutes;