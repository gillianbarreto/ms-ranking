import express from 'express';
import RankingRoutes from './rankingRoutes';

const version = '/v1';
const v1Routes = express();

v1Routes.use(`${version}`, RankingRoutes);

export default v1Routes;
