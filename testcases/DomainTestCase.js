const DomainTestCase = {
  answerCase: ['123', '456', '789'],
  myInputCase: ['125', '654', '789'],

  ballCountResult: [
    { strike: 2, ball: 0 },
    { strike: 1, ball: 2 },
    { strike: 3, ball: 0 },
  ],
  finishGameResult: [false, false, true],
};

module.exports = DomainTestCase;
