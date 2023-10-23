import { BowlingGame } from './BowlingGame';

describe('BowlingGame クラスはボウリングのルールに従いスコアを計算する', () => {
  let sut;
  beforeEach(() => {
    sut = new BowlingGame();
  });

  describe('スペア/ストライクがないゲームは、倒したピンの総数がスコアになる', () => {
    test('すべてのロールで３本倒すとスコアは 60 になる', () => {
      execRolls(sut, 10 * 2, 3);
      expect(sut.getScore()).toBe(60);
    });
    test('すべてのロールで１本も倒せないとスコアは 0 になる', () => {
      execRolls(sut, 10 * 2, 0);
      expect(sut.getScore()).toBe(0);
    });
  });

  describe('スペアのスコアは、倒したピンの総数＋次のロールで倒したピンの数', () => {
    test('第１フレームがスペアになると、次のロールで倒したピンの数である 2 が加算される', () => {
      execSpareRoll(sut);
      sut.roll(2);
      sut.roll(3);
      execRolls(sut, 8 * 2, 0);
      expect(sut.getScore()).toBe(17);
    });
    test('第１０フレームでスペアになると、追加の１ロールで倒したピンの数である 3 が加算される', () => {
      execRolls(sut, 9 * 2, 0);
      execSpareRoll(sut);
      sut.roll(3);
      expect(sut.getScore()).toBe(13);
    });
  });

  describe('スペアのスコアは、倒したピンの総数＋次のロールで倒したピンの数', () => {
    test('第１フレームでストライクになると、次の２回のロールで倒したピンの数である 7 が加算される', () => {
      execStrikeRoll(sut);
      sut.roll(5);
      sut.roll(2);
      execRolls(sut, 8 * 2, 0);
      expect(sut.getScore()).toBe(24);
    });
    test('第１０フレームでストライクになると、追加の２ロールで倒したピンの数である 5 が加算される', () => {
      execRolls(sut, 9 * 2, 0);
      execStrikeRoll(sut);
      sut.roll(2);
      sut.roll(3);
      expect(sut.getScore()).toBe(15);
    });
    test('全てのピンを倒すとスコアは 300 になる', () => {
      execRolls(sut, 10 + 2, 10);
      expect(sut.getScore()).toBe(300);
    });
  });

});

function execRolls(game, num, pins) {
  for (let i = 0; i < num; i++) {
    game.roll(pins);
  }
}

function execSpareRoll(game) {
  game.roll(5);
  game.roll(5);
}

function execStrikeRoll(game) {
  game.roll(10);
}
