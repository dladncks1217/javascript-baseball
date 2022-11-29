const getBallCount = require('../src/utils/getBallCount');
const getStrikeCount = require('../src/utils/getStrikeCount');
const makeRandomNumber = require('../src/utils/makeRandomNumber');
const utilTestCase = require('../testcases/utilTestCase');

describe('유틸함수 테스트 - 볼 스트라이크 수 확인 테스트', () => {
  test.each(
    utilTestCase.strikeCountTestCase.map((data, index) => {
      data.push(index);
      return [data];
    })
  )('스트라이크 개수 유틸 함수', (input) => {
    expect(getStrikeCount(input[0], input[1])).toBe(
      utilTestCase.strikeResult[input[2]]
    );
  });

  test.each(
    utilTestCase.ballCountTestCase.map((data, index) => {
      data.push(index);
      return [data];
    })
  )('볼 개수 유틸 함수', (input) => {
    expect(getBallCount(input[0], input[1], input[2])).toBe(
      utilTestCase.ballResult[input[3]]
    );
  });
});

describe('기타 유틸함수 테스트', () => {
  test.each(
    utilTestCase.makeRandomNumberTest.map((data) => {
      return data;
    })
  )('랜덤 변수 생성 테스트', () => {
    expect(Number(makeRandomNumber())).toBeLessThanOrEqual(987);
    expect(Number(makeRandomNumber())).toBeGreaterThanOrEqual(123);
  });
});
