import { manhattanDistance, Point } from './ManhattanDistance';

describe('2 点間のマンハッタン距離を返す manhattanDistance 関数', () => {
  test.each([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 0, -1, 0, 1],
    [-1, 0, 0, 0, 1],
    [0, 0, 2, 0, 2],
    [0, 0, 0, -1, 1],
    [0, 0, 0, 1, 1],
    [0, -1, 0, 1, 2],
    [-1, -1, 1, 1, 4],
    [2, 3, 5, 1, 5],
  ])('(%d,%d)から(%d,%d)の距離は%d', (x1, y1, x2, y2, expected) => {
    expect(manhattanDistance(new Point(x1, y1), new Point(x2, y2))).toBe(expected);
  });
});
