const { Console } = require('@woowacourse/mission-utils');
const GameMachine = require('./domain/GameMachine');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const getBallCount = require('./utils/getBallCount');
const getStrikeCount = require('./utils/getStrikeCount');
const makeRandomNumber = require('./utils/makeRandomNumber');
const throwError = require('./utils/throwError');
const verifyNumber = require('./utils/verifyNumber');

class App {
  #myGame;

  play() {
    OutputView.gameStart();
    return this.gameSetting();
  }

  gameSetting() {
    this.#myGame = new GameMachine(makeRandomNumber());
    return this.inputMyNumber();
  }

  inputMyNumber() {
    InputView.inputMyAnswer((userInput) => {
      if (verifyNumber(userInput)) return this.getResult(userInput);
      return this.errorQuitGame();
    });
  }

  getResult(myInput) {
    const { strike, ball } = this.#myGame.getResult(
      myInput,
      getStrikeCount,
      getBallCount
    );
    OutputView.printballCount(strike, ball);
    if (this.#myGame.isFinishedGame(myInput)) return this.retryCheck();
    return this.inputMyNumber();
  }

  retryCheck() {
    OutputView.endGame();
    InputView.inputRetryOrQuit((input) => {
      if (input === '1') return this.gameSetting();
      if (input === '2') return Console.close();
      return throwError();
    });
  }

  errorQuitGame() {
    throwError();
  }
}

const app = new App();
app.play();

module.exports = App;
