export const exceptionError = (req, res, next) => {
  res.status(404).json({ code: 404, message: 'Not found' });
  next();
};
