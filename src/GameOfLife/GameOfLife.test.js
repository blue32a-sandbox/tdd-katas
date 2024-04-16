import { GameOfLife } from './GameOfLife';

describe('Game of Life', () => {
  let sut;

  beforeEach(() => {
    sut = new GameOfLife();
  });

  describe('生存状態のセルに隣接する生存状態のセルが、2つか3つならば、次の世代で生存状態になる。', () => {
    test('0x0・1x0・1x1・2x1のセルは、次の世代で生存状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
      ]);
      expect(nextGrid[0][0]).toBe(1);
      expect(nextGrid[1][0]).toBe(1);
      expect(nextGrid[1][1]).toBe(1);
      expect(nextGrid[2][1]).toBe(1);
    });
  });
  describe('生存状態のセルに隣接する生存状態のセルが。1つ以下ならば、次の世代で死亡状態になる。', () => {
    test('0x0・1x1のセルは、次の世代で死亡状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]);
      expect(nextGrid[0][0]).toBe(0);
      expect(nextGrid[1][1]).toBe(0);
    });
  });
  describe('生存状態のセルに隣接する生存状態のセルが、4つ以上ならば、次の世代で死亡状態になる。', () => {
    test('1x1のセルは、次の世代で死亡状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ]);
      expect(nextGrid[1][1]).toBe(0);
    });
  });
  describe('死亡状態のセルに隣接する生存状態のセルが、3つであれば、次の世代で生存状態になる', () => {
    test('0x0・2x0のセルは、次の世代で生存状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0],
      ]);
      expect(nextGrid[0][0]).toBe(1);
      expect(nextGrid[2][0]).toBe(1);
    });
  });
  describe('死亡状態のセルに隣接する生存状態のセルが、２つ以下であれば、次の世代で死亡状態になる', () => {
    test('0x0・1x2・2x0・2x1・2x2のセルは、次の世代で死亡状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [0, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
      ]);
      expect(nextGrid[0][0]).toBe(0);
      expect(nextGrid[1][2]).toBe(0);
      expect(nextGrid[2][0]).toBe(0);
      expect(nextGrid[2][1]).toBe(0);
      expect(nextGrid[2][2]).toBe(0);
    });
  });
  describe('死亡状態のセルに隣接する生存状態のセルが、４つ以上であれば、次の世代で死亡状態になる', () => {
    test('1x1のセルは、次の世代で死亡状態になる', () => {
      const nextGrid = sut.nextGeneration([
        [0, 1, 1],
        [1, 0, 0],
        [0, 0, 1],
      ]);
      expect(nextGrid[1][1]).toBe(0);
    });
  });
});
