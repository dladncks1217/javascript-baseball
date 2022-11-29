const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/constants');

const OutputView = {
  gameStart() {
    Console.print(MESSAGE.GAME_START);
  },

  strikeCount() {
    Console.print(MESSAGE.STRIKE_COUNT);
  },

  ballCount() {
    Console.print(MESSAGE.BALL_COUNT);
  },

  printballCount(strike, ball) {
    const [ballCount, strikeCount] = [
      MESSAGE.BALL_COUNT(ball),
      MESSAGE.STRIKE_COUNT(strike),
    ];
    if (ball === 0 && strike === 0) return Console.print(MESSAGE.NOTHING);
    if (ball === 0 && strike > 0) return Console.print(`${strikeCount}`);
    if (ball > 0 && strike === 0) return Console.print(`${ballCount}`);
    return Console.print(`${ballCount} ${strikeCount}`);
  },

  endGame() {
    Console.print(MESSAGE.GAME_END);
  },
};

module.exports = OutputView;
