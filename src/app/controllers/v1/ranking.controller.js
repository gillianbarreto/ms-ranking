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
