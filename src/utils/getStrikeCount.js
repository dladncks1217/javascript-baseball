const getStrikeCount = (answer, input) => {
  let strikeCount = 0;
  answer.split('').forEach((value, index) => {
    if (value === input[index]) strikeCount += 1;
  });
  return strikeCount;
};

module.exports = getStrikeCount;
