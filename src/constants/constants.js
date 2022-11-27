const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  NUMBER_INPUT: (input) => `숫자를 입력해주세요 : ${input}`,
  STRIKE_COUNT: (count) => `${count}스트라이크`,
  BALL_COUNT: (count) => `${count}볼`,
  GAME_END: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RETRY: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  INPUT_ERROR: '[ERROR] 잘못된 값을 입력하셨습니다. 다시 입력해주세요!',
};

module.exports = MESSAGE;
