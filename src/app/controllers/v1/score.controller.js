import { scoreModule } from '../../modules/v1/score.module';

export const scoreController = async (req, res) => {
  const data = req.body;
  const response = await scoreModule(data);
  return res.status(response.code).send(response);
};
