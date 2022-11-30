const getBallCount = require('../src/utils/getBallCount');
const getStrikeCount = require('../src/utils/getStrikeCount');
const makeRandomNumber = require('../src/utils/makeRandomNumber');
const throwError = require('../src/utils/throwError');
const verifyNumber = require('../src/utils/verifyNumber');
const utilTestCase = require('../testcases/utilTestCase');

describe('유틸함수 테스트 - 볼 스트라이크 수 확인 테스트', () => {
  test.each(
    utilTestCase.strikeCountTestCase.map((data, index) => {
      return [data, index];
    })
  )('스트라이크 개수 유틸 함수', (input, index) => {
    expect(getStrikeCount(input[0], input[1])).toBe(
      utilTestCase.strikeResult[index]
    );
  });

  test.each(
    utilTestCase.ballCountTestCase.map((data, index) => {
      return [data, index];
    })
  )('볼 개수 유틸 함수', (input, index) => {
    expect(getBallCount(input[0], input[1], input[2])).toBe(
      utilTestCase.ballResult[index]
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

  test('Error Throw 유틸 함수 테트스', () => {
    expect(() => {
      throwError();
    }).toThrow();
  });

  test.each(
    utilTestCase.verifyNumberTest.map((data, index) => {
      return [data, index];
    })
  )('입력 번호값 검증 함수', (input, index) => {
    console.log(input, index);
    expect(verifyNumber(input)).toBe(utilTestCase.verifyNumberResult[index]);
  });
});
