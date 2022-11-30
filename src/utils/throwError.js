const MESSAGE = require('../constants/constants');

const throwError = () => {
  throw new Error(MESSAGE.INPUT_ERROR);
};

module.exports = throwError;
