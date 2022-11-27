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

  endGame() {
    Console.print(MESSAGE.GAME_END);
  },

  printError() {
    Console.print(MESSAGE.INPUT_ERROR);
  },
};

module.exports = OutputView;
