const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR: {
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    }
    case constants.UNOTHORIZED_ERROR: {
      res.json({
        title: "Unothorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    }
    case constants.FORBIDDEN_ERROR: {
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    }
    case constants.NOT_FOUND_ERROR: {
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    }
    case constants.SERVER_ERROR: {
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    }
    default: {
      console.log("No error!");
      break;
    }
  }
};

module.exports = errorHandler;
