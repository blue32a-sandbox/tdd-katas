import TicTacToe from './TicTacToe';

describe('Tic Tac Toeゲームを扱う TicTacToe クラス', () => {
  let game;
  beforeEach(() => {
    game = new TicTacToe();
  });
  test('ゲームには3x3のマスに9つのマスがある', () => {
    expect(game.fields).toEqual([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ]);
  });
  test('ゲームには2人のプレーヤーがいる(XとO)', () => {
    expect(game.players).toHaveLength(2);
    expect(game.players[0]).toBe('X');
    expect(game.players[1]).toBe('O');
  });
  test('プレイヤーは交互にマスを取る', () => {
    game.take(0, 0); // X
    expect(game.fields[0][0]).toBe('X');
    game.take(0, 1); // O
    expect(game.fields[0][1]).toBe('O');
    game.take(1, 1); // X
    expect(game.fields[1][1]).toBe('X');
  });
  test('既に取られたフィールドを選択するとエラー', () => {
    game.take(0, 0);
    expect(() => game.take(0, 0)).toThrow();
  });
  test('行のすべてのフィールドをプレーヤーが取ったらゲーム終了', () => {
    game.take(0, 0); // X
    game.take(1, 0); // O
    game.take(0, 1); // X
    game.take(2, 0); // O
    expect(game.isOver).toBe(false);
    game.take(0, 2); // X
    expect(game.isOver).toBe(true);
  });
  test('列のすべてのフィールドをプレーヤーが取ったらゲーム終了', () => {
    game.take(0, 2); // X
    game.take(0, 0); // O
    game.take(1, 2); // X
    game.take(0, 1); // O
    expect(game.isOver).toBe(false);
    game.take(2, 2); // X
    expect(game.isOver).toBe(true);
  });
  describe('対角線上のすべてのフィールドをプレーヤーが取ったらゲーム終了', () => {
    test('左上から右下', () => {
      game.take(0, 0); // X
      game.take(0, 1); // O
      game.take(1, 1); // X
      game.take(0, 2); // O
      expect(game.isOver).toBe(false);
      game.take(2, 2); // X
      expect(game.isOver).toBe(true);
    });
    test('右上から左下', () => {
      game.take(0, 2); // X
      game.take(0, 0); // O
      game.take(1, 1); // X
      game.take(0, 1); // O
      expect(game.isOver).toBe(false);
      game.take(2, 0); // X
      expect(game.isOver).toBe(true);
    });
  });
  test('すべてのフィールドが取られたらゲーム終了', () => {
    game.take(0, 0); // X
    game.take(0, 1); // O
    game.take(0, 2); // X
    game.take(1, 1); // O
    game.take(1, 0); // X
    game.take(1, 2); // O
    game.take(2, 1); // X
    game.take(2, 0); // O
    expect(game.isOver).toBe(false);
    game.take(2, 2); // X
    expect(game.isOver).toBe(true);
  });
});
