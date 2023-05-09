import { CommonErrorTypes } from '../constants';
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let title;
  switch (statusCode) {
    case CommonErrorTypes.VALIDATION_ERROR:
      title = 'Validation Error';
      break;
    case CommonErrorTypes.NOT_FOUND:
      title = 'Not Found';
      break;
    case CommonErrorTypes.UNAUTHORIZED:
      title = 'Unauthorized';
      break;
    case CommonErrorTypes.FORBIDDEN:
      title = 'Forbidden';
      break;
    case CommonErrorTypes.INTERNAL_SERVER_ERROR:
      title = 'Internal Server Error';
      break;
    default:
      title = 'Unknown Error';
      break;
  }

  res.json({
    title: title,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    status: statusCode,
  });
};

export default errorHandler;
