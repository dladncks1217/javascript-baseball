const GameMachine = require('../src/domain/GameMachine');
const getBallCount = require('../src/utils/getBallCount');
const getStrikeCount = require('../src/utils/getStrikeCount');
const { ballCountResult } = require('../testcases/DomainTestCase');
const DomainTestCase = require('../testcases/DomainTestCase');

describe('GameMachine Domain 테스트', () => {
  test.each(
    DomainTestCase.answerCase.map((input, index) => {
      return [input, index];
    })
  )('GameMachine Domain 볼카운트 체크 함수 테스트', (input, index) => {
    const gameMachine = new GameMachine(input);
    expect(
      (() => {
        return gameMachine.getResult(
          DomainTestCase.myInputCase[index],
          getStrikeCount,
          getBallCount
        );
      })()
    ).toStrictEqual(ballCountResult[index]);
  });

  test.each(
    DomainTestCase.answerCase.map((input, index) => {
      return [input, index];
    })
  )('GameMachine 결과 비교 함수 테스트', (input, index) => {
    const gameMachine = new GameMachine(input);
    expect(
      (() => {
        return gameMachine.isFinishedGame(DomainTestCase.myInputCase[index]);
      })()
    ).toBe(DomainTestCase.finishGameResult[index]);
  });
});
