import createHttpError from 'http-errors';

const notFoundHandler = (reg, res) => {
  //  return res.status(404).json({
  //     message: 'Route not found',
  //   });
  //верхні рядки заміняє код нижче
  throw createHttpError(404, 'Route not found');
};

export default notFoundHandler;
