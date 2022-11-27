const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/constants');

const InputView = {
  inputMyAnswer(callback) {
    Console.readLine(MESSAGE.NUMBER_INPUT, callback);
  },

  inputRetryOrQuit(callback) {
    Console.readLine(MESSAGE.GAME_RETRY, callback);
  },
};

module.exports = InputView;
