const verifyNumber = (input) => {
  const setSize = new Set(input.split('')).size();
  if (setSize === 3) return true;
  return false;
};

module.exports = verifyNumber;
