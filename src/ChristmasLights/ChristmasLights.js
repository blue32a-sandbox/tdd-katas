export class ChristmasLights {
  constructor(x, y) {
    this.grid = new Array(y).fill().map(
      () => new Array(x).fill().map(() => new Light())
    );
  }
  sumBrightness() {
    return this.grid.reduce(
      (result, row) => result + row.reduce((result, light) => result + light.brightness, 0),
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
    this.brightness = 0;
  }
  turnOn() {
    this.brightness++;
  }
  turnOff() {
    this.brightness = Math.max(0, this.brightness - 1);
  }
  toggle() {
    this.brightness += 2;
  }
  toString() {
    return this.brightness.toString();
  }
}
