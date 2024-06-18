const logger = require("../utils/logger");

const errorCodes = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    logger.error(err.message);
  }
  let statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case errorCodes.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        errors: err.errors_array ? err.errors_array : undefined,
        message: err.message ? err.message : undefined,
      });
      break;
    case errorCodes.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case errorCodes.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
      });
      break;
    case errorCodes.UNAUTHORIZED:
      res.json({
        title: "Unauthorized Access",
        message: err.message,
      });
      break;
    case errorCodes.SERVER_ERROR:
      res.json({
        title: "Internal server error",
        message: err.message,
      });
      break;
    default:
      res.json({
        title: "Internal server error",
        message: err.message,
      });
      break;
  }
};

module.exports = errorHandler;
