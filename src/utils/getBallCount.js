const getBallCount = (answer, input, strike) => {
  let ballCount = 0;
  answer.split('').forEach((value) => {
    if (input.includes(value)) ballCount += 1;
  });
  return ballCount - strike;
};

module.exports = getBallCount;
