const MESSAGE = require('../constants/constants');

const verifyNumber = (input) => {
  const setSize = new Set(input.split('')).size;
  if (!Number.isNaN(Number(input)) && setSize === 3) return true;
  return false;
};

module.exports = verifyNumber;
