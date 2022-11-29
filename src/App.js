const { Console } = require('@woowacourse/mission-utils');
const GameMachine = require('./domain/GameMachine');
const InputView = require('./UI/InputView');
const OutputView = require('./UI/OutputView');
const getBallCount = require('./utils/getBallCount');
const getStrikeCount = require('./utils/getStrikeCount');
const verifyNumber = require('./utils/verifyNumber');

class App {
  #myGame;

  play() {
    OutputView.gameStart();
    this.#myGame = new GameMachine();
    this.inputMyNumber();
  }

  inputMyNumber() {
    InputView.inputMyAnswer((userInput) => {
      try {
        if (verifyNumber(userInput)) {
          return this.getResult(userInput);
        }
      } catch (err) {
        return this.errorQuitGame();
      }
    });
  }

  getResult(myInput) {
    const { strike, ball } = this.#myGame.getResult(
      myInput,
      getStrikeCount,
      getBallCount
    );
    OutputView.printballCount(strike, ball);
    if (this.#myGame.isFinishedGame(myInput)) return this.quitGame();
    return this.inputMyNumber();
  }

  quitGame() {
    OutputView.endGame();
    return Console.close();
  }

  errorQuitGame() {
    OutputView.printError();
    return Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
