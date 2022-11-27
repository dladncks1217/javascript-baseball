const makeRandomNumber = require('../utils/makeRandomNumber');

class GameMachine {
  #answerNumber;

  constructor() {
    this.#answerNumber = makeRandomNumber();
  }

  getResult(input, getStrikeCount, getBall) {
    const strikeCount = getStrikeCount(this.#answerNumber, input);
    const ballCount = getBall(this.#answerNumber, input, strike);
    return { strike: strikeCount, ball: ballCount };
  }
}

module.exports = GameMachine;
