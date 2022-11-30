const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

// MissionUtils.Console.readLine.mockImplementationOnce((question,callback)=>{ callback(input) }) 지정한대로 호출됨. (input값 넣은대로.)
const mockQuestoin = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

// 그냥 MissionUtils.Random.pickNumberInRange.mockReturnValueOnce() 여러 번 호출해주는거임. 값들 미리 지정해줄라고.
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randomNumbers = [1, 2, 3, 5, 8, 9];
    const answers = ['567', '123', '1', '123', '578', '589', '2'];
    const resultMessages = [
      '낫싱',
      '3스트라이크',
      '낫싱',
      '1볼 1스트라이크',
      '3스트라이크',
      '게임 종료',
    ];
    // MissionUtils.Console.print 통해 spyOn으로 결과값 확인.
    const logSpy = getLogSpy();

    mockQuestoin(answers);
    mockRandoms(randomNumbers);

    const app = new App();
    app.play();

    resultMessages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
