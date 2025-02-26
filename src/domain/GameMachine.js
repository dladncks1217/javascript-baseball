const makeRandomNumber = require('../utils/makeRandomNumber');

class GameMachine {
  #answerNumber;

  constructor(input) {
    this.#answerNumber = input;
  }

  getResult(input, getStrikeCount, getBall) {
    const strikeCount = getStrikeCount(this.#answerNumber, input);
    const ballCount = getBall(this.#answerNumber, input, strikeCount);

    return { strike: strikeCount, ball: ballCount };
  }

  isFinishedGame(input) {
    if (input === this.#answerNumber) return true;
    return false;
  }
}

module.exports = GameMachine;
