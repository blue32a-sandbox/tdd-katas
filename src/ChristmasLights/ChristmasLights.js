export class ChristmasLights {
  constructor(x, y) {
    this.grid = new Array(y).fill().map(
      () => new Array(x).fill().map(() => new Light())
    );
  }
  countLit() {
    return this.grid.reduce(
      (count, row) => count + row.filter(l => l.isLighted).length,
      0
    );
  }
  turnOn(start, end) {
    this._apply(start, end, (light) => light.turnOn());
  }
  turnOff(start, end) {
    this._apply(start, end, (light) => light.turnOff());
  }
  toggle(start, end) {
    this._apply(start, end, (light) => light.toggle());
  }
  _apply(start, end, rule) {
    for (let y = start.y; y <= end.y; y++) {
      for (let x = start.x; x <= end.x; x++) {
        rule(this.grid[y][x]);
      }
    }
  }
  toString() {
    return this.grid.map(
      (row) => row.map((light) => light.toString()).join('')
    ).join('\n');
  }
}

export class Coordinate {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Light {
  constructor() {
    this.lit = false;
  }
  get isLighted() {
    return this.lit;
  }
  turnOn() {
    this.lit = true;
  }
  turnOff() {
    this.lit = false;
  }
  toggle() {
    this.lit = !this.lit;
  }
  toString() {
    return this.lit ? '#' : '.';
  }
}
