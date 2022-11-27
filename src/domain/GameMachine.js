const makeRandomNumber = require('../utils/makeRandomNumber');

class GameMachine {
  #answerNumber;

  constructor() {
    this.#answerNumber = makeRandomNumber();
  }

  // 정답과 입력값 비교 함수
}

module.exports = GameMachine;
