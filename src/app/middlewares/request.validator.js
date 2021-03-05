import { body, validationResult } from 'express-validator';
import { outputMessage } from '../utils/output-message';

export const validateRankingRequest = () => {
  return [
    body('nick')
      .notEmpty()
      .withMessage('Campo Obligatorio')
      .isString()
      .withMessage('Debe ser un string')
      .isLength({ min: 3, max: 10 })
      .withMessage('Es inválido'),
    body('tableRanked')
      .notEmpty()
      .withMessage('Campo Obligatorio')
      .isArray({ min: 1, max: 200000 })
      .withMessage('Es inválido')
      .custom(ranked => {
        const max = Math.pow(10, 9);
        return ranked.every((i) => {
          return i >= 0 && i <= max
        })
      })
      .withMessage('Valor de score incorrecto'),
    body('playerScore')
      .notEmpty()
      .withMessage('Campo Obligatorio')
      .isArray({ min: 1, max: 200000 })
      .withMessage('Es inválido')
      .custom(score => {
        const max = Math.pow(10, 9);
        return score.every((i) => {
          return i >= 0 && i <= max
        })
      })
      .withMessage('Valor de score incorrecto')
  ];
}

export const validate = (req, res, next) => {

  const errors = validationResult(req);
  if (errors.isEmpty()) return next();

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  const response = outputMessage(400, 'Request inválido', extractedErrors);
  return res.status(400).json(response);
};
