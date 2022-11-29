const utilTestCase = {
  strikeCountTestCase: [
    ['123', '321'],
    ['123', '456'],
    ['123', '126'],
    ['123', '152'],
  ],

  ballCountTestCase: [
    ['123', '321', 1],
    ['123', '456', 0],
    ['123', '126', 2],
    ['123', '152', 1],
  ],

  strikeResult: [1, 0, 2, 1],
  ballResult: [2, 0, 0, 1],
  makeRandomNumberTest: ['', '', '', '', ''], // 5번 테스트할라는데 어케하는지 알아보기 (인자 없는경우)
};

module.exports = utilTestCase;
