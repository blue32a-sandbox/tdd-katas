export function manhattanDistance(point1, point2) {
  return point1.distanceTo(point2);
}

export class Point {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  distanceTo(point) {
    return Math.abs(this._x - point._x) + Math.abs(this._y - point._y);
  }
}
