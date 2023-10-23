export class BowlingGame {
  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  getScore() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      if (this._isStrike(frameIndex)) {
        score += this._strikeScore(frameIndex);
        frameIndex += 1;
      } else if (this._isSpare(frameIndex)) {
        score += this._spareScore(frameIndex);
        frameIndex += 2;
      } else {
        score += this._noBonusScore(frameIndex);
        frameIndex += 2;
      }
    }

    return score;
  }

  _isStrike(frameIndex) {
    return this._rolls[frameIndex] === 10;
  }
  _isSpare(frameIndex) {
    return (this._rolls[frameIndex] + this._rolls[frameIndex + 1]) === 10;
  }
  _strikeScore(frameIndex) {
    let result = 0;
    result += 10;
    result += this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
    return result;
  }
  _spareScore(frameIndex) {
    let result = 0;
    result += 10;
    result += this._rolls[frameIndex + 2];
    return result;
  }
  _noBonusScore(frameIndex) {
    return this._rolls[frameIndex] + this._rolls[frameIndex + 1];
  }
}
